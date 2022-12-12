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

const InstructorAddCourse = () => {
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [summary, setSummary] = React.useState("");
  const [totalHours, setTotalHours] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [subject, setSubject] = React.useState("");
  const [instructor, setInstructor] = React.useState("");

  function Submit() {
    axios.post(
      "http://localhost:3000/addCourse",
      {
        title: title,
        subtitle: subtitle,
        price: price,
        summary: summary,
        totalHours: totalHours,
        rating: rating,
        subject: subject,
        instructor: instructor
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }

  const navigate = useNavigate();
  function oNavigate() {
    navigate("/LoginAdmin");
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2} direction={"column"}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="Course title"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setSubtitle(e.target.value)}
          id="outlined-basic"
          label="subtitle"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          id="filled-basic"
          label="price"
          variant="outlined"
        />

        <TextField
          onChange={(e) => setSummary(e.target.value)}
          id="outlined-basic"
          label="summary"
          variant="outlined"
        />
        <Stack spacing={2} direction={"column"}>
          <TextField
            onChange={(e) => setTotalHours(e.target.value)}
            id="outlined-basic"
            label="totalHours"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setRating(e.target.value)}
            id="filled-basic"
            label="rating"
            variant="outlined"
          />

          <TextField
            onChange={(e) => setSubject(e.target.value)}
            id="filled-basic"
            label="subject"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setInstructor(e.target.value)}
            id="filled-basic"
            label="Your name"
            variant="outlined"
          />
        </Stack>

        <Button onClick={Submit} variant="contained">
          Create course
        </Button>
      </Stack>
    </Box>
  );
};

export default InstructorAddCourse;
