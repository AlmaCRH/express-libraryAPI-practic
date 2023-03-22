const listUsers = (req, res) => {
    res.status(200).send('Users ok')
}

const createUsers = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listUsers,
    createUsers
}