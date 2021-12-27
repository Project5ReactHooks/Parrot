import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "../style/Signup.css";

function Signup(props) {
  let navigate = useNavigate();

  const {
    setLogged,
    userSignupInformation,
    setUserSignupInformation,
    setSubmitted,
  } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserSignupInformation({
      ...userSignupInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, username, password, repeatPassword, img } = e.target;
    let data = {
      id: Math.random() * 100,
      username: username.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
      img: img.value,
    };
    let updatedData = [];
    updatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    if (
      updatedData.some((v) => v.email === userSignupInformation.email) ||
      password.value !== repeatPassword.value ||
      password.value < 6
    ) {
      alert("email already exist");
    } else {
      updatedData.push(data);
      localStorage.setItem("user", JSON.stringify(updatedData));
      localStorage.setItem("isLoggedIn", JSON.stringify(true));

      localStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: userSignupInformation.email,
          username: userSignupInformation.username,
          id: userSignupInformation.id,
          password: userSignupInformation.password,
          img: userSignupInformation.img,
        })
      );
      setSubmitted(true);
      setLogged(true);
      navigate("/findtutor");
    }
  };

  return (
    <div className="big-form">
      <form className="form-Signup" onSubmit={handleSubmit}>
        <fieldset className="signup-field">
          <legend>Registration</legend>
          <label htmlFor="1">
            Username
            <input
              className="registration-input"
              id="1"
              name="username"
              type="text"
              value={userSignupInformation.username}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="2">
            Email
            <input
              className="registration-input"
              id="2"
              name="email"
              type="email"
              value={userSignupInformation.email}
              onChange={handleChange}
              required
            />
          </label>
          {userSignupInformation.email === "" ? (
            <span style={{ color: "red", fontSize: "10px" }}>
              please enter your email{" "}
            </span>
          ) : null}
          <label htmlFor="3">
            Password
            <input
              className="registration-input"
              id="3"
              name="password"
              type="password"
              value={userSignupInformation.password}
              onChange={handleChange}
              required
            />
          </label>

          {userSignupInformation.password.length < 6 &&
          userSignupInformation.password === "" ? (
            <span style={{ color: "red", fontSize: "10px" }}>
              Please enter your password
            </span>
          ) : null}
          <label htmlFor="repeatPassword">
            Repeat-password
            <input
              className="registration-input"
              id="4"
              name="repeatPassword"
              type="password"
              value={userSignupInformation.repeatPassword}
              onChange={handleChange}
              required
            />
          </label>
          {userSignupInformation.repeatPassword !==
          userSignupInformation.password ? (
            <span style={{ color: "red" }}>not match </span>
          ) : null}

          <label>Image URL</label>
          <input
            className="registration-input"
            id="5"
            name="img"
            type="text"
            value={userSignupInformation.img}
            onChange={handleChange}
          />
          <p className="Login-p">
            Already have an account?
            <span
              onClick={() => props.setlogin_register(!props.login_register)}
              className="login-link"
            >
              Login
            </span>
          </p>
          <button type="submit" className="Signup-btn">
            submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
