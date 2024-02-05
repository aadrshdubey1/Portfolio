import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Inotebook"
              description=" This is the full stack project using nodejs,expreesjs,reactjs,mongoodb.
               in this project user will we able to create there account and after login they will add their notes ,update their notes and delete the notes.
              if the user is new then they have to created their account first .only login user seen their own notes.all the notes will we saved on the server
              side"
              ghLink="https://github.com/aadrshdubey1/inotebook"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News-app"
              description=" I created a newsapp with the help of this app user will we able to see a defferent kind of news.
               i used reactjs and newsapi in this project.
              "
              ghLink="https://github.com/aadrshdubey1/spotify"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online-job-portal"
              description=" In this project recruiter post the job and also after posting the job recruiter have the right to edit job details.
               in admin site ,the admin give the approval after approval students will able to see the jobs.
              in students end ,students have to create the account after that they have to login now they will see all the latest jobs. Students and recruiter
              also have right to change their password.
              "
              ghLink="https://github.com/aadrshdubey1/Online--Job-Portal"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spotify Clone"
              description="This music player will have all the features found in a typical music 
              player.
               you will be able to add play pause and seek song that have been 
              added."
              ghLink="https://github.com/aadrshdubey1/spotify"
              
            />
          </Col>

        

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
