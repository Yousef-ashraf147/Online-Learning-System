import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import cookie from "react-cookies";
import { Box } from "@mui/system";
import { Typography, Stack } from "@mui/material";

const Guestcourse = () => {
  const username = cookie.load("username");

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [course, setCourse] = React.useState();
  const [rating, setRating] = React.useState(0);
  var i = 0;
  const type = cookie.load("type");

  const [exercise, setExercise] = React.useState();
  const convertCurrency = cookie.load("convertCurrency");

  const handleExerciseClick = () => {
    navigate(`/exercise/${id}`);
  };

  useEffect(() => {
    console.log(type);
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:3000/GetCourse", {
        id: id,
      })
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, [rating]);

  function Register(x, y) {
    cookie.save("Courseid", id, { path: "/" });
    cookie.save(
      "price",
      Math.round((x * convertCurrency + Number.EPSILON) * 100) / 100,
      { path: "/" }
    );
    cookie.save("instructorname", y, { path: "/" });
    navigate("/BuyCourse");
  }

  function requestAccess() {
    cookie.save("Courseid", id, { path: "/" });

    axios
      .post("http://localhost:3000/requestAccess", {
        id: id,
        username: username,
      })
      .then((response) => {
        alert("Request sent successfully");
      });
  }

  return (
    <>
      {course ? (
        <div className="div">
          <div>
            <h1 style={{ fontSize: "2rem" }}> {course.title} Course page</h1>
            <br />

            <hr style={{ color: "black" }}></hr>
            <p style={{ fontSize: "1.2rem" }}>
              <img src={course.img} width="250" height="400"></img>
              <br />
              Instructor: Dr.{course.instructor}
              <br />
              Subject : {course.subject}
              <br></br>
              {course.discount ? (
                <Stack direction={"row"} spacing={1}>
                  <Typography>Price : </Typography>
                  <Typography style={{ textDecoration: "line-through" }}>
                    {course.price} $
                  </Typography>
                  <Typography>{course.price * course.discount} $</Typography>
                  {course.discountDuration ? (
                    <Typography>
                      {"Discount Ends In " + course.discountDuration + " Days"}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Stack>
              ) : (
                <Stack direction={"row"} spacing={3}>
                  <Typography>Price : </Typography>
                  <Typography>{course.price} $</Typography>
                </Stack>
              )}
              Total hours : {course.totalHours} hrs <br />
              rating : {course.rating} out of 5 <br></br>
              Summary : {course.summary}.
            </p>

            <h2 style={{ fontSize: "2rem" }}>Course preview video:</h2>
            <div>
              <iframe
                style={{ border: "10px solid black" }}
                allowFullScreen="true"
                width="800"
                height="400"
                src={course.video}
                title="TWISTED - Worth Nothing (slowed & reverb)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write;
 encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <Box
              color={"blue"}
              borderColor={"black"}
              border={"2px solid black"}
            >
              <h2 style={{ fontSize: "1.3rem", backgroundColor: "beige" }}>
                subtitle 1: {course.subtitles[i++]}
              </h2>
            </Box>
            <br />
            <h2
              style={{
                fontSize: "1.2rem",
                backgroundColor: "beige",
                border: "2px solid black",
              }}
            >
              subtitle 2: {course.subtitles[i++]}
            </h2>
          </div>
          <br></br>
          <br></br>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Guestcourse;
