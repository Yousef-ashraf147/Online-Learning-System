import * as React from "react";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useEffect } from "react";

function AdminHome() {
  const navigate = useNavigate();
  const type = cookie.load("type");
  useEffect(() => {
    if (type != "admin") navigate("../UnauthorizedAccess");
  }, []);

  return (
    <div>
      <br />
      <a href="viewadmins">View Admins</a>
      <br />
      <br />
      <a href="viewinstructors">View Instructors</a>
      <br />
      <br />
      <a href="viewindividualtrainees">View Individual Trainees</a>
      <br />
      <br />
      <a href="viewcorporatetrainees">View Corporate Trainees</a>
      <br />
      <br />
      <a href="AddDiscount">Add Course Promotion</a>
    </div>
  );
}
export default AdminHome;
