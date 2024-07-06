import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assessts/images/header-img.svg";

const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Drishti`} <span className="wrap">web developer</span>
            </h1>
            <p>
              I'm a passionate Web Developer with a knack for creating dynamic
              and user-friendly web applications. With a strong foundation in
              the MERN stack (MongoDB, Express.js, React, Node.js), I excel in
              developing responsive and efficient web solutions.
            </p>
            <button onClick={() => console.log("clicked")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
