const express = require("express");
const { connection, MovieModel } = require("./db");

const app = express();

app.use(express.json())


app.get("/movies",async(req,res)=>{
    const movies = await MovieModel.find();

    res.send(movies)
})


const port = 2000

app.listen(port,async()=>{
    try{
      await connection;
      console.log("App is connected to Mongodb")
    }catch(err){
     console.log(err);
     console.log("Error occured while connecting to Mongodb ")
    }
console.log("App is listening on port 2000")
})