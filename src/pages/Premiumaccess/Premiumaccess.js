import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./Premiumaccess.css";
import Typed from "react-typed";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Premiumaccess = () => {
  useTitle("premiumaccess");
  const { user } = useContext(AuthContext);
  const premiumData = useLoaderData();
  const { img, name } = premiumData;
  const navigate = useNavigate();
  const handleBackCourse = () => {
    navigate("/courses");
  };
  return (
    <div className="detail-course">
      <Container>
        <div className="text-center ">
          <Typed
            className="animated-typing"
            strings={["Congratulations!!!"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          ></Typed>
        </div>
        <h3 className="text-center px-0  title-premium">
          ~~~ You Get Premium access ~~~
        </h3>
        <Row className="justify-content-md-center ">
          <Col xs={12} md={12} lg="6">
            <div
              className="stay-connect"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="img-fluid" src={img} alt="" />
              <h3 className="px-0 my-3">{name}</h3>
            </div>
          </Col>
          <Col xs={12} md={12} lg="6" className="my-auto">
            <div
              className="stay-connect"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4>
                Hello <span className="text-danger">{user.displayName}</span>{" "}
              </h4>
              <p className="px-0">
                Thank you for Ordering the Course. Our Customer Service will
                give you the course as soon as possible.
              </p>
              <div className="text-center ">
                <button
                  onClick={handleBackCourse}
                  type="button"
                  className="btn btn-primary"
                >
                  Back To The All Courses
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Premiumaccess;
