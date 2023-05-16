const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Knex = require('knex')
const Model = require('objection').Model
const knexConfig = require('../knexfile')

const routesV1 = require('./routes/v1')

const app = express()

// Initialize knex.
const knex = Knex(knexConfig.development)

// Bind all Models to a knex instance. If you only have one database in
Model.knex(knex)

// parse json request body
app.use(express.json())

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// enable cors
app.use(cors())
app.options('*', cors())

// logger
app.use(morgan('dev'))

// v1 api routes
app.use('/v1', routesV1)

// test
app.get('/', (_, res) => {
    res.send('Wellcome to Absensi API :)')
})

module.exports = app
