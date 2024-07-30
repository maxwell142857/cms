const express = require('express')
const router = express.Router()

const user = require('../routerHandler/user')
const expressjoi = require('@escook/express-joi')
const {reg_login_schema} = require('../schema/user')
// new user
router.post('/users',expressjoi(reg_login_schema),user.users)

// login
router.post('/login',user.login)

module.exports = router