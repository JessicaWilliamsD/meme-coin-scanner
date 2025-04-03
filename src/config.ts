import dotenv from 'dotenv';

dotenv.config();

export const config = {
    rpcUrl: process.env.RPC_URL || 'https://eth-mainnet.g.alchemy.com/v2/demo',
    scanInterval: parseInt(process.env.SCAN_INTERVAL || '60000'),
    minLiquidityUSD: parseFloat(process.env.MIN_LIQUIDITY_USD || '10000'),
    maxSupplyTokens: parseFloat(process.env.MAX_SUPPLY_TOKENS || '1000000000000'),
};