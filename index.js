require("dotenv").config();
const express = require("express");
const database = require("./src/database");
const app = express();

const userRouter = require("./src/routes/user.route");
app.use("/users",userRouter);

const PORT = process.env.PORT || 3000;
app.set("view engine","ejs");

app.use("/users",userRouter);
app.get("/",function (req,res){
    res.render("home");
});