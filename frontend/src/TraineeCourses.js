import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
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
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
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

const InstructorCourses = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const [value, setValue] = React.useState();
  const [search, setSearch] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [z, setZ] = React.useState([]);
  const convertCurrency = cookie.load("convertCurrency");
  const currencySymbol = cookie.load("currencySymbol");
  const type = cookie.load("type");
  useEffect(() => {
    if (type != "Trainee") navigate("../UnauthorizedAccess");
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
        { Price: price, Subject: subject, Rating: rating, Search: search },

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
  }
  function zabatny(x) {
    console.log(cookie.load("username"));
    const username = cookie.load("username");
    cookie.save("username", username, { path: `/courses/${x}` });
  }

  const x = "/SignupTrainee";

  return (
    <>
      <Stack direction={"row"} paddingLeft={70} paddingTop={5} spacing={3}>
        <TextField
          name="Search"
          type="search"
          placeholder="Search by course title"
          onChange={(e) => setSearch(e.target.value)}
          size={"small"}
        />
        <FormControl fullWidth style={{ maxWidth: "200px" }}>
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={subject}
            label="Subject"
            onChange={(e) => setSubject(e.target.value)}
          >
            <MenuItem value={"Math"}>Math</MenuItem>
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Science"}>Science</MenuItem>
            <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
            <MenuItem value={"Physics"}>Physics</MenuItem>
            <MenuItem value={"Biology"}>Biology</MenuItem>
          </Select>
        </FormControl>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Slider
          min={0}
          max={200}
          defaultValue={100}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ maxWidth: "200px" }}
          onChange={(e) => setPrice(e.target.value.toString())}
        />
        <Button onClick={Search} variant="light">
          Search
        </Button>
      </Stack>
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
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.subject}</TableCell>
                  <TableCell align="left">
                    {row.discount ? (
                      <>
                        <Typography variant="subtitle2">
                          {currencySymbol +
                            " " +
                            Math.round(
                              (row.price * convertCurrency + Number.EPSILON) *
                                100 *
                                row.discount
                            ) /
                              100}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          style={{ textDecoration: "line-through" }}
                        >
                          {currencySymbol +
                            " " +
                            Math.round(
                              (row.price * convertCurrency + Number.EPSILON) *
                                100
                            ) /
                              100}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="subtitle2">
                        {currencySymbol +
                          " " +
                          Math.round(
                            (row.price * convertCurrency + Number.EPSILON) * 100
                          ) /
                            100}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="left">{row.totalHours}</TableCell>
                  <TableCell align="left">{row.rating}</TableCell>
                  <TableCell align="left">{row.instructor}</TableCell>
                  <TableCell align="left">{row.summary}</TableCell>
                  <TableCell align="left">
                    <a href={`/courses/${row.id}`} onClick={zabatny(row.id)}>
                      Click here to view Course page
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default InstructorCourses;
