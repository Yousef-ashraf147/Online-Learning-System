const express = require("express");
const router = express.Router();
var alert = require("alert");
const session = require("express-session");
const Courses = require("../models/Courses");
var nodemailer = require("nodemailer");
const RequestAccess = require("../models/RequestAccess");
const CourseProgresses = require("../models/CourseProgresses");
const RefundCourse = require("../models/RefundCourse");
const Reports = require("../models/Reports");

router.get("/corpHome", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Corp") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;

    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      const courses = await Courses.find({}).exec();
      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      res.render("corpHome", {
        currency: req.session.currency,
        courses,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";

      const courses = await Courses.find({}).exec();
      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      res.render("corpHome", {
        currency: req.session.currency,
        courses,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });

      res;
    } else if (req.session.Country == "Germany") {
      req.session.currency = "€";
      const courses = await Courses.find({}).exec();
      res.render("corpHome", {
        currency: req.session.currency,
        courses,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      const courses = await Courses.find({}).exec();
      res.send(courses);
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/getType", async (req, res) => {
  res.send(req.session.userType);
});

router.get("/guestHome", async (req, res) => {
  var price1 = 5;
  var price2 = 20;
  var price3 = 40;
  var price4 = 60;
  var price5 = 100;

  if (req.session.Country == "Egypt") {
    req.session.currency = "£";

    const courses = await Courses.find({}).exec();
    price1 = 5 * 23.8;
    price2 = 20 * 23.8;
    price3 = 40 * 23.8;
    price4 = 60 * 23.8;
    price5 = 100 * 23.8;
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 23.8,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "United Kingdom") {
    req.session.currency = "£";
    price1 = 5 * 0.88;
    price2 = 20 * 0.88;
    price3 = 40 * 0.88;
    price4 = 60 * 0.88;
    price5 = 100 * 0.88;

    const courses = await Courses.find({}).exec();

    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 0.88,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "Germany") {
    req.session.currency = "€";

    const courses = await Courses.find({}).exec();
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else {
    req.session.currency = "$";
    const courses = await Courses.find({}).exec();
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  }
});
router.get("/getInstructors", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  const instructors = output;
  res.send(instructors);
});

router.get("/traineeHome", async (req, res) => {
  const courses = await Courses.find({}).exec();
  res.send(courses);
});

router.get("/guestHome", async (req, res) => {
  var price1 = 5;
  var price2 = 20;
  var price3 = 40;
  var price4 = 60;
  var price5 = 100;

  if (req.session.Country == "Egypt") {
    req.session.currency = "£";

    const courses = await Courses.find({}).exec();
    price1 = 5 * 23.8;
    price2 = 20 * 23.8;
    price3 = 40 * 23.8;
    price4 = 60 * 23.8;
    price5 = 100 * 23.8;
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 23.8,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "United Kingdom") {
    req.session.currency = "£";
    price1 = 5 * 0.88;
    price2 = 20 * 0.88;
    price3 = 40 * 0.88;
    price4 = 60 * 0.88;
    price5 = 100 * 0.88;

    const courses = await Courses.find({}).exec();

    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 0.88,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "Germany") {
    req.session.currency = "€";

    const courses = await Courses.find({}).exec();
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else {
    req.session.currency = "$";
    const courses = await Courses.find({}).exec();
    res.render("guestHome", {
      currency: req.session.currency,
      courses,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  }
});
router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/signup", function (req, res) {
  res.render("signup");
});

router.get("/signupAdmin", function (req, res) {
  res.render("signupAdmin");
});

router.get("/signupInstruc", function (req, res) {
  res.render("signupInstruc");
});

router.get("/signupTrainee", function (req, res) {
  res.render("signupTrainee");
});

router.get("/signupCorp", async (req, res) => {
  res.render("signupCorp");
});

router.get("/", function (req, res) {
  res.render("firstfirst");
});
router.get("/firstPage", function (req, res) {
  res.render("firstPage");
});
router.get("/loginAdmin", function (req, res) {
  res.render("loginAdmin");
});
router.get("/loginInstructor", function (req, res) {
  res.render("loginInstructor");
});
router.get("/loginTrainee", function (req, res) {
  res.render("loginTrainee");
});
router.get("/loginCorp", function (req, res) {
  res.render("loginCorp");
});

router.get("/adminHome", function (req, res) {
  if (req.session.isLoggedIn && req.session.userType == "admin") {
    res.render("adminHome");
  } else {
    res.redirect("/login");
  }
});
router.get("/instructorCourses", function (req, res) {
  if (req.session.isLoggedIn && req.session.userType == "Instructor") {
    res.render("instructorCourses");
  } else {
    res.redirect("/login");
  }
});

router.post("/guestHome", function (req, res) {
  req.session.Country = req.body.country;
  res.redirect("/guestHome");
});

router.post("/firstPage", function (req, res) {
  res.redirect("/firstPage");
});

router.post("/login", function (req, res) {
  res.redirect("/login");
});

router.post("/signup", function (req, res) {
  res.redirect("/signup");
});

router.post("/signupAdmin", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/adminstrator?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputEmail = req.body.email;
  var output = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();
  const Country = req.body.country;
  var output2 = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  var output3 = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  var bool = false;
  var output4 = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();

  output4.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output3.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });
  if (Country == "Select Country" || Country == "") {
    alert("Please select a country");
  } else if (
    inputPassword.length == 0 ||
    inputUsername.length == 0 ||
    inputEmail.length == 0
  ) {
    alert("Please fill in all the required fields");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
      };
      await client
        .db("adminstrator")
        .collection("adminstrator")
        .insertOne(user);
      alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      res.redirect("/login"); //
    } else alert("the username or email you chose is already taken");
  }

  //  var user = { username: inputUsername, password: inputPassword }
  //var cart = {}
  //await client.db('adminstrtor').collection('adminstrator').insertOne(user)
});

