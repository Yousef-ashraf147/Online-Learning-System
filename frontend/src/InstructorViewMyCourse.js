import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
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

const InstructorViewMyCourse = () => {
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
      .post(
        "http://localhost:3000/InstructorMySearch",
        {
          Price: price,
          Subject: subject,
          Rating: rating,
          Search: search,
          Instructor: cookie.load("username"),
        },

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setRows(response.data);
        console.log(rows);
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
        "http://localhost:3000/InstructorMySearch",
        {
          Price: price,
          Subject: subject,
          Rating: rating,
          Search: search,
          Instructor: cookie.load("username"),
        },

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
      <h1 style={{ fontSize: "2rem" }}>
        <b>Your courses</b>
      </h1>
      <nav>
        <TextField
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
        <select name="Price" onChange={(e) => setPrice(e.target.value)}>
          <option value="null" defaultValue="null">
            Specify prices{" "}
          </option>
          <option value="0">Free ("0")</option>
          <option value="5">5</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="100">100</option>
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
              <TableCell align="left">price</TableCell>
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
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.totalHours}</TableCell>
                  <TableCell align="left">{row.rating}</TableCell>
                  <TableCell align="left">{row.instructor}</TableCell>
                  <TableCell align="left">{row.summary}</TableCell>
                  <TableCell align="left">
                    <a href={row.link}> Click here to view Course page</a>
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

export default InstructorViewMyCourse;
