const express = require('express')
const app=express()
const morgan=require('morgan')

app.use(morgan('short'))

app.get("/",(req, res) => {
    console.log("responce to root router")
    res.send("Hello form root")

})
app.get("/users",(req,res)=>{
    var user1 = {name: "test",lastname:"ddsdsd"}
    res.json(user1)
})

app.listen(3000,()=>{
    console.log("Server is runing...")
})