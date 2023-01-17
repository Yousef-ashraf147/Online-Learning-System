import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Stack } from "@mui/material";
import axios from "axios";
import ViewRefundRequests from "./ViewRefundRequests";

const User = (props) => {
  const user = {
    username: props.username,
    email: props.email,
    firstName: props.firstName,
    lastName: props.lastName,
    courses: props.courses,
  };

  function refundCourse() {
    axios
      .put("http://localhost:3000/refundCourseToTrainee", {
        username: user.username,
      })
      .then((response) => {
        alert(response.data);
      });
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ marginLeft: "5px", width: "22rem", height: "20rem" }}>
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.username}
          </Typography>
          <Typography variant="body2">
            {user.firstName + " " + user.lastName}
          </Typography>
          <p />
          <Typography variant="body2" color="grey">
            {user.email}
          </Typography>
          <p />
          {user.courses &&
            user.courses.map((course) => (
              <Typography variant="body2" color="grey">
                {course.courseTitle}
                <p />
              </Typography>
            ))}
          <div style={{ marginTop: "50px" }}>
            <Stack
              marginLeft={"15px"}
              marginTop={"20px"}
              spacing={"20px"}
              direction={"row"}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  handleClickOpen();
                }}
              >
                View Requests
              </Button>
              <Button variant="outlined" color="error">
                Ban User
              </Button>
            </Stack>
          </div>
        </CardContent>
      </div>
      <div>
        <ViewRefundRequests
          username={user.username}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </Card>
  );
};

export default User;
