import React, { useState, useEffect } from "react";
import "../style/reservation.css";
import { Link } from "react-router-dom";

const ManageReservations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("usersReservations"));
    let user = JSON.parse(localStorage.getItem("loggedAccount"))
    let filteredData = data.filter((e)=>  e.user == user.email )
    setData(filteredData);
  }, []);

  
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
