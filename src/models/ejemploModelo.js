const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaEjemplo = new Schema(
  {
    firstName: 'string',
    lastName: 'string',
    phone: 'string',
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const SchemaEjemplo = mongoose.model('SchemaEjemplo', schemaEjemplo)

module.exports = SchemaEjemplo
