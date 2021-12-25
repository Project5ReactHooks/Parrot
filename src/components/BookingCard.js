import React, { useContext, useEffect, useState } from "react";
import Pick from "./PickDate";
import { BookingContext } from "../pages/Booking";
function BookingCard(props) {
  const { date, setDate, time, setTime } = useContext(BookingContext);
  const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } =
    props.item;
  let tutorsBookedDetailsFromStorage = localStorage.getItem(
    "tutorsBookedDetails"
  )
    ? JSON.parse(localStorage.getItem("tutorsBookedDetails"))
    : [];
  const [tutorsBookedDetails, setTutorsBookedDetails] = useState(
    tutorsBookedDetailsFromStorage
  );
  const handleBooking = () => {
    let exist = false;
    let existIndex = null;
    let existDateIndex = null;
    let existTimeIndex = null;

    for (let i = 0; i < tutorsBookedDetails.length; i++) {
      if (tutorsBookedDetails[i].tutorName === tutorName) {
        exist = true;
        existIndex = i;
      }
    }
    if (exist) {
      let existDate = false;
      tutorsBookedDetails[existIndex].bookedDates.forEach((item, index) => {
        if (item.date == date) {
          existDate = true;
          existDateIndex = index;
        }
      });
      if (existDate) {
        let existTime = false;
        let dateObject =
          tutorsBookedDetails[existIndex].bookedDates[existDateIndex];
        dateObject.times.forEach((item, index) => {
          if (item == time) {
            existTime = true;
            existTimeIndex = index;
          }
        });
        if (!existTime) {
          dateObject.times.push(time);
          setTutorsBookedDetails(tutorsBookedDetails);
          localStorage.setItem(
            "tutorsBookedDetails",
            JSON.stringify(tutorsBookedDetails)
          );
          alert("Booked Successfully!!");
        } else {
          alert("Choose another time");
        }
      }
      if (!existDate) {
        let newStateArr = tutorsBookedDetails;
        newStateArr[existIndex].bookedDates.push({
          date: date,
          times: [time],
        });
        setTutorsBookedDetails(newStateArr);
        localStorage.setItem(
          "tutorsBookedDetails",
          JSON.stringify(newStateArr)
        );
      }
    }
    if (!exist) {
      setTutorsBookedDetails([
        ...tutorsBookedDetails,
        {
          tutorName: tutorName,
          tutorId: id,
          tutorPrice: tutorPrice,
          bookedDates: [{ date: date, times: [time] }],
        },
      ]);
    }

    // let storageBooking = JSON.parse(localStorage.getItem("bookingDetails"));
    // let found = false,
    //   index;
    // if (storageBooking) {
    //   for (let i = 0; i < storageBooking.length; i++) {
    //     found = false;
    //     if (storageBooking[i].id === id) {
    //       if (
    //         storageBooking[i].dates == date &&
    //         storageBooking[i].times == time
    //       ) {
    //         alert("The Tutor not available at this time");
    //       }
    //       found = true;
    //       index = i;
    //       break;
    //     }
    //   }
    //   if (found) {
    //     storageBooking[index] = {
    //       dates: date,
    //       times: time,
    //       tutorPrices: tutorPrice,
    //       tutorName: tutorName,
    //       id: id,
    //     };
    //     localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
    //   } else {
    //     storageBooking.push({
    //       dates: date,
    //       times: time,
    //       tutorPrices: tutorPrice,
    //       tutorName: tutorName,
    //       id: id,
    //     });
    //     localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
    //   }
    // } else
    //   localStorage.setItem(
    //     "bookingDetails",
    //     JSON.stringify([
    //       {
    //         dates: date,
    //         times: time,
    //         tutorPrices: tutorPrice,
    //         tutorName: tutorName,
    //         id: id,
    //       },
    //     ])
    //   );
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
