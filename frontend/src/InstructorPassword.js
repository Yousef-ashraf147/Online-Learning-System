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

const InstructorPassword = () => {
  const [newpassword, setNewPassword] = React.useState("");
  const [oldpassword, setOldPassword] = React.useState("");

  function Submit() {
    axios.post(
      "http://localhost:3000/ChangePasswordIntsructor",
      {
        username: cookie.load("username"),
        password: newpassword,
        oldPassword: oldpassword,
      },

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(newpassword);
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
          onChange={(e) => setOldPassword(e.target.value)}
          id="outlined-basic"
          label="Old password"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setNewPassword(e.target.value)}
          id="filled-basic"
          label="New Password"
          variant="outlined"
        />

        <Button onClick={Submit} variant="contained">
          Change Password
        </Button>
      </Stack>
    </Box>
  );
};

export default InstructorPassword;
