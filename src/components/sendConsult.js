import { React, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default function Example() {
  const [show, setShow] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleSubmit() {
    Swal.fire({
      icon: "success",
      text: "Your request has been successfully registered ",
    });
  }
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="sendConsult-btn-color"
      >
        Book a consultation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Consultation Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="sendConsult-btn-color"
            disabled={!emailInput.length || !usernameInput.length}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
