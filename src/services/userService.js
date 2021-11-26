const db = require('../models')

async function createUser (phone, address) {
    const userData = {
        phone,
        qrcode: `your-phone-is-${phone}`,
        address,
    };
    try {
        const user = await db.User.create(userData);
        return user._id;
      } catch (err) {
        console.log('=> err:', err);
        return err;
      }

}

async function findUser(phone) {
  
  try {
      const user = await db.User.findOne({ phone })
      return user._id;
    } catch (err) {
      console.log('=> err:', err);
      return err;
    }

}

module.exports = {
    createUser,
    findUser,
};