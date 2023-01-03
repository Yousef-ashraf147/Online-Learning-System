import * as React from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useState, useEffect } from "react";
const InstructorHome = () => {
  const navigate = useNavigate();
  const type = cookie.load("type");
  useEffect(() => {
    if (type != "Instructor") navigate("../UnauthorizedAccess");
  }, []);
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
      <a href="/InstructorSalary">Check money owed (salary) </a>

      <br />
    </div>
  );
};

export default InstructorHome;
