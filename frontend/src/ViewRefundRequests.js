import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const ViewRefundRequests = (props) => {
  const { username, open, setOpen } = props;
  const [refundRequests, setRefundRequests] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/getRefundRequests", { username: username })
      .then((response) => {
        setRefundRequests(response.data);
        const coursesIDs = [];
        response.data.forEach((refundRequest) => {
          coursesIDs.push(refundRequest.id);
        });
        axios
          .post("http://localhost:3000/getCoursesByID", {
            coursesIDs: coursesIDs,
          })
          .then((response) => {
            setCourses(response.data.reverse());
          });
      });
  }, []);

  function acceptHandle(refundRequest) {
    axios
      .post("http://localhost:3000/acceptRefundRequest", {
        refundRequest: refundRequest,
      })
      .then((response) => {
        axios
          .post("http://localhost:3000/getRefundRequests", {
            username: username,
          })
          .then((response) => {
            setRefundRequests(response.data);
            const coursesIDs = [];
            response.data.forEach((refundRequest) => {
              coursesIDs.push(refundRequest.id);
            });
            axios
              .post("http://localhost:3000/getCoursesByID", {
                coursesIDs: coursesIDs,
              })
              .then((response) => {
                setCourses(response.data.reverse());
              });
          });
      });
  }

  function rejectHandle(refundRequest) {
    axios
      .post("http://localhost:3000/rejectRefundRequest", {
        refundRequest: refundRequest,
      })
      .then((response) => {
        axios
          .post("http://localhost:3000/getRefundRequests", {
            username: username,
          })
          .then((response) => {
            setRefundRequests(response.data);
            const coursesIDs = [];
            response.data.forEach((refundRequest) => {
              coursesIDs.push(refundRequest.id);
            });
            axios
              .post("http://localhost:3000/getCoursesByID", {
                coursesIDs: coursesIDs,
              })
              .then((response) => {
                setCourses(response.data.reverse());
              });
          });
      });
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          sx: {
            height: "50rem",
          },
        }}
      >
        <DialogTitle fontSize={30} id="responsive-dialog-title">
          {"View Refund Requests"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={16} marginLeft={"5%"}>
              <Typography variant="h5">User</Typography>
              <Typography variant="h5">Course</Typography>
            </Stack>

            {refundRequests &&
              refundRequests.map((refundRequest, idx) => (
                <>
                  <span className="horizontal-line-thin"></span>
                  <Stack
                    direction="row"
                    spacing={7}
                    style={{ marginLeft: "6%" }}
                  >
                    <Typography variant="h6" marginTop={"2%"}>
                      {refundRequest.username}
                    </Typography>

                    <Typography variant="h6" marginTop={"2%"}>
                      {refundRequest.id}
                    </Typography>

                    {courses[idx] ? (
                      <Typography variant="h6" marginTop={"2%"}>
                        {courses[idx].title}
                      </Typography>
                    ) : (
                      <></>
                    )}

                    <div style={{ display: "flex", marginLeft: "auto" }}>
                      <Button
                        onClick={() => acceptHandle(refundRequest)}
                        color="success"
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => rejectHandle(refundRequest)}
                        color="error"
                      >
                        Reject
                      </Button>
                    </div>
                  </Stack>
                </>
              ))}
          </Stack>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewRefundRequests;
