import React, { useState,useEffect } from "react";
import '../style/reservation.css'

const ManageReservations = () => {
    const [data , setData]=useState([])
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("test"));
        setData(data);
      }, []);

   const handelDelete =  (reservation) =>{
       let test = JSON.parse(localStorage.getItem('test'))
    let nweReservation = test.filter(
        (el) => el.id !== reservation.id
    )
    setData(nweReservation)
    localStorage.setItem('test',JSON.stringify(nweReservation))
    }
  return (
      
    <section>
      <table className="reservationLeft">
      
      <thead className="reservationTable">
        <th>Name</th>
        <th>Booking Date</th>
        <th>Total Price</th>
        <th></th>
        </thead>
        <tbody >
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
  );
};

export default ManageReservations;
