import React, { useState } from "react";
import styled from "styled-components";
import { education } from "../data/constant.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "../assets/img/school.svg";
import { ReactComponent as CollegeIcon } from "../assets/img/work.svg";
import { IoSchool } from "react-icons/io5";
import { LiaUniversitySolid } from "react-icons/lia";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #b8b8b8;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const Index = () => {
  let iconStyles = { background: "black" };
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Container className="education" id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <VerticalTimeline lineColor="#52525b">
          {education.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                contentArrowStyle={{ borderRight: "none" }}
                contentStyle={{
                  background: "#09090b",
                  width: "43%",
                  color: "#9333ea",
                }}
              >
                <h5 className="vertical-timeline-element-title">
                  {element.school}
                </h5>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.grade}
                </h5>
                <p id="description">{element.desc}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Index;
