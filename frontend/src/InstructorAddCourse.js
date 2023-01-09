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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SuccessfullyCreated from "./SuccessfullyCreated.js";
import { minWidth } from "@mui/system";

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
  const [questions, setQuestions] = React.useState(["", "", ""]);
  const [choices1, setChoices1] = React.useState(["", "", "", "", ""]);
  const [choices2, setChoices2] = React.useState(["", "", "", "", ""]);
  const [choices3, setChoices3] = React.useState(["", "", "", "", ""]);
  const [correctChoices, setCorrectChoices] = React.useState(["", "", ""]);

  const [subtitle1, setSubtitle1] = React.useState("");
  const [video1, setVideo1] = React.useState("");
  const [subtitle2, setSubtitle2] = React.useState("");
  const [video2, setVideo2] = React.useState("");

  const [checked, setChecked] = React.useState(false);
  const [video, setVideo] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function Submit() {
    console.log(video);
    axios
      .post(
        "http://localhost:3000/addCourse",
        {
          title: title,
          subtitle: subtitle,
          price: price,
          summary: summary,
          totalHours: totalHours,
          questions: questions,
          choices1: choices1,
          choices2: choices2,
          choices3: choices3,
          correctChoices: correctChoices,
          subject: subject,
          instructor: cookie.load("username"),
          checked: checked,
          video: video,
          subtitle1: subtitle1,
          subtitle2: subtitle2,
          video1: video1,
          video2: video2,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(() => {
        setOpen(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
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
      <Stack spacing={25} direction={"row"}>
        <Stack
          spacing={2}
          direction={"column"}
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            id="outlined-basic"
            label="Course title"
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
              <br></br>
              <TextField
                onChange={(e) => setVideo(e.target.value)}
                id="outlined-basic"
                label="Preview Video embed link"
                variant="outlined"
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox defaultunchecked />}
              checked={checked}
              onChange={handleChange}
              label="Accept the user's agreement"
            />
            <a href="/TermsOfUse">View User's Agreement</a>
          </Stack>
          <SuccessfullyCreated open={open} setOpen={setOpen} />
          <Exercise
            questions={questions}
            setQuestions={setQuestions}
            choices1={choices1}
            setChoices1={setChoices1}
            choices2={choices2}
            setChoices2={setChoices2}
            choices3={choices3}
            setChoices3={setChoices3}
            correctChoices={correctChoices}
            setCorrectChoices={setCorrectChoices}
          />

          <Button onClick={Submit} variant="contained">
            Create course
          </Button>
        </Stack>
        <Stack
          spacing={2}
          direction={"column"}
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <TextField
            onChange={(e) => setSubtitle1(e.target.value)}
            id="outlined-basic"
            label="Subtitle 1 title"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setVideo1(e.target.value)}
            id="outlined-basic"
            label="video of subtitle 1"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setSubtitle2(e.target.value)}
            id="filled-basic"
            label="Subtitle 2 title"
            variant="outlined"
            type="text"
          />

          <TextField
            onChange={(e) => setVideo2(e.target.value)}
            id="outlined-basic"
            label="video of subtitle 2"
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default InstructorAddCourse;
