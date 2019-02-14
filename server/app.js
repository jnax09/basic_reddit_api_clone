const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost:27017/reddit_api_clone', { useNewUrlParser: true }, () => {
    console.log('Connected to MongoDB...')
})

//Middleware
app.use(bodyParser.json())

//Routes
app.use('/api', routes)

module.exports = app