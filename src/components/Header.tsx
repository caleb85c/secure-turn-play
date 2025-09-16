import { Button } from "@/components/ui/button";
import { Trophy, Gamepad2 } from "lucide-react";
import { WalletConnect } from "./WalletConnect";

const Header = () => {
  return (
    <header className="border-b border-neon-purple/20 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-neon glow-purple">
              <Gamepad2 className="h-6 w-6 text-background" />
            </div>
            <div>
              <h1 className="text-xl font-bold glow-text">Secure Turn Play</h1>
              <p className="text-xs text-neon-blue">Fair Play with Encrypted Moves</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#play" className="text-foreground hover:text-neon-purple transition-colors">
              Play Now
            </a>
            <a href="#tournaments" className="text-foreground hover:text-neon-green transition-colors">
              Tournaments
            </a>
            <a href="#leaderboard" className="text-foreground hover:text-neon-blue transition-colors">
              Leaderboard
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-neon-purple transition-colors">
              How It Works
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background">
              <Trophy className="h-4 w-4 mr-2" />
              My Games
            </Button>
            <WalletConnect />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;