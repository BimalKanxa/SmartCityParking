// const stripe = require("stripe")
import express from "express"
import Route from "./routes/routes.js"
import dotenv from "dotenv"
import cors from 'cors'



import connection from "./db/db.js"
import bodyParser from "body-parser"


//payment


const app = express()
const PORT = 8000 || process.env.PORT 

dotenv.config()


// middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())
app.use('/', Route)

const URL = process.env.MONGODB_URI

connection(URL)



app.listen(PORT, ()=>{
    console.log(`server is running in http://localhost:${PORT}`)
})