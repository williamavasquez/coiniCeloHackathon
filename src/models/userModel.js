const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaUser = new Schema(
  {
    phone: 'string',
    address: 'string',
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const SchemaUser = mongoose.model('User', schemaUser)

module.exports = SchemaUser
