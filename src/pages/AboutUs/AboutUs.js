import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutus from "../../imges/aboutus.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <h3 className="text-center  aboutus-title">About Us</h3>
          <Col lg={7} md={12} xs={12} className="my-auto about-description">
            <p>
              LearnSelf24 is an online based education platform and service
              provider in Bangladesh,LearnSelf24 is working for the people of
              all ages to learn anything according to their needs and desires in
              an online based education system.We are continuously uploading
              various online courses on the website to make the academic
              learning, new skill development or skill enhancement process more
              vibrant and fun.
            </p>
            <p>
              Real objective of BookShelf 365 is to provide all the services you
              need to succeed in your professional life including Education,
              Skill development or personal growth online for 365 days a year.We
              aim to provide demandable and up-to-date Pre-recorded courses,
              Online live courses (Online Batches), E-profile building for
              online platforms and Online Application Services.Apart from this,
              LearnSelf24's mission is to provide courses and overall
              accessibility for the disabled in the online education system.
              <br />
              <Link to="/about">
                <Button className="mt-3 details-btn" variant="outline-primary">
                  Click for Details
                </Button>
              </Link>
            </p>
          </Col>
          <Col lg={5} md={12} xs={12} className="aboutus-img">
            <img className="img-fluid shadow-4 rounded" src={aboutus} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
