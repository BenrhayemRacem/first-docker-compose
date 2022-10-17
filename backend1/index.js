const express = require("express");

const app = express()

app.use ('/' , (req,res)=> {
    
    return res.send('hello from backend1');
})

app.listen(5000, ()=> {
    
     console.log('backend1')
});