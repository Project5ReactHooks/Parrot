import React, { useContext, useEffect, useState } from "react";
import Pick from "./PickDate";
import { BookingContext } from "../pages/Booking";
function BookingCard(props) {
  const { date, setDate, time, setTime } = useContext(BookingContext);
  const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } =
    props.item;
  const [tutorsBookedDetails, setTutorsBookedDetails] = useState([]);
  useEffect(() => {
    localStorage.getItem("tutorsBookedDetails")
      ? setTutorsBookedDetails(
          JSON.parse(localStorage.getItem("tutorsBookedDetails"))
        )
      : localStorage.setItem("tutorsBookedDetails", JSON.stringify([]));
  }, []);
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
        console.log(newStateArr);
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
      let newArrr;
      if (localStorage.getItem("tutorsBookedDetails")) {
        let storageData = JSON.parse(
          localStorage.getItem("tutorsBookedDetails")
        );
        newArrr = [
          ...storageData,
          {
            tutorName: tutorName,
            tutorId: id,
            tutorPrice: tutorPrice,
            bookedDates: [{ date: date, times: [time] }],
          },
        ];
        localStorage.setItem("tutorsBookedDetails", JSON.stringify(newArrr));
      } else {
        newArrr = [
          {
            tutorName: tutorName,
            tutorId: id,
            tutorPrice: tutorPrice,
            bookedDates: [{ date: date, times: [time] }],
          },
        ];
        localStorage.setItem("tutorsBookedDetails", JSON.stringify(newArrr));
      }
    }
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
