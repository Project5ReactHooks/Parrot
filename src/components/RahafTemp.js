import React, { useContext, useEffect, useState } from 'react';
import Pick from './PickDate';
import { BookingContext } from '../pages/Booking';
function BookingCard(props) {
    const { date, setDate } = useContext(BookingContext);
    const { time, setTime } = useContext(BookingContext);
    const { id, tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } = props.item;

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
                    dates: date, times: time,
                    tutorPrices: tutorPrice, tutorName: tutorName, id: id
                };
                localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
            } else {
                storageBooking.push({
                    dates: date, times: time,
                    tutorPrices: tutorPrice, tutorName: tutorName, id: id
                });
                localStorage.setItem("bookingDetails", JSON.stringify(storageBooking));
            }
        } else
            localStorage.setItem('bookingDetails', JSON.stringify([{
                dates: date, times: time,
                tutorPrices: tutorPrice, tutorName: tutorName, id: id
            }]));


    };
    return (
        <div className='Booking-Card'>
            <div className='booking-card'>
                <div className='booking-img'><img src={tutorImg} alt='femail-tutor' /></div>
                <div className='booking-tutor-desc'>
                    <h4>{tutorName}</h4>
                    <p>{tutorExp} years of experience</p>
                    <p>{tutorDes}</p></div>

                <div className='booking-price'>
                    <h3>${tutorPrice}</h3>
                    <p>per hour</p>
                    <Pick tutorName={tutorName} tutorPrice={tutorPrice} handleBooking={handleBooking} />
                </div>

            </div>
        </div>
    )
}

export default BookingCard
// //////////////////////////////////////////////////////////////////////////////BookingCard


import { Modal, Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { BookingContext } from '../pages/Booking';
function MyVerticallyCenteredModal(props) {
    const { date, setDate } = useContext(BookingContext);
    const { time, setTime } = useContext(BookingContext);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book 1-hour with the tutor {props.tutorName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='date-time'>
                <label htmlFor='date'>Pick Date :</label>
                <input type='date' id='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} required />
                <label htmlFor='time'>Pick Time :</label>
                <select id='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value='01:00-02:00'>01:00-02:00</option>
                    <option value='02:00-03:00'>02:00-03:00</option>
                    <option value='03:00-04:00'>03:00-04:00</option>
                    <option value='04:00-05:00'>04:00-05:00</option>
                    <option value='05:00-06:00'>04:00-05:00</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleBooking}>Confirm Booking</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Pick(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Book Now
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                tutorName={props.tutorName}
                tutorPrice={props.tutorPrice}
                handleBooking={props.handleBooking}
            />
        </>
    );
}


// //////////////////////////////////////////////////////////PickDate

import React, { useState, createContext } from 'react'
import '../style/Booking.css'
import BookingCardInfo from '../components/BookingCardInfo'
export const BookingContext = createContext();

function Booking() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    return (
        <div>

            <div className='booking-head'>
                <h1>Online English tutors &amp; teachers for private lessons </h1>
                <p>Looking for an online English tutor? Parrot is the leading online
                    language learning platform worldwide. You can choose from 11798
                    English </p>
                <p>teachers with an average rating of 4.88 out of 5 stars
                    given by 69417 customers.</p>
                <img src='hero.png' />
            </div>
            <BookingContext.Provider value={{ date, setDate, time, setTime }}>
                <BookingCardInfo />
            </BookingContext.Provider>
        </div>
    )
}

export default Booking
// ///////////////////////////////////////Booking

