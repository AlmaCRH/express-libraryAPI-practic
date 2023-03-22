const router = require('express').Router()
const { listUsers, createUsers } = require('../controllers/user.controller')


router.get('/', listUsers)

router.post('/', createUsers)

module.exports = router