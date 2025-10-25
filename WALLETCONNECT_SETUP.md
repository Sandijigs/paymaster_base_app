# WalletConnect Integration Guide

This project has been integrated with **Reown AppKit** (formerly WalletConnect) to qualify for the **Base Builder Rewards** program.

## 🎯 What Was Integrated

- **Reown AppKit**: Comprehensive SDK for onchain UX
- **WalletConnect SDK**: Connect to 600+ wallets
- **Wagmi**: React hooks for Ethereum
- **Viem**: TypeScript library for Ethereum
- **Networks**: Base Mainnet & Base Sepolia

## 📦 Installed Packages

```bash
npm install @reown/appkit @reown/appkit-adapter-wagmi wagmi @tanstack/react-query
```

## 🔧 Configuration

### 1. Environment Variables

Create a `.env` file in the `frontend_paymaster` directory:

```bash
VITE_WALLETCONNECT_PROJECT_ID=1eebe528ca0ce94a99ceaa2e915058d7
```

### 2. Project Structure

```
frontend_paymaster/
├── src/
│   ├── config/
│   │   └── appkit.ts          # WalletConnect configuration
│   ├── App.tsx                 # Updated with wallet connect UI
│   └── main.tsx                # Updated with providers
├── .env                        # Environment variables (gitignored)
├── .env.example               # Example env file
└── package.json               # Updated dependencies
```

### 3. Key Files

#### `src/config/appkit.ts`
- Configures Reown AppKit with project ID
- Sets up Wagmi adapter for Base networks
- Defines metadata for the app
- Enables analytics for tracking

#### `src/main.tsx`
- Wraps app with `WagmiProvider`
- Adds `QueryClientProvider` for React Query
- Initializes WalletConnect

#### `src/App.tsx`
- Added wallet connect button
- Displays connection status
- Shows connected wallet address
- Responsive UI for wallet management

## 🚀 Usage

### Development

```bash
cd frontend_paymaster
npm install
npm run dev
```

### Features

1. **Connect Wallet Button**: Click to connect to 600+ supported wallets
2. **Connection Status**: Real-time display of connection state
3. **Wallet Address**: Shows connected address when connected
4. **Network Info**: Displays Base & Base Sepolia support

## 🏆 Base Builder Rewards Eligibility

To qualify for Builder Rewards, you need:

### ✅ Requirements Met:
1. **Integrated WalletConnect**: ✓ Using Reown AppKit
2. **Base Network**: ✓ Configured for Base & Base Sepolia
3. **Public Repository**: ✓ (Ensure your repo is public on GitHub)

### 📋 Additional Steps:
1. **Own a Basename**: Register at [base.org/names](https://base.org/names)
2. **Builder Score 40+**: Increase score through contributions
3. **Connect Email**: Link WalletConnect email to Talent profile
4. **Deploy Contracts**: Deploy verified contracts on Base
5. **GitHub Activity**: Contribute to public crypto repositories

### 📊 Track Progress:
- Log in at [base.org/builder-rewards](https://base.org/builder-rewards)
- Use Farcaster or The Base App
- Leaderboards update every 24 hours

## 🔗 Resources

- [Reown AppKit Docs](https://docs.reown.com/overview)
- [WalletConnect SDK Docs](https://docs.walletconnect.network/wallet-sdk/overview)
- [Base Builder Rewards](https://base.org/builder-rewards)
- [Basename Registration](https://base.org/names)
- [WalletConnect Dashboard](https://dashboard.reown.com)

## 🛠️ Technical Details

### Networks Configured:
- **Base Mainnet**: Chain ID 8453
- **Base Sepolia**: Chain ID 84532

### Analytics Enabled:
- Track wallet connections
- Monitor user engagement
- Measure app usage

### Security:
- Project ID stored in environment variables
- `.env` file gitignored
- `.env.example` provided for reference

## 📝 Notes

- The integration uses the latest Reown AppKit (v1.8.11+)
- Compatible with React 19 and Vite 7
- Fully typed with TypeScript
- Responsive design with Tailwind CSS

## 🎨 UI Components

The app includes:
- Header with wallet connect button
- Connection status display
- Wallet address viewer
- Network information card
- Counter demo (existing functionality)

## 🔄 Next Steps

1. Test the wallet connection with MetaMask, Coinbase Wallet, etc.
2. Deploy contracts to Base network
3. Register a Basename
4. Connect your WalletConnect email to Talent profile
5. Monitor your Builder Score on the leaderboard

---

**Built with:** Vite + React + TypeScript + Tailwind CSS + WalletConnect + Reown AppKit
