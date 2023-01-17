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
import styles from "./mystyle.module.css";

function Login() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <div className="a">
          <br />
          <a href="LoginAdmin">Login as an admin</a>
          <br />
          <a href="LoginInstructor">Login as an instructor</a>
          <br />
          <a href="LoginTrainee">Login as a trainee</a>
          <br />
          <a href="LoginCorporateTrainee">Login as a Corporate trainee</a>
          <br />
          <a href="Guest">Continue as a guest</a>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Login;
