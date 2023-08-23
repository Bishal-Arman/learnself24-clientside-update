import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Vission.css";
import vission from "../../imges/vission.webp";

const Vission = () => {
  return (
    <Container className="mx-0 vission-container">
      <Row className="justify-content-md-center ">
        <Col xs={12} md={12} lg="7" className="">
          <div
            className="my-auto description"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <h3>Vission</h3>
            <p>
              It is our dream that LearnSelf24 will be recognized by everyone as
              a reliable and standard online educational institution and service
              provider both in Bangladesh and the international arena. Also, it
              is another big dream of ours to accustom the disabled people to
              online education and make the path of e-learning easier for
              them.LearnSelf24 is committed to be at your side 24 hours a day,
              365 days a year for Academic Education, Skill Development, Job
              preparation or scholarship acquisition through online courses and
              our other online services.
            </p>
          </div>
        </Col>
        <Col
          xs={12}
          md={12}
          lg="5"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <img className="img-fluid" src={vission} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Vission;
