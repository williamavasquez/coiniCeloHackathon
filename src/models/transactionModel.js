const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schemaTransaction = new Schema(
  {
    amount: 'string',
    accountId: { type: Schema.Types.ObjectId, ref: 'Account' },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

const SchemaTransaction = mongoose.model('Transaction', schemaTransaction)

module.exports = SchemaTransaction
