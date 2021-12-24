import React, { useContext } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { UserContext } from "../App";
import "../style/registration.css";

function Registration() {
  const {
    logged,
    setLogged,
    userLoginInformation,
    setUserLoginInformation,
    userSignupInformation,
    setUserSignupInformation,
    submitted,
    setSubmitted,
  } = useContext(UserContext);

  return (
    <div className="Registration-App">
      <Signup />
      <Login />
    </div>
  );
}

export default Registration;
