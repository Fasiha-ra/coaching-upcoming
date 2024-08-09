import React from "react";
import { SessionWrapper } from "./Session.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { employeeSession } from "../../../Constant/Data";
import { BsPencil } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { serverDomain } from "../../../Constant/serverDomain";

const Session = ({ title, session }) => {
  const navigate = useNavigate();
  return (
    <SessionWrapper>
      <div className="wrapper">
        <div className="flex">
          <h4>{title}</h4>
          <Link to="/session">
            <span className="h4">
              View All
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
        <div className="cardWrap">
          <div className="cardHold">
            {session?.map((val, ind) => (
              <div className="card sessonCard" key={ind}>
                <figure>
                  <img src={`${serverDomain}/${val.image}`} alt="sessionss" />
                </figure>
                <div className="iconBtn">
                  <span
                    onClick={() =>
                      navigate("/editSession", { state: { session: val } })
                    }
                  >
                    <BsPencil />
                  </span>
                  <Link href="/">
                    <FaRegEye />
                  </Link>
                </div>
                <div className="text">
                  <h4>{val.title}</h4>
                  <div className="timeWrap">
                    <div className="flexx">
                      <img src={calendar} alt="calendar" />
                      <span>
                        {val.startDate} - {val.endDate}
                      </span>
                    </div>
                    <div className="flexx">
                      <img src={time} alt="calendar" />
                      <span>
                        {val.startTime} - {val.endTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SessionWrapper>
  );
};

export default Session;
