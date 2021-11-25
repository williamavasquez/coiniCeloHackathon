const router = require('express').Router()
const cors = require('cors')
const db = require('../models')

const { getBalance, createWallet } = require('../services/contractService')
const { getTransactions } = require('../services/transactionService')
const transactionController = require('../controllers/transactionController');
const userController = require('../controllers/userController');
// const { createUser } = require('../services/userService')

const corsOptions = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

router.post('/crearusuario', cors(corsOptions), (req, res) => {
  let user = req.body

  db.SchemaEjemplo.create(user)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.get('/findall', cors(corsOptions), async (req, res) => {
  try {
    let users = await db.SchemaEjemplo.find()
    res.json(users)
  } catch (err) {
    res.json(err)
  }
})

/**
 * Contract endpoints
 */
router.get('/getBalance', cors(corsOptions), async (req, res) => {
  try {
    const { address } = req.query
    let result = await getBalance(address)
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

router.post('/createWallet', cors(corsOptions), async (req, res) => {
  try {
    const { password } = req.body
    const result = await createWallet(password)
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

/**
 * User endpoints
 */
router.post('/user', cors(corsOptions), userController.create);

/**
 * Transaction endpoints
 */
router.get('/transactions', cors(corsOptions), transactionController.list);

router.post('/transaction', cors(corsOptions), async (req, res) => {
  try {
    const { address } = req.query
    let result = await getTransactions(address)
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
