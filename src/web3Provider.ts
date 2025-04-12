import { Web3 } from 'web3';
import { config } from './config';

export class Web3Provider {
    private web3: Web3;
    
    constructor() {
        this.web3 = new Web3(config.rpcUrl);
    }

    async getLatestBlockNumber(): Promise<number> {
        const blockNumber = await this.web3.eth.getBlockNumber();
        return Number(blockNumber);
    }

    async getBlock(blockNumber: number) {
        return await this.web3.eth.getBlock(blockNumber, true);
    }

    async getTokenInfo(tokenAddress: string) {
        try {
            const contract = new this.web3.eth.Contract([
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [{"name": "", "type": "string"}],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol", 
                    "outputs": [{"name": "", "type": "string"}],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [{"name": "", "type": "uint8"}],
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [{"name": "", "type": "uint256"}],
                    "type": "function"
                }
            ], tokenAddress);

            const [name, symbol, decimals, totalSupply] = await Promise.all([
                contract.methods.name().call(),
                contract.methods.symbol().call(), 
                contract.methods.decimals().call(),
                contract.methods.totalSupply().call()
            ]);

            return {
                address: tokenAddress,
                name: name as string,
                symbol: symbol as string, 
                decimals: Number(decimals),
                totalSupply: totalSupply as string,
                createdAt: new Date()
            };
        } catch (error) {
            throw new Error(`Failed to get token info for ${tokenAddress}: ${error}`);
        }
    }

    getWeb3Instance(): Web3 {
        return this.web3;
    }
}