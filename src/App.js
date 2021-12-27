import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/App.css";
import ManageProfile from "./manageAccount/ManageProfile";
import ManageReservations from "./manageAccount/ManageReservations";
import LandingPage from "./pages/LandingPage";
import OurNavBar from "./components/OurNavBar";

import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Account from "./manageAccount/Account";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
  useEffect(() => {
    setLogged(JSON.parse(localStorage.getItem("isLoggedIn")));
  }, []);
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
          <OurNavBar isLoggedIn={logged} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/findtutor" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="account" element={<Account />}>
              <Route path="/account" element={<ManageProfile />} />
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
