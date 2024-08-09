import React from "react";
import { AboutWrap } from "./About.styles";
import { TbPencil } from "react-icons/tb";
const About = ({ formData }) => {
  return (
    <AboutWrap>
      <div className="wrapper">
        <div className="flex">
          <h2>About Coach</h2>
          <TbPencil />
        </div>
        <p>{formData?.bio}</p>
      </div>
    </AboutWrap>
  );
};

export default About;
