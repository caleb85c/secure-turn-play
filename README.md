# Secure Turn Play

A decentralized turn-based gaming platform that ensures fair play through encrypted moves and blockchain technology. Players can participate in tournaments where all moves are encrypted until simultaneous reveal, guaranteeing complete fairness and transparency.

## Features

- **Encrypted Game Moves**: All player moves are encrypted using FHE (Fully Homomorphic Encryption) until reveal time
- **Fair Play Guarantee**: Simultaneous move revelation ensures no player can see others' moves beforehand
- **Tournament System**: Join competitive tournaments with crypto prizes
- **Reputation System**: Build your gaming reputation through fair play
- **Wallet Integration**: Connect with popular wallets like Rainbow, MetaMask, and more
- **Blockchain Security**: All game data is stored on-chain with encrypted sensitive information

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Blockchain**: Ethereum (Sepolia Testnet)
- **Wallet**: RainbowKit, Wagmi, Viem
- **Encryption**: FHE (Fully Homomorphic Encryption) via Zama
- **Smart Contracts**: Solidity with FHE integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Web3 wallet (MetaMask, Rainbow, etc.)
- Sepolia ETH for gas fees

### Installation

1. Clone the repository:
```bash
git clone https://github.com/caleb85c/secure-turn-play.git
cd secure-turn-play
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Chain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY

# Wallet Connect Configuration
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration (Optional)
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_API_KEY
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

## How It Works

1. **Game Creation**: Players create games and invite opponents
2. **Move Encryption**: All moves are encrypted using FHE before submission
3. **Simultaneous Reveal**: Moves are revealed simultaneously to ensure fairness
4. **Result Calculation**: Game results are calculated based on revealed moves
5. **Reward Distribution**: Winners receive rewards automatically via smart contracts

## Smart Contract

The platform uses a Solidity smart contract with FHE integration for:
- Game state management
- Move encryption and storage
- Tournament organization
- Reputation tracking
- Reward distribution

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@secureturnplay.com or join our Discord community.

## Roadmap

- [ ] Mobile app development
- [ ] Additional game types
- [ ] Cross-chain support
- [ ] Advanced tournament features
- [ ] AI opponent integration