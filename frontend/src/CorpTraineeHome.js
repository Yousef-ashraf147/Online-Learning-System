import * as React from "react";

const CorpTraineeHome = () => {
  return (
    <>
      <h1 style={{ fontSize: "2rem" }}>Corporate Trainee Home</h1>
      <br></br>
      <div className="div">
        <div className="div">
          <a href="/CorpTraineeCourses">View all courses</a>
          <br />
          <a href="/CorpTraineePassword">Change my password</a>
          <br />
          <a href="/ViewMyreports">view my reports</a>
        </div>
      </div>
    </>
  );
};

export default CorpTraineeHome;
