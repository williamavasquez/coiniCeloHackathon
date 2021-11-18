const Web3 = require('web3');
const { newKitFromWeb3 } = require("@celo/contractkit");

const web3 = new Web3("https://alfajores-forno.celo-testnet.org")
const kit = newKitFromWeb3(web3);

async function getBalance() {
    const someAddress = '0x7E5e436423B7DB0D5f9b43ae13B5585Bf1cC8186';
    const goldtoken = await kit.contracts.getGoldToken()
    const stabletoken = await kit.contracts.getStableToken()
    const cusdBalance = await stabletoken.balanceOf(someAddress)
    const celoBalance = await goldtoken.balanceOf(someAddress)
    return { cusdBalance, celoBalance };
}

module.exports = {
    getBalance,
};
