# 🚀 Meme Coin Scanner

A TypeScript tool to scan and analyze newly launched meme coins on decentralized exchanges. Hunt for the next gem while avoiding rug pulls!

## ✨ Features

- 🔍 Scan for new token launches on popular DEX platforms
- 📊 Analyze token metrics (liquidity, holder distribution)  
- 🛡️ Risk assessment for potential rug pulls
- 💎 Identify promising opportunities
- 🎨 Beautiful CLI interface with emojis

## 🛠️ Installation

```bash
npm install
```

## ⚙️ Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your settings:
   - `RPC_URL` - Your Ethereum RPC endpoint (Alchemy, Infura, etc.)
   - `SCAN_INTERVAL` - How often to scan (milliseconds)
   - `MIN_LIQUIDITY_USD` - Minimum liquidity threshold
   - `MAX_SUPPLY_TOKENS` - Maximum token supply to consider

## 🚀 Usage

Run a token scan:
```bash
npm run dev scan
```

Show help:
```bash
npm run dev help
```

Build for production:
```bash
npm run build
npm start scan
```

## 🎯 Risk Assessment

The scanner evaluates tokens based on:
- Liquidity pool size
- Token supply characteristics  
- Holder concentration (planned)
- Contract verification (planned)
- Liquidity lock status (planned)

## 🔧 Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build TypeScript
npm run build

# Run tests
npm test
```

## 📝 License

MIT