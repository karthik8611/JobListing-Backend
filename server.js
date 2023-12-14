const express= require('express');
const  dotenv = require('dotenv').config();

const app =express();

app.get("/health", (req, res) => {
    res.send("server running properly")
    
})

const port =process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})





