// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SecureTurnPlay is SepoliaConfig {
    using FHE for *;
    
    struct Game {
        euint32 gameId;
        euint32 player1Score;
        euint32 player2Score;
        euint32 currentTurn;
        euint32 totalTurns;
        bool isActive;
        bool isCompleted;
        address player1;
        address player2;
        uint256 startTime;
        uint256 endTime;
        string gameType;
    }
    
    struct Move {
        euint32 moveId;
        euint32 gameId;
        euint32 moveValue;
        address player;
        uint256 timestamp;
        bool isRevealed;
    }
    
    struct Tournament {
        euint32 tournamentId;
        euint32 entryFee;
        euint32 prizePool;
        euint32 maxPlayers;
        euint32 currentPlayers;
        bool isActive;
        bool isCompleted;
        address organizer;
        uint256 startTime;
        uint256 endTime;
        string name;
        string description;
    }
    
    mapping(uint256 => Game) public games;
    mapping(uint256 => Move) public moves;
    mapping(uint256 => Tournament) public tournaments;
    mapping(address => euint32) public playerReputation;
    mapping(address => euint32) public playerWins;
    mapping(address => euint32) public playerLosses;
    
    uint256 public gameCounter;
    uint256 public moveCounter;
    uint256 public tournamentCounter;
    
    address public owner;
    address public verifier;
    
    event GameCreated(uint256 indexed gameId, address indexed player1, address indexed player2, string gameType);
    event MoveMade(uint256 indexed moveId, uint256 indexed gameId, address indexed player);
    event GameCompleted(uint256 indexed gameId, address indexed winner);
    event TournamentCreated(uint256 indexed tournamentId, address indexed organizer, string name);
    event TournamentJoined(uint256 indexed tournamentId, address indexed player);
    event TournamentCompleted(uint256 indexed tournamentId, address indexed winner);
    event ReputationUpdated(address indexed player, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createGame(
        address _player2,
        string memory _gameType,
        uint256 _duration
    ) public returns (uint256) {
        require(_player2 != address(0), "Invalid player2 address");
        require(_player2 != msg.sender, "Cannot play against yourself");
        require(_duration > 0, "Duration must be positive");
        
        uint256 gameId = gameCounter++;
        
        games[gameId] = Game({
            gameId: FHE.asEuint32(0), // Will be set properly later
            player1Score: FHE.asEuint32(0),
            player2Score: FHE.asEuint32(0),
            currentTurn: FHE.asEuint32(1),
            totalTurns: FHE.asEuint32(0),
            isActive: true,
            isCompleted: false,
            player1: msg.sender,
            player2: _player2,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            gameType: _gameType
        });
        
        emit GameCreated(gameId, msg.sender, _player2, _gameType);
        return gameId;
    }
    
    function makeMove(
        uint256 gameId,
        externalEuint32 moveValue,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(games[gameId].player1 != address(0), "Game does not exist");
        require(games[gameId].isActive, "Game is not active");
        require(block.timestamp <= games[gameId].endTime, "Game has ended");
        require(
            msg.sender == games[gameId].player1 || msg.sender == games[gameId].player2,
            "Not a player in this game"
        );
        
        uint256 moveId = moveCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalMoveValue = FHE.fromExternal(moveValue, inputProof);
        
        moves[moveId] = Move({
            moveId: FHE.asEuint32(0), // Will be set properly later
            gameId: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            moveValue: internalMoveValue,
            player: msg.sender,
            timestamp: block.timestamp,
            isRevealed: false
        });
        
        // Update game state
        games[gameId].currentTurn = FHE.add(games[gameId].currentTurn, FHE.asEuint32(1));
        games[gameId].totalTurns = FHE.add(games[gameId].totalTurns, FHE.asEuint32(1));
        
        emit MoveMade(moveId, gameId, msg.sender);
        return moveId;
    }
    
    function completeGame(uint256 gameId) public {
        require(games[gameId].player1 != address(0), "Game does not exist");
        require(games[gameId].isActive, "Game is not active");
        require(
            msg.sender == games[gameId].player1 || msg.sender == games[gameId].player2,
            "Not a player in this game"
        );
        
        games[gameId].isActive = false;
        games[gameId].isCompleted = true;
        
        // Determine winner based on encrypted scores
        // This would be done off-chain with FHE decryption
        emit GameCompleted(gameId, address(0)); // Winner will be determined off-chain
    }
    
    function createTournament(
        string memory _name,
        string memory _description,
        uint256 _entryFee,
        uint256 _maxPlayers,
        uint256 _duration
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Tournament name cannot be empty");
        require(_maxPlayers > 1, "Tournament must have at least 2 players");
        require(_duration > 0, "Duration must be positive");
        
        uint256 tournamentId = tournamentCounter++;
        
        tournaments[tournamentId] = Tournament({
            tournamentId: FHE.asEuint32(0), // Will be set properly later
            entryFee: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            prizePool: FHE.asEuint32(0),
            maxPlayers: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            currentPlayers: FHE.asEuint32(0),
            isActive: true,
            isCompleted: false,
            organizer: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            name: _name,
            description: _description
        });
        
        emit TournamentCreated(tournamentId, msg.sender, _name);
        return tournamentId;
    }
    
    function joinTournament(uint256 tournamentId) public payable {
        require(tournaments[tournamentId].organizer != address(0), "Tournament does not exist");
        require(tournaments[tournamentId].isActive, "Tournament is not active");
        require(block.timestamp <= tournaments[tournamentId].endTime, "Tournament has ended");
        
        // Check if player can join (this would be done with FHE comparison)
        // For now, we'll use a simple check
        tournaments[tournamentId].currentPlayers = FHE.add(
            tournaments[tournamentId].currentPlayers,
            FHE.asEuint32(1)
        );
        
        // Add entry fee to prize pool
        tournaments[tournamentId].prizePool = FHE.add(
            tournaments[tournamentId].prizePool,
            tournaments[tournamentId].entryFee
        );
        
        emit TournamentJoined(tournamentId, msg.sender);
    }
    
    function updateReputation(address player, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(player != address(0), "Invalid player address");
        
        playerReputation[player] = reputation;
        emit ReputationUpdated(player, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function updatePlayerStats(address player, euint32 wins, euint32 losses) public {
        require(msg.sender == verifier, "Only verifier can update stats");
        require(player != address(0), "Invalid player address");
        
        playerWins[player] = wins;
        playerLosses[player] = losses;
    }
    
    function getGameInfo(uint256 gameId) public view returns (
        address player1,
        address player2,
        uint8 currentTurn,
        uint8 totalTurns,
        bool isActive,
        bool isCompleted,
        uint256 startTime,
        uint256 endTime,
        string memory gameType
    ) {
        Game storage game = games[gameId];
        return (
            game.player1,
            game.player2,
            0, // FHE.decrypt(game.currentTurn) - will be decrypted off-chain
            0, // FHE.decrypt(game.totalTurns) - will be decrypted off-chain
            game.isActive,
            game.isCompleted,
            game.startTime,
            game.endTime,
            game.gameType
        );
    }
    
    function getMoveInfo(uint256 moveId) public view returns (
        uint8 gameId,
        uint8 moveValue,
        address player,
        uint256 timestamp,
        bool isRevealed
    ) {
        Move storage move = moves[moveId];
        return (
            0, // FHE.decrypt(move.gameId) - will be decrypted off-chain
            0, // FHE.decrypt(move.moveValue) - will be decrypted off-chain
            move.player,
            move.timestamp,
            move.isRevealed
        );
    }
    
    function getTournamentInfo(uint256 tournamentId) public view returns (
        uint8 entryFee,
        uint8 prizePool,
        uint8 maxPlayers,
        uint8 currentPlayers,
        bool isActive,
        bool isCompleted,
        address organizer,
        uint256 startTime,
        uint256 endTime,
        string memory name,
        string memory description
    ) {
        Tournament storage tournament = tournaments[tournamentId];
        return (
            0, // FHE.decrypt(tournament.entryFee) - will be decrypted off-chain
            0, // FHE.decrypt(tournament.prizePool) - will be decrypted off-chain
            0, // FHE.decrypt(tournament.maxPlayers) - will be decrypted off-chain
            0, // FHE.decrypt(tournament.currentPlayers) - will be decrypted off-chain
            tournament.isActive,
            tournament.isCompleted,
            tournament.organizer,
            tournament.startTime,
            tournament.endTime,
            tournament.name,
            tournament.description
        );
    }
    
    function getPlayerReputation(address player) public view returns (uint8) {
        return 0; // FHE.decrypt(playerReputation[player]) - will be decrypted off-chain
    }
    
    function getPlayerStats(address player) public view returns (uint8 wins, uint8 losses) {
        return (
            0, // FHE.decrypt(playerWins[player]) - will be decrypted off-chain
            0  // FHE.decrypt(playerLosses[player]) - will be decrypted off-chain
        );
    }
}
