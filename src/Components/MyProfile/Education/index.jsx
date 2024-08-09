import React from "react";
import { EdcuationWrap } from "./Education.styles";
import educationimg from "../../../assets/profile/education.png";
import { TbPencil } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
const Education = ({ data }) => {
  return (
    <EdcuationWrap>
      <div className="wrapper">
        {data?.map((val, ind) => (
          <div key={ind}>
            <div className="flexwrap">
              <h2>{val?.maintitle}</h2>
              <div className="icons">
                <FaPlus />
                <TbPencil />
              </div>
            </div>
            <div className="flex">
              <figure>
                <img src={educationimg} alt="education" />
              </figure>
              <div className="text">
                <h4>{val?.title || val?.degree}</h4>
                <p>{val?.description}</p>
                <span>{val?.grade}</span>
                <br />
                <span>{val?.yearsOfExperience?.replace("To", "-")}</span>
                <br />
                <span>{val?.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </EdcuationWrap>
  );
};

export default Education;
