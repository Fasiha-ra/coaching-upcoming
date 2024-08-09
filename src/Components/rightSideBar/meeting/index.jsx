import React from "react";
import { GroupSessionWrap } from "./GroupSession.styles";
import { IoIosArrowForward } from "react-icons/io";
import { MeetingData } from "../../../Constant/Data";
import clock from "../../../assets/profile/time.png";
import calendar from "../../../assets/profile/calendar.png";
const Meeting = () => {
  return (
    <GroupSessionWrap>
      <div className="wrapper">
        <div className="headingWrapper">
          <h5>1:1 Meetings</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        {MeetingData.map((value, index) => (
          <div className="groupHolder" key={index}>
            <h5>
              {value.title} <span>{value.name}</span>
            </h5>
            <div className="timeWrap">
              <div className="time">
                <img src={clock} alt="time" />
                <span>9:00 am</span>
              </div>
              <div className="date">
                <img src={calendar} alt="calendar" />
                <span>17 June 2024</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GroupSessionWrap>
  );
};

export default Meeting;
