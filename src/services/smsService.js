const dotenv = require('dotenv').config({ path: '../.env' })
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken)
let serviceID

client.verify.services
  .create({ friendlyName: 'Coini' })
  .then((service) => {
    console.log(service)
    serviceID = service.sid
  })
  .catch((e) => {
    console.log(e)
    return callback(e)
  })

const serviceCreation = () => {
  console.log('running sms ')
  console.log(serviceID)
  client.verify
    .services(serviceID)
    .verifications.create({ to: `+${19738709840}`, channel: 'sms' })
    .then((verification) => console.log(verification.status))
    .catch((e) => {
      console.log(e)
      return callback(e)
    })
}

const smsVerification = (code) => {
  console.log(serviceID)
  client.verify
    .services(serviceID)
    .verificationChecks.create({ to: '+19738709840', code })
    .then((verification_check) => console.log(verification_check.status))
    .catch((e) => {
      console.log(e)
      return callback(e)
    })
}

module.exports = {
  serviceCreation,
  smsVerification,
}
