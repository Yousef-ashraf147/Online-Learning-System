const express = require("express");
const router = express.Router();
var alert = require("alert");
const session = require("express-session");
const Courses = require("../models/Courses");

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
router.get("/traineeHome", async (req, res) => {
  //   var myArray = [];

  //   if (req.session.isLoggedIn && req.session.userType == "Trainee") {
  //     var price1 = 5;
  //     var price2 = 20;
  //     var price3 = 40;
  //     var price4 = 60;
  //     var price5 = 100;

  //     if (req.session.Country == "Egypt") {
  //       req.session.currency = "£";

  //       myArray = await Courses.find({}).exec();
  //       price1 = 5 * 23.8;
  //       price2 = 20 * 23.8;
  //       price3 = 40 * 23.8;
  //       price4 = 60 * 23.8;
  //       price5 = 100 * 23.8;
  //     } else if (req.session.Country == "United Kingdom") {
  //       req.session.currency = "£";

  //       myArray = await Courses.find({}).exec();
  //       price1 = 5 * 0.88;
  //       price2 = 20 * 0.88;
  //       price3 = 40 * 0.88;
  //       price4 = 60 * 0.88;
  //       price5 = 100 * 0.88;

  //       res.render("traineeHome", {
  //         currency: req.session.currency,
  //         courses,
  //         offset: 0.88,
  //         price1,
  //         price2,
  //         price3,
  //         price4,
  //         price5,
  //       });
  //     } else if (req.session.Country == "Germany") {
  //       req.session.currency = "€";
  //       myArray = await Courses.find({}).exec();
  //       res.render("traineeHome", {
  //         currency: req.session.currency,
  //         courses,
  //         offset: 1,
  //         price1,
  //         price2,
  //         price3,
  //         price4,
  //         price5,
  //       });
  //     } else {
  //       req.session.currency = "$";
  //       myArray = await Courses.find({}).exec();
  //     }
  //   }
  //   res.json(myArray);

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
  console.log(agreement);

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
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
        Bio: "",
        rating: 5,
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
    if (item.username == inputUsername) bool = true;
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
    alert("please fill all the required fields");
  } else {
    if (bool == false) {
      var user = {
        username: inputUsername,
        password: inputPassword,
        Country: Country,
        email: inputEmail,
      };
      await client.db("Trainee").collection("Trainee").insertOne(user);
      alert("registration successful");
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
      });
      res.redirect("/login");
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
router.post("/rateCourse", async (req, res) => {
  const courses = await Courses.find({}).exec();
  const id = parseInt(req.body.id);
  var rating = req.body.rating;
  console.log("rating: " + rating);

  var myCourse = courses.filter((item) => item.id == id);
  myCourse.forEach((item) => {
    console.log(item.rating);
    item.rating = (parseInt(item.rating) + parseInt(rating)) / 2;

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

router.post("/addCourse", async (req, res) => {
  const courses1 = await Courses.find({}).exec();
  var z = courses1.length + 1;
  if (req.body.checked == "true") {
    await Courses.create({
      id: z,
      title: req.body.title,
      subtitle: req.body.subtitle,
      price: parseInt(req.body.price),
      summary: req.body.summary,
      totalHours: parseInt(req.body.totalHours),
      rating: 5,
      subject: req.body.subject,
      instructor: req.body.instructor,
      link: req.body.title,
    });
    res.send("course created");
  } else {
    alert("please fill all required fields");
  }
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

router.post("/GetCourse", async (req, res) => {
  const courses = await Courses.find({}).exec();
  const id = req.body.id;

  var myCourse = courses.filter((item) => item.id == id);
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
