import React, { useState, useEffect } from "react";
import "../style/reservation.css";
import { Link } from "react-router-dom";

const ManageReservations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("usersReservations"));
    setData(data);
  }, []);

  const handelDelete = (reservation ,index) => {
    let test = JSON.parse(localStorage.getItem("usersReservations"));
    let newReservation = test.filter((el) => el !== test[index])
    localStorage.setItem("usersReservations", JSON.stringify(newReservation));

    let test2 = JSON.parse(localStorage.getItem("tutorsBookedDetails"));
    let newReservation2 = test2.filter((el) => el !== test2[index])
    localStorage.setItem("tutorsBookedDetails", JSON.stringify(newReservation2));
    setData(newReservation);
  };
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
          {data.map((reservation,index) => (
            <tr className="reservationTable2">
              <td>{reservation.tutorName}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.tutorPrice}</td>
              <td onClick={() => handelDelete(reservation,index)}>x</td>
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
