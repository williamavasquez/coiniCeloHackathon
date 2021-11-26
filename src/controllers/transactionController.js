const { findAll } = require('../services/transactionService');
const { sendToken } = require('../services/contractService');

/**
 * list all transactions
 */
async function list(req, res) {
    try {
        const { userId } = req.query;
        let result = await findAll(userId);
        res.json(result)
    } catch (err) {
        res.json(err)
    }
}

/**
 * create new transaction
 */
async function create(req, res) {
    try {
        // const { amount, from, to } = req.body;
        const amount = "1";
        const from = '0x58f4dA2524A21eefd5C9066FAE24c37D81367964';
        const to = '0x1edb8583D7392E8672E1d3A4A77DA9fE877C0008';
        await sendToken(amount, from, to);
        res.json(true)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    list,
    create,
};