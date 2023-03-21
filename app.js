const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// -- ROUTES --
app.get('/', (req, res) => { res.render('home') })
app.get('/projects', (req, res) => { res.render('projects') })

module.exports = app