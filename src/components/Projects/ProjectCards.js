import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      {/*  FIXED IMAGE */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "180px",
          objectFit: "cover",
          objectPosition: "top",
          width: "100%"
        }}
      />

      {/* FLEX BODY FOR ALIGNMENT */}
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>

        <Card.Title>{props.title}</Card.Title>

        {/*  FIXED TEXT HEIGHT */}
        <Card.Text
          style={{
            textAlign: "justify",
            flexGrow: 1,
            fontSize: "0.9rem",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {props.description}
        </Card.Text>

        {/*  BUTTONS ALIGNED */}
        <div style={{ marginTop: "auto" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
}

export default ProjectCards;