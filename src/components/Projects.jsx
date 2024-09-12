import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import { projects } from "../data/constant";
import { Container, Wrapper, CardContainer } from "./ProjectStyle";

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container id="projects">
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of my projects that I had implemented in past
                    few years to improve my technical skills and gain more
                    knowledge.
                  </p>
                  <Wrapper>
                    <CardContainer>
                      {projects.map((project) => (
                        <ProjectCard
                          project={project}
                        />
                      ))}
                    </CardContainer>
                  </Wrapper>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
