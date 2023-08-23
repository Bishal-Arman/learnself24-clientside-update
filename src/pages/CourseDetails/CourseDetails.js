import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./CourseDetails.css";
import Pdf from "react-to-pdf";

import { FaFilePdf } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const CourseDetails = () => {
  useTitle("courseDetails");
  const courseDetail = useLoaderData();
  const ref = React.createRef();
  const options = {
    orientation: "potrait",
    unit: "in",
    format: [16, 16],
  };
  const {
    id,
    name,
    img,
    price,
    shortDetail,
    studyTime,
    discount,
    discount_status,
  } = courseDetail;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/courses");
  };
  const handlePremium = () => {
    navigate(`/premiumaccess/${id}`);
  };

  const discountPrice = (parseInt(discount) * parseInt(price)) / 100;

  const newPrice = parseInt(price - discountPrice);

  return (
    <div className="detail-course">
      <Container>
        <Row className="justify-content-md-center">
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <h4 className="text-center pb-3  text-success">
              ~~~Course Name~~~
            </h4>
            <h2 className="text-center text-secondary pb-3 ">
              {name}
              <Pdf
                targetRef={ref}
                options={options}
                filename={`${name} course details.pdf`}
              >
                {({ toPdf }) => (
                  <FaFilePdf
                    title="Click for download this documentation"
                    className="pdf-button"
                    onClick={toPdf}
                  >
                    {" "}
                  </FaFilePdf>
                )}
              </Pdf>
            </h2>
          </div>
          <div ref={ref}>
            <div className=" course-img">
              <img className="img-fluid course-img" src={img} alt="" />
            </div>
            <h4 className="pt-3 text-primary">Details about the course</h4>
            <div className="detailCourse">
              <p className="text-danger">{name}</p>
              <p className="short-details">{shortDetail}</p>
              <hr />
              <p>
                Total Training Hour:{" "}
                <span className="text-danger">{studyTime}</span> Hour
              </p>
              {discount_status ? (
                <>
                  <p>
                    Price:{" "}
                    <s>
                      {" "}
                      <span className="text-danger">{price}</span>
                    </s>{" "}
                    Tk
                  </p>
                  <p>
                    Discount Price:{" "}
                    <span className="text-danger">{newPrice}</span> Tk
                  </p>
                </>
              ) : (
                <p>
                  Price: <span className="text-danger">{price}</span> Tk
                </p>
              )}
            </div>

            <div>
              <button
                onClick={handlePremium}
                type="button"
                className="btn btn-primary"
              >
                Get Premium Access
              </button>
            </div>
          </div>
          <button
            onClick={handleBack}
            type="button"
            className="btn btn-outline-success mt-3"
          >
            Back To The All Courses
          </button>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
