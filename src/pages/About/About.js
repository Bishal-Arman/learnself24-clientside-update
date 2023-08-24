import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";
import light from "../../imges/light.webp";
import mission from "../../imges/mission.webp";

import Vission from "../Vission/Vission";
import "./About.css";
const About = () => {
  useTitle("About us");
  return (
    <>
      <div className="detail-about">
        <h3>About us-</h3>
        <p>
          LearnSelf24 is an online based education platform and service provider
          in Bangladesh,LearnSelf24 is working for the people of all ages to
          learn anything according to their needs and desires in an online based
          education system.We are continuously uploading various online courses
          on the website to make the academic learning, new skill development or
          skill enhancement process more vibrant and fun.
        </p>
        <p>
          We are also working to include the disabled in the online education
          system. Also we have 2 running projects: Online Application Service
          and E-Profile Building for online platforms.
        </p>
      </div>
      <div className="img-light">
        <img className="img-fluid shadow-4 rounded light" src={light} alt="" />
      </div>
      <Container className="mission-container">
        <Row className="justify-content-md-center ">
          <Col xs={12} md={12} lg="5" className="mission-img">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img className="img-fluid" src={mission} alt="" />
            </div>
          </Col>
          <Col xs={12} md={12} lg="7" className="my-auto">
            <div
              className="mission-description"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <h3>Mission</h3>
              <p>
                Real objective of LearnSelf24 is to provide all the services you
                need to succeed in your professional life including Education,
                Skill development or personal growth online for 365 days a
                year.We aim to provide demandable and up-to-date Pre-recorded
                courses, Online live courses (Online Batches), E-profile
                building for online platforms and Online Application
                Services.Apart from this, LearnSelf24's mission is to provide
                courses and overall accessibility for the disabled in the online
                education system.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Vission></Vission>
    </>
  );
};

export default About;
