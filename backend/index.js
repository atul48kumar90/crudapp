import express from 'express'
import "dotenv/config.js";
import Connection from './database/db.js'
import Routes from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

const PORT = 5000

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/', Routes)

Connection()

app.listen(PORT, () => console.log(`server started at ${PORT}`));