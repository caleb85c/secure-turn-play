import { useContract, useContractWrite, useContractRead } from 'wagmi';
import { useAccount } from 'wagmi';

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
  
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  });

  const createGame = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createGame',
  });

  const completeGame = useContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'completeGame',
  });

  return {
    contract,
    createGame,
    completeGame,
    isConnected: !!address,
  };
}

export function useGameInfo(gameId: number) {
  const { data, isLoading, error } = useContractRead({
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
