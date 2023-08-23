import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Slide.css";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const Slide = () => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "15px",
    autoPlay: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <h3 className="text-center opinion-title">Opinion from Students</h3>
        <Slider {...settings} className="sliding">
          <Col xs={12}>
            <Card
              className="card-container"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <Card.Body>
                <Card.Title className="opnion">
                  <div>
                    <FaUserCircle className="opinion-icon"></FaUserCircle>
                  </div>
                  <div>
                    <h4 className="opinion-name">FaRman HossAin</h4>
                    <small className="identity">System Developer</small>
                  </div>
                </Card.Title>
                <Card.Text className="px-0 card-text">
                  <FaQuoteLeft className="quote-icon"></FaQuoteLeft>
                  You can be discouraged by failure, or you can learn from it.
                  So go ahead and make mistakes, make all you can. Because,
                  remember that's where you'll find success - on the far side of
                  failure. - Thomas John Watson, Sr.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="card-container"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <Card.Body>
                <Card.Title className="opnion">
                  <div>
                    <FaUserCircle className="opinion-icon"></FaUserCircle>
                  </div>
                  <div>
                    <h4 className="opinion-name">Tanjina Hossain</h4>
                    <small className="identity">Writer</small>
                  </div>
                </Card.Title>
                <Card.Text className="px-0 card-text">
                  <FaQuoteLeft className="quote-icon"></FaQuoteLeft>I hope that
                  in this year to come, you make mistakes. Because if you are
                  making mistakes, then you are making new things, trying new
                  things, learning, changing your world. You're doing thing,
                  you've never done before, you're doing something.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="card-container"
              data-aos="fade-down"
              data-aos-duration="500"
            >
              <Card.Body>
                <Card.Title className="opnion">
                  <div>
                    <FaUserCircle className="opinion-icon"></FaUserCircle>
                  </div>
                  <div>
                    <h4 className="opinion-name">জিকু হায়দার</h4>
                    <small className="identity">ছাত্র</small>
                  </div>
                </Card.Title>
                <Card.Text className="px-0 card-text">
                  <FaQuoteLeft className="quote-icon"></FaQuoteLeft>
                  আলহামদুলিল্লাহ আমার Graphic Design Course টি করে অনেক ভালো
                  লেগেছে তার একমাত্র কারন তটিনী মেডাম। তাহার ক্লাশে বোঝানোর
                  টেকনিক বা ধরন খুবই চমৎকার।আর একটি কথা যদি কেউ এই Course করতে
                  চায় তাহলে আমি অবশ্যই এর কথা বলবো।
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Slider>
      </Row>
    </Container>
  );
};

export default Slide;
