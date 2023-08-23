import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import react from "../../imges/react.png";
import crafts from "../../imges/crafts.jpg";
import vue from "../../imges/vue.jpg";
import "./UpcomingCourses.css";

const UpcomingCourses = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <Container className="mt-5">
        <Row className="justify-content-md-center upcoming-courses">
          <h3 className="text-center my-5 services-title">Upcoming Courses</h3>
          <Col xs={12} md={12} lg="4">
            <img title="comming soon" src={react} alt="" />
          </Col>
          <Col xs={12} md={12} lg="4">
            <img title="comming soon" src={crafts} alt="" />
          </Col>
          <Col xs={12} md={12} lg="4">
            <img title="comming soon" src={vue} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingCourses;
