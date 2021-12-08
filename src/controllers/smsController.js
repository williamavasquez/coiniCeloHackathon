const {
    serviceCreation,
    smsVerification,
} = require('../services/smsService.js')

// TODO: @william check crash reason
async function sendVerificationCode(req, res) {
    try {
        await serviceCreation(number)
        res.json({ message: 'Código sms enviado' })
    } catch (err) {
        res.status(500).json(err)
    }
}

// TODO: @william check the cause of error 400
async function verifyPhone(req, res) {
    try {
        const { code, phoneNumber } = req.body
        await smsVerification(code, phoneNumber)
        res.json({ message: 'Código verificado' })
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    sendVerificationCode,
    verifyPhone,
};
