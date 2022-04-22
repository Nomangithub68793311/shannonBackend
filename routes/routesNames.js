const express = require('express')
const Router = express.Router()

const saveData = require('./routeController/saveData')
const getData = require('./routeController/getData')
Router.get('/', getData)
Router.post('/saveinfo', saveData)

module.exports = Router