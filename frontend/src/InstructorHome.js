import * as React from "react";

const InstructorHome = () => {
  return (
    <div className="div">
      <h1 style={{ fontSize: "2rem" }}>Instructor Home Page</h1>

      <br />
      <a href="/ViewMyRatings">View my ratings</a>
      <br />
      <a href="/InstructorCourses">View Courses</a>
      <br />
      <a href="/InstructorViewMyCourse">View my Courses</a>

      <br />
      <a href="/InstructorEditInfo">Edit info</a>
      <br />
      <a href="/InstructorAddCourse">Add a new course</a>

      <br />
    </div>
  );
};

export default InstructorHome;
