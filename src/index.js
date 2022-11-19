require('./dataBase/connection')
const express = require('express')
const mongoose = require('mongoose')
const jogosRouter = require('./routes/jogos')

const app = express()
app.use(express.json())

app.use('/jogos', jogosRouter)

app.listen(8080)