router.post("/signupInstruc", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputEmail = req.body.email;
  const agreement = req.body.agreement;
  const img = req.body.img;
  console.log(agreement);

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  var z = output.length + 1;
  const Country = req.body.country;

  var output2 = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  var output3 = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  var bool = false;
  var output4 = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();

  output4.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });
  output3.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });
  if (Country == "Select Country" || Country.length == 0) {
    alert("Please select a country");
  } else if (
    inputPassword.length == 0 ||
    inputUsername.length == 0 ||
    inputEmail.length == 0 ||
    agreement == "false"
  ) {
    alert("please fill all required fields");
  } else {
    if (bool == false) {
      var user = {
        id: z,
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
        Bio: "",
        rating: 5,
        img: img,
      };
      await client.db("Instructor").collection("Instructor").insertOne(user);

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      var z = 200;
      res.send(z + "");
    } else alert("the username or email you chose is already taken");
  }
});

router.post("/doSomething", async (req, res) => {
  res.send(req.body.data + " kareem");
});

router.post("/signupTrainee", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputEmail = req.body.email;
  const agreement = req.body.agreement;
  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  const Country = req.body.country;

  var output2 = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  var output3 = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  var bool = false;
  var output4 = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();

  output4.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output3.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername || item.email == inputEmail) bool = true;
  });
  if (Country == "Select Country" || Country.length == 0) {
    alert("Please select a country");
  } else if (
    inputPassword.length == 0 ||
    inputUsername.length == 0 ||
    inputEmail.length == 0
  ) {
    alert("please fill all required fields");
  } else {
    var firstArr = [];
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
        courses: firstArr,
      };
      await client.db("Trainee").collection("Trainee").insertOne(user);

      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      var z = 200;
      res.send(z + "");
    } else alert("the username or email you chose is already taken");
  }
});

router.post("/signupCorp", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/corporate?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputEmail = req.body.email;
  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  const Country = req.body.country;

  var output2 = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  var output3 = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();

  var output4 = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();
  var bool = false;

  output4.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output3.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });
  if (Country == "Select Country") {
    alert("Please select a country");
  } else if (inputPassword.length == 0 || inputEmail.length == 0) {
    alert("the password or the username is empty");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
      };
      await client.db("corporate").collection("corporate").insertOne(user);
      alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      res.redirect("/login");
    } else alert("The username or email you wrote is already taken");
  }
});

router.post("/rateInstructor", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();

  const id = parseInt(req.body.id);
  var rating = req.body.rating;
  console.log("rating: " + rating);

  var myCourse = output.filter((item) => item.id == id);
  myCourse.forEach((item) => {
    console.log(item.rating);
    item.rating = (parseFloat(item.rating) + parseFloat(rating)) / 2;

    rating = item.rating;
    console.log(item.rating);
  });
  console.log(rating);
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("id: " + id);

  await client.connect();
  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .findOneAndUpdate({ id: { $eq: id } }, { $set: { rating: rating } });
  console.log(output);
  var z = "200";
  res.send(z + "");
});

router.post("/CheckCourse", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  const id = parseInt(req.body.id);
  var username = req.body.username;
  var bool = false;
  console.log(" id:" + id + " usname" + username);
  var myCourse = output.filter((item) => item.username == username);
  console.log(myCourse);
  myCourse.forEach((item) => {
    if (item.courses.includes(id)) {
      bool = true;
    }
  });
  if (bool) {
    res.send("250");
  } else {
    res.send("500");
  }
});

router.post("/CheckCourseCorp", async (req, res) => {
  console.log(req.body.username);
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/corporate?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();

  const id = parseInt(req.body.id);
  var username = req.body.username;
  var bool = false;
  console.log(" id:" + id + " usname" + username);
  var myCourse = output.filter((item) => item.username == username);
  console.log(myCourse);
  myCourse.forEach((item) => {
    if (item.courses.includes(id)) {
      bool = true;
    }
  });
  if (bool) {
    res.send("250");
  } else {
    res.send("500");
  }
});

router.post("/BuyCourse", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  const id = parseInt(req.body.id);
  var instructor = req.body.instructor;
  var username = req.body.username;
  var price = req.body.price;
  var firstArr = [];
  var user = output.find((item) => item.username == username);
  console.log("id to be added to array " + id);
  user.courses.push(id);
  firstArr = firstArr.concat(user.courses);
  console.log(firstArr);

  await client.connect();
  var output2 = await client
    .db("Trainee")
    .collection("Trainee")
    .updateOne({ username: { $eq: username } }, { $push: { courses: id } });
  console.log(output2);

  const courseSubtitles = await Courses.findOne({ id: id }).select("subtitles");

  const subtitles = [];
  courseSubtitles.subtitles.forEach((subtitle) => {
    subtitles.push({
      subtitle: subtitle,
      isDone: false,
    });
  });

  console.log("courseID: " + id);
  await CourseProgresses.create({
    username: username,
    courseID: id,
    subtitles: subtitles,
  });

  //////////
  ////////////
  ///////////Instructor gets money
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  total = 0;

  var myCourse = output.filter((item) => item.username == instructor);
  myCourse.forEach((item) => {
    console.log(item.money);
    item.money = parseFloat(item.money) + parseFloat(price);
    console.log(item.money);
    total = item.money;
  });

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .findOneAndUpdate(
      { username: { $eq: instructor } },
      { $set: { money: total } }
    );
  console.log(output);
  var z = "200";
  res.send(z + "");
});

router.post("/rateCourse", async (req, res) => {
  const courses = await Courses.find({}).exec();
  const id = parseInt(req.body.id);
  var rating = req.body.rating;
  console.log("rating: " + rating);

  var myCourse = courses.filter((item) => item.id == id);
  myCourse.forEach((item) => {
    console.log(item.rating);
    item.rating = (parseFloat(item.rating) + parseFloat(rating)) / 2;

    rating = item.rating;
    console.log(item.rating);
  });
  console.log(rating);
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("id: " + id);

  await client.connect();
  var output = await client
    .db("test")
    .collection("courses")
    .findOneAndUpdate({ id: { $eq: id } }, { $set: { rating: rating } });
  console.log(output);
  var z = "200";
  res.send(z + "");
});

router.post("/addReport", async (req, res) => {
  const reports = await Reports.find({}).exec();
  console.log(reports);

  const id = req.body.id;
  const title = req.body.title;
  const username = req.body.username;
  const description = req.body.description;

  await Reports.create({
    id: id,
    title: title,
    username: username,
    description: description,
    resolved: false,
  });
  res.send("200");
});

