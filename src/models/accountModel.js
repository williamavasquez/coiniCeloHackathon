const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaAccount = new Schema(
  {
    address: 'string',
    phone: 'string',
    qrcode: 'string',
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const SchemaAccount = mongoose.model('Account', schemaAccount)

module.exports = SchemaAccount
