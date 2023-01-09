import { TextField } from "@mui/material";
import CoursesAutoComplete from "./CoursesAutocomplete";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Stack } from "@mui/material";

const Promotion = () => {
  const [discount, setDiscount] = React.useState();
  const [selectedCourse, setSelectedCourse] = React.useState();

  const discountSubmit = () => {
    axios
      .post("http://localhost:3000/addDiscount", {
        discount: discount,
        course: selectedCourse,
      })
      .then((response) => {
        if (response.data == "Success") alert("Discount added!");
      });
  };

  return (
    <div>
      <h1>Promotion</h1>
      <Stack
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20px" }}
        maxWidth={"50%"}
        spacing={3}
      >
        <CoursesAutoComplete
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        ></CoursesAutoComplete>

        <TextField
          label={"Discount %"}
          type={"number"}
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        ></TextField>

        <Button variant="contained" onClick={discountSubmit}>
          Add Discount
        </Button>
      </Stack>
    </div>
  );
};

export default Promotion;
