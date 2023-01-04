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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import cookie from "react-cookies";

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
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function zabatny(x) {
  console.log(cookie.load("username"));
  const username = cookie.load("username");
  const type = cookie.load("type");
  cookie.save("username", username, { path: `/courses/${x}` });
  cookie.save("type", type, { path: `/courses/${x}` });
}

const CorpTraineeCourses = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const [value, setValue] = React.useState();
  const [search, setSearch] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [z, setZ] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/traineeHome")
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, []);

  function Search() {
    console.log(subject + " " + price + " " + search + " " + rating);
    axios
      .post(
        "http://localhost:3000/InstructorSearch",
        { Price: 100, Subject: subject, Rating: rating, Search: search },

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setRows(response.data);
        console.log(rows);
      });
  }

  const x = "/SignupTrainee";

  return (
    <>
      <nav>
        <input
          name="Search"
          type="search"
          placeholder="Search by course title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select name="Subject" onChange={(e) => setSubject(e.target.value)}>
          <option value="null" defaultValue="null">
            select a subject
          </option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
        </select>
        <select name="Rating" onChange={(e) => setRating(e.target.value)}>
          <option value="null" defaultValue="null">
            select a rating
          </option>
          <option value="1">&#128946;</option>
          <option value="2">&#128946; &#128946;</option>
          <option value="3">&#128946; &#128946; &#128946;</option>
          <option value="4"> &#128946; &#128946; &#128946; &#128946;</option>
          <option value="5">
            &#128946; &#128946; &#128946; &#128946; &#128946;
          </option>
        </select>

        <Button onClick={Search} variant="light">
          Search
        </Button>
      </nav>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">title</TableCell>
              <TableCell align="left">subject</TableCell>

              <TableCell align="left">totalHours</TableCell>
              <TableCell align="left">rating</TableCell>
              <TableCell align="left">instructor</TableCell>
              <TableCell align="left">summary</TableCell>
              <TableCell align="left">link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.subject}</TableCell>

                  <TableCell align="left">{row.totalHours}</TableCell>
                  <TableCell align="left">{row.rating}</TableCell>
                  <TableCell align="left">{row.instructor}</TableCell>
                  <TableCell align="left">{row.summary}</TableCell>
                  <TableCell align="left">
                    <a href={`/courses/${row.id}`} onClick={zabatny(row.id)}>
                      {" "}
                      Click here to view Course page
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <a href={x}>click here</a>
    </>
  );
};

export default CorpTraineeCourses;
