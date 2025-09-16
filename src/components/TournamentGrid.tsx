import TournamentCard from "./TournamentCard";

const TournamentGrid = () => {
  const tournaments = [
    {
      title: "Crypto Chess Championship",
      game: "Chess",
      players: 12,
      maxPlayers: 16,
      prize: "5.2 ETH",
      timeRemaining: "2h 15m",
      status: "active" as const,
      entryFee: "0.1 ETH"
    },
    {
      title: "Lightning Checkers",
      game: "Checkers",
      players: 8,
      maxPlayers: 8,
      prize: "2.8 ETH",
      timeRemaining: "Starting...",
      status: "full" as const,
      entryFee: "0.05 ETH"
    },
    {
      title: "Battleship Blitz",
      game: "Battleship",
      players: 6,
      maxPlayers: 12,
      prize: "3.5 ETH",
      timeRemaining: "45m",
      status: "starting-soon" as const,
      entryFee: "0.08 ETH"
    },
    {
      title: "Rock Paper Scissors Royale",
      game: "RPS",
      players: 24,
      maxPlayers: 32,
      prize: "8.1 ETH",
      timeRemaining: "3h 22m",
      status: "active" as const,
      entryFee: "0.15 ETH"
    },
    {
      title: "Tic-Tac-Toe Thunder",
      game: "Tic-Tac-Toe",
      players: 4,
      maxPlayers: 16,
      prize: "1.9 ETH",
      timeRemaining: "1h 8m",
      status: "active" as const,
      entryFee: "0.03 ETH"
    },
    {
      title: "Connect Four Championship",
      game: "Connect 4",
      players: 10,
      maxPlayers: 16,
      prize: "4.2 ETH",
      timeRemaining: "25m",
      status: "starting-soon" as const,
      entryFee: "0.12 ETH"
    }
  ];

  return (
    <section id="tournaments" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 glow-text">
            <span className="text-neon-purple">Active</span>{" "}
            <span className="text-neon-green">Tournaments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join encrypted tournaments and compete for crypto prizes. All moves are secured until simultaneous reveal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament, index) => (
            <TournamentCard key={index} {...tournament} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentGrid;