import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    {
      rank: 1,
      username: "CryptoMaster",
      wins: 47,
      earnings: "12.8 ETH",
      winRate: 94,
      avatar: "🏆"
    },
    {
      rank: 2,
      username: "BlockchainBeast",
      wins: 39,
      earnings: "9.2 ETH",
      winRate: 87,
      avatar: "👑"
    },
    {
      rank: 3,
      username: "EncryptedElite",
      wins: 35,
      earnings: "8.1 ETH",
      winRate: 83,
      avatar: "⚡"
    },
    {
      rank: 4,
      username: "ChainChampion",
      wins: 31,
      earnings: "6.9 ETH",
      winRate: 79,
      avatar: "🔥"
    },
    {
      rank: 5,
      username: "DigitalDominant",
      wins: 28,
      earnings: "5.7 ETH",
      winRate: 76,
      avatar: "💎"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-neon-yellow" />;
      case 2:
        return <Medal className="h-5 w-5 text-neon-blue" />;
      case 3:
        return <Award className="h-5 w-5 text-neon-pink" />;
      default:
        return <span className="text-lg font-bold text-neon-purple">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-neon-yellow glow-text";
      case 2:
        return "text-neon-blue glow-text";
      case 3:
        return "text-neon-pink glow-text";
      default:
        return "text-neon-purple";
    }
  };

  return (
    <section id="leaderboard" className="py-16 px-4 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glow-text">
            <span className="text-neon-yellow">Top</span>{" "}
            <span className="text-neon-purple">Players</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hall of fame for our most skilled tournament champions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-neon-purple/30 glow-purple">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-neon-purple glow-text">
                🏆 Hall of Champions 🏆
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {topPlayers.map((player, index) => (
                  <div
                    key={player.username}
                    className={`flex items-center justify-between p-6 border-b border-neon-purple/10 last:border-b-0 hover:bg-card/50 transition-all ${
                      index < 3 ? "bg-gradient-to-r from-card/30 to-transparent" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted/50">
                        {getRankIcon(player.rank)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{player.avatar}</span>
                          <h3 className={`text-lg font-semibold ${getRankColor(player.rank)}`}>
                            {player.username}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="outline" className="border-neon-green text-neon-green">
                            {player.wins} Wins
                          </Badge>
                          <Badge variant="outline" className="border-neon-blue text-neon-blue">
                            {player.winRate}% Win Rate
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-neon-yellow glow-text">
                        {player.earnings}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;