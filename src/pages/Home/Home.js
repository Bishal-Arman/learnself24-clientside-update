import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import HomePageCourses from "../HomePageCourses/HomePageCourses";
import OpinionStd from "../OpinionStd/OpinionStd";
import Services from "../Services/Services";
import StayConnect from "../StayConnect/StayConnect";
import UpcomingCourses from "../UpcomingCourses/UpcomingCourses";
import "./Home.css";

const Home = () => {
  const contents = useLoaderData();
  useTitle("Home");

  return (
    <div className="header">
      <Header></Header>
      <Services></Services>
      <Container>
        <h3 className="text-center our-courses-title ">Our Courses</h3>
        <Row className="justify-content-md-center" xs={1} md={1} lg={3}>
          {contents &&
            contents
              .slice(0, 3)
              .map((content) => (
                <HomePageCourses
                  key={content.id}
                  content={content}
                ></HomePageCourses>
              ))}
        </Row>
        <Link to="/courses" className="text-center mt-5 seeAllCourses">
          <Button type="button" className="btn btn-primary ">
            See All Courses
          </Button>
        </Link>
      </Container>
      <UpcomingCourses></UpcomingCourses>
      <AboutUs></AboutUs>
      <OpinionStd></OpinionStd>
      <StayConnect></StayConnect>
    </div>
  );
};

export default Home;
