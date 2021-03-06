require('rootpath')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const errorHandler = require('app/helpers/error/error-handler')
const cors = require('cors')

// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,OPTIONS,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Origin, Authorization");
    next();
});
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use JWT auth to secure the api
// app.use(jwt())

// api routes
app.use('/', require('./../controllers/eleicoes'))

// global error handler
app.use(errorHandler)

// start server
const port = process.env.PORT || 5333
const www = app.listen(port, function () {
    console.log('server-listening-on-port[::: ' + port + ' :::]')
})