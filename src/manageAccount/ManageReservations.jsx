import React, { useState, useEffect } from "react";
import "../style/reservation.css";
import { Link } from "react-router-dom";

const ManageReservations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("test"));
    setData(data);
  }, []);

  const handelDelete = (reservation) => {
    let test = JSON.parse(localStorage.getItem("test"));
    let nweReservation = test.filter((el) => el.id !== reservation.id);
    setData(nweReservation);
    localStorage.setItem("test", JSON.stringify(nweReservation));
  };
  return data?.length ? (
    <section>
      <table className="reservationLeft">
        <thead className="reservationTable">
          <th>Name</th>
          <th>Booking Date</th>
          <th>Total Price</th>
          <th></th>
        </thead>
        <tbody>
          {data.map((reservation) => (
            <tr className="reservationTable2">
              <td>{reservation.name}</td>
              <td>{reservation.date}</td>
              <td>{reservation.price}</td>
              <td onClick={() => handelDelete(reservation)}>x</td>
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
