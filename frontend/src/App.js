import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import SignupAdmin from "./SignupAdmin";
import SignupTrainee from "./SignupTrainee";
import SignupCorporateTrainee from "./SignupCorporateTrainee";
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
import CourseWithoutDetails from "./CourseWithoutDetails";
import UnauthorizedAccess from "./UnauthorizedAccess";
import TraineeRateInstructor from "./TraineeRateInstructor";
import InstructorDetails from "./InstructorDetails";
import InstructorForgotPassword from "./InstructorForgotPassword";
import TermsOfUse from "./TermsOfUse";
import TraineeForgottenPasword from "./TraineeForgottenPasword";
import BuyCourse from "./BuyCourse";
import InstructorSalary from "./InstructorSalary";

import AdminForgotPassword from "./AdminForgotPassword";
import RefundPolicy from "./RefundPolicy";
import ResponsiveAppBar from "./ResponsiveAppBar";

import SolveExercise from "./SolveExercise";
function App() {
  return (
    <Router>
      <ResponsiveAppBar />
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
        <Route path="/InstructorSalary" element={<InstructorSalary />} />

        <Route path="/ViewMyRatings" element={<ViewMyRatings />} />
        <Route path="/InstructorEditInfo" element={<InstructorEditInfo />} />
        <Route path="/InstructorAddCourse" element={<InstructorAddCourse />} />
        <Route path="/InstructorPassword" element={<InstructorPassword />} />
        <Route
          path="/InstructorForgotPassword"
          element={<InstructorForgotPassword />}
        />
        <Route
          path="/TraineeForgottenPasword"
          element={<TraineeForgottenPasword />}
        />
        <Route path="/AdminForgotPassword" element={<AdminForgotPassword />} />

        <Route path="/TraineePassword" element={<TraineePassword />} />

        <Route
          path="/TraineeRateInstructor"
          element={<TraineeRateInstructor />}
        />

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
        <Route path="/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />

        <Route path="/BuyCourse" element={<BuyCourse />} />

        <Route path="/courses/:id" element={<CourseWithoutDetails />} />
        <Route path="/courses+/:id" element={<CourseDetails />} />
        <Route path="/exercise/:id" element={<SolveExercise />} />
        <Route path="/instructors/:id" element={<InstructorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
