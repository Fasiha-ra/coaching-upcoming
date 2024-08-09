import React from "react";
import { SessionWrap } from "./Session.styles";
import date from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import Button from "../../Button/index";
import { Sessions } from "../../../Constant/Data";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const UpcomingSession = () => {
  return (
    <SessionWrap>
          <div className="flex">
          <h4>Upcoming 1:1  Sessions</h4>
          <Link to="/session">
            <span className="h4">
              View All
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      {Sessions.map((value, index) => (
        <div className="sessionHolder" key={index}>
          <div className="imgHolder">
            <img src={value.imag} alt="imag" />
          </div>
          <div className="textHolder">
            <h4>{value.title}</h4>
            <div className="nameWrapper">
              <div className="icon">
                <img src={value.icon} alt="" />
              </div>
              <div className="textContent">
                <h4 className="name">{value.name} </h4>
              </div>
            </div>
            <div className="btnWrapper">
              <div className="timeHolder">
                <div className="date h4">
                  <img src={date} alt="date" />
                  17 June
                </div>
                <div className="time h4">
                  <img src={time} alt="time" />
                  9:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </SessionWrap>
  );
};

export default UpcomingSession;
