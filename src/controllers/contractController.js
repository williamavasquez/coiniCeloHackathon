const { getBalance } = require('../services/contractService');

/**
 * Transaction endpoints
 */
async function balance(req, res) {
    try {
        const { address } = req.query
        let result = await getBalance(address)
        res.json(result)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    balance,
};