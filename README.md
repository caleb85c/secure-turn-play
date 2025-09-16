# 🎮 Secure Turn Play

> **The Future of Fair Gaming is Here** ⚡

Welcome to the world's first **Fully Homomorphic Encrypted** turn-based gaming platform! 🚀

## 🔐 What Makes Us Different?

Unlike traditional gaming platforms where moves can be intercepted or manipulated, **Secure Turn Play** revolutionizes fairness through:

- 🛡️ **Zero-Knowledge Gaming**: Your moves remain encrypted until simultaneous reveal
- ⚡ **Instant Fairness**: No more waiting for server validation - blockchain guarantees it
- 🎯 **True Randomness**: FHE ensures even the platform can't peek at your strategy
- 💎 **Crypto Rewards**: Win real prizes in tournaments with transparent payouts

## 🌟 Core Features

### 🔒 **Military-Grade Encryption**
Every move is encrypted using **Fully Homomorphic Encryption (FHE)** - the same technology used by banks and governments.

### 🏆 **Tournament System**
- Join competitive tournaments with real crypto prizes
- Build your reputation through consistent fair play
- Climb the leaderboards with encrypted score tracking

### 💰 **Wallet Integration**
Seamlessly connect with:
- 🌈 Rainbow Wallet
- 🦊 MetaMask
- 📱 WalletConnect
- And 300+ other wallets!

### ⛓️ **Blockchain Security**
All game data is stored on-chain with encrypted sensitive information - transparent yet private.

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| 🎨 **Frontend** | React + TypeScript + Vite | Lightning-fast development |
| 🎨 **Styling** | Tailwind CSS | Beautiful, responsive design |
| ⛓️ **Blockchain** | Ethereum (Sepolia) | Decentralized game state |
| 🔐 **Encryption** | FHE via Zama | Military-grade privacy |
| 💼 **Wallets** | RainbowKit + Wagmi + Viem | Universal wallet support |
| 📜 **Smart Contracts** | Solidity + FHE | Encrypted on-chain logic |

## 🚀 Quick Start

### 📋 Prerequisites
- [Node.js 18+](https://nodejs.org/) 
- [A Web3 wallet](https://rainbow.me/) (MetaMask, Rainbow, etc.)
- [Sepolia ETH](https://sepoliafaucet.com/) for gas fees

### ⚡ Installation

```bash
# 1. Clone the repository
git clone https://github.com/caleb85c/secure-turn-play.git
cd secure-turn-play

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Start the development server
npm run dev

# 5. Open http://localhost:5173 in your browser
```

🎉 **That's it!** You're ready to experience the future of gaming!

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Chain Configuration
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID

# Wallet Connect Configuration
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID

# Infura Configuration (Optional)
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
VITE_RPC_URL=https://1rpc.io/sepolia
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