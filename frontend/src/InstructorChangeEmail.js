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

const InstructorChangeEmail = () => {
  const [username, setUsername] = React.useState("");
  const [newemail, setNewEmail] = React.useState("");
  const [oldemail, setOldEmail] = React.useState("");

  function Submit() {
    axios
      .post(
        "http://localhost:3000/ChangeEmailIntsructor",
        {
          username: username,
          email: newemail,
          oldemail: oldemail,
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
    console.log(newemail);
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
          label="UserName"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setOldEmail(e.target.value)}
          id="outlined-basic"
          label="Old email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setNewEmail(e.target.value)}
          id="filled-basic"
          label="New email"
          variant="outlined"
        />

        <Button onClick={Submit} variant="contained">
          Change Email
        </Button>
      </Stack>
    </Box>
  );
};

export default InstructorChangeEmail;
