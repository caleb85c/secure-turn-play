import { useWriteContract, useReadContract, useWatchContractEvent } from 'wagmi';
import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';

// Contract ABI - This would be generated from the compiled contract
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "gameId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "player1", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "player2", "type": "address"},
      {"indexed": false, "internalType": "string", "name": "gameType", "type": "string"}
    ],
    "name": "GameCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "moveId", "type": "uint256"},
      {"indexed": true, "internalType": "uint256", "name": "gameId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "player", "type": "address"}
    ],
    "name": "MoveMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "uint256", "name": "gameId", "type": "uint256"},
      {"indexed": true, "internalType": "address", "name": "winner", "type": "address"}
    ],
    "name": "GameCompleted",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_player2", "type": "address"},
      {"internalType": "string", "name": "_gameType", "type": "string"},
      {"internalType": "uint256", "name": "_duration", "type": "uint256"}
    ],
    "name": "createGame",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "gameId", "type": "uint256"},
      {"internalType": "bytes", "name": "encryptedMove", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "makeMove",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "gameId", "type": "uint256"}
    ],
    "name": "completeGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "gameId", "type": "uint256"}
    ],
    "name": "getGameInfo",
    "outputs": [
      {"internalType": "address", "name": "player1", "type": "address"},
      {"internalType": "address", "name": "player2", "type": "address"},
      {"internalType": "uint8", "name": "currentTurn", "type": "uint8"},
      {"internalType": "uint8", "name": "totalTurns", "type": "uint8"},
      {"internalType": "bool", "name": "isActive", "type": "bool"},
      {"internalType": "bool", "name": "isCompleted", "type": "bool"},
      {"internalType": "uint256", "name": "startTime", "type": "uint256"},
      {"internalType": "uint256", "name": "endTime", "type": "uint256"},
      {"internalType": "string", "name": "gameType", "type": "string"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address - This would be the deployed contract address
const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; // Replace with actual deployed address

export function useSecureTurnPlayContract() {
  const { address } = useAccount();
  
  const createGame = useWriteContract({
    mutation: {
      onSuccess: (hash) => {
        console.log('Game created:', hash);
      },
      onError: (error) => {
        console.error('Failed to create game:', error);
      },
    },
  });

  const makeMove = useWriteContract({
    mutation: {
      onSuccess: (hash) => {
        console.log('Move submitted:', hash);
      },
      onError: (error) => {
        console.error('Failed to make move:', error);
      },
    },
  });

  const completeGame = useWriteContract({
    mutation: {
      onSuccess: (hash) => {
        console.log('Game completed:', hash);
      },
      onError: (error) => {
        console.error('Failed to complete game:', error);
      },
    },
  });

  return {
    createGame,
    makeMove,
    completeGame,
    isConnected: !!address,
  };
}

// Hook for creating a new game with encrypted data
export function useCreateGame() {
  const { createGame } = useSecureTurnPlayContract();
  const [isCreating, setIsCreating] = useState(false);

  const createNewGame = async (player2: string, gameType: string, duration: number) => {
    try {
      setIsCreating(true);
      const result = await createGame.writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'createGame',
        args: [player2 as `0x${string}`, gameType, BigInt(duration)],
      });
      return result;
    } catch (error) {
      console.error('Error creating game:', error);
      throw error;
    } finally {
      setIsCreating(false);
    }
  };

  return {
    createNewGame,
    isCreating,
    isLoading: createGame.isPending,
    error: createGame.error,
  };
}

// Hook for making encrypted moves
export function useMakeMove() {
  const { makeMove } = useSecureTurnPlayContract();
  const [isMakingMove, setIsMakingMove] = useState(false);

  const submitEncryptedMove = async (gameId: number, encryptedMove: string, proof: string) => {
    try {
      setIsMakingMove(true);
      const result = await makeMove.writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'makeMove',
        args: [BigInt(gameId), encryptedMove as `0x${string}`, proof as `0x${string}`],
      });
      return result;
    } catch (error) {
      console.error('Error making move:', error);
      throw error;
    } finally {
      setIsMakingMove(false);
    }
  };

  return {
    submitEncryptedMove,
    isMakingMove,
    isLoading: makeMove.isPending,
    error: makeMove.error,
  };
}

// Hook for listening to game events
export function useGameEvents() {
  const [gameEvents, setGameEvents] = useState<any[]>([]);

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: 'GameCreated',
    onLogs: (logs) => {
      setGameEvents(prev => [...prev, { type: 'GameCreated', data: logs }]);
    },
  });

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: 'MoveMade',
    onLogs: (logs) => {
      setGameEvents(prev => [...prev, { type: 'MoveMade', data: logs }]);
    },
  });

  useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    eventName: 'GameCompleted',
    onLogs: (logs) => {
      setGameEvents(prev => [...prev, { type: 'GameCompleted', data: logs }]);
    },
  });

  return gameEvents;
}

export function useGameInfo(gameId: number) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getGameInfo',
    args: [BigInt(gameId)],
  });

  return {
    gameInfo: data,
    isLoading,
    error,
  };
}
