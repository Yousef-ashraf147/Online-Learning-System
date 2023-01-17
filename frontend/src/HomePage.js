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
import cookie from "react-cookies";
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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea, CardActions } from "@mui/material";

function HomePage() {
  cookie.save("username", "", { path: "/" });
  cookie.save("type", "", { path: "/" });
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
  console.log(cookie.load("type"));
  console.log(cookie.load("username"));

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
      <br />
      <Stack Stack direction={"row"} spacing={15}>
        {rows &&
          rows.map((row) => (
            <Card
              sx={{
                maxWidth: 200,
                backgroundColor: "rgb(188,188,188)",
                minWidth: "300px",
                maxWidth: "300px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{
                    minHeight: "250px",
                    maxHeight: "250px",
                  }}
                  image={row.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subject: {row.subject}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {row.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {row.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={`/courses/${row.id}`}>
                    Click here to view Course page
                  </a>
                </Button>
              </CardActions>
            </Card>
          ))}
      </Stack>
    </>
  );
}

export default HomePage;
