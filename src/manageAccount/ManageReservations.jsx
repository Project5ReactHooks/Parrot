import React, { useState, useEffect } from "react";
import "../style/reservation.css";
import { Link,useNavigate } from "react-router-dom";

const ManageReservations = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    let isLoggedIn = localStorage.getItem("isLoggedIn")
      ? JSON.parse(localStorage.getItem("isLoggedIn"))
      : "";
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    let data = JSON.parse(localStorage.getItem("usersReservations"));
    let user = JSON.parse(localStorage.getItem("loggedAccount"));
    let filteredData = data.filter((e) => e.user === user.email);
    setData(filteredData);
  }, [navigate]);

  return data?.length ? (
    <section>
      <table className="reservationLeft">
        <thead className="reservationTable">
          <th>Name</th>
          <th>Booking Date</th>
          <th>Booking Time</th>
          <th>Total Price</th>
          <th></th>
        </thead>
        <tbody>
          {data.map((reservation) => (
            <tr className="reservationTable2">
              <td>{reservation.tutorName}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.tutorPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ) : (
    <div className="reservationBack">
      <h5>You didn't pick any lesson</h5>
      <Link to="/findtutor">
        <button className="backBtn">Back to reserve</button>
      </Link>
    </div>
  );
};

export default ManageReservations;
