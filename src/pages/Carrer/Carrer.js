import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Carrer.css";
import card1 from "../../imges/card1.png";
import card2 from "../../imges/card2.png";
import card3 from "../../imges/card3.jpg";
import card4 from "../../imges/card4.jpg";
import card5 from "../../imges/card5.jpg";
import card6 from "../../imges/card6.png";
import card7 from "../../imges/card7.jpg";
import card8 from "../../imges/card8.jpg";
import card9 from "../../imges/card9.jpg";
import card10 from "../../imges/card10.jpg";
import card11 from "../../imges/card11.jpg";
import card12 from "../../imges/card12.jpg";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const Carrer = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  useTitle("Carrer");

  const handleMousehover1 = () => {
    setIsFlipped1(!isFlipped1);
  };
  const handleMousehover2 = () => {
    setIsFlipped2(!isFlipped2);
  };
  const handleMousehover3 = () => {
    setIsFlipped3(!isFlipped3);
  };
  const handleMousehover4 = () => {
    setIsFlipped4(!isFlipped4);
  };
  const handleMousehover5 = () => {
    setIsFlipped5(!isFlipped5);
  };
  const handleMousehover6 = () => {
    setIsFlipped6(!isFlipped6);
  };

  return (
    <div>
      <div className="carrer"></div>
      <Container className="carrer-contianer">
        <Row
          className="justify-content-md-center carrer-img "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h3 className="text-center mb-3 carrer-title">Our Values</h3>
          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover1}>
                <img src={card1} alt="" />
              </div>

              <div onMouseLeave={handleMousehover1}>
                <img src={card2} alt="" />
              </div>
            </ReactCardFlip>
          </Col>
          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover2}>
                <img src={card3} alt="" />
              </div>

              <div onMouseLeave={handleMousehover2}>
                <img src={card4} alt="" />
              </div>
            </ReactCardFlip>
          </Col>
          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover3}>
                <img src={card5} alt="" />
              </div>

              <div onMouseLeave={handleMousehover3}>
                <img src={card6} alt="" />
              </div>
            </ReactCardFlip>
          </Col>

          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped4} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover4}>
                <img src={card7} alt="" />
              </div>

              <div onMouseLeave={handleMousehover4}>
                <img src={card8} alt="" />
              </div>
            </ReactCardFlip>
          </Col>
          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped5} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover5}>
                <img src={card9} alt="" />
              </div>

              <div onMouseLeave={handleMousehover5}>
                <img src={card10} alt="" />
              </div>
            </ReactCardFlip>
          </Col>
          <Col xs={12} md={6} lg="4" className="pt-5">
            <ReactCardFlip isFlipped={isFlipped6} flipDirection="horizontal">
              <div onMouseEnter={handleMousehover6}>
                <img src={card11} alt="" />
              </div>

              <div onMouseLeave={handleMousehover6}>
                <img src={card12} alt="" />
              </div>
            </ReactCardFlip>
          </Col>
          <Col className="contact">
            <div className="contact-details">
              <div>
                <h4 className="text-center pt-3 text-success">
                  Keep up with us at
                </h4>
                <div className="contactUs text-muted">
                  <p>Email:bishalarman43@gmail.com</p>
                  <p>Mobile:01784950443</p>
                  <p>Website: www.learnself24.com</p>
                  <p className="pb-3">
                    House-984, Flat-7A, Road-16, Baitul Aman Housing Socity,
                    Adabar, Dhaka
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carrer;
