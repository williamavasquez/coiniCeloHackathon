const router = require('express').Router()
const cors = require('cors')
const db = require('../models')

const transactionController = require('../controllers/transactionController');
const userController = require('../controllers/userController');
const contractController = require('../controllers/contractController');

const corsOptions = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*',
  methods: ['GET', 'PUT', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

/**
 * Endpoints
 */
router.post('/user', cors(corsOptions), userController.create);
router.post('/user/login', cors(corsOptions), userController.login);
router.get('/balance', cors(corsOptions), contractController.balance);
router.get('/transaction', cors(corsOptions), transactionController.list);
router.post('/transaction', cors(corsOptions), transactionController.create);

module.exports = router
