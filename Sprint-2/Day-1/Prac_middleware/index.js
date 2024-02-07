const fs = require("fs");
const express = require("express");
const { send } = require("process");

const app = express();

const logger = (req, res, next) => {
  console.log("Logger Middleware Callled ");
  req.preTime = Date.now();
  next();

  console.log("time took" + req.time);
};

app.use(logger);
app.use((req, res, next) => {
  req.requested = new Date().toISOString();
  next();
});

app.get("/", (req, res) => {
  console.log("time Take " + req.time);
  const nextTime = Date.now();
  const time = nextTime - req.preTime;

  res.send(
    `It took 
      ${time} 
      ms
        <---------      Hello Browser  
      ${req.requested}`
  );
  // console.log("2")
});

app.post("/add", (req, res) => {
  res.send("Hello Browser");
  console.log("2");
});

app.patch("/update/:id", (req, res) => {
  res.send("Hello Browser");
  console.log("2");
});

app.put("/update/:id", (req, res) => {
  res.send("Hello Browser");
  console.log("2");
});

app.delete("/delete/:id", (req, res) => {
  res.send("Hello Browser");
  console.log("2");
});

app.listen(7860);
