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
import "bulma/css/bulma.min.css";
import cookie from "react-cookies";
import { ReactSession } from "react-client-session";

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

const theme = createTheme();

const LoginTrainee = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  ReactSession.setStoreType("cookie");

  function Submit() {
    const input = { username, password };
    axios
      .post(
        "http://localhost:3000/loginTrainee",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data == "200") {
          cookie.save("username", username, { path: "/" });
          cookie.save("type", "Trainee", { path: "/" });

          navigate("/TraineeHome");
          alert("Successful Login!");
        } else if (username.length == 0 || password.length == 0) {
          alert("The password or the username is empty");
        } else {
          alert("The password or the username is Wrong");
        }
      });
    console.log(cookie.load("username"));
    axios
      .post("http://localhost:3000/TraineeGetCountry", {
        username: cookie.load("username"),
      })
      .then((response) => {
        setCountry(response.data);
        console.log(country);
        cookie.save("country", country, { path: "/" });
        console.log(cookie.load("country"));
      });
  }

  const navigate = useNavigate();

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
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="filled-basic"
          label="Password"
          variant="outlined"
        />

        <Button onClick={Submit} variant="contained">
          Login
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginTrainee;
