import React, { useState, useContext } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { UserContext } from "../App";
import "../style/registration.css";
import Sendconsult from "../components/sendConsult";

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

  const [login_register, setlogin_register] = useState(false);
  return (
    <div>
      <div className="heading-div">
        <h2 className="heading-sendconsult">
          Login Or schedule a consultant meeting{" "}
        </h2>
        <Sendconsult className="btn-consult" />
      </div>
      {login_register ? (
        <div className="Registration-App">
          <Signup
            setlogin_register={setlogin_register}
            login_register={login_register}
          />
          <img src="signup1.png" className="signup-img" alt="sign up"></img>
        </div>
      ) : (
        <div className="login-App">
          <img src="login1.png" className="login-img" alt="login form"></img>
          <Login
            setlogin_register={setlogin_register}
            login_register={login_register}
          />
        </div>
      )}
    </div>
  );
}

export default Registration;
