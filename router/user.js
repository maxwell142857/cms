const express = require('express')
const router = express.Router()

const user = require('../routerHandler/user')
// new user
router.post('/users',user.users)

// login
router.post('/login',user.login)

module.exports = router