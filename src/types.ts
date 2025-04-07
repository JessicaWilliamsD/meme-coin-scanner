export interface Token {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    totalSupply: string;
    createdAt: Date;
}

export interface LiquidityInfo {
    usdValue: number;
    tokenAmount: string;
    pairAddress: string;
    dexName: string;
}

export interface TokenAnalysis {
    token: Token;
    liquidity: LiquidityInfo;
    holderCount: number;
    topHoldersPercentage: number;
    rugPullRisk: RiskLevel;
    priceChange24h?: number;
}

export enum RiskLevel {
    LOW = 'low',
    MEDIUM = 'medium', 
    HIGH = 'high',
    CRITICAL = 'critical'
}

export interface ScanResult {
    timestamp: Date;
    tokensFound: TokenAnalysis[];
    errors: string[];
}