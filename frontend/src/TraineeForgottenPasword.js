import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TraineeForgottenPassword = () => {
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const Submit = async () => {
    axios
      .post("http://localhost:3000/SendEmailTrainee", {
        email: email,
      })
      .then((response) => {
        if (response.data == "200") {
          alert("Email sent");

          navigate("/Login");
        } else if (response.data == "400") {
          alert(
            "Email not found. please make sure of the email you are writing"
          );
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  };

  return (
    <>
      <h1 style={{ fontSize: "2rem" }}>Password forgotten page</h1>

      <Stack
        maxWidth={"450px"}
        paddingTop={"50px"}
        marginLeft={"auto"}
        marginRight={"auto"}
        direction="column"
        spacing={5}
      >
        <h2>Please enter your email to get an email with your password</h2>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Your email"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        ></TextField>
        <Button onClick={Submit} style={{ width: 150 }} variant="contained">
          Send Email
        </Button>
      </Stack>
    </>
  );
};

export default TraineeForgottenPassword;
