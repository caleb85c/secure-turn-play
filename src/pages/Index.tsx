import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import TournamentGrid from "@/components/TournamentGrid";
import Leaderboard from "@/components/Leaderboard";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WorkflowSection />
      <TournamentGrid />
      <HowItWorks />
      <Leaderboard />
    </div>
  );
};

export default Index;
