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
 * Create wallet from password
 * @param {*} password 
 */
async function createWallet(password) {
    const mnemonic = await AccountUtils.generateMnemonic();
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

module.exports = {
    getBalance,
    createWallet,
};