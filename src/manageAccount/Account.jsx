import React from "react";
import ManageProfile from "./ManageProfile";
import ManageReservations from "./ManageReservations";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/navAccount.css";

const Account = () => {
  return (
    <section className="account">
      <h2 className="accountTitle">My Account</h2>
      <div className="navBarAccount">
        <ul className="navAccount">
          <li>
            <Link to="/account/test" className="linkAccount">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/account/ManageReservations" className="linkAccount">
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