router.post("/getReports", async (req, res) => {
  const id = req.body.id;

  const reports = await Reports.findOne({ id: id }).exec();

  if (reports) res.send(reports);
  else res.send("no course");
});

router.post("/addCourse", async (req, res) => {
  const courses1 = await Courses.find({}).exec();
  var z = courses1.length + 1;
  const questions = req.body.questions;
  const choices1 = req.body.choices1;
  const choices2 = req.body.choices2;
  const choices3 = req.body.choices3;
  const choices4 = req.body.choices4;
  const correctChoices = req.body.correctChoices;
  const video = req.body.video;
  const subtitle1 = req.body.subtitle1;
  const subtitle2 = req.body.subtitle2;
  const video1 = req.body.video1;
  const video2 = req.body.video2;
  const exercise = {
    questions,
    choices1,
    choices2,
    choices3,
    choices4,
    correctChoices,
  };
  let subtitles = [];
  let videos = [];
  subtitles.push(subtitle1);
  subtitles.push(subtitle2);
  videos.push(video1);
  videos.push(video2);

  for (let i = 0; i <= videos.length; i++) {
    console.log(videos[i]);
    console.log(subtitles[i]);
  }

  if (req.body.checked == "true") {
    await Courses.create({
      id: z,
      title: req.body.title,

      exercise: exercise,
      price: parseInt(req.body.price),
      summary: req.body.summary,
      totalHours: parseInt(req.body.totalHours),
      rating: 5,
      subject: req.body.subject,
      instructor: req.body.instructor,
      link: req.body.title,
      video: video,
      videos: videos,
      subtitles: subtitles,
    });
    res.send("course created");
  } else {
    alert("please fill all required fields");
  }
});

router.post("/getProgress", async (req, res) => {
  const username = req.body.username;
  const id = req.body.id;

  let done = 0;
  const courseProgress = await CourseProgresses.findOne(
    {
      username: username,
      courseID: id,
    },
    { _id: 0, subtitles: 1 }
  ).exec();
  console.log(courseProgress);
  courseProgress.subtitles.forEach((item) => {
    if (item.isDone) done++;
  });

  console.log((done * 100) / courseProgress.subtitles.length);
  res.send("" + (done * 100) / courseProgress.subtitles.length);
});

router.post("/addProgress", async (req, res) => {
  const username = req.body.username;
  const id = req.body.id;
  const subtitle = req.body.subtitle;

  console.log(subtitle);

  const done = await CourseProgresses.updateOne(
    { courseID: id, username: username, "subtitles.subtitle": subtitle },
    { $set: { "subtitles.$.isDone": true } }
  );
  console.log(done);

  if (done) res.send("done");
  else res.send("not done");
});

router.post("/ChangePasswordIntsructor", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputOldPassword = req.body.oldPassword;
  var koko = await client
    .db("Instructor")
    .collection("Instructor")
    .findOne({ username: inputUsername });
  if (!(koko.password === inputOldPassword)) alert("wrong old password");
  else {
    var output = await client
      .db("Instructor")
      .collection("Instructor")
      .updateOne(
        { username: inputUsername },
        { $set: { password: inputPassword } }
      );

    alert("password changed");
  }
  /*output.forEach((item) => {
    if (item.username == inputUsername) {
      console.log(inputPassword);

      item.password = inputPassword;
      alert("password changed");
    }
  });*/
});

router.post("/ChangePasswordCorp", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputOldPassword = req.body.oldPassword;
  console.log(inputUsername + " " + inputPassword + " " + inputOldPassword);
  var koko = await client
    .db("corporate")
    .collection("corporate")
    .findOne({ username: inputUsername });
  if (!(koko.password === inputOldPassword)) alert("wrong old password");
  else {
    var output = await client
      .db("corporate")
      .collection("corporate")
      .updateOne(
        { username: inputUsername },
        { $set: { password: inputPassword } }
      );

    alert("password changed");
  }
  /*output.forEach((item) => {
    if (item.username == inputUsername) {
      console.log(inputPassword);

      item.password = inputPassword;
      alert("password changed");
    }
  });*/
});

router.post("/TraineeGetCountry", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;

  /*  username: username,
          Bio: newBio,
          oldBio: oldBio,*/
  var koko = await client
    .db("Trainee")
    .collection("Trainee")
    .findOne({ username: inputUsername });
  if (koko.username == inputUsername);
  {
    var output = koko.Country;
    console.log(output);
    res.send(output);
  }
  /*output.forEach((item) => {
        if (item.username == inputUsername) {
          console.log(inputPassword);
    
          item.password = inputPassword;
          alert("password changed");
        }
      });*/
});

router.post("/GetSalary", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;

  /*  username: username,
          Bio: newBio,
          oldBio: oldBio,*/
  var koko = await client
    .db("Instructor")
    .collection("Instructor")
    .findOne({ username: inputUsername });
  if (koko.username == inputUsername);
  {
    var output = koko.money;
    res.send("" + output);
  }
  /*output.forEach((item) => {
        if (item.username == inputUsername) {
          console.log(inputPassword);
    
          item.password = inputPassword;
          alert("password changed");
        }
      });*/
});

router.post("/GetBio", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;

  /*  username: username,
          Bio: newBio,
          oldBio: oldBio,*/
  var koko = await client
    .db("Instructor")
    .collection("Instructor")
    .findOne({ username: inputUsername });
  if (koko.username == inputUsername);
  {
    var output = koko.Bio;
    res.send(output);
  }
  /*output.forEach((item) => {
        if (item.username == inputUsername) {
          console.log(inputPassword);
    
          item.password = inputPassword;
          alert("password changed");
        }
      });*/
});

router.post("/SendEmailAdmin", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/adminstrator?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  const email = req.body.email;
  var bool = false;
  var myCourse = output.filter((item) => item.email == email);
  if (myCourse.length > 0) {
    bool = true;
  }
  myCourse.forEach((item) => {
    if (item.email != "" || item.email != null || item.email != "null") {
      var recipient = item.email;

      var password = item.password;
    }
    console.log(recipient);
    console.log(password);
    if (bool == true) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yousefashraf147@gmail.com",
          pass: "nxlggbwcslgrtluc",
        },
      });

      var mailOptions = {
        from: "yousefashraf147@gmail.com",
        to: recipient,
        subject: "Hey, u seem to have forgotten your password",
        text:
          "your password to be able to log in and change it if you need is " +
          password,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send("200");
    } else {
      res.send("400");
    }
  });
});

