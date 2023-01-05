import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import cookie from "react-cookies";
import Stack from "@mui/material/Stack";
import { RepeatOneSharp } from "@material-ui/icons";
import { Box } from "@mui/system";

const CourseWithoutDetails = () => {
  const username = cookie.load("username");

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [rows, setRows] = React.useState([]);
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
      .post("http://localhost:3000/CheckCourse", {
        id: id,
        username: username,
      })
      .then((response) => {
        if (response.data == "250") {
          navigate(`/courses+/${id}`);
        }
      })
      .then(
        axios
          .post("http://localhost:3000/GetCourse", {
            id: id,
          })
          .then((response) => {
            setRows(response.data);
          })
      )
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
    <div className="div">
      {rows &&
        rows.map((row) => (
          <div>
            <h1 style={{ fontSize: "2rem" }}> {row.title} Course page</h1>
            <br />
            {type == "corporate" ? (
              <Button variant="contained" onClick={requestAccess}>
                Request Access
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => {
                  Register(row.price, row.instructor);
                }}
              >
                Register for course
              </Button>
            )}
            <hr style={{ color: "black" }}></hr>
            <p style={{ fontSize: "1.2rem" }}>
              <img src={row.img} width="250" height="400"></img>
              <br />
              Instructor: Dr.{row.instructor}
              <br />
              Subject : {row.subject}
              <br></br>
              Price : {row.price} $<br></br>
              Total hours : {row.totalHours} hrs <br />
              rating : {row.rating} out of 5 <br></br>
              Summary : {row.summary}.
            </p>

            <h2 style={{ fontSize: "2rem" }}>Course preview video:</h2>
            <div>
              <iframe
                style={{ border: "10px solid black" }}
                allowFullScreen="true"
                width="800"
                height="400"
                src={row.video}
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
                subtitle 1: {row.subtitles[i++]}
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
              subtitle 2: {row.subtitles[i++]}
            </h2>
          </div>
        ))}
      <br></br>
      <br></br>
    </div>
  );
};

export default CourseWithoutDetails;
