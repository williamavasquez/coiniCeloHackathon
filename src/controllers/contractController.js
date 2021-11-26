const { getBalance } = require('../services/contractService');
const { getAddress } = require('../services/userService');

/**
 * Transaction endpoints
 */
async function balance(req, res) {
    try {
        const { userId } = req.query
        const address = await getAddress(userId);
        console.log('=> address:', address);
        let result = await getBalance(address)
        res.json(result)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    balance,
};