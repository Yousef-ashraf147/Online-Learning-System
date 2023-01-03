import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";

const InstructorDetails = () => {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [rows, setRows] = React.useState([]);
  const [rating, setRating] = React.useState(0);

  function Submit() {
    axios
      .post(
        "http://localhost:3000/rateInstructor",
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
      .post("http://localhost:3000/GetInstructor", {
        id: id,
      })
      .then((response) => {
        setRows(response.data);
      });
  }, [rating]);

  return (
    <div className="div">
      <h1 style={{ fontSize: "2rem" }}>Instructor Page</h1>

      {rows &&
        rows.map((row) => (
          <div>
            <h2 style={{ fontSize: "1.4rem" }}> Dr. {row.username} Profile</h2>
            <hr style={{ color: "black" }}></hr>
            <p style={{ fontSize: "1.2rem" }}>
              <img src={row.img} width="250" height="400"></img>
              <br />
              rating : {row.rating} out of 5 <br></br>
            </p>
            <p variant="outlined">
              Bio:
              {row.bio}
            </p>
          </div>
        ))}
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <Button onClick={Submit} variant="contained">
        Rate Instructor
      </Button>
    </div>
  );
};

export default InstructorDetails;
