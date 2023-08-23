import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <Container>
      <Row className="justify-content-md-center ">
        <hr className="mt-5"></hr>
        <Col className="text-center footer">
          <p>
            Trade license: TRAD/DNCC/0746789/2023 - Issued on: 04/11/2023
            16:28:55
          </p>
          <p>Copyright © 2023 LearnSelf24. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
