const express = require("express");
const { connection } = require("./db");
const { userController } = require("./Controllers/users.routes");
const { authMiddleware } = require("./Middleware/authMiddleware");
const { productController } = require("./Controllers/products.routes");

const app = express();
app.use(express.json());


app.use("/users",userController);


app.use(authMiddleware)

app.use("/products",productController)

app.get("/",async(rerq,res)=>{
  res.json({status:"Api is working fine"})
})


app.listen("8000", async () => {
  try {
    await connection;
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
  console.log("server is running on port 8000");
});