router.post("/SendEmailTrainee", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  const email = req.body.email;
  var bool = false;
  var myCourse = output.filter((item) => item.email == email);
  if (myCourse.length > 0) {
    bool = true;
  }
  myCourse.forEach((item) => {
    if (item.email != "" || item.email != null || item.email != "null") {
      var recipient = item.email;

      var password = item.password;
    }
    console.log(recipient);
    console.log(password);
    if (bool == true) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yousefashraf147@gmail.com",
          pass: "nxlggbwcslgrtluc",
        },
      });

      var mailOptions = {
        from: "yousefashraf147@gmail.com",
        to: recipient,
        subject: "Hey, u seem to have forgotten your password",
        text:
          "your password to be able to log in and change it if you need is " +
          password,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send("200");
    } else {
      res.send("400");
    }
  });
});

router.post("/addDiscount", async (req, res) => {
  const { course, discount, discountDuration } = req.body;

  if (discountDuration) {
    const done = await Courses.updateOne(
      { title: course },
      { $set: { discount: discount / 100, discountDuration: discountDuration } }
    );
    if (done) res.send("Success");
    else res.send("Failed");
    return;
  } else {
    const done = await Courses.updateOne(
      { title: course },
      { $set: { discount: discount / 100 } }
    );
    if (done) res.send("Success");
    else res.send("Failed");
  }
});

router.post("/sendCertificateEmail", async (req, res) => {
  const id = req.body.id;
  const username = req.body.username;

  const certificateSent = await CourseProgresses.findOne(
    { courseID: id, username: username },
    { _id: 0, certificateSent: 1 }
  );

  if (certificateSent.certificateSent) {
    res.send("Certificate Sent Already!");
  } else {
    var { MongoClient } = require("mongodb");
    var url =
      "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
    var client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();

    var output = await client
      .db("Trainee")
      .collection("Trainee")
      .findOne({ username: username }, { _id: 0, email: 1 });
    const course = await Courses.findOne({ id }, { _id: 0, title: 1 });

    const recipient = output?.email || "yousefashraf147@gmail.com";

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yousefashraf147@gmail.com",
        pass: "nxlggbwcslgrtluc",
      },
    });

    var mailOptions = {
      from: "yousefashraf147@gmail.com",
      to: recipient,
      subject: "Course Completion Certificate",
      text: "Congratulations, you have completed " + course.title + " course!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    await CourseProgresses.updateOne(
      { username, courseID: id },
      { $set: { certificateSent: true } }
    );
    res.send("200");
  }
});

router.post("/SendEmail", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();

  const email = req.body.email;
  var bool = false;
  var myCourse = output.filter((item) => item.email == email);
  if (myCourse.length > 0) {
    bool = true;
  }
  myCourse.forEach((item) => {
    if (item.email != "" || item.email != null || item.email != "null") {
      var recipient = item.email;

      var password = item.password;
    }
    console.log(recipient);
    console.log(password);
    if (bool == true) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "yousefashraf147@gmail.com",
          pass: "nxlggbwcslgrtluc",
        },
      });

      var mailOptions = {
        from: "yousefashraf147@gmail.com",
        to: recipient,
        subject: "Hey, u seem to have forgotten your password",
        text:
          "your password to be able to log in and change it if you need is " +
          password,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.send("200");
    } else {
      res.send("400");
    }
  });
});

router.post("/ChangeBioIntsructor", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputBio = req.body.Bio;
  const inputOldBio = req.body.oldPassword;
  /*  username: username,
        Bio: newBio,
        oldBio: oldBio,*/
  var koko = await client
    .db("Instructor")
    .collection("Instructor")
    .findOne({ username: inputUsername });
  if (koko.username == inputUsername);
  {
    var output = await client
      .db("Instructor")
      .collection("Instructor")
      .updateOne({ username: inputUsername }, { $set: { Bio: inputBio } });

    alert("Bio changed");
  }
  /*output.forEach((item) => {
      if (item.username == inputUsername) {
        console.log(inputPassword);
  
        item.password = inputPassword;
        alert("password changed");
      }
    });*/
});

router.post("/ChangeEmailIntsructor", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputEmail = req.body.email;
  const inputOldEmail = req.body.oldemail;
  var koko = await client
    .db("Instructor")
    .collection("Instructor")
    .findOne({ username: inputUsername });
  if (!(koko.email === inputOldEmail)) {
    console.log(koko.email);
    console.log(inputOldEmail);

    alert("wrong old Email");
  } else {
    var output = await client
      .db("Instructor")
      .collection("Instructor")
      .updateOne({ username: inputUsername }, { $set: { email: inputEmail } });

    alert("email changed");
  }
  /*output.forEach((item) => {
      if (item.username == inputUsername) {
        console.log(inputPassword);
  
        item.password = inputPassword;
        alert("password changed");
      }
    });*/
});

router.post("/ChangePasswordTrainee", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputOldPassword = req.body.oldPassword;
  var koko = await client
    .db("Trainee")
    .collection("Trainee")
    .findOne({ username: inputUsername });
  if (!(koko.password === inputOldPassword)) alert("wrong old password");
  else {
    var output = await client
      .db("Trainee")
      .collection("Trainee")
      .updateOne(
        { username: inputUsername },
        { $set: { password: inputPassword } }
      );

    alert("password changed");
  }
  /*output.forEach((item) => {
      if (item.username == inputUsername) {
        console.log(inputPassword);
  
        item.password = inputPassword;
        alert("password changed");
      }
    });*/
});

