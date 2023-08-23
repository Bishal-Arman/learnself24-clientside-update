import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ExploreCourses.css";
const ExploreCourses = ({ course }) => {
  const { id, img, name, price } = course;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/courses/${id}`);
  };
  return (
    <div>
      <Col>
        <Card
          className="shadow-lg course-card bg-white rounded"
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
              <Button onClick={handleClick} variant="outline-success">
                See Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ExploreCourses;
