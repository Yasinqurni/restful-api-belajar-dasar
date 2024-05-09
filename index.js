const express = require('express')
const app = express()
const responseHandler = require('./handler/response_handler')
const {ResponseHandler, response} = require('./handler/response_handler')

require('dotenv').config()

const port = process.env.PORT || 3000

const resHandler = new ResponseHandler()
app.get('/ping',resHandler.response)
app.get('/ping2',response)
app.post('/login',)

app.listen(port,()=>{
    console.log(`sedang berjalan di ${port}`)
})