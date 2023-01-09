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

const InstructorChangeBio = () => {
  /*const [rows, setRows] = React.useState([]);
    const [value, setValue] = React.useState();
  
    useEffect(() => {
      axios.get("http://localhost:3000/traineeHome").then((response) => {
        setRows(response.data);
      });
    }, []);*/
  const [bio, setBio] = React.useState("");

  axios
    .post("http://localhost:3000/GetBio", {
      username: cookie.load("username"),
    })
    .then((response) => {
      setBio(response.data);
      console.log(bio);
    });

  const username = cookie.load("username");
  const [newBio, setNewBio] = React.useState("");
  const [oldBio, setOldBio] = React.useState("");

  // console.log(username);

  function Submit() {
    axios
      .post(
        "http://localhost:3000/ChangeBioIntsructor",
        {
          username: username,
          Bio: newBio,
          oldBio: oldBio,
        },

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }

  //need a session to get the old bio to show it to be able to change it
  //need a session to get the old bio to show it to be able to change it
  //need a session to get the old bio to show it to be able to change it
  //need a session to get the old bio to show it to be able to change it

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction={"column"}>
          <input
            onChange={(e) => setNewBio(e.target.value)}
            style={{ width: "500px", height: "150px" }}
            name="mucho texto"
            type="text"
            label="Your Bio"
            defaultValue={bio}
          ></input>

          <Button onClick={Submit} variant="contained">
            Change Bio
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default InstructorChangeBio;
