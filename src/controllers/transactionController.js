const { findAll } = require('../services/transactionService');

/**
 * Transaction endpoints
 */
async function list(req, res) {
    try {
        const { address } = req.query
        let result = await findAll(address)
        res.json(result)
    } catch (err) {
        res.json(err)
    }
}

//   router.post('/transaction', cors(corsOptions), async (req, res) => {
//     try {
//       const { address } = req.query
//       let result = await getTransactions(address)
//       res.json(result)
//     } catch (err) {
//       res.json(err)
//     }
//   })


module.exports = {
    list,
};