const express = require("express");
const { connection, modelName } = require("./db");

const app = express();

app.get("/", async(req, res) => {
    const user = await userModel.find();
  res.send("Api working");
});

app.get("/users", (req, res) => {
  res.send(" users Api working");
});



app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }
  console.log("App is running at port 8000");
});
