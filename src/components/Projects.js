import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ecommerce from "../assessts/images/e-commerce.png";
import crypto from "../assessts/images/crypto.png";
import modernui from "../assessts/images/modernReact.png";
import apple from "../assessts/images/apple.png";
import botcamp from "../assessts/images/bootcamp.png";
import travel from "../assessts/images/spaceTravel.png"
import colorSharp2 from "../assessts/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
          title: "E-commerce Website",
          imgUrl: ecommerce,
          link:"https://github.com/drishti1920/ecommerce-candle"
        },
        {
          title: "Crypto Tracker",
          imgUrl: crypto,
          link:"https://github.com/drishti1920/crypto-tracker"
        },
        {
          title: "Modern React UI",
          imgUrl: modernui,
          link: "https://github.com/drishti1920/modern-react-ui?tab=readme-ov-file"
        },
        {
          title: "Apple Website UI Clone",
          imgUrl: apple,
          link:"https://github.com/drishti1920/apple.github.io"
        },
        {
          title: "Space Travel",
          imgUrl: travel,
          link:"https://github.com/drishti1920/space-travel"
        },
        {
          title: "Bootcamp Website Design",
          imgUrl: botcamp,
          link:"https://github.com/drishti1920/Bootcamp-Website-Design"
        },
      ];

      
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects