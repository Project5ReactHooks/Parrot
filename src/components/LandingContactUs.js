import React from "react";
import "../style/LandingContactUs.css";
import Swal from "sweetalert2";
function LandingContactUs() {
  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank You For Contacting Us",
      text: "We Will Respond As Soon As Possible",
      icon: "success",
      confirmButtonText: "Close",
    });
  };
  return (
    <div className="landingContactUsComp">
      <div className="mainContainer">
        <div className="contactSecTitle">
          <h2 className="contactTitle">Get In Touch</h2>
        </div>
        <div className="contactContainer">
          <div className="imgContainer">
            <img src="contact.svg" className="contactImage" alt="contact us image" />
          </div>
          <div className="contactFormContainer">
            <form onSubmit={(e) => handleSubmitContactForm(e)}>
              <div className="inputArea">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Phone" required />
                <input
                  type="text"
                  placeholder="Address"
                  className="fullLine"
                  required
                />
                <textarea
                  className="fullLine"
                  name="message"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingContactUs;
