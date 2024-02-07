const express = require("express");
const { connection, modelName } = require("./db");

const app = express();
app.use(express.json())

app.get("/", async(req, res) => {
    const user = await modelName.find();
  res.send(user);
});

app.post("/users/add", (req, res) => {
    console.log(req.body.rank)
  res.send(" users Api working");
});




app.listen(9000, async () => {
  try {
    await connection;
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }
  console.log("App is running at port 8000");
});
