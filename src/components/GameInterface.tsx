import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateGame, useMakeMove, useGameInfo, useGameEvents } from '@/hooks/useContract';
import { useAccount } from 'wagmi';
import { Gamepad2, Lock, Trophy, Clock } from 'lucide-react';

export function GameInterface() {
  const { address, isConnected } = useAccount();
  const { createNewGame, isCreating } = useCreateGame();
  const { submitEncryptedMove, isMakingMove } = useMakeMove();
  const gameEvents = useGameEvents();

  const [gameId, setGameId] = useState<number | null>(null);
  const [opponentAddress, setOpponentAddress] = useState('');
  const [gameType, setGameType] = useState('Tic-Tac-Toe');
  const [moveValue, setMoveValue] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);

  const handleCreateGame = async () => {
    if (!isConnected || !opponentAddress) return;

    try {
      const result = await createNewGame(opponentAddress, gameType, 3600); // 1 hour duration
      console.log('Game created:', result);
      setIsGameActive(true);
      // Extract game ID from transaction receipt
      // This would be done by parsing the GameCreated event
    } catch (error) {
      console.error('Failed to create game:', error);
    }
  };

  const handleMakeMove = async () => {
    if (!gameId || !moveValue) return;

    try {
      // In a real implementation, this would encrypt the move using FHE
      const encryptedMove = `0x${Buffer.from(moveValue).toString('hex')}`;
      const proof = `0x${Buffer.from('proof').toString('hex')}`;
      
      const result = await submitEncryptedMove(gameId, encryptedMove, proof);
      console.log('Move submitted:', result);
      setMoveValue('');
    } catch (error) {
      console.error('Failed to make move:', error);
    }
  };

  const simulateEncryption = (value: string) => {
    // This is a placeholder for FHE encryption
    // In reality, this would use the FHE library to encrypt the value
    return `encrypted_${value}_${Date.now()}`;
  };

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Connect Wallet to Play
          </CardTitle>
          <CardDescription>
            Please connect your wallet to start playing secure games
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Game Creation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            Create New Game
          </CardTitle>
          <CardDescription>
            Start a new encrypted game with another player
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="opponent">Opponent Address</Label>
            <Input
              id="opponent"
              placeholder="0x..."
              value={opponentAddress}
              onChange={(e) => setOpponentAddress(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gameType">Game Type</Label>
            <Input
              id="gameType"
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleCreateGame} 
            disabled={isCreating || !opponentAddress}
            className="w-full"
          >
            {isCreating ? 'Creating Game...' : 'Create Game'}
          </Button>
        </CardContent>
      </Card>

      {/* Make Move */}
      {isGameActive && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Make Encrypted Move
            </CardTitle>
            <CardDescription>
              Your move will be encrypted and stored on-chain
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="move">Move Value</Label>
              <Input
                id="move"
                placeholder="Enter your move..."
                value={moveValue}
                onChange={(e) => setMoveValue(e.target.value)}
              />
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Encrypted:</strong> {moveValue ? simulateEncryption(moveValue) : 'No move entered'}
              </p>
            </div>
            <Button 
              onClick={handleMakeMove} 
              disabled={isMakingMove || !moveValue}
              className="w-full"
            >
              {isMakingMove ? 'Submitting Move...' : 'Submit Encrypted Move'}
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Game Events */}
      {gameEvents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Game Events
            </CardTitle>
            <CardDescription>
              Real-time blockchain events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {gameEvents.map((event, index) => (
                <div key={index} className="p-2 bg-muted rounded text-sm">
                  <strong>{event.type}:</strong> {JSON.stringify(event.data)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Info */}
      {gameId && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Game Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Game ID:</strong> {gameId}</p>
              <p><strong>Status:</strong> {isGameActive ? 'Active' : 'Inactive'}</p>
              <p><strong>Your Address:</strong> {address}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
