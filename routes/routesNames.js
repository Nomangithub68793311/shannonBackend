const express = require('express')
const Router = express.Router()

const checkUser = require('../middleware/checkUser')
const saveData = require('./routeController/saveData')
const getData = require('./routeController/getData')
const sendData = require('./routeController/sendData')
const erpSaveData = require('./routeController/erpSaveData')
const erpGetData = require('./routeController/erpGetData')
const loginData = require('./routeController/loginData')
const signupData = require('./routeController/signupData')

Router.get('/getdata', getData)
Router.get('/send_data_to_django', sendData)
Router.post('/saveinfo', saveData)
Router.route('/erpData').post(erpSaveData).get(checkUser, erpGetData)
Router.post('/login', loginData)
Router.post('/signup', signupData)

module.exports = Router