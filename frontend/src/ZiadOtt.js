import React from "react";
import { useState } from "react";
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

const ZiadOtt = () => {
   
    const[text,setText] = useState('leo');
    const handleClick = () => {
        setText('messi');
    }
    const navigate = useNavigate();
    function ZiadOttNavigate() {
        navigate('/HomePage');
    }
    
    return (  
        <div>ZiadOtt page
        <br/>
        <p> { text } </p>
        <br/>
        <Button onCLick={ZiadOttNavigate}>CLickMe</Button>
        </div>
    );
}
 
export default ZiadOtt;
