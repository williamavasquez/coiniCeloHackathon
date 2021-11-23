async function findAll() {
    return [
        {
            amount: 0.2,
            address: '',
            contact: '',
            date: '',
        }
    ];
}

async function create() {
    let user = req.body

    db.SchemaEjemplo.create(user)
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        res.json(err)
      })
}

module.exports = {
    findAll,
};