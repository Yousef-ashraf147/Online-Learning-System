const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes")
const session = require('express-session')
const bodyParser = require('body-parser')
require('dotenv').config();
mongoose.connect(process.env.ATLAS_URI);

var fs = require('fs');
var alert = require('alert');
var cookie = require('cookie');

const app = express();
const port = process.env.PORT || "3000";
app.use(express.json());

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set("views", path.join(__dirname, "views"))
app.listen(port, () => {
  console.log("Listening to requests on http://localhost:" + { port });
})
app.set("view engine", "ejs");
app.use(routes);