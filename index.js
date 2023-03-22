require('dotenv').config()
const express = require('express')
const app = express()

app.get('/books', (req, res) => {
   res.send('API okay')
})




app.listen(process.env.PORT, (err) => {
        if(err) throw new Error(`ERROR: Cannot run server on port ${process.env.PORT}\n`, err)

    console.log(`Express listening on port ${process.env.PORT}`)
})