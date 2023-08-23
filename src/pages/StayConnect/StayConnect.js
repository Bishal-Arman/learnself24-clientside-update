import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import stayconnect from "../../imges/stayconnect.webp";
import "./StayConnect.css";
const StayConnect = () => {
  return (
    <div>
      <Container className="stay-connect-container">
        <Row className="justify-content-md-center ">
          <Col xs={12} md={12} lg="7">
            <div
              className="stay-connect"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="img-fluid" src={stayconnect} alt="" />
            </div>
          </Col>
          <Col
            xs={12}
            md={12}
            lg="5"
            className="my-auto stay-connect-description"
          >
            <div data-aos="fade-down" data-aos-duration="2000">
              <h4 className="mt-5">Stay connected with us for all updates</h4>
              <h6 className="enrollnow">
                To see details in any of our courses at your convenience,
                register for free
              </h6>
              <div className="btn-login">
                <Link to="/login">
                  <Button variant="danger" className="mt-3 ">
                    LOGIN
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StayConnect;
