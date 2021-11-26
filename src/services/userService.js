const db = require('../models')

async function createUser(phone, address) {
	const userData = {
		phone,
		address,
	};
	try {
		const user = await db.User.create(userData);
		return user._id;
	} catch (err) {
		return err;
	}

}

async function findUser(phone) {
	try {
		const user = await db.User.findOne({ phone })
		return user._id;
	} catch (err) {
		return err;
	}
}

async function getAddress(userId) {
	try {
		const { address } = await db.User.findOne({ _id: userId });
		return address;
	} catch (err) {
		return err;	
	}
}

module.exports = {
	createUser,
	findUser,
	getAddress,
};