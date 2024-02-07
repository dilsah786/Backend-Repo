const express = require("express");
const { connection, UserModel } = require("./db");
const loginModel = require("./loginModel");
const { signUpModel } = require("./signupModel");
const rounter = express.rounter;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const user = await UserModel.find();
  console.log(user);
  res.send(user);
});

app.post("/add", async (req, res) => {
  const bodyData = req.body;
  const user = await UserModel.insertMany(bodyData);
  res.send(user);
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await UserModel.findByIdAndDelete(id);
  res.send(deletedUser);
});

app.delete("/deleteByName/:name", async (req, res) => {
  const nameD = req.params.name;
  console.log(nameD);
  const deletedUser = await UserModel.deleteMany({ name: nameD });
  res.send(deletedUser);
});

app.patch("/update/:id", async (req, res) => {
  const updateBody = req.body;
  const filter = { _id: req.params.id };
  try {
    const updatedBody = await UserModel.updateOne(filter, { $set: updateBody });
    console.log(updatedBody);
    res.send(updatedBody);
  } catch (err) {
    console.log(err);
    res.status(404).json({ err: "Failed to updated document" });
  }
});

app.router









app.listen(8000, async (req, res) => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
  console.log("App is running on port 8000");
});
