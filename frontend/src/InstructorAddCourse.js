import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Exercise from "./Exercise";
import cookie from "react-cookies";
import FormControl from "@mui/material/FormControl";
import SuccessfullyCreated from "./SuccessfullyCreated.js";

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
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState(["", "", "", "", ""]);
  const [choices, setChoices] = React.useState([['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', ''], ['', '', '' , '', '']]);
  const [correctChoices, setCorrectChoices] = React.useState(["", "", "", "", ""]);
  
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function Submit() {
    axios
      .post(
        "http://localhost:3000/addCourse",
        {
          title: title,
          subtitle: subtitle,
          price: price,
          summary: summary,
          totalHours: totalHours,

          subject: subject,
          instructor: cookie.load("username"),
          checked: checked,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(() => {
        setOpen(true);
      });
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
          type="number"
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
            type="number"
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
              label="Subject"
              onChange={(e) => setSubject(e.target.value)}
            >
              <MenuItem value={"Math"}>Math</MenuItem>
              <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
              <MenuItem value={"Biology"}>Biology</MenuItem>
              <MenuItem value={"Physics"}>Physics</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={<Checkbox defaultunchecked />}
            checked={checked}
            onChange={handleChange}
            label="Accept the user's agreement"
          />
        </Stack>
        <SuccessfullyCreated open={open} setOpen={setOpen} />
        <Exercise questions={questions} setQuestions={setQuestions} choices={choices} setChoices={setChoices} correctChoices={correctChoices} setCorrectChoices={setCorrectChoices}/>
        <Button onClick={Submit} variant="contained">
          Create course
        </Button>
      </Stack>
    </Box>
  );
};

export default InstructorAddCourse;
