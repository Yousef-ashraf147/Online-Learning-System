import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function InstructorCoursesAutocomplete(props) {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/getInstructorCourses", {
        instructor: props.instructor,
      })
      .then((response) => {
        const coursesFeteched = [];
        if (response.data != "No courses found") {
          response.data.map((course) => coursesFeteched.push(course.title));
        }
        setCourses(coursesFeteched);
      });
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={courses}
      sx={{ width: 300 }}
      value={props.selectedCourse}
      onChange={(e, newValue) => props.setSelectedCourse(newValue)}
      renderInput={(params) => <TextField {...params} label="Courses" />}
    />
  );
}
