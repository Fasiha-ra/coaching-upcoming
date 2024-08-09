import React from "react";
import Button from "../../Button";
import { IoIosArrowForward } from "react-icons/io";
import { AnalysisWrapper } from "./analysis.styles";
import KycLevel from "../../KycLevel";
import course from "../../../assets/home/course.png";
const bar = [
  {
    title: "Talent Management",
    bgColor: "#58A7E0",
    percent: "80",
  },
  {
    title: "Women Empowerment",
    bgColor: "#F0AC28",
    percent: "50",
  },
  {
    title: "Advisory Program",
    bgColor: "#FFA5A5",
    percent: "80",
  },
  {
    title: "Employee Growth",
    bgColor: "#8FE2FF",
    percent: "35",
  },
  {
    title: "Personal Development",
    bgColor: "#F0D028",
    percent: "70",
  },
];
const card = [
    {
        hours: "10 Hrs",
        title:"Total Session Duration ",
        img:course
    },
    {
        hours: "1000",
        title:"Total Number Of Sessions",
        img:course
    },
    {
        hours: "1000",
        title:"Total Number Of Sessions",
        img:course
    },
]
const AnalysisSession = () => {
  return (
    <AnalysisWrapper>
      <div className="flex">
        <div className="text">
          <strong>Session Analysis</strong>
          <h4>20 Jan 2024</h4>
        </div>
        <div className="filterWrap">
          <Button>Today</Button>
          <Button type="white">
            Start Date - End Date <IoIosArrowForward />
          </Button>
        </div>
      </div>
      <div className="wrap">
        <div className="progress">
          <div className="heading">
            <span>Sessions</span>
            <span>
              Total <br /> enrolment
            </span>
          </div>
          {bar.map((val, ind) => (
            <div className="progressWrap" key={ind}>
              <h4 className="title textWrap ">{val.title}</h4>
              <KycLevel level={val.percent} bg={val.bgColor} />
              <h4 className="textWrap">{val.percent}</h4>
            </div>
          ))}
        </div>
        <div className="hours">
         {card.map((val, ind)=>(
             <div className="card" key={ind}>
             <div className="cardHead">
               <strong>{val.hours}</strong>
               <img src={val.img} alt="course" />
             </div>
             <h4>{val.title}</h4>
           </div>
         ))}
        </div>
      </div>
    </AnalysisWrapper>
  );
};

export default AnalysisSession;
