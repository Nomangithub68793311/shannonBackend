const express = require('express')
const Router = express.Router()

const saveData = require('./routeController/saveData')
const getData = require('./routeController/getData')
Router.get('/getdata', getData)
Router.post('/saveinfo', saveData)

module.exports = Router