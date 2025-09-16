import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Lock, Trophy, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Connect Wallet",
      description: "Connect your crypto wallet to join tournaments and secure your entries",
      icon: Shield,
      color: "neon-purple"
    },
    {
      step: "2", 
      title: "Choose Tournament",
      description: "Browse active tournaments and select one that matches your skill level",
      icon: Users,
      color: "neon-blue"
    },
    {
      step: "3",
      title: "Submit Encrypted Move", 
      description: "Make your move - it's encrypted and hidden until all players submit",
      icon: Lock,
      color: "neon-green"
    },
    {
      step: "4",
      title: "Win Prizes",
      description: "Moves are revealed simultaneously, winners take crypto prizes",
      icon: Trophy,
      color: "neon-yellow"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glow-text">
            <span className="text-neon-purple">How It</span>{" "}
            <span className="text-neon-green">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of fair gaming with our cryptographically secured tournament system
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={step.step} className="relative">
                <Card className={`bg-card/50 border-${step.color}/30 hover:border-${step.color}/60 transition-all duration-300 text-center h-full`}>
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${step.color}/20 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 text-${step.color}`} />
                    </div>
                    <div className={`text-2xl font-bold text-${step.color} mb-2`}>
                      {step.step}
                    </div>
                    <CardTitle className={`text-lg text-${step.color}`}>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-neon-purple/50" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="p-6 rounded-lg bg-gradient-to-r from-card/50 to-card/30 border border-neon-purple/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-neon-green glow-text">
              Why Encrypted Moves Matter
            </h3>
            <p className="text-muted-foreground">
              Traditional online games suffer from cheating and unfair advantages. Our system uses cryptographic 
              commitments to ensure all moves are submitted simultaneously, creating a truly fair playing field 
              where skill is the only determining factor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;