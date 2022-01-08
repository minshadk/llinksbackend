const express = require("express");

const linkRouter = require("./routes/linkRoutes");

const app = express();

//Middleware
// used for accessing ?? must have for accesing data from body
app.use(express.json())

//ROUTES
app.use("/link",linkRouter)

module.exports = app;
  