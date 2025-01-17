import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, imgUrl , link }) => {
  return (
    <Col size={12} sm={6} md={4}>
       <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img className="probject-image" src={imgUrl} alt="img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </Col>
  )
}