import Blah from "./CardComponent";
import { useNavigate } from "react-router-dom";

import React, { useEffect } from "react";

import axios from "axios";
import { Typography } from "@mui/material";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";

import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

const Login = () => {
  const [text, setText] = React.useState("Blah");

  const navigate = useNavigate();

  function callBackend() {
    axios
      .post(
        "http://localhost:3000/doSomething",
        { data: "Yousef" },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setText(response.data);
      });

    // axios.get('http://localhost:3000/doSomething').then((response) => {
    //     setText(response.data);
    // })
  }

  function oNavigate() {
    navigate("./signup");
  }

  return (
    <div>
      <Blah />
      <Button onClick={callBackend}>Call Backend</Button>
      <Typography>{text}</Typography>
      <CssVarsProvider>
        <main>
          <ModeToggle />
          <Sheet
            sx={{
              width: 299,
              mx: "auto", // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "sm",
              boxShadow: "md",
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <TextField
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              // pass down to FormLabel as children
              label="Email"
            />
            <TextField
              name="password"
              type="password"
              placeholder="password"
              label="Password"
            />
            <Button sx={{ mt: 1 /* margin top */ }}>Log in</Button>
            <a href="/Signup">Dont have an account</a>
          </Sheet>
        </main>
      </CssVarsProvider>
    </div>
  );
};

export default Login;
