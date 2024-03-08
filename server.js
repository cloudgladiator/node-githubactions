const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})



app.listen(process.env.PORT,() => {
    console.log("listening to 8000");
})
