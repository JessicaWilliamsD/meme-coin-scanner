import { TokenScanner } from './scanner';
import { RiskLevel } from './types';

export class CLI {
    private scanner: TokenScanner;

    constructor() {
        this.scanner = new TokenScanner();
    }

    async runScan(): Promise<void> {
        console.log('🔍 Starting meme coin scan...');
        console.log('─'.repeat(50));

        try {
            const result = await this.scanner.scanNewTokens();
            
            console.log(`📊 Scan completed at ${result.timestamp.toISOString()}`);
            console.log(`🎯 Tokens analyzed: ${result.tokensFound.length}`);
            
            if (result.tokensFound.length > 0) {
                console.log('\n📈 Results:');
                result.tokensFound.forEach((analysis, index) => {
                    this.displayTokenAnalysis(analysis, index + 1);
                });
            } else {
                console.log('💤 No new tokens found in this scan');
            }

            if (result.errors.length > 0) {
                console.log('\n⚠️  Errors encountered:');
                result.errors.forEach(error => console.log(`   ${error}`));
            }

        } catch (error) {
            console.error('❌ Scan failed:', error);
            process.exit(1);
        }
    }

    private displayTokenAnalysis(analysis: any, index: number): void {
        const riskEmoji = this.getRiskEmoji(analysis.rugPullRisk);
        const liquidityDisplay = analysis.liquidity.usdValue > 0 
            ? `$${analysis.liquidity.usdValue.toLocaleString()}`
            : 'Unknown';

        console.log(`\n${index}. ${analysis.token.name} (${analysis.token.symbol})`);
        console.log(`   📍 Address: ${analysis.token.address.slice(0, 10)}...`);
        console.log(`   💧 Liquidity: ${liquidityDisplay}`);
        console.log(`   👥 Holders: ${analysis.holderCount || 'Unknown'}`);
        console.log(`   ${riskEmoji} Risk: ${analysis.rugPullRisk.toUpperCase()}`);
        
        if (analysis.liquidity.dexName !== 'unknown') {
            console.log(`   🏪 DEX: ${analysis.liquidity.dexName}`);
        }
    }

    private getRiskEmoji(risk: RiskLevel): string {
        switch (risk) {
            case RiskLevel.LOW: return '🟢';
            case RiskLevel.MEDIUM: return '🟡';
            case RiskLevel.HIGH: return '🟠';
            case RiskLevel.CRITICAL: return '🔴';
            default: return '❓';
        }
    }

    displayWelcome(): void {
        console.log('🚀 Meme Coin Scanner v0.1.0');
        console.log('💎 Hunting for the next gem...\n');
    }

    displayHelp(): void {
        console.log('Available commands:');
        console.log('  scan    - Run a token scan');
        console.log('  help    - Show this help message');
        console.log('  version - Show version info');
    }
}