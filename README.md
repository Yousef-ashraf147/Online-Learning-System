# Project Title

Online Learning System

# Course

Advanced Computer Lab CSEN 704

# Motivation

what motivated me to put much work in this course, is how useful it is .Because, I got to enhance my skills with the MERN
stack and the usage of Github

# Build status

• UI/UX needs improvement in some pages

• Reports being seen instead of unseen isn't working

• The discount feature should be improved. Because , it really doesn't countdown the number of days remaining till the discount ends

# Overview

This project was implement following the agile methodology. I had 3 sprints and I was given 2 weeks as a duration for each sprint. Each sprint had its fair share of functional and non-functional requirments.

# Theme

The theme of the project, is to create an online learning system in which users can enroll in courses and watch vides in those courses as well as solve excercises.

# Objectives

- Learn how to work as a team using Github.
- Learn how to work with and master the MERN Stack.
- Learn how to follow a set of requirments every sprint and Finishing them to build a software.
- Learn how to build a project using Agile Methodology

# Code Style

Plain and Simple

# Screenshots

## Home Page

![App Screenshot](https://www.linkpicture.com/q/HomePage.png)

## Login Page

![App Screenshot](https://www.linkpicture.com/q/LoginPage.png)

## Course Page

![App Screenshot](https://www.linkpicture.com/q/BO2.png)

# Features

the system has 5 different types of users :

- Instructor
- Corporate trainee
- Individual trainee
- Adminstrator
- Guest

## As an Admin i could

- mark reported problems as "resolved" or "pending"
- refund an amount to a trainee to their wallet
- add another administrator with a set username and password
- add instructors and create their usernames and passwords
- add corporate trainees and create their usernames and passwords
- view course requests from corporate trainees
- grant corporate trainees access to specific courses
- view reported problems - should automaticalled be marked as "unseen"
- set a promotion (% sale) for specific courses, several courses or all courses

## As an instructor i could

• define a promotion for the course (% discount) and for how long

• view his/her rating and reviews as an instructor

• edit his/her mini biography or email

• set the answers (not visible for the trainee) for multiple choice exercises

• create a multiple choice exam with 4 choices per question

• upload a video link from YouTube under each subtitle and enter a short description of the video

• upload a video link from YouTube as a preview to the course

• create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course

• view the ratings and reviews on all his/her courses

• view the amount of money owed per month

• filter the courses given by him/her based on a subject or price

• search for a course given by him/her based on course title or subject or instructor

• filter the courses given by him/her based on a subject or price

• view all the titles of the courses given by him/her

• view and accept the contract which includes all the rights to the posted videos and materials as well as the % taken by the company on each video per registered trainee

## As an Individual Trainee I could

• request a refund only if less than 50% of the course has been attended

• view the amount available in their wallet from refunded courses

## As an Corporate Trainee I could

• request access to a specific course they do not have access to

## As an Guest I could

• sign up for an account as an individual trainee using a username, email, password, first name, last name and gender

## As an Individual Trainee/Instructor/Corporate Trainee I could

• change his/her password

• log in using a username and password

• report a problem with a course. The problem can be "technical", "financial" or "other"

• receive an email to change a forgotten password

• see all previously repoted problems and their statuses

• log out

• follow up on an unresolved problem("Missing")

## As an Individual Trainee/Corporate Trainee I could

• open all the items inside a course he/she is registered for including videos and excercises

• rate an instructor

• solve a multiple choice exercise by choosing the correct answer

• view his/her grade from the exercise

• view the questions with the correct solution to view the incorrect answers

• submit the answers to the exercise after completing it

• watch a video from a course he/she is registered for

• see his/her progress in the course as a percentage of how much of the course has been completed so far

• receive a certificate as a PDF after completing the course via email

• rate a course

• download the certificate as a PDF from the website

• write notes while watching the video

• download the notes as a PDF

• see a list of all the courses he/she is enrolled in on their profile

## As an Guest/Instructor/individual Trainee/Corporate Trainee I could

• select their country

• filter the courses based on a subject and/or rating

• view all the titles of the courses available including the total hours of the course and course rating

• view the most viewed/ most popular courses

• search for a course based on course title or subject or instructor

• view a preview video of the course and the course outline before registering for it

## As an Guest/Instructor/individual Trainee I could

• view and accept the website/ company refund/ payment policy while signing up

• view the price of each course

• filter the courses based on price (price can be FREE)

• choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected

# How to use

## Installation

Run the following in the root folder of the project and in the Frontend folder to install needed packages

```bash
  npm i
```

## How to use

Run the following command in the Frontend folder in a seperate termianl window

```bash
cd frontend
npm start
```

Run the following command in the Backend folder ("routes.js) in a seperate termianl window

```bash
cd ../
npm nodemon
```

## Tools and Frameworks

We used MERN Stack (MongoDB, Express, React, Node) to implement our Website.

### For the frontend :

#### React.js :

React.js, more commonly known as React, is a free, open-source JavaScript library. It works best to build user interfaces by combining sections of code (components) into full websites. React can be used to create single-page or mobile applications as a foundation.

#### MUI :

MUI is a React User Interface Library. MUI is a comprehensive, flexible, and easily available library of foundational and advanced components that allows you to create your own design system and construct React apps more quickly.

### For the DB and the Backend :

#### Express.js :

Express.js or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

#### Node.js :

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.



#### MongoDB:

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

# Usage

### HomePage

The first page of the Website. it shows all available courses as well as filtering of the courses .

### Login

This page gives option as to which type of user login to choose

### SignUp

This page gives option as to which type of user to signup for using ur data

## InstructorAddcourse

A page that Contains a form to add a new course

## AdminViewReports

A page that admins can view reports and mark them as resolved or not

## BuyCourse

Show a form to be filled with credit card details in order to buy the course

## Exercise

Page where the user can solve an exercise

## API Reference

```javascript
router.get("/corpHome", async (req, res)

router.get("/getType", async (req, res)

router.get("/getInstructors", async (req, res)

router.get("/login", function (req, res)

router.post("/guestHome", function (req, res)

router.post("/login", function (req, res)

router.post("/signup", function (req, res)

router.post("/signupAdmin", async (req, res)

router.post("/signupInstruc", async (req, res)

router.post("/doSomething", async (req, res)

router.post("/signupTrainee", async (req, res)

router.post("/signupCorp", async (req, res)

router.post("/rateInstructor", async (req, res)

router.post("/CheckCourseCorp", async (req, res)

router.post("/BuyCourse", async (req, res)

router.post("/MarkAsResolved", async (req, res)

router.post("/rateCourse", async (req, res)

router.post("/addReport", async (req, res)

router.post("/getReports", async (req, res)

router.post("/getMyReports", async (req, res)

router.post("/addCourse", async (req, res)

router.post("/getProgress", async (req, res)

router.post("/addProgress", async (req, res)

router.post("/ChangePasswordIntsructor", async (req, res)

router.post("/TraineeGetCountry", async (req, res)

router.post("/GetSalary", async (req, res)

router.post("/GetWallet", async (req, res)

router.post("/GetBio", async (req, res)

router.post("/SendEmailAdmin", async (req, res)

router.post("/SendEmailTrainee", async (req, res)

router.post("/addDiscount", async (req, res)

router.post("/sendCertificateEmail", async (req, res)

router.post("/getRequestAccesses", async (req, res)

router.post("/grantAccessRequest", async (req, res)

router.put("/addCourseToCopTrainee", async (req, res)

router.post("/getCoursesByID", async (req, res)

router.post("/AddCount", async (req, res)

router.put("/addCourseToCopTrainee", async (req, res)


```

# Code Examples

### Course Model

```javascript
const mongoose = require("mongoose");
const CoursesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  exercise: {
    type: Object,
  },
  subject: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  totalHours: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  video: {
    type: String,
    required: false,
  },
  videoLinks: {
    type: Array,
  },
  subtitles: {
    type: Array,
  },
  videos: {
    type: Array,
  },
  count: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  discountDuration: {
    type: Number,
  },
});

const course = mongoose.model("Courses", CoursesSchema);
module.exports = course;
```

### InstructorAddCourse Page

```javascript
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Exercise from "./Exercise";
import cookie from "react-cookies";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SuccessfullyCreated from "./SuccessfullyCreated.js";
import { minWidth } from "@mui/system";
import { useState, useEffect } from "react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const InstructorAddCourse = () => {
  const type = cookie.load("type");
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [summary, setSummary] = React.useState("");
  const [totalHours, setTotalHours] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [subject, setSubject] = React.useState("");
  const [instructor, setInstructor] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState(["", "", ""]);
  const [choices1, setChoices1] = React.useState(["", "", "", "", ""]);
  const [choices2, setChoices2] = React.useState(["", "", "", "", ""]);
  const [choices3, setChoices3] = React.useState(["", "", "", "", ""]);
  const [correctChoices, setCorrectChoices] = React.useState(["", "", ""]);

  const [subtitle1, setSubtitle1] = React.useState("");
  const [video1, setVideo1] = React.useState("");
  const [subtitle2, setSubtitle2] = React.useState("");
  const [video2, setVideo2] = React.useState("");

  const [checked, setChecked] = React.useState(false);
  const [video, setVideo] = React.useState("");
  const [img, setImg] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (type != "Instructor") navigate("../UnauthorizedAccess");
  });

  function Submit() {
    console.log(video);
    axios
      .post(
        "http://localhost:3000/addCourse",
        {
          title: title,
          subtitle: subtitle,
          price: price,
          summary: summary,
          totalHours: totalHours,
          questions: questions,
          choices1: choices1,
          choices2: choices2,
          choices3: choices3,
          correctChoices: correctChoices,
          subject: subject,
          instructor: cookie.load("username"),
          checked: checked,
          video: video,
          subtitle1: subtitle1,
          subtitle2: subtitle2,
          video1: video1,
          video2: video2,
          img: img,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(() => {
        setOpen(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }

  const navigate = useNavigate();
  function oNavigate() {
    navigate("/LoginAdmin");
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={25} direction={"row"}>
        <Stack
          spacing={2}
          direction={"column"}
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Course img embed"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Course title"
            variant="outlined"
          />

          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="filled-basic"
            label="price"
            variant="outlined"
            type="number"
          />

          <TextField
            onChange={(e) => setSummary(e.target.value)}
            id="outlined-basic"
            label="summary"
            variant="outlined"
          />
          <Stack spacing={2} direction={"column"}>
            <TextField
              onChange={(e) => setTotalHours(e.target.value)}
              id="outlined-basic"
              label="totalHours"
              variant="outlined"
              type="number"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Subject"
                onChange={(e) => setSubject(e.target.value)}
              >
                <MenuItem value={"Math"}>Math</MenuItem>
                <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
                <MenuItem value={"Biology"}>Biology</MenuItem>
                <MenuItem value={"Physics"}>Physics</MenuItem>
                <MenuItem value={"English"}>English</MenuItem>
              </Select>
              <br></br>
              <TextField
                onChange={(e) => setVideo(e.target.value)}
                id="outlined-basic"
                label="Preview Video embed link"
                variant="outlined"
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox defaultunchecked />}
              checked={checked}
              onChange={handleChange}
              label="Accept the user's agreement"
            />
            <a href="/TermsOfUse">View User's Agreement</a>
          </Stack>
          <SuccessfullyCreated open={open} setOpen={setOpen} />
          <Exercise
            questions={questions}
            setQuestions={setQuestions}
            choices1={choices1}
            setChoices1={setChoices1}
            choices2={choices2}
            setChoices2={setChoices2}
            choices3={choices3}
            setChoices3={setChoices3}
            correctChoices={correctChoices}
            setCorrectChoices={setCorrectChoices}
          />

          <Button onClick={Submit} variant="contained">
            Create course
          </Button>
        </Stack>
        <Stack
          spacing={2}
          direction={"column"}
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <TextField
            onChange={(e) => setSubtitle1(e.target.value)}
            id="outlined-basic"
            label="Subtitle 1 title"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setVideo1(e.target.value)}
            id="outlined-basic"
            label="video of subtitle 1"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setSubtitle2(e.target.value)}
            id="filled-basic"
            label="Subtitle 2 title"
            variant="outlined"
            type="text"
          />

          <TextField
            onChange={(e) => setVideo2(e.target.value)}
            id="outlined-basic"
            label="video of subtitle 2"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default InstructorAddCourse;
```

# Contribution

you can contribute to our project using this link :
https://github.com/Yousef-ashraf147/Milestone1/tree/Milestone3

# License

The software is open source under the ISC License.

https://opensource.org/licenses/ISC

# Credits

https://mui.com/

https://stackoverflow.com

https://www.geeksforgeeks.org

https://www.w3schools.com/

# Contact

project by :

Youssef Zaky --> Email:(Youssef.zaky@student.guc.edu.eg)


