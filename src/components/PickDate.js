import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BookingContext } from "../pages/Booking";
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
      <Modal.Body className="date-time">
        <label htmlFor="date">Pick Date :</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="time">Pick Time :</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <>
            <option value="01:00-02:00">01:00-02:00</option>
            <option value="02:00-03:00">02:00-03:00</option>
            <option value="03:00-04:00">03:00-04:00</option>
            <option value="04:00-05:00">04:00-05:00</option>
            <option value="05:00-06:00">05:00-06:00</option>
          </>
        </select>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleBooking} disabled={date == "empty"}>
          {localStorage.getItem("loggedAccount")
            ? "Confirm Booking"
            : "Login To Book"}
        </Button>
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
