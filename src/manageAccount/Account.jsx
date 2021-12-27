import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/navAccount.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Account = () => {
  let navigate = useNavigate();
  const [active , setActive] = useState('ManageProfile')
  useEffect(() => {
    window.scrollTo(0,0)
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if(!isLoggedIn){
      navigate("/login")
    }
  }, []);
  
  const dynamicReservation = () =>{
    setActive('ManageReservation')
  }
  const dynamicProfile = () =>{
    setActive('ManageProfile')
  }
  return (
    <section className="account">
      <h2 className="accountTitle">My Account</h2>
      <div className="navBarAccount">
        <ul className="navAccount">
          <li>
            <Link to="/account" className={"linkAccount " + (active=='ManageProfile'? 'dynamic':"")} onClick={dynamicProfile}>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/account/ManageReservations" className={"linkAccount " +(active=='ManageReservation'? 'dynamic':"")} onClick={dynamicReservation}>
              Reservations
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default Account;
