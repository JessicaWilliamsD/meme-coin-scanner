import { config } from './config';
import { TokenScanner } from './scanner';

console.log('Meme Coin Scanner v0.1.0');
console.log('Initializing...');

async function main() {
    try {
        const scanner = new TokenScanner();
        
        console.log('Scanner ready!');
        console.log(`Scan interval: ${config.scanInterval}ms`);
        console.log(`Min liquidity: $${config.minLiquidityUSD}`);
        
        // Run initial scan
        const result = await scanner.scanNewTokens();
        console.log(`Scan completed at ${result.timestamp}`);
        console.log(`Tokens found: ${result.tokensFound.length}`);
        
        if (result.errors.length > 0) {
            console.log('Errors:');
            result.errors.forEach(error => console.log(`  - ${error}`));
        }
        
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}