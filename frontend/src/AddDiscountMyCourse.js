import { TextField } from "@mui/material";
import InstructorCoursesAutocomplete from "./InstructorCoursesAutocomplete";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Stack } from "@mui/material";
import cookie from "react-cookies";
import { useEffect } from "react";

const AddDiscountMyCourse = () => {
  const [discount, setDiscount] = React.useState();
  const [discountDuration, setDiscountDuration] = React.useState();
  const [selectedCourse, setSelectedCourse] = React.useState();

  useEffect(() => {
    console.log(cookie.load("username"));
  }, []);

  const discountSubmit = () => {
    axios
      .post("http://localhost:3000/addDiscount", {
        discount: discount,
        course: selectedCourse,
        discountDuration: discountDuration,
      })
      .then((response) => {
        if (response.data == "Success") alert("Discount added!");
      });
  };

  return (
    <div>
      <h1>Add Discount</h1>
      <Stack
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}
        maxWidth={"50%"}
        spacing={3}
      >
        <InstructorCoursesAutocomplete
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          instructor={cookie.load("username")}
        ></InstructorCoursesAutocomplete>

        <TextField
          label={"Discount %"}
          type={"number"}
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        ></TextField>

        <TextField
          label={"Discount Duration (days)"}
          type={"number"}
          value={discountDuration}
          onChange={(e) => setDiscountDuration(e.target.value)}
        ></TextField>

        <Button variant="contained" onClick={discountSubmit}>
          Add Discount
        </Button>
      </Stack>
    </div>
  );
};

export default AddDiscountMyCourse;
