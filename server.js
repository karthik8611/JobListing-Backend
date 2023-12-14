const express= require('express');
const  dotenv = require('dotenv').config();

const app =express();

app.get("/", (req, res) => {
    res.send("server stated")
    
})

const port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})





