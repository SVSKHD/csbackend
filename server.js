require("dotenv").config()
const express = require ("express")
const BodyParser = require ("body-parser")
const CookieParser = require ("cookie-parser")
const mongoose = require ("mongoose")
const cors = require("cors")
const Morgan = require("morgan")


const server = express()

// middleware
server.use(BodyParser.json())
server.use(CookieParser())
server.use(Morgan("dev"))
server.use(cors())

// Database
mongoose.connect(process.env.DATABASE,
    {
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true    
    }).then(()=>{
        console.log("DB is attached and fucntional")
    })

// routes
const ContactRoutes = require("./routes/contact") 
// api middlewares
server.use("/api",ContactRoutes)


const PORT = process.env.PORT
server.listen(PORT,(req,res)=>{
    console.log(`server is Up at ${PORT}`)
})