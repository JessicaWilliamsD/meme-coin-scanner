import { CLI } from './cli';

async function main() {
    const cli = new CLI();
    const command = process.argv[2] || 'scan';
    
    switch (command) {
        case 'scan':
            cli.displayWelcome();
            await cli.runScan();
            break;
        case 'help':
            cli.displayHelp();
            break;
        case 'version':
            console.log('Meme Coin Scanner v0.1.0');
            break;
        default:
            console.log(`Unknown command: ${command}`);
            cli.displayHelp();
            process.exit(1);
    }
}

if (require.main === module) {
    main();
}