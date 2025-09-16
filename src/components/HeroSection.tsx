import { Button } from "@/components/ui/button";
import { Shield, Zap, Trophy, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neon-purple glow-text">
            Fair Play with
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neon-green glow-text">
            Encrypted Moves
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience turn-based gaming like never before. Your moves are encrypted until all players submit, 
          ensuring complete fairness and eliminating any possibility of cheating.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="arcade-button text-background font-semibold text-lg px-8 py-3">
            <Trophy className="mr-2 h-5 w-5" />
            Enter Tournament
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background text-lg px-8 py-3"
          >
            <Shield className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-card/30 border border-neon-purple/20 hover:border-neon-purple/50 transition-all">
            <Lock className="h-8 w-8 text-neon-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-neon-purple">Encrypted Moves</h3>
            <p className="text-muted-foreground">All moves are cryptographically secured until simultaneous reveal</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card/30 border border-neon-green/20 hover:border-neon-green/50 transition-all">
            <Zap className="h-8 w-8 text-neon-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-neon-green">Lightning Fast</h3>
            <p className="text-muted-foreground">Instant gameplay with real-time tournament updates</p>
          </div>
          
          <div className="p-6 rounded-lg bg-card/30 border border-neon-blue/20 hover:border-neon-blue/50 transition-all">
            <Trophy className="h-8 w-8 text-neon-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-neon-blue">Big Prizes</h3>
            <p className="text-muted-foreground">Compete for substantial crypto rewards in every tournament</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;