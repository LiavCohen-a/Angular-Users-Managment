const express = require('express')
const app = express();
const userController = require("./Controller/usersController")
require('./config/databse')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
var cors = require("cors");
app.use(cors());
app.use("/api/users",userController);
app.listen(5000)
console.log("serverRUns")