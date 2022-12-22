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
import InstructorHome from "./InstructorHome";
import ViewMyRatings from "./ViewMyRatings";
import InstructorEditInfo from "./InstructorEditInfo";
import InstructorAddCourse from "./InstructorAddCourse";
import InstructorPassword from "./InstructorPassword";
import TraineePassword from "./TraineePassword";
import InstructorChangeEmail from "./InstructorChangeEmail";
import InstructorChangeBio from "./InstructorChangeBio";
import CreateInstructor from "./CreateInstructor";
import CreateAdmin from "./CreateAdmin";
import CreateCorporateTrainee from "./CreateCorporateTrainee";
import InstructorCourses from "./InstructorCourses";
import InstructorViewMyCourse from "./InstructorViewMyCourse";
import CorpTraineeHome from "./CorpTraineeHome";
import CorpTraineeCourses from "./CorpTraineeCourses";
import CorpTraineePassword from "./CorpTraineePassword";
import CourseDetails from "./CourseDetails";
import UnauthorizedAccess from "./UnauthorizedAccess";

import { Switch } from "react-router-dom";
import { ReactSession } from "react-client-session";
import UserProfile from "./UserProfile";
import styles from "./mystyle.module.css";
import SolveExercise from "./SolveExercise";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupadmin" element={<SignupAdmin />} />
        <Route path="/signupInstruc" element={<SignupInstruc />} />

        <Route path="/signuptrainee" element={<SignupTrainee />} />
        <Route
          path="/SignupCorporateTrainee"
          element={<SignupCorporateTrainee />}
        />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginInstructor" element={<LoginInstructor />} />

        <Route path="/LoginTrainee" element={<LoginTrainee />} />
        <Route path="/UnauthorizedAccess" element={<UnauthorizedAccess />} />
        <Route
          path="/LoginCorporateTrainee"
          element={<LoginCorporateTrainee />}
        />

        <Route path="/CorpTraineeHome" element={<CorpTraineeHome />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/TraineeCourses" element={<TraineeCourses />} />
        <Route path="/InstructorCourses" element={<InstructorCourses />} />

        <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/TraineeHome" element={<TraineeHome />} />
        <Route path="/InstructorHome" element={<InstructorHome />} />

        <Route path="/ViewMyRatings" element={<ViewMyRatings />} />
        <Route path="/InstructorEditInfo" element={<InstructorEditInfo />} />
        <Route path="/InstructorAddCourse" element={<InstructorAddCourse />} />
        <Route path="/InstructorPassword" element={<InstructorPassword />} />
        <Route path="/TraineePassword" element={<TraineePassword />} />
        <Route
          path="/InstructorChangeEmail"
          element={<InstructorChangeEmail />}
        />
        <Route path="/InstructorChangeBio" element={<InstructorChangeBio />} />
        <Route
          path="/InstructorViewMyCourse"
          element={<InstructorViewMyCourse />}
        />
        <Route path="/CreateInstructor" element={<CreateInstructor />} />
        <Route path="/CreateAdmin" element={<CreateAdmin />} />
        <Route
          path="/CreateCorporateTrainee"
          element={<CreateCorporateTrainee />}
        />
        <Route path="/CorpTraineeCourses" element={<CorpTraineeCourses />} />
        <Route path="/CorpTraineePassword" element={<CorpTraineePassword />} />

        <Route path="/Courses/:id" element={<CourseDetails />} />
        <Route path="/exercise/:id" element={<SolveExercise />} />
      </Routes>
    </Router>
  );
}

export default App;
