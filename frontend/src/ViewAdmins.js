import axios from "axios";
import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import Users from "./Users2";

const ViewAdmins = (props) => {
  const [users, setUsers] = React.useState([]);
  const [username, setName] = React.useState("");
  const [password, setPass] = React.useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/getAdmins").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const add = () => {
    axios
      .post("http://localhost:3000/addAdmin", {
        username: username,
        password: password,
      })
      .then((response) => {
        alert("Admin Added Successfully!");
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <Button
          onClick={handleClickOpen}
          sx={{
            marginLeft: "5px",
          }}
          variant={"outlined"}
        >
          Add Admin
        </Button>
      </div>
      <Stack alignItems={"end"} direction="column">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Admin</DialogTitle>
          <DialogContent>
            <Stack direction="column" spacing={1} marginTop={0.7}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => setPass(e.target.value)}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={add} href="/admin">
              Add Admin
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
      <Users users={users} />
      <p />
    </>
  );
};

export default ViewAdmins;
