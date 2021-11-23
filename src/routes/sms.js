const router = require('express').Router()
const cors = require('cors')
const {
  serviceCreation,
  smsVerification,
} = require('../services/smsService.js')

const corsOptions = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

router.get(
  '/getverificationcode/:number',
  cors(corsOptions),
  async (req, res) => {
    try {
      const result = await serviceCreation(number)
      res.json(result)
    } catch (err) {
      res.json(err)
    }
  }
)

router.post('/verifyphone', cors(corsOptions), async (req, res) => {
  try {
    const {code, phoneNumber} = req.body
    const result = await smsVerification(code,phoneNumber)
    res.json(result)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
