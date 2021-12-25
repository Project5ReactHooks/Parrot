import React, { useContext } from "react";
import { UserContext } from "../App";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const { setLogged, userLoginInformation, setUserLoginInformation } =
    useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserLoginInformation({
      ...userLoginInformation,
      [name]: value,
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let loginUpdatedData = [];
    loginUpdatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    const checkUser = loginUpdatedData.filter(
      (acc) =>
        acc.email === userLoginInformation.loginEmail &&
        acc.password === userLoginInformation.loginPassword
    );

    const check = checkUser.some(
      (acc) =>
        acc.email === userLoginInformation.loginEmail &&
        acc.password === userLoginInformation.loginPassword
    );

    if (check) {
      setLogged(true);
      localStorage.setItem("isLoggedIn",JSON.stringify(true))

      localStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: checkUser[0].email,
          username: checkUser[0].username,
          id:checkUser[0].id,
          password:checkUser[0].password,
          img:checkUser[0].img
          
        })
      );
      navigate("/")
    } else {
      alert("incorrect email or password ");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <fieldset className="Login-field">
          <legend>Login</legend>
          <label>
            Email
            <input
              className="registration-input"
              name="loginEmail"
              type="email"
              value={userLoginInformation.loginEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            password
            <input
              className="registration-input"
              name="loginPassword"
              type="password"
              value={userLoginInformation.loginPassword}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>
          <button className="login-btn">submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
