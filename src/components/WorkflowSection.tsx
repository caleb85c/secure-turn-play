import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";

const WorkflowSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glow-text">
            <span className="text-neon-purple">Gaming</span>{" "}
            <span className="text-neon-green">Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate through our platform and discover competitive gaming opportunities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Tournaments */}
          <div className="p-6 rounded-lg bg-card/30 border border-neon-purple/20 hover:border-neon-purple/50 transition-all text-center group">
            <div className="p-4 rounded-full bg-neon-purple/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-neon-purple/30 transition-all">
              <Trophy className="h-8 w-8 text-neon-purple" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neon-purple">Tournaments</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Browse and join active crypto tournaments with various games and prize pools
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-background"
              onClick={() => document.getElementById('tournaments')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Tournaments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Leaderboard */}
          <div className="p-6 rounded-lg bg-card/30 border border-neon-green/20 hover:border-neon-green/50 transition-all text-center group">
            <div className="p-4 rounded-full bg-neon-green/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-neon-green/30 transition-all">
              <Users className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neon-green">Leaderboard</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Track top players, rankings, and recent tournament winners
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-background"
              onClick={() => document.getElementById('leaderboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Rankings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* How It Works */}
          <div className="p-6 rounded-lg bg-card/30 border border-neon-blue/20 hover:border-neon-blue/50 transition-all text-center group">
            <div className="p-4 rounded-full bg-neon-blue/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-neon-blue/30 transition-all">
              <Target className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neon-blue">How It Works</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Learn about our encrypted move system and tournament mechanics
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-background"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Join Tournament */}
          <div className="p-6 rounded-lg bg-card/30 border border-neon-yellow/20 hover:border-neon-yellow/50 transition-all text-center group">
            <div className="p-4 rounded-full bg-neon-yellow/20 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-neon-yellow/30 transition-all">
              <ArrowRight className="h-8 w-8 text-neon-yellow" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neon-yellow">Join Tournament</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Connect wallet and enter tournaments to start earning crypto rewards
            </p>
            <Button 
              className="arcade-button text-background font-semibold"
              size="sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;