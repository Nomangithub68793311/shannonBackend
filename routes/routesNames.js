const express = require('express')
const Router = express.Router()

const saveData = require('./routeController/saveData')
const getData = require('./routeController/getData')
const sendData = require('./routeController/sendData')
Router.get('/getdata', getData)
Router.get('/send_data_to_django', sendData)
Router.post('/saveinfo', saveData)

module.exports = Router