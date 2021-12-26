import React, { useContext, useEffect, useState } from "react";
import Pick from "./PickDate";
import { BookingContext } from "../pages/Booking";
function BookingCard(props) {
  const { date, setDate, time, setTime } = useContext(BookingContext);
  const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } =
    props.item;
  const [loggedUser, setLoggedUser] = useState({});
  const [test, setTest] = useState([]);
  const [tutorsBookedDetails, setTutorsBookedDetails] = useState([]);
  const [usersReservations, setUsersReservations] = useState([]);
  useEffect(() => {
    localStorage.getItem("tutorsBookedDetails")
      ? setTutorsBookedDetails(
          JSON.parse(localStorage.getItem("tutorsBookedDetails"))
        )
      : localStorage.setItem("tutorsBookedDetails", JSON.stringify([]));

    // localStorage.getItem("usersReservations")
    //   ? setUsersReservations(
    //       JSON.parse(localStorage.getItem("usersReservations"))
    //     )
    //   : localStorage.setItem(
    //       "usersReservations",
    //       JSON.stringify(usersReservations)
    //     );
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
          let testStorageData = localStorage.getItem("usersReservations")
            ? JSON.parse(localStorage.getItem("usersReservations"))
            : [];
          localStorage.setItem(
            "tutorsBookedDetails",
            JSON.stringify(tutorsBookedDetails)
          );
          let newUsersReservationsArr = [...testStorageData];
          newUsersReservationsArr.push({
            user: loggedUser.email,
            tutorName: tutorName,
            tutorPrice: tutorPrice,
            date: date,
            time: time,
          });
          setUsersReservations(newUsersReservationsArr);

          localStorage.setItem(
            "usersReservations",
            JSON.stringify(newUsersReservationsArr)
          );

          alert("Booked Successfully!!");
          // let testStorageData = localStorage.getItem("test")
          //   ? JSON.parse(localStorage.getItem("test"))
          //   : [];
          // setTest([...testStorageData, "test"]);
          // localStorage.setItem(
          //   "test",
          //   JSON.stringify([...testStorageData, "test"])
          // );
          // console.log([...testStorageData, "test"]);
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
        localStorage.setItem(
          "tutorsBookedDetails",
          JSON.stringify(newStateArr)
        );
        let testStorageData = localStorage.getItem("usersReservations")
          ? JSON.parse(localStorage.getItem("usersReservations"))
          : [];
        let newUsersReservationsArr = [...testStorageData];
        newUsersReservationsArr.push({
          user: loggedUser.email,
          tutorName: tutorName,
          tutorPrice: tutorPrice,
          date: date,
          time: time,
        });
        setUsersReservations(newUsersReservationsArr);

        localStorage.setItem(
          "usersReservations",
          JSON.stringify(newUsersReservationsArr)
        );

        alert("added successfully");
        // let testStorageData = localStorage.getItem("test")
        //   ? JSON.parse(localStorage.getItem("test"))
        //   : [];
        // setTest([...testStorageData, "test"]);
        // localStorage.setItem(
        //   "test",
        //   JSON.stringify([...testStorageData, "test"])
        // );
        // console.log([...testStorageData, "test"]);
      }
    }
    if (!exist) {
      setTutorsBookedDetails([
        ...tutorsBookedDetails,
        {
          tutorName: tutorName,
          tutorId: id,
          tutorPrice: tutorPrice,
          bookedDates: [
            { date: date, times: [time], clients: [loggedUser.email] },
          ],
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
            bookedDates: [
              { date: date, times: [time], clients: [loggedUser.email] },
            ],
          },
        ];

        localStorage.setItem("tutorsBookedDetails", JSON.stringify(newArrr));
        let testStorageData = localStorage.getItem("usersReservations")
          ? JSON.parse(localStorage.getItem("usersReservations"))
          : [];
        let newUsersReservationsArr = [...testStorageData];
        newUsersReservationsArr.push({
          user: loggedUser.email,
          tutorName: tutorName,
          tutorPrice: tutorPrice,
          date: date,
          time: time,
        });
        setUsersReservations(newUsersReservationsArr);

        localStorage.setItem(
          "usersReservations",
          JSON.stringify(newUsersReservationsArr)
        );
      } else {
        newArrr = [
          {
            tutorName: tutorName,
            tutorId: id,
            tutorPrice: tutorPrice,
            bookedDates: [
              { date: date, times: [time], clients: [loggedUser.email] },
            ],
          },
        ];
        localStorage.setItem("tutorsBookedDetails", JSON.stringify(newArrr));
        let testStorageData = localStorage.getItem("usersReservations")
          ? JSON.parse(localStorage.getItem("usersReservations"))
          : [];
        let newUsersReservationsArr = [...testStorageData];
        newUsersReservationsArr.push({
          user: loggedUser.email,
          tutorName: tutorName,
          tutorPrice: tutorPrice,
          date: date,
          time: time,
        });
        setUsersReservations(newUsersReservationsArr);

        localStorage.setItem(
          "usersReservations",
          JSON.stringify(newUsersReservationsArr)
        );
      }

      alert("added successfully");
      let testStorageData = localStorage.getItem("test")
        ? JSON.parse(localStorage.getItem("test"))
        : [];
      setTest([...testStorageData, "test"]);
      localStorage.setItem(
        "test",
        JSON.stringify([...testStorageData, "test"])
      );
      console.log([...testStorageData, "test"]);
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
            tutorsBookedDetails={tutorsBookedDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
