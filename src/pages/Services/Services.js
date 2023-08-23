import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Services.css";
import { FaBookOpen, FaYoutube, FaNetworkWired } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <div
        className="services-cards"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <Container>
          <Row className="justify-content-md-center">
            <h3 className="text-center my-5 services-title">Our Services</h3>
            <Col xs={12} md={12} lg="4">
              <Card className="card rounded">
                <div className="l">
                  <FaYoutube className="icon" size={"3em"}></FaYoutube>
                </div>
                <Card.Body>
                  <Card.Title className="text-center">Super Content</Card.Title>
                  <Card.Text className="px-0 text-center">
                    Recorded videos with amazing technology used by the
                    professional instructors and contents are with peoper
                    subtitle
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg="4">
              <Card className="card rounded">
                <FaNetworkWired className="icon" size={"3em"}></FaNetworkWired>
                <Card.Body>
                  <Card.Title className="text-center">
                    Video Course and Live Class
                  </Card.Title>
                  <Card.Text className="px-0 text-center">
                    Full package consisting of necessary lecture sheets, exams,
                    direct solving session, network buildup and other
                    opportunities
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg="4">
              <Card className="card rounded">
                <FaBookOpen className="icon" size={"3em"}></FaBookOpen>
                <Card.Body>
                  <Card.Title className="text-center">
                    Seminar and Workshops
                  </Card.Title>
                  <Card.Text className="px-0 text-center">
                    Unique presentations, different types of events, productive
                    learning in a short time, certificates and other chances
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Services;
