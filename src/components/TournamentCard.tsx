import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy, Zap } from "lucide-react";

interface TournamentCardProps {
  title: string;
  game: string;
  players: number;
  maxPlayers: number;
  prize: string;
  timeRemaining: string;
  status: "active" | "starting-soon" | "full";
  entryFee: string;
}

const TournamentCard = ({
  title,
  game,
  players,
  maxPlayers,
  prize,
  timeRemaining,
  status,
  entryFee
}: TournamentCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "bg-neon-green text-background";
      case "starting-soon":
        return "bg-neon-yellow text-background";
      case "full":
        return "bg-neon-pink text-background";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="bg-card border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 hover:glow-purple">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg text-neon-purple glow-text">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{game}</p>
          </div>
          <Badge className={getStatusColor()}>
            {status.replace("-", " ").toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-neon-blue" />
            <span>{players}/{maxPlayers}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-neon-green" />
            <span>{timeRemaining}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="h-4 w-4 text-neon-yellow" />
            <span className="text-neon-yellow font-semibold">{prize}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-neon-pink" />
            <span>Entry: {entryFee}</span>
          </div>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-cyber h-2 rounded-full transition-all duration-300"
            style={{ width: `${(players / maxPlayers) * 100}%` }}
          />
        </div>
        
        <Button 
          className="w-full arcade-button text-background font-semibold"
          disabled={status === "full"}
        >
          {status === "full" ? "Tournament Full" : "Join Tournament"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;