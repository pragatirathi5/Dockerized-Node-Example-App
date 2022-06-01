const express=require('express');
const app=express();

const port=process.env.PORT||3000;


app.get('/', (req,res)=>{
    res.send('Heya..This is my first Dockerized App');
})

app.listen(port, ()=>{
    console.log("Listening to server on http://localhost:3000");
});