import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerimg from "../../imges/headerimg.webp";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Container fluid className="header-full-section">
        <Row>
          <Col lg={6} md={6} xs={12} className="my-auto heading ">
            <div
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
            >
              <h2>Welcome Here!!!</h2>
              <h3>Let's learn something new everyday!</h3>
              <p>
                Under the guidance of the best instructors in the country
                through live classes and lecture sheets!
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12} className="header-img">
            <img
              className="img-fluid shadow-4 rounded"
              src={headerimg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
