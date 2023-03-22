const router = require('express').Router()
const { listBooks, createBooks } = require('../controllers/book.controller')

router.get('/', listBooks)

router.post('/', createBooks)

module.exports = router