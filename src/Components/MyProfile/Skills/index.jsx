import React from "react";
import { SkillsWrap } from "./Skills.styles";
import { TbPencil } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
const Skills = ({formData}) => {
  return (
    <SkillsWrap>
      <div className="wrapper">
        <div className="flexwrap">
          <h2>Skills</h2>
          <div className="icons">
            <FaPlus />
            <TbPencil />
          </div>
        </div>
        <div className="skillsHold">
          <div className="flex">
            <h5>Primary</h5>
            <div className="skill">
             {formData?.primaryTrainingTopic?.map((value, index) => (
              <span key={index}>{value}</span>
            ))}
            </div>
          </div>
          <div className="flex">
            <h5>Secondary</h5>
            <div className="skill">
              {formData?.secondaryTrainingTopic?.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkillsWrap>
  );
};

export default Skills;
