const express = require("express");

const app = express()

app.use ('/' , (req,res)=> {
    
    return res.send('hello from backend2');
})

app.listen(5001, ()=> {
    
     console.log('backend2')
});