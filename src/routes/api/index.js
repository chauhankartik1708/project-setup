const route = require('express').Router()

route.use('/articles',require('./article'))
route.use('/users',require('./users'))

module.exports = route