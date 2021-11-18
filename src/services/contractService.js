const Web3 = require('web3');
const { newKitFromWeb3 } = require("@celo/contractkit");
const { AccountUtils } = require("@celo/utils");

const web3 = new Web3("https://alfajores-forno.celo-testnet.org")
const kit = newKitFromWeb3(web3);

//   address: '0x7583abbBdC282Ec0A3eaaD39C6124EFd33614f6f'
async function getBalance(address) {
    // const someAddress = '0x7E5e436423B7DB0D5f9b43ae13B5585Bf1cC8186';
    const goldtoken = await kit.contracts.getGoldToken()
    const stabletoken = await kit.contracts.getStableToken()
    const cusdBalance = await stabletoken.balanceOf(address)
    const celoBalance = await goldtoken.balanceOf(address)
    return { cusdBalance, celoBalance };
}

// => mnemonic: squirrel motor skull rural hair alter effort friend way put asthma skull inquiry exchange wrap border now drift color bubble above grain drive indicate
// => keys: {
//   privateKey: 'a92a986d37a180238b1482ef5d53a2def6e6dd926a1f7488a693cb3958d4191b',
//   publicKey: '027bb6429271d1c7de65f5ccc3fc005bf5a58414a7c0a15ddfc0e821e234b4a19a',
//   address: '0x7583abbBdC282Ec0A3eaaD39C6124EFd33614f6f'
// }
async function createWallet() {
    const mnemonic = await AccountUtils.generateMnemonic();
    console.log('=> mnemonic:', mnemonic);
    // return mnemonic;
    const keys = await AccountUtils.generateKeys(mnemonic, '123ABC_123abc');
    console.log('=> keys:', keys);
}

module.exports = {
    getBalance,
    createWallet,
};
