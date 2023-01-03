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
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";

const CourseDetails = () => {
  console.log(cookie.load("username"));
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { id } = useParams();
  const [rows, setRows] = React.useState([]);
  const [rating, setRating] = React.useState(0);
  const [exercise, setExercise] = React.useState();
  var i = 0;

  const handleExerciseClick = () => {
    navigate(`/exercise/${id}`);
  };

  function Submit() {
    axios
      .post(
        "http://localhost:3000/rateCourse",
        {
          rating: rating,
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data == "200") {
          alert("Course rated!");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }
  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/AddCount",
        { id: id },

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(
        axios
          .post("http://localhost:3000/GetCourse", {
            id: id,
          })
          .then((response) => {
            setRows(response.data);
          })
      );
  }, [rating]);

  return (
    <div className="div">
      <h1 style={{ fontSize: "2rem" }}>Course Page</h1>

      {rows &&
        rows.map((row) => (
          <div>
            <h2 style={{ fontSize: "1.4rem" }}> {row.title} Course page</h2>
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
            <Stack
              direction={"row"}
              spacing={3}
              style={{ minWidth: "3000px", maxWidth: "3000px" }}
              alignContent={"center"}
              alignSelf={"center"}
              alignItems={"center"}
            >
              <Box
                color={"blue"}
                borderColor={"black"}
                border={"2px solid black"}
                style={{ minWidth: "1940px", maxWidth: "1940px" }}
                alignContent={"center"}
                alignSelf={"center"}
                alignItems={"center"}
              >
                <h2 style={{ fontSize: "1.3rem", backgroundColor: "beige" }}>
                  subtitle 1: {row.subtitles[i++]}
                </h2>
                <Button
                  onClick={() => setShow(!show)}
                  variant="contained"
                  color="inherit"
                >
                  view video &dArr;
                </Button>
                {show ? (
                  <div>
                    <Stack
                      direction={"column"}
                      spacing={3}
                      style={{
                        minWidth: "3000px",
                        maxWidth: "3000px",
                      }}
                      alignContent={"center"}
                      alignSelf={"center"}
                      alignItems={"center"}
                    >
                      <ReactPlayer
                        url={row.videos[i]}
                        style={{ marginRight: "1000px" }}
                      />{" "}
                    </Stack>
                    <Stack
                      direction={"row"}
                      spacing={3}
                      style={{ minWidth: "3000px", maxWidth: "3000px" }}
                      alignContent={"center"}
                      alignSelf={"center"}
                      alignItems={"center"}
                    >
                      {" "}
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={10}
                        name="Search"
                        type="text"
                        placeholder="Notes"
                        sx={{ m: 1, width: "100ch" }}
                        size={{ minWidth: "3000px", maxWidth: "3000px" }}
                        style={{ marginLeft: "500px" }}
                      />
                      <Button variant="contained" color="inherit">
                        Save notes as a pdf
                      </Button>
                    </Stack>
                  </div>
                ) : null}
              </Box>
            </Stack>
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
      <Button variant="outlined" onClick={handleExerciseClick}>
        Solve Exercise
      </Button>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <Button onClick={Submit} variant="contained">
        Rate Course
      </Button>
    </div>
  );
};

export default CourseDetails;
