# Vercel Deployment Guide for Secure Turn Play

This guide provides step-by-step instructions for deploying the Secure Turn Play application to Vercel.

## Prerequisites

- GitHub account with the project repository
- Vercel account (free tier available)
- Environment variables configured

## Step-by-Step Deployment Process

### 1. Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account

### 2. Import Project

1. In your Vercel dashboard, click "New Project"
2. Find and select your `secure-turn-play` repository
3. Click "Import"

### 3. Configure Build Settings

Vercel should automatically detect this as a Vite project. The build settings should be:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Set Environment Variables

In the Environment Variables section, add the following variables:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

**Important**: Replace the placeholder values with your actual API keys:
- Get your Infura API key from [infura.io](https://infura.io)
- Get your WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com)

### 5. Deploy

1. Click "Deploy" to start the deployment process
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a live URL (e.g., `https://secure-turn-play-xxx.vercel.app`)

### 6. Custom Domain (Optional)

1. In your project dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (up to 24 hours)

## Environment Variables Reference

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `VITE_CHAIN_ID` | Ethereum chain ID for Sepolia testnet | `11155111` |
| `VITE_RPC_URL` | RPC endpoint for blockchain connection | `https://sepolia.infura.io/v3/YOUR_KEY` |
| `VITE_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `your_project_id` |
| `VITE_INFURA_API_KEY` | Infura API key | `your_infura_key` |

## Build Configuration

The project uses the following build configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all dependencies are properly installed
2. **Environment Variables Not Working**: Ensure variables are prefixed with `NEXT_PUBLIC_`
3. **Wallet Connection Issues**: Verify WalletConnect Project ID is correct
4. **RPC Connection Issues**: Check that your Infura API key is valid

### Build Logs

If deployment fails, check the build logs in Vercel dashboard:
1. Go to your project dashboard
2. Click on the failed deployment
3. Check the "Build Logs" tab for error details

## Automatic Deployments

Once configured, Vercel will automatically deploy:
- Every push to the `main` branch
- Pull requests (preview deployments)
- Manual deployments from the dashboard

## Performance Optimization

The project is optimized for Vercel with:
- Automatic code splitting
- Static asset optimization
- Edge caching
- CDN distribution

## Security Considerations

- Never commit API keys to the repository
- Use environment variables for sensitive data
- Enable HTTPS (automatic with Vercel)
- Consider using Vercel's security headers

## Monitoring

Vercel provides built-in monitoring:
- Real-time analytics
- Performance metrics
- Error tracking
- Uptime monitoring

## Support

For deployment issues:
1. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
2. Contact Vercel support through their dashboard
3. Check project GitHub issues

## Next Steps After Deployment

1. Test all functionality on the live site
2. Configure custom domain (if desired)
3. Set up monitoring and analytics
4. Configure automatic deployments for other branches
5. Set up staging environment for testing
