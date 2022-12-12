import * as React from "react";

const InstructorHome = () => {
  return (
    <div>
      <h1>Instructor Home Page</h1>

      <br />
      <a href="/ViewMyRatings">View my ratings</a>

      <br />
      <a href="/InstructorEditInfo">Edit info</a>
      <br />
      <a href="/InstructorAddCourse">Add a new course</a>

      <br />
      <a href="/InstructorPassword">Change my password</a>
    </div>
  );
};

export default InstructorHome;
