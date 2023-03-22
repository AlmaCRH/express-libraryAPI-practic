require('dotenv').config()
const morgan = require('morgan')
const express = require('express')

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.BD_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
})


const app = express()
const router = require('./api/routes')

app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)



app.listen(process.env.PORT, async (err) => {
    if (err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)

    console.log(`Express listening on port ${process.env.PORT}`)

    try {
       await sequelize.authenticate()
    } catch (error){
        console.error('ERROR: Unable to connect to the database:', error)
    }
    
})