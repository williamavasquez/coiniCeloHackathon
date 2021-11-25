const { createUser } = require('../services/userService');
const { createWallet } = require('../services/contractService');

async function create(req, res) {
    try {
        const { phone, password } = req.body
        const { mnemonic, address } = await createWallet(password);
        const userId = await createUser(phone, mnemonic, address);
        res.json({
            userId,
            address,
            mnemonic,
        })
    } catch (err) {
        res.json(err)
    }
}

async function find(req, res) {}

module.exports = {
    create,
    find,
};