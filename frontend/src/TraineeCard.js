import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import ViewRefundRequests from "./ViewRefundRequests";

const User = (props) => {
  const user = {
    username: props.username,
    email: props.email,
    firstName: props.firstName,
    lastName: props.lastName,
    courses: props.courses,
  };

  const [open, setOpen] = React.useState(false);

  function handleRefundRequestsClick() {
    setOpen(true);
  }

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
          <Button onClick={handleRefundRequestsClick} variant="contained">
            View Refund Requests
          </Button>
        </CardContent>
        <ViewRefundRequests open={open} setOpen={setOpen} user={user} />
      </div>
    </Card>
  );
};

export default User;
