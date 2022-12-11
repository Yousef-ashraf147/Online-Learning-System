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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupadmin" element={<SignupAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
