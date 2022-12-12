import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";
import SignupAdmin from "./SignupAdmin";
import SignupTrainee from "./SignupTrainee";
import SignupCorporateTrainee from "./SignupCorporateTrainee";
import SignupInstructor from "./SignupInstruc";
import HomePage from "./HomePage";
import LoginAdmin from "./LoginAdmin";
import LoginInstructor from "./LoginInstructor";
import LoginTrainee from "./LoginTrainee";
import LoginCorporateTrainee from "./LoginCorporateTrainee";
import SignupInstruc from "./SignupInstruc";
import AdminHome from "./AdminHome";
import TraineeCourses from "./TraineeCourses";
import TraineeHome from "./TraineeHome";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupadmin" element={<SignupAdmin />} />
        <Route path="/signupInstruc" element={<SignupInstruc />} />

        <Route path="/signuptrainee" element={<SignupTrainee />} />
        <Route path="/SignupCorporateTrainee" element={<SignupCorporateTrainee />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginInstruc" element={<LoginInstructor />} />

        <Route path="/LoginTrainee" element={<LoginTrainee />} />
        <Route path="/LoginCorporateTrainee" element={<LoginCorporateTrainee />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/TraineeCourses" element={<TraineeCourses />} />

        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/TraineeHome" element={<TraineeHome />} />

      </Routes>
    </Router>
  );
}

export default App;
