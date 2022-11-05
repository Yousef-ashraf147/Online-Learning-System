const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const routes = require("./routes/routes")
const session = require('express-session')
require('dotenv').config();
mongoose.connect(process.env.ATLAS_URI);

const app = express();
const port = process.env.PORT || "8000";

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.set("views", path.join(__dirname, "views"))
app.listen(port, () => {
    console.log("Listening to requests on http://localhost:" +{port});
})
app.set("view engine", "ejs");
app.use(routes);