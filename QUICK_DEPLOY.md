# Quick Vercel Deployment Guide

## One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/caleb85c/secure-turn-play)

## Manual Deployment Steps

### 1. Go to Vercel
Visit [vercel.com](https://vercel.com) and sign in with GitHub

### 2. Import Project
- Click "New Project"
- Select `caleb85c/secure-turn-play`
- Click "Import"

### 3. Configure Environment Variables
Add these environment variables in Vercel dashboard:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
VITE_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
VITE_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

### 4. Deploy
Click "Deploy" and wait for completion

### 5. Access Your App
Your app will be available at: `https://your-project-name.vercel.app`

## Important Notes

- Replace API keys with your own values
- The app uses Sepolia testnet
- Make sure you have testnet ETH for transactions
- Wallet connection requires HTTPS (automatic with Vercel)

## Troubleshooting

- **Build fails**: Check environment variables are set correctly
- **Wallet won't connect**: Verify WalletConnect Project ID
- **RPC errors**: Check Infura API key is valid

## Support

For issues, check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide or create an issue on GitHub.
