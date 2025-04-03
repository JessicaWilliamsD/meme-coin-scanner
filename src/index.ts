import { config } from './config';

console.log('Meme Coin Scanner v0.1.0');
console.log('Initializing...');

async function main() {
    try {
        console.log('Scanner ready!');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}