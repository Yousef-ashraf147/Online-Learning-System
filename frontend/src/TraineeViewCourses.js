import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import cookie from "react-cookies";
import { CardActionArea, CardActions } from "@mui/material";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const TraineeViewCourses = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const [value, setValue] = React.useState();
  const [search, setSearch] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("");
  const [z, setZ] = React.useState([]);

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/TraineeMySearch",
        {
          username: cookie.load("username"),
        },

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setRows(response.data);
        console.log(rows);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, []);
  function zabatny(x) {
    console.log(cookie.load("username"));
    const username = cookie.load("username");
    cookie.save("username", username, { path: `/courses/${x}` });
  }

  return (
    <div>
      <br></br>
      <Stack Stack direction={"row"} spacing={15}>
        {rows &&
          rows.map((row) => (
            <Card
              sx={{
                maxWidth: 200,
                backgroundColor: "rgb(188,188,188)",
                minWidth: "300px",
                maxWidth: "300px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{
                    minHeight: "250px",
                    maxHeight: "250px",
                  }}
                  image={row.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {row.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subject: {row.subject}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {row.rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {row.price}$
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                <a href={`/courses/${row.id}`} onClick={zabatny(row.id)}>
                      Click here to view Course page
                    </a>
                </Button>
              </CardActions>
            </Card>
          ))}
      </Stack>
    </div>
  );
};

export default TraineeViewCourses;
