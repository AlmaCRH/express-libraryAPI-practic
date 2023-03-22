const router = require('express').Router()

router.get('/books', (req, res) => {
    res.send('API okay')
})

router.post('/books', (req, res) => {
    res.json(req.body)
})

module.exports = router