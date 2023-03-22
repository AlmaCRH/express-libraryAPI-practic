require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()

const router = require('./api/routes')

app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, (err) => {
        if(err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)

    console.log(`Express listening on port ${process.env.PORT}`)
})