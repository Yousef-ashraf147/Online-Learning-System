import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import cookie from "react-cookies";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";
import { jsPDF } from "jspdf";
import CourseProgress from "./CourseProgress";

const CourseDetailsc = () => {
  console.log(cookie.load("username"));
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const { id } = useParams();
  const [course, setCourse] = React.useState();
  const [rating, setRating] = React.useState(0);
  const [notes, setNotes] = React.useState("yousef ashraf");
  const [exercise, setExercise] = React.useState();
  const [video, setVideo] = React.useState();
  const [subtitle, setSubtitle] = React.useState();
  const [courseProgress, setCourseProgress] = React.useState();
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
            setCourse(response.data);
          })
      );
  }, [rating]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/CheckCourseCorp", {
        id: id,
      })
      .then((response) => {
        setCourse(response.data);
        console.log(response.data);
        setVideo(response.data.video);
      });
    axios
      .post("http://localhost:3000/getProgress", {
        id: id,
        username: cookie.load("username"),
      })
      .then((response) => {
        setCourseProgress(response.data);
        if (response.data == 100) {
          axios
            .post("http://localhost:3000/sendCertificateEmail", {
              id: id,
              username: cookie.load("username"),
            })
            .then((response) => {
              console.log(response.data);
            });
        }
      });
  }, []);

  const videoStart = () => {
    if (subtitle)
      axios
        .post("http://localhost:3000/addProgress", {
          subtitle: subtitle,
          id: id,
          username: cookie.load("username"),
        })
        .then((response) => {
          console.log(response.data);
          axios
            .post("http://localhost:3000/getProgress", {
              id: id,
              username: cookie.load("username"),
            })
            .then((response) => {
              setCourseProgress(response.data);
              if (response.data == 100) {
                axios
                  .post("http://localhost:3000/sendCertificateEmail", {
                    id: id,
                    username: cookie.load("username"),
                  })
                  .then((response) => {
                    console.log(response.data);
                  });
              }
            });
        });
  };

  const downloadPDFFile = (pdfText, pdfName) => {
    let doc = new jsPDF("landscape", "px", "a4", false);
    doc.text(pdfText, 20, 20);
    doc.save(pdfName + ".pdf");
  };

  return (
    <>
      {course ? (
        <div className="div">
          <h1 style={{ fontSize: "2rem" }}>Course Page</h1>
          <h2 style={{ fontSize: "1.4rem" }}>
            {" "}
            {course.title + " Course page"}
          </h2>
          <hr style={{ color: "black" }}></hr>
          <p style={{ fontSize: "1.2rem" }}>
            <img src={course.img} width="250" height="400"></img>
            <br />
            Instructor: Dr.{course.instructor}
            <br />
            Subject : {course.subject}
            <br></br>
            Price : {course.price} $<br></br>
            Total hours : {course.totalHours} hrs <br />
            rating : {course.rating} out of 5 <br></br>
            Summary : {course.summary}.
          </p>

          <CourseProgress progress={courseProgress} />
          <p />
          {courseProgress == 100 ? (
            <Button
              onClick={() => {
                downloadPDFFile(
                  "Congratulations, you have completed " +
                    course.title +
                    " course!",
                  "Course Completion Certificate"
                );
              }}
            >
              Download Certificate
            </Button>
          ) : (
            <> </>
          )}
          <p />
          <h2 style={{ fontSize: "2rem" }}>Course video:</h2>
          <div>
            <ReactPlayer
              style={{
                border: "10px solid black",
                width: "800",
                height: "400",
              }}
              url={video}
              onStart={videoStart}
            ></ReactPlayer>
          </div>
          <Stack
            direction={"course"}
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
              {course.subtitles.map((subtitle, idx) => (
                <>
                  <h2 style={{ fontSize: "1.3rem", backgroundColor: "beige" }}>
                    {"subtitle " + idx}: {subtitle}
                  </h2>

                  <Button
                    onClick={() => {
                      setSubtitle(subtitle);
                      setVideo(course.videos[idx]);
                    }}
                    variant="contained"
                    color="inherit"
                  >
                    view video &dArr;
                  </Button>
                </>
              ))}

              <Stack
                direction={"course"}
                spacing={3}
                style={{ minWidth: "3000px", maxWidth: "3000px" }}
                alignContent={"center"}
                alignSelf={"center"}
                alignItems={"center"}
              >
                {" "}
                <TextField
                  onChange={(e) => setNotes(e.target.value)}
                  id="outlined-multiline-static"
                  multiline
                  courses={10}
                  name="Search"
                  type="text"
                  placeholder="Notes "
                  sx={{ m: 1, width: "100ch" }}
                  size={{ minWidth: "3000px", maxWidth: "3000px" }}
                  style={{ marginLeft: "500px" }}
                />
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => {
                    downloadPDFFile(notes, "My Notes");
                  }}
                >
                  Save notes as a pdf
                </Button>
              </Stack>
            </Box>
          </Stack>

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
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseDetailsc;
