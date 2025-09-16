import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import TournamentGrid from "@/components/TournamentGrid";
import Leaderboard from "@/components/Leaderboard";
import HowItWorks from "@/components/HowItWorks";
import { GameInterface } from "@/components/GameInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Game Interface Section */}
      <section id="play" className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 glow-text">Start Playing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of gaming with encrypted moves and blockchain security
            </p>
          </div>
          <GameInterface />
        </div>
      </section>

      <WorkflowSection />
      <TournamentGrid />
      <HowItWorks />
      <Leaderboard />
    </div>
  );
};

export default Index;
