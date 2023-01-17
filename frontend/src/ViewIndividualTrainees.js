import axios from "axios";
import React, { useEffect } from "react";
import Users from "./Users2";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

const ViewIndividualTrainees = (props) => {
  const [users, setUsers] = React.useState([]);
  const [username, setName] = React.useState("");
  const [password, setPass] = React.useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/getIndividualTrainees")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Users users={users} type="individualTrainee" />
      <p />
    </>
  );
};

export default ViewIndividualTrainees;
