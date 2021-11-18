const router = require('express').Router()
const cors = require('cors')
const db = require('../models')
const { getBalance, createWallet } = require('../services/contractService');

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

router.get('/getBalance', cors(corsOptions), async (req, res) => {
  try {
    let result = await getBalance();
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

router.get('/createWallet', cors(corsOptions), async (req, res) => {
  try {
    const result = await createWallet();
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router