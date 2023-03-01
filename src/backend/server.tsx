import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import { Wrestler, WrestlerModel } from "./models/wrestler";

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.post('/wrestlers',async (req:any, res:any) => {
    try {
        const wrestler = new WrestlerModel(req.body)
        await wrestler.save()
        res.send(wrestler)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.listen(8000, () => {
    console.log('Server started on port 8000')
})