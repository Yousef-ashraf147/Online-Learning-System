import { useParams } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Switch } from "react-router-dom";
import { ReactSession } from "react-client-session";
import UserProfile from "./UserProfile";
import cookie from "react-cookies";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";

const CourseDetails = () => {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [rows, setRows] = React.useState([]);
  const [rating, setRating] = React.useState(0);

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
      });
  }
  useEffect(() => {
    axios
      .post("http://localhost:3000/GetCourse", {
        id: id,
      })
      .then((response) => {
        setRows(response.data);
      });
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
        Rate Course
      </Button>
    </div>
  );
};

export default CourseDetails;
