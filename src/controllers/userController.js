const { createUser, findUser } = require('../services/userService');
const { createSeephrase, createWallet } = require('../services/contractService');

async function getSeedphrase(req, res) {
    try {
        const seed = await createSeephrase();
        res.json({ seed })
    } catch (err) {
        res.status(500).json(err)
    }
}

async function create(req, res) {
    try {
        const { phone, password, mnemonic } = req.body
        const { address } = await createWallet(mnemonic, password);
        const userId = await createUser(phone, address);
        res.json({
            userId,
            address,
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

async function login(req, res) {
    try {
        const { phone } = req.body
        const userId = await findUser(phone);
        res.json({
            userId
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    getSeedphrase,
    create,
    login,
};