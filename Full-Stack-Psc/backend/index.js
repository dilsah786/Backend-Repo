const express = require("express");
const { connection, UserModel, NotesModel } = require("./db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { notesController } = require("./routes/notes.routes");
const { authentication } = require("./middlewares/authentication");

const app = express();
app.use(express.json());
const port = 3000;

// app.use("/user",userController)

app.post("/user/signup", async (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 4, async function (err, hash) {
    if (err) {
      return res.send(err);
    } else {
      const user = await UserModel.create({ email: email, password: hash });
      res.send(user);
    }
  });
  console.log("Signed up SuccessFully");
});

app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
 const hashedPassword = user.password;

  bcrypt.compare(password, hashedPassword, async function (err, result) {
    if (!result) { 
      res.send("Something went wrong. Please try again");
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
      console.log(result);
      res.send({ status: "Login SuccessFul ", token: token });
      
    }
  });
});

app.get("/dil",async(req,res)=>{
    const note = await NotesModel.find({_id:"6555d4d30d561de425964930"})
    res.send(note)
})

// Authentication Middleware 
app.use(authentication);

// Getting Notes
// app.use("/", notesController);

// Creating Notes 
 app.use("/notes", notesController);




// Running on 3000 port and connecting to mongoDB
app.listen(port, async () => {
  try {
    await connection;
    console.log("App is connected to MongoDb");
  } catch (err) {
    console.log(err);
    console.log("Error occurred while connectiong to mongo Db");
  }
  console.log("App is listening on port 3000");
});