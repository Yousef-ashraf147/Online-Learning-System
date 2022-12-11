import logo from "./logo.svg";
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
import SignupInstructor from "./SignupInstruc";
import HomePage from "./HomePage";
import LoginAdmin from "./LoginAdmin";
import LoginInstrucor from "./LoginIntsructor";
import LoginTrainee from "./LoginTrainee";
import SignupInstruc from "./SignupInstruc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupadmin" element={<SignupAdmin />} />
        <Route path="/signupInstruc" element={<SignupInstruc/>} />

        <Route path="/signuptrainee" element={<SignupTrainee />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginInstructor" element={<LoginInstrucor />} />

        <Route path="/LoginTrainee" element={<LoginTrainee />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
