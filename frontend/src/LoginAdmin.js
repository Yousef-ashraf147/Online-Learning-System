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

const theme = createTheme();

const LoginAdmin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [koko, setkoko] = React.useState("");

  const Submit = async () => {
    const input = { username, password };
    const response = await fetch("http://localhost:3000/loginAdmin", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "content-type": "application/json",
      },
    });
    const json = await response.json();
    console.log(response.status);
    console.log("fgdf");

    if (response.data == 200) {
      console.log("12312");
      oNavigate();
      alert("ay haga");
    }
  };

  const navigate = useNavigate();
  function oNavigate() {
    navigate("/AdminHome");
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

export default LoginAdmin;
