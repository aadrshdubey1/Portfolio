import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadrsh dubey </span>
            from <span className="purple"> Itarsi, India.</span>
            <br />
            I am currently a final year student of jai narain college of technology bhopal.
            <br />
            I have completed my schooling from M.G.M school itarsi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aadrsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
