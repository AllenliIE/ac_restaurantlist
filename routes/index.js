const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const search = require('./modules/search')
const users = require('./modules/users') //add users source
const { authenticator } = require('../middleware/auth') //add middleware

router.use('/restaurants', authenticator, restaurants)
router.use('/sort', authenticator, sort)
router.use('/search', authenticator, search)
router.use('/users', users) //add users router
router.use('/', authenticator, home)

module.exports = router