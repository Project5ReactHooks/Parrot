import React, { useContext, useEffect, useState } from "react";
import Pick from "./PickDate";
import { BookingContext } from "../pages/Booking";
import { useNavigate } from "react-router-dom";
function BookingCard(props) {
  let navigate = useNavigate();
  const { date, setDate, time, setTime } = useContext(BookingContext);
  const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } =
    props.item;
  const [loggedUser, setLoggedUser] = useState({});
  const [tutorsBookedDetails, setTutorsBookedDetails] = useState([]);
  useEffect(() => {
    localStorage.getItem("tutorsBookedDetails")
      ? setTutorsBookedDetails(
          JSON.parse(localStorage.getItem("tutorsBookedDetails"))
        )
      : localStorage.setItem("tutorsBookedDetails", JSON.stringify([]));
    localStorage.getItem("loggedAccount")
      ? setLoggedUser(JSON.parse(localStorage.getItem("loggedAccount")))
      : setLoggedUser({ email: "guest" });
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
          dateObject.clients.push(loggedUser.email);
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
          clients: [loggedUser.email],
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
          bookedDates: [{ date: date, times: [time], clients: [loggedUser.email] }],
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
            bookedDates: [{ date: date, times: [time], clients: [loggedUser.email] }],
          },
        ];
        localStorage.setItem("tutorsBookedDetails", JSON.stringify(newArrr));
      } else {
        newArrr = [
          {
            tutorName: tutorName,
            tutorId: id,
            tutorPrice: tutorPrice,
            bookedDates: [{ date: date, times: [time], clients: [loggedUser.email] }],
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
