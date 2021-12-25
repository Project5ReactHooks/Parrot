import React from "react";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageProfile from "./manageAccount/ManageProfile";
import ManageReservations from "./manageAccount/ManageReservations";
import LandingPage from "./pages/LandingPage";
import OurNavBar from "./components/OurNavBar";

import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Account from "./manageAccount/Account";

import { useState, createContext } from "react";
import Footer from "./components/Footer";
export const UserContext = createContext();

function App() {
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
    <div className="appContainer">
      <BrowserRouter>
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
          {/* <Registration /> */}
          <OurNavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/findtutor" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="account" element={<Account />}>
              <Route path="test" element={<ManageProfile />} />
              <Route
                path="ManageReservations"
                element={<ManageReservations />}
              />
            </Route>
            <Route path="/login" element={<Registration />} />
          </Routes>
          <Footer />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
