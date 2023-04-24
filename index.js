require("dotenv").config();
const express = require("express");
// connect mongodb
const database = require("./src/database");
const app = express();