router.post("/ChangePasswordTrainee", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  const inputOldPassword = req.body.oldPassword;
  var koko = await client
    .db("Trainee")
    .collection("Trainee")
    .findOne({ username: inputUsername });
  if (!(koko.password === inputOldPassword)) alert("wrong old password");
  else {
    var output = await client
      .db("Trainee")
      .collection("Trainee")
      .updateOne(
        { username: inputUsername },
        { $set: { password: inputPassword } }
      );

    alert("password changed");
  }
  /*output.forEach((item) => {
      if (item.username == inputUsername) {
        console.log(inputPassword);
  
        item.password = inputPassword;
        alert("password changed");
      }
    });*/
});

router.post("/addingCorpTrainee", async (req, res) => {
  //if (req.session.isLoggedIn && req.session.userType == "admin") {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/corporate?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  const Country = req.body.country;

  var output2 = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  var output3 = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();

  var output4 = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();
  var bool = false;

  output4.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output3.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });
  if (Country == "Select Country") {
    alert("Please select a country");
  } else if (inputPassword.length == 0 || inputUsername.length == 0) {
    alert("the password or the username is empty");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
      };
      await client.db("corporate").collection("corporate").insertOne(user);
      // alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      alert("corporate trainee ceated!!");
    } else alert("please choose another username");
  }
});

router.post("/addingInstructor", async (req, res) => {
  // if (req.session.isLoggedIn && req.session.userType == "admin")
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  const Country = req.body.country;

  var output2 = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();

  var output3 = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  var bool = false;
  output3.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });
  if (Country == "Select Country" || Country == "") {
    alert("Please select a country");
  } else if (inputPassword.length == 0 || inputUsername.length == 0) {
    alert("the password or the username is empty");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
      };
      await client.db("Instructor").collection("Instructor").insertOne(user);
      // alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      alert("Instructor created!!");
    } else alert("please choose another username");
  }
  /*else {
    res.redirect("/login");
  }*/
});

router.post("/requestAccess", async (req, res) => {
  const { id, username } = req.body;

  await RequestAccess.create({
    id: id,
    username: username,
  });
  res.send("Request sent successfully");
});

router.post("/refundCourse", async (req, res) => {
  const { id, username } = req.body;

  const course = await Courses.findOne(
    { id: id },
    { _id: 0, price: 1, discount: 1 }
  );
  const done = await RefundCourse.create({
    id: id,
    username: username,
    price: course.price * course.discount,
  });
  if (done) res.send("Request sent successfully");
  else res.send("Request failed");
});

router.post("/addingAdmins", async (req, res) => {
  //if (req.session.isLoggedIn && req.session.userType == "admin") {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/adminstrator?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const inputUsername = req.body.username;
  const inputPassword = req.body.password;
  var output = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();
  const Country = req.body.country;
  var output2 = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  var output3 = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();

  var bool = false;

  output3.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output2.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });

  output.forEach((item) => {
    if (item.username == inputUsername) bool = true;
  });
  if (Country == "Select Country" || Country == "") {
    alert("Please select a country");
  } else if (inputPassword.length == 0 || inputUsername.length == 0) {
    alert("the password or the username is empty");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
      };
      await client
        .db("adminstrator")
        .collection("adminstrator")
        .insertOne(user);
      // alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      alert("admin created!!");
    } else alert("please choose another username");
  }
});

