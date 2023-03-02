import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import { Wrestler, WrestlerModel } from "./models/wrestler";
// require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/techFallDB', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database')
}).catch((error: any) => {
    console.log('Error connecting to database: ', error)
})

app.post('/wrestlers',async (req, res) => {
    try {
        const wrestler = new WrestlerModel(req.body)
        await wrestler.save()
        res.send(wrestler)
    } catch(err) {
        console.error(err)
        res.status(500).send({message: 'Internal server error'})
    }
})

app.listen(8000, () => {
    console.log('Server started on port 8000')
})