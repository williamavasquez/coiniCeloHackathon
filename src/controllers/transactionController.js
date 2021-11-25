const { findAll } = require('../services/transactionService');

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
        const { amount, from, to } = req.body;
        const { userId, address } = from;
        res.json(true)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    list,
    create,
};