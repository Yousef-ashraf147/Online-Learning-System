import { Navigate, useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import cookie from "react-cookies";
import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "bulma/css/bulma.min.css";

const BuyCourse = () => {
  /*
   {currencySymbol + " "}
                    {Math.round(
                      (row.price * convertCurrency + Number.EPSILON) * 100
                    ) / 100}
  
  */

  function Buy() {
    console.log(
      "id :" +
        id +
        "  instructor:" +
        cookie.load("instructorname") +
        " username:" +
        cookie.load("username")
    );

    if (
      name.length == 0 ||
      number.length == 0 ||
      cvv.length == 0 ||
      expiry.length == 0
    ) {
      alert("Please fill all required fields!");
    } else if (number.length < 16 || number.length > 16) {
      alert("Please review your card number!");
    } else if (cvv.length < 3) {
      alert("The cvv should be 3 numbers atleast!");
    }

    //lw dost register w dafa3t 7otly el id bta3 el course fe (array registered) bta3 el trainee w zawed floos el instructor
    //const id = cookie.load("Courseid");
    //cookie.load("instructorname")
    //cookie.load("username ")
    else {
      axios
        .post(
          "http://localhost:3000/BuyCourse",
          {
            id: id,
            instructor: cookie.load("instructorname"),
            username: cookie.load("username"),
            price: cookie.load("price"),
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
      alert("course succesfully purchased");
      navigate(`/courses+/${id}`);
    }
  }
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [expiry, setExpiry] = React.useState("");

  const id = cookie.load("Courseid");
  console.log("mafrood ta7ty");
  console.log(cookie.load("instructorname"));
  const convertCurrency = cookie.load("convertCurrency");
  const currencySymbol = cookie.load("currencySymbol");
  return (
    <Box
      marginLeft={"810px"}
      alignContent={"center"}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack alignSelf={"center"} spacing={4} direction={"column"}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setNumber(e.target.value)}
          id="filled-basic"
          label="Card number"
          placeholder="0000 0000 0000"
          variant="outlined"
          type={""}
        />

        <TextField
          onChange={(e) => setCvv(e.target.value)}
          id="filled-basic"
          label="Cvv"
          placeholder="000"
          variant="outlined"
          type={"number"}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, 3);
          }}
        />

        <TextField
          onChange={(e) => setExpiry(e.target.value)}
          id="filled-basic"
          label="Expiry data"
          variant="outlined"
          placeholder="MM/YY"
        />
        <h3>price to be paid is {cookie.load("price")}</h3>
        <Button variant="contained" onClick={Buy}>
          Buy Course
        </Button>
      </Stack>
    </Box>
  );
};

export default BuyCourse;
