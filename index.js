const express=require("express")
const cors=require("cors")
const {MongoClient}=require("mongodb")
const ObjectId=require("mongodb").ObjectId
require("dotenv").config()
const app=express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Successfully Run The Node And Express")
})



app.listen(port,()=>{
    console.log("Running the Localhost",`http://localhost:${port}`)
})