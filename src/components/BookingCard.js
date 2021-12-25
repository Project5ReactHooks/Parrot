import React, { useContext, useEffect, useState } from "react";
import Pick from "./PickDate";
import { BookingContext } from "../pages/Booking";
function BookingCard(props) {
  const { date, setDate } = useContext(BookingContext);
  const { time, setTime } = useContext(BookingContext);
  const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } =
    props.item;

  const handleBooking = () => {
    // if (!localStorage.getItem('bookingDetails')) {
    //     localStorage.setItem('bookingDetails', JSON.stringify([{
    //         dates: date, times: time,
    //         tutorPrices: tutorPrice, tutorName: tutorName, id: id
    //     }]));
    // }
    // else {
    //     let storage = JSON.parse(localStorage.getItem("bookingDetails"));
    //     storage.push({
    //         dates: date, times: time,
    //         tutorPrices: tutorPrice, tutorName: tutorName, id: id
    //     });
    //     localStorage.setItem("bookingDetails", JSON.stringify(storage));
    // }

    let storageBooking = JSON.parse(localStorage.getItem("bookingDetails"));
    let found = false,
      index;
    if (storageBooking) {
      for (let i = 0; i < storageBooking.length; i++) {
        found = false;
        if (storageBooking[i].id === id) {
          found = true;
          index = i;
          break;
        }
      }
      if (found) {
        storageBooking[index] = {
          dates: date,
          times: time,
          tutorPrices: tutorPrice,
          tutorName: tutorName,
          id: id,
        };
        localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
      } else {
        storageBooking.push({
          dates: date,
          times: time,
          tutorPrices: tutorPrice,
          tutorName: tutorName,
          id: id,
        });
        localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
      }
    } else
      localStorage.setItem(
        "bookingDetails",
        JSON.stringify([
          {
            dates: date,
            times: time,
            tutorPrices: tutorPrice,
            tutorName: tutorName,
            id: id,
          },
        ])
      );
  };
  return (
    <div className="Booking-Card">
      <div className="booking-card">
        <div className="booking-img">
          <img src={tutorImg} alt="femail-tutor" />
        </div>
        <div className="booking-tutor-desc">
          <h4>{tutorName}</h4>
          <p>{tutorExp} years of experience</p>
          <p>{tutorDes}</p>
        </div>

        <div className="booking-price">
          <h3>${tutorPrice}</h3>
          <p>per hour</p>
          <Pick
            tutorName={tutorName}
            tutorPrice={tutorPrice}
            handleBooking={handleBooking}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
