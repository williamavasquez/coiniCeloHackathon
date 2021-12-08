const Web3 = require('web3');
const { newKitFromWeb3 } = require("@celo/contractkit");
const { AccountUtils } = require("@celo/utils");

const web3 = new Web3("https://alfajores-forno.celo-testnet.org")
const kit = newKitFromWeb3(web3);

/**
 * Get balance from address
 * @param {*} address 
 * @returns {*} balance in CUSD & CELO
 */
async function getBalance(address) {
    const goldtoken = await kit.contracts.getGoldToken()
    const stabletoken = await kit.contracts.getStableToken()
    const cusdBalance = await stabletoken.balanceOf(address)
    const celoBalance = await goldtoken.balanceOf(address)
    return { cusdBalance };
}

/**
 * Create random seed or mnemonic
 * @param {*} password 
 */
 async function createSeephrase() {
    const mnemonic = await AccountUtils.generateMnemonic();
    return mnemonic;
}

/**
 * Create wallet from password
 * @param {*} password 
 */
async function createWallet(mnemonic, password) {
    // const mnemonic = await AccountUtils.generateMnemonic();
    const seed = await AccountUtils.generateSeed(mnemonic, password);
    const keys = await AccountUtils.generateKeysFromSeed(seed);
    console.log('=> mnemonic:', mnemonic);
    console.log('=> seed:', seed);
    console.log('=> keys:', keys);
    const { address } = keys;
    return {
        mnemonic,
        address
    };
}

/**
 * Send or transfer token
 * @param {*} amount 
 * @param {*} from 
 * @param {*} to 
 */
async function sendToken(amount, from, to) {
    console.log('=> params:', `${amount} - ${from} - ${to}`);
    try {
        let stabletoken = await kit.contracts.getStableToken();
        // 15. Transfer CELO and cUSD from your account to anAddress
       // Specify cUSD as the feeCurrency when sending cUSD
       let cUSDtx = await stabletoken.transfer(to, amount).send({from, feeCurrency: stabletoken.address});
   
       // 16. Wait for the transactions to be processed
       let cUSDReceipt = await cUSDtx.waitReceipt();
   
       // 17. Print receipts
       console.log('cUSD Transaction receipt: %o', cUSDReceipt);
   
       // 18. Get your new balances
       let cUSDBalance = await stabletoken.balanceOf(from);
   
       // 19. Print new balance
       console.log(`Your new account cUSD balance: ${cUSDBalance.toString()}`);
    } catch (err) {
        console.log('-> error sendToken:', err);
    }
}

module.exports = {
    getBalance,
    createSeephrase,
    createWallet,
    sendToken,
};