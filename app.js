const express = require("express");
const parser = require("body-parser");
const app = express();
app.set("view engine", "ejs");

const HomeRoute = require("./web/routes/home.routes");
app.use("/", HomeRoute);

module.exports = app;