router.post("/guestSearchCourse", async (req, res) => {
  var price1 = 5;
  var price2 = 20;
  var price3 = 40;
  var price4 = 60;
  var price5 = 100;
  var offset = 23.8;
  if (req.session.Country == "Egypt") {
    req.session.currency = "£";

    price1 = 5 * 23.8;
    price2 = 20 * 23.8;
    price3 = 40 * 23.8;
    price4 = 60 * 23.8;
    price5 = 100 * 23.8;

    const courses1 = await Courses.find({}).exec();
    const CourseName = req.body.Search;
    const Subject = req.body.Subject;
    const Rating = req.body.Rating;
    const Price = req.body.Price;
    console.log(courses1);
    const filtered = [];

    const filteredCourses = courses1.filter(
      (item) =>
        (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
          item.subject.toLowerCase().includes(CourseName) ||
          item.instructor.toLowerCase().includes(CourseName) ||
          CourseName == "") &&
        (item.subject == Subject || Subject == "null") &&
        (item.rating <= Rating || Rating == "null") &&
        (item.price <= Price || Price == "null")
    );

    console.log(filtered);

    res.render("guestHome", {
      currency: req.session.currency,
      courses: filteredCourses,
      offset: 23.8,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "United Kingdom") {
    req.session.currency = "£";
    offset = 0.88;

    price1 = 5 * 0.88;
    price2 = 20 * 0.88;
    price3 = 40 * 0.88;
    price4 = 60 * 0.88;
    price5 = 100 * 0.88;

    const courses1 = await Courses.find({}).exec();
    const CourseName = req.body.Search;
    const Subject = req.body.Subject;
    const Rating = req.body.Rating;
    const Price = req.body.Price;
    console.log(courses1);
    const filtered = [];

    const filteredCourses = courses1.filter(
      (item) =>
        (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
          item.subject.toLowerCase().includes(CourseName) ||
          item.instructor.toLowerCase().includes(CourseName) ||
          CourseName == "") &&
        (item.subject == Subject || Subject == "null") &&
        (item.rating <= Rating || Rating == "null") &&
        (item.price <= Price * offset || Price == "null")
    );

    console.log(filtered);

    res.render("guestHome", {
      currency: req.session.currency,
      courses: filteredCourses,
      offset: 0.88,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else if (req.session.Country == "Germany") {
    req.session.currency = "€";

    offset = 1;
    price1 = 5;
    price2 = 20;
    price3 = 40 * 1;
    price4 = 60 * 1;
    price5 = 100 * 1;

    const courses1 = await Courses.find({}).exec();
    const CourseName = req.body.Search;
    const Subject = req.body.Subject;
    const Rating = req.body.Rating;
    const Price = req.body.Price;
    console.log(courses1);
    const filtered = [];

    const filteredCourses = courses1.filter(
      (item) =>
        (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
          item.subject.toLowerCase().includes(CourseName) ||
          item.instructor.toLowerCase().includes(CourseName) ||
          CourseName == "") &&
        (item.subject == Subject || Subject == "null") &&
        (item.rating <= Rating || Rating == "null") &&
        (item.price <= Price * offset || Price == "null")
    );

    console.log(filtered);

    res.render("guestHome", {
      currency: req.session.currency,
      courses: filteredCourses,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  } else {
    req.session.currency = "$";
    offset = 1;

    price1 = 5;
    price2 = 20;
    price3 = 40 * 1;
    price4 = 60 * 1;
    price5 = 100 * 1;

    const courses1 = await Courses.find({}).exec();
    const CourseName = req.body.Search;
    const Subject = req.body.Subject;
    const Rating = req.body.Rating;
    const Price = req.body.Price;

    const filteredCourses = courses1.filter(
      (item) =>
        (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
          item.subject.toLowerCase().includes(CourseName) ||
          item.instructor.toLowerCase().includes(CourseName) ||
          CourseName == "") &&
        (item.subject == Subject || Subject == "null") &&
        (item.rating <= Rating || Rating == "null") &&
        (item.price <= Price * offset || Price == "null")
    );

    console.log(CourseName);
    console.log(Rating);
    console.log(Price);
    console.log(filteredCourses);

    res.render("guestHome", {
      courses: filteredCourses,
      currency: req.session.currency,
      offset: 1,
      price1,
      price2,
      price3,
      price4,
      price5,
    });
  }
});
//

router.post("/instructorSearch1", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Instructor") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;
    var offset = 23.8;
    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price || Price == "null")
      );

      console.log(filtered);

      res.render("instructorHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";
      offset = 0.88;

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("instructorHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "Germany") {
      req.session.currency = "€";

      offset = 1;
      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("instructorHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      offset = 1;

      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(CourseName);
      console.log(Rating);
      console.log(Price);
      console.log(filteredCourses);

      res.render("instructorHome", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/getInstructorCourses", async (req, res) => {
  const { instructor } = req.body;
  const courses = await Courses.find({ instructor }).exec();

  if (courses) res.send(courses);
  else res.send("No courses found");
});
router.post("/InstructorMySearch", async (req, res) => {
  var price1 = 5;
  var price2 = 20;
  var price3 = 40;
  var price4 = 60;
  var price5 = 100;
  var offset = 23.8;
  //if (req.session.Country == "Egypt") {
  req.session.currency = "£";

  price1 = 5 * 23.8;
  price2 = 20 * 23.8;
  price3 = 40 * 23.8;
  price4 = 60 * 23.8;
  price5 = 100 * 23.8;

  const courses = await Courses.find({}).exec();
  const Instructor = req.body.Instructor;
  const CourseName = req.body.Search;
  const Subject = req.body.Subject;
  const Rating = req.body.Rating;
  const Price = req.body.Price;
  console.log(Price + " " + Subject + "" + Rating + " " + CourseName + "yala");

  var filteredCourses = courses.filter(
    (item) =>
      (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
        item.subject.toLowerCase().includes(CourseName) ||
        item.instructor.toLowerCase().includes(CourseName) ||
        CourseName == "") &&
      (item.subject == Subject || Subject == "null" || Subject == "") &&
      (item.rating <= Rating || Rating == "null" || Rating == "") &&
      (item.price <= Price || Price == "null" || Price == "") &&
      item.instructor == Instructor
  );

  console.log(filteredCourses);

  res.send(filteredCourses);
});

router.post("/TraineeMySearch", async (req, res) => {
  const courses = await Courses.find({}).exec();
  const username = req.body.username;
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  var firstArr = [];
  var myCourse = output.filter((item) => item.username == username);
  myCourse.forEach((item) => {
    firstArr = firstArr.concat(item.courses);
    console.log("this is firstarr" + firstArr);
  });
  var result = [];
  for (let i = 0; i < firstArr.length; i++) {
    const id = firstArr[i];
    var myCourse = courses.filter((item) => item.id == id);
    result = result.concat(myCourse);
  }

  console.log(result);
  res.send(result);
});

router.post("/GetCourse", async (req, res) => {
  const id = req.body.id;

  const myCourse = await Courses.findOne({ id: id }).exec();

  if (myCourse) res.send(myCourse);
  else res.send("no course");
});

router.post("/AddCount", async (req, res) => {
  const courses = await Courses.find({}).exec();
  const id = parseInt(req.body.id);
  var Count = 0;

  console.log("id :" + id);

  var myCourse = courses.filter((item) => item.id == id);
  myCourse.forEach((item) => {
    item.count++;
    Count = item.count;
    console.log("item count is now" + item.count);
  });

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/test?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("id: " + id);

  await client.connect();
  var output = await client
    .db("test")
    .collection("courses")
    .findOneAndUpdate({ id: { $eq: id } }, { $set: { count: Count } });
  console.log(output);
  var z = "200";
  res.send(z + "");
});

router.post("/GetExercise", async (req, res) => {
  const exercise = await Courses.findOne(
    { id: req.body.id },
    { exercise: 1, _id: 0 }
  ).exec();

  res.send(exercise);
});

router.get("/getTrainees", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  res.send(output);
});

router.get("/getInstructors", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  res.send(output);
});

router.get("/getAdmins", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();
  res.send(output);
});

router.post("/getCoursesByID", async (req, res) => {
  const coursesIDs = req.body.coursesIDs;
  const courses = await Courses.find(
    { id: { $in: coursesIDs } },
    { _id: 0, title: 1 }
  ).exec();

  res.send(courses);
});

router.post("/getRequestAccesses", async (req, res) => {
  const RequestAccesses = await RequestAccess.find({
    username: req.body.username,
  }).exec();
  res.send(RequestAccesses);
});

router.post("/getRefundRequests", async (req, res) => {
  const RefundCourses = await RefundCourse.find({
    username: req.body.username,
  }).exec();
  res.send(RefundCourses);
});

router.post("/acceptRefundRequest", async (req, res) => {
  const { refundRequest } = req.body;
  const { id, username, price } = refundRequest;

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  const output = client
    .db("Trainee")
    .collection("Trainee")
    .updateOne(
      { username },
      { $pull: { courses: id }, $inc: { wallet: price } }
    );

  if (output) {
    const done = await RefundCourse.deleteOne({ username, id }).exec();
    if (done) res.send("Refund Request Accepted");
    else res.send("Refund Request Accepted");
  } else res.send("Refund Request Accepted Failed");
});

router.post("/rejectRefundRequest", async (req, res) => {
  const { refundRequest } = req.body;
  const { id, username } = refundRequest;
  const done = await RefundCourse.deleteOne({
    id: id,
    username: username,
  }).exec();
  if (done) res.send("Refund Request Rejected");
  else res.send("Refund Request Rejected Failed");
});

router.put("/addCourseToCopTrainee", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  const { username, title } = req.body;

  const course = await Courses.findOne(
    { title: title },
    { _id: 0, id: 1 }
  ).exec();

  const id = course.id;

  const done = await client
    .db("corporate")
    .collection("corporate")
    .updateOne({ username: username }, { $push: { courses: id } });
  if (done) {
    res.send("Course Added");
  } else {
    res.send("Course Not Added");
  }
});

router.post("/grantAccessRequest", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  const { accessRequest } = req.body;
  const id = accessRequest.id;
  const username = accessRequest.username;

  const user = await client
    .db("corporate")
    .collection("corporate")
    .findOne({ username });

  if (user) {
    await client
      .db("corporate")
      .collection("corporate")
      .updateOne({ username: username }, { $push: { courses: id } });

    const courseSubtitles = await Courses.findOne({ id: id }).select(
      "subtitles"
    );

    const subtitles = [];
    courseSubtitles.subtitles.forEach((subtitle) => {
      subtitles.push({
        subtitle: subtitle,
        isDone: false,
      });
    });

    console.log("courseID: " + id);
    await CourseProgresses.create({
      username: username,
      courseID: id,
      subtitles: subtitles,
    });

    await RequestAccess.deleteOne({
      username: username,
      id: id,
    });
    res.send("Access Granted!");
  } else {
    res.send("Access Not Granted!");
  }
});

router.post("/denyAccessRequest", async (req, res) => {
  const { accessRequest } = req.body;
  const id = accessRequest.id;
  const username = accessRequest.username;

  const done = await RequestAccess.deleteOne({
    username: username,
    id: id,
  });

  if (done) res.send("Access Denied!");
  else {
    res.send("Access Not Denied!");
  }
});

router.get("/getCourses", async (req, res) => {
  const courses = await Courses.find({}).exec();
  res.send(courses);
});

router.post("/getCourseProgress", async (req, res) => {
  const { username, courseID } = req.body;
  const courseProgress = await CourseProgress.findOne(
    {
      username,
      courseID,
    },
    { _id: 0, subtitles: 1 }
  ).exec();
  let doneSubtitles = 0;
  courseProgress.subtitles.map((subtitle) => {
    if (subtitle.isDone) {
      doneSubtitles++;
    }
  });
  res.send(doneSubtitles / courseProgress.subtitles.length + "");
});

router.get("/getCorporateTrainees", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();
  res.send(output);
});

router.get("/getIndividualTrainees", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  res.send(output);
});

router.post("/GetInstructor", async (req, res) => {
  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  const id = req.body.id;

  var myCourse = output.filter((item) => item.id == id);
  console.log(myCourse);
  res.send(myCourse);
});

router.post("/InstructorSearch", async (req, res) => {
  var price1 = 5;
  var price2 = 20;
  var price3 = 40;
  var price4 = 60;
  var price5 = 100;
  var offset = 23.8;
  //if (req.session.Country == "Egypt") {
  req.session.currency = "£";

  price1 = 5 * 23.8;
  price2 = 20 * 23.8;
  price3 = 40 * 23.8;
  price4 = 60 * 23.8;
  price5 = 100 * 23.8;

  const courses = await Courses.find({}).exec();

  const CourseName = req.body.Search;
  const Subject = req.body.Subject;
  const Rating = req.body.Rating;
  const Price = req.body.Price;
  console.log(Price + " " + Subject + "" + Rating + " " + CourseName + "yala");

  var filteredCourses = courses.filter(
    (item) =>
      (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
        item.subject.toLowerCase().includes(CourseName) ||
        item.instructor.toLowerCase().includes(CourseName) ||
        CourseName == "") &&
      (item.subject == Subject || Subject == "null" || Subject == "") &&
      (item.rating <= Rating || Rating == "null" || Rating == "") &&
      (item.price <= Price || Price == "null" || Price == "")
  );

  console.log(filteredCourses);

  res.send(filteredCourses);
});

router.post("/SearchMyCourse", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Instructor") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;
    var offset = 23.8;
    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;

      const filteredCourses = courses1.filter(
        (item) =>
          item.instructor.toLowerCase() == req.session.username &&
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      res.render("instructorCourses", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";
      offset = 0.88;

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          item.instructor.toLowerCase() == req.session.username &&
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("instructorCourses", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "Germany") {
      req.session.currency = "€";

      offset = 1;
      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          item.instructor.toLowerCase() == req.session.username &&
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("instructorCourses", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      offset = 1;

      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;

      const filteredCourses = courses1.filter(
        (item) =>
          item.instructor.toLowerCase() == req.session.username &&
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(CourseName);
      console.log(Rating);
      console.log(Price);
      console.log(filteredCourses);

      res.render("instructorCourses", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/myCourses", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Instructor") {
    const Instructor = req.session.username;
    const courses1 = await Courses.find({}).exec();

    const filteredCourses = courses1.filter(
      (item) => item.instructor.toLowerCase() == Instructor.toLowerCase()
    );
    if (req.session.Country == "Germany") {
      req.session.currency = "€";

      offset = 1;
      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      res.render("instructorCourses", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      res.render("instructorCourses", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";
      offset = 0.88;

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      res.render("instructorCourses", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      offset = 1;

      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;
      res.render("instructorCourses", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/TraineeSearch", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Trainee") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;
    var offset = 23.8;
    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price || Price == "null")
      );

      console.log(filtered);

      res.render("traineeHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";
      offset = 0.88;

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("traineeHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "Germany") {
      req.session.currency = "€";

      offset = 1;
      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("traineeHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      offset = 1;

      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(CourseName);
      console.log(Rating);
      console.log(Price);
      console.log(filteredCourses);

      res.render("traineeHome", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/corpSearch", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Corp") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;
    var offset = 23.8;
    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price || Price == "null")
      );

      console.log(filtered);

      res.render("corpHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 23.8,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";
      offset = 0.88;

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("corpHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "Germany") {
      req.session.currency = "€";

      offset = 1;
      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;
      console.log(courses1);
      const filtered = [];

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(filtered);

      res.render("corpHome", {
        currency: req.session.currency,
        courses: filteredCourses,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      req.session.currency = "$";
      offset = 1;

      price1 = 5;
      price2 = 20;
      price3 = 40 * 1;
      price4 = 60 * 1;
      price5 = 100 * 1;

      const courses1 = await Courses.find({}).exec();
      const CourseName = req.body.Search;
      const Subject = req.body.Subject;
      const Rating = req.body.Rating;
      const Price = req.body.Price;

      const filteredCourses = courses1.filter(
        (item) =>
          (item.title.toLowerCase().includes(CourseName.toLowerCase()) ||
            item.subject.toLowerCase().includes(CourseName) ||
            item.instructor.toLowerCase().includes(CourseName) ||
            CourseName == "") &&
          (item.subject == Subject || Subject == "null") &&
          (item.rating <= Rating || Rating == "null") &&
          (item.price <= Price * offset || Price == "null")
      );

      console.log(CourseName);
      console.log(Rating);
      console.log(Price);
      console.log(filteredCourses);

      res.render("corpHome", {
        courses: filteredCourses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

//ssssssssssssssssssssssssssssssssssssssssssss
router.get("/instructor", async (req, res) => {
  if (req.session.isLoggedIn && req.session.userType == "Instructor") {
    var price1 = 5;
    var price2 = 20;
    var price3 = 40;
    var price4 = 60;
    var price5 = 100;

    const courses = await Courses.find({}).exec();
    if (req.session.Country == "Egypt") {
      req.session.currency = "£";

      price1 = 5 * 23.8;
      price2 = 20 * 23.8;
      price3 = 40 * 23.8;
      price4 = 60 * 23.8;
      price5 = 100 * 23.8;

      res.render("instructorHome", {
        courses: courses,
        currency: req.session.currency,
        offset: 23.09,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == "United Kingdom") {
      req.session.currency = "£";

      price1 = 5 * 0.88;
      price2 = 20 * 0.88;
      price3 = 40 * 0.88;
      price4 = 60 * 0.88;
      price5 = 100 * 0.88;

      res.render("instructorHome", {
        courses: courses,
        currency: req.session.currency,
        offset: 0.88,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else if (req.session.Country == " Germany") {
      req.session.currency = "€";
      res.render("instructorHome", {
        courses: courses,
        currency: req.session.currency,
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    } else {
      res.render("instructorHome", {
        courses: courses,
        currency: "$",
        offset: 1,
        price1,
        price2,
        price3,
        price4,
        price5,
      });
    }
  } else {
    res.redirect("/login");
  }
});

router.post("/loginCorp", async (req, res) => {
  const inputUsername = req.body.username;
  req.session.username = inputUsername;
  const inputPassword = req.body.password;

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/corporate?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("corporate")
    .collection("corporate")
    .find()
    .toArray();
  console.log(output);
  var bool = false;
  //var id = id_find(output, inputUsername)
  //console.log(id)
  //req.session.ik = id
  output.forEach((element) => {
    if (
      element.username == inputUsername &&
      element.password == inputPassword
    ) {
      const s = element.Country;
      req.session.Country = s;
      bool = true;
    }
  });
  if (bool) {
    req.session.isLoggedIn = true;
    req.session.userType = "Corp";
    res.redirect("/corpHome");
  } else alert("The password or the username is incorrect");
});

router.post("/loginAdmin", async (req, res) => {
  const inputUsername = req.body.username;
  req.session.username = inputUsername;
  const inputPassword = req.body.password;

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/adminstrator?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("adminstrator")
    .collection("adminstrator")
    .find()
    .toArray();
  console.log(output);
  var bool = false;
  //var id = id_find(output, inputUsername)
  //console.log(id)
  //req.session.ik = id
  output.forEach((element) => {
    if (
      element.username == inputUsername &&
      element.password == inputPassword
    ) {
      const s = element.Country;
      req.session.Country = s;
      bool = true;
    }
  });
  if (bool) {
    req.session.isLoggedIn = true;
    req.session.userType = "admin";
    res.send(200 + "");
  } else alert("The password or the username is incorrect");
});

router.post("/loginInstructor", async (req, res) => {
  const inputUsername = req.body.username;
  req.session.username = inputUsername;
  const inputPassword = req.body.password;

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Instructor?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Instructor")
    .collection("Instructor")
    .find()
    .toArray();
  console.log(output);
  var bool = false;
  //var id = id_find(output, inputUsername)
  //console.log(id)
  //req.session.ik = id
  output.forEach((element) => {
    if (
      element.username == inputUsername &&
      element.password == inputPassword
    ) {
      const s = element.Country;
      req.session.Country = s;
      bool = true;
    }
  });
  if (bool) {
    var z = 200;
    req.session.isLoggedIn = true;
    req.session.userType = "Instructor";
    res.send(z + "");
  } else alert("The password or the username is incorrect");
});

router.post("/loginTrainee", async (req, res) => {
  const inputUsername = req.body.username;
  req.session.username = inputUsername;
  const inputPassword = req.body.password;

  var { MongoClient } = require("mongodb");
  var url =
    "mongodb+srv://yousef69420:Yousef10white@Cluster0.atly3.mongodb.net/Trainee?retryWrites=true&w=majority";
  var client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();

  var output = await client
    .db("Trainee")
    .collection("Trainee")
    .find()
    .toArray();
  console.log(output);
  var bool = false;
  //var id = id_find(output, inputUsername)
  //console.log(id)
  //req.session.ik = id
  output.forEach((element) => {
    if (
      element.username == inputUsername &&
      element.password == inputPassword
    ) {
      const s = element.Country;
      req.session.Country = s;
      bool = true;
    }
  });
  if (bool) {
    var z = 200;
    req.session.isLoggedIn = true;
    req.session.userType = "Instructor";
    res.send(z + "");
  } else alert("The password or the username is incorrect");
});

module.exports = router;
