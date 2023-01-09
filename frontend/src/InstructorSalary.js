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

const InstructorSalary = () => {
  const [salary, setSalary] = React.useState("");

  axios
    .post("http://localhost:3000/GetSalary", {
      username: cookie.load("username"),
    })
    .then((response) => {
      setSalary(response.data);
      console.log(salary);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data); // => the response payload
      }
    });

  return (
    <div>
      <h2 style={{ fontSize: "2.5rem" }}>Hello Dr.{cookie.load("username")}</h2>
      <h3 style={{ fontSize: "1.5rem" }}>your monthly salary is {salary}$</h3>
    </div>
  );
};

export default InstructorSalary;
