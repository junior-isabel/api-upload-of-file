require('dotenv').config({encoding: 'utf-8'})
const express = require('express')
const path = require('path')
const cors = require('cors')

const router = require('./routes/api')

const app = express()
const database = require('./models/index')

app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.resolve(__dirname, 'uploads')))
app.use((req, res, next) => {
    req.db = database.sequelize.models
    next()
})
app.get('/', (req, res) => {

    return res.send("<h1>Api Upload of files <strong>pdf</strong></h1>")
})
app.use('/api/v1', router)


app.listen(4000, () => {
    console.log('http://localhost:4000')
})