import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pagenotfound from "../../imges/pagenotfound.png";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleBackCourses = () => {
    navigate("/courses");
  };
  const handleBackHome = () => {
    navigate("/home");
  };
  return (
    <>
      <div
        className="pageNotFound "
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div className="pageError">
          <img
            style={{ width: "500px" }}
            className="img-fluid rounded "
            src={pagenotfound}
            alt=""
          />
        </div>
        <div className="text-center backCourse-btn">
          <Button variant="outline-danger " onClick={handleBackCourses}>
            Back To The Courses
          </Button>
        </div>
        <div className="text-center mt-3 backHome-btn ">
          <Button variant="outline-primary px-3" onClick={handleBackHome}>
            Back To The Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
