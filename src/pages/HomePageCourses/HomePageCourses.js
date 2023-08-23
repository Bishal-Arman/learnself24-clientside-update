import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomePageCourses.css";
const HomePageCourses = ({ content }) => {
  const { id, name, img, price } = content;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <Col>
      <Card
        className="shadow-lg border border-light course-card bg-white rounded"
        style={{ height: "430px" }}
      >
        <div className="course-image">
          <Card.Img variant="top" src={img} />
        </div>

        <Card.Body className="">
          <Card.Title>{name}</Card.Title>
          <hr />
          <p className="px-0">
            Price: <span className="text-danger">{price}</span> BDT
          </p>
          <div>
            <Button onClick={handleDetails} variant="outline-success">
              See Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HomePageCourses;
