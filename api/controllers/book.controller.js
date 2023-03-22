const listBooks = (req, res) => {
    res.status(200).send('API okay')
}

const createBooks = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = {
    listBooks,
    createBooks
}