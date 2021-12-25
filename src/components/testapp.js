import React from "react";
import "./style/App.css";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
export const UserContext = createContext();

function App() {
  // All State
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    userimage: "",
  });

  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        logged,
        setLogged,
        userLoginInformation,
        setUserLoginInformation,
        userSignupInformation,
        setUserSignupInformation,
        submitted,
        setSubmitted,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
