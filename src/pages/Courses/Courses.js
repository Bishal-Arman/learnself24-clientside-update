import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ExploreCourses from "../ExploreCourses/ExploreCourses";
import "./Courses.css";
const Courses = () => {
  const courses = useLoaderData();
  useTitle("courses");
  return (
    <div className="courses-container">
      <Container>
        <h3
          className="text-center "
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          Explore Our Courses
        </h3>
        <Row className="justify-content-md-center gy-3" xs={1} md={2} lg={3}>
          {courses.map((course) => (
            <ExploreCourses key={course.id} course={course}></ExploreCourses>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
