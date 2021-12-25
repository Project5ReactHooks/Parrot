import React, { useContext } from "react";
import { UserContext } from "../App";
import "../style/Signup.css";

function Signup() {
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

    const { email, username, password, repeatPassword } = e.target;
    let data = {
      id: Math.random() * 100,
      username: username.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
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

      sessionStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: userSignupInformation.email,
          username: userSignupInformation.username,
        })
      );
      setSubmitted(true);
      setLogged(true);
    }
  };

  return (
    <div className="big-form">
      <form className="form-Signup" onSubmit={handleSubmit}>
        <fieldset className="signup-field">
          <legend>Registration</legend>
          <label htmlFor="username">
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
          <label htmlFor="email">
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
            <span style={{ color: "red" }}>please enter your email </span>
          ) : null}
          <label htmlFor="password">
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
            <span style={{ color: "red" }}>Please enter your password</span>
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

          <button type="submit" className="Signup-btn">
            submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
