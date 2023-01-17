import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Button1 from "@mui/joy/Button";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import cookie from "react-cookies";
//import { Box } from "@mui/system";
import { colors, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import TextField from "@mui/material/TextField";
import { jsPDF } from "jspdf";
import CourseProgress from "./CourseProgress";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
//import InputLabel from "@mui/material/InputLabel";
//import Select from "@mui/material/Select";

import BoxT from "@mui/joy/Box";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

//import { FormControl } from "@mui/material";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
//import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AdminViewReports = () => {
  const [rows, setRows] = React.useState([]);

  function mark(x) {
    console.log(x);
    axios.post(
      "http://localhost:3000/MarkAsResolved",
      { title: x },

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    alert("Course marked as resolved");
  }
  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/getAllReports",

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setRows(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload
        }
      });
  }, []);
  return (
    <div>
      <Stack>
        {rows ? (
          rows &&
          rows.map((row) => (
            <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
              {row.resolved == false ? (
                <Stack direction={"row"} spacing={2}>
                  <h6>
                    Status :
                    <b>
                      <i style={{ color: "red" }}>Pending</i>
                    </b>
                  </h6>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={() => mark(row.title)}
                  >
                    Mark as resolved
                  </Button>
                </Stack>
              ) : (
                <h6>
                  Status :
                  <b>
                    <i style={{ color: "green" }}>Resolved</i>
                  </b>
                </h6>
              )}
              <Stack direction={"row"} spacing={2}>
                <AccountCircleIcon></AccountCircleIcon>
                <h4>{row.username}</h4>
                <h5>
                  type: <i style={{ color: "red" }}>{row.type}</i>
                </h5>
              </Stack>
              <Stack direction={"row"} spacing={0.5}>
                <h8>Title:</h8>
                <i>
                  <h5>{row.title}</h5>
                </i>
              </Stack>
              <b>
                <h7>{row.description}</h7>
              </b>
            </Box>
          ))
        ) : (
          <></>
        )}
      </Stack>
    </div>
  );
};

export default AdminViewReports;
