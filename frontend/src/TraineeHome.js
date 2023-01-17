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
import { useEffect } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Drawer } from "@material-ui/core";

const TraineeHome = () => {
  const navigate = useNavigate();
  const type = cookie.load("type");
  useEffect(() => {
    if (type != "Trainee") navigate("../UnauthorizedAccess");
  }, []);
  return (
    <>
      <div className="div">
        <a href="/TraineeCourses">View all courses</a>
        <br />
        <a href="/TraineePassword">Change my password</a>
        <br />
        <a href="/TraineeRateInstructor">Rate an instructor</a>
        <br />
        <a href="/TraineeViewCourses">View enrolled courses</a>
        <br></br>

        <a href="/ViewMyReports">View my reports</a>
        <br></br>
        <a href="/TraineeViewWallet">View my balance</a>
        <br></br>
      </div>
    </>
  );
};

export default TraineeHome;
