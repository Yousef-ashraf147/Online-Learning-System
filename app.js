const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const routes = require("./routes/routes")
require('dotenv').config();

const app = express();
const port = process.env.PORT || "8000";
app.set("views", path.join(__dirname, "views"))
app.listen(port, () => {
    console.log("Listening to requests on http://localhost:" +{port});
})
app.set("view engine", "ejs");
app.use(routes);