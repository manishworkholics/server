const dotenv = require('dotenv')
const express = require('express')
var multer = require('multer');
const webpush = require('web-push');
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT;

app.use(express.json())
require('./config/conn')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const register = require('./Route/userRoute')
const showuser = require('./Route/userRoute')
const updateuser = require('./Route/userRoute')
const deleteuser = require('./Route/userRoute')
const login = require('./Route/userRoute')



app.use('/api/v1', register)
app.use('/api/v1', showuser)
app.use('/api/v1', updateuser)
app.use('/api/v1', deleteuser)
app.use('/api/v1', login)

























app.listen(PORT, () => {
    console.log('server start')
})