import React from "react";
import about from "../style/About.css";
import Card from "react-bootstrap/Card";
function AboutCard(props) {
  return (
    <div>
      <div className="About-Card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.Img} alt="team member pic" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AboutCard;
