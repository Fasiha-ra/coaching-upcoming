import React, { useState } from "react";
import { SessionCardWrap } from "./SessionCard.styles";
import calendar from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import { BsPencil } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Button/index";
import { Sessions } from "../../../Constant/Data";
import { serverDomain } from "../../../Constant/serverDomain";
const SessionCard = ({ sessions }) => {
  const navigate = useNavigate();
  const EditSession = (session) => {
    navigate("/editSession", { state: { session } });
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleViewSession = (session) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/viewSession", { state: { sessionData: session } });
    }, 1000);
  };

  return (
    <SessionCardWrap>
      <div className="cardWrap">
        {sessions?.map((session, index) => (
          <div className="wrapper" key={index}>
            <div className="cardHold">
              <figure>
                <img src={`${serverDomain}${session.image}`} alt="session" />
              </figure>
              <blockquote>
                <q></q>
                <h3>{session.title}</h3>
                <div className="timeWrap">
                  <cite>
                    <img src={calendar} alt="calendar" />
                    <span>
                      {session.startDate} - {session.endDate}
                    </span>
                  </cite>
                  <cite>
                    <img src={time} alt="time" />
                    <span>
                      {session.startTime} - {session.endTime}
                    </span>
                  </cite>
                </div>
              </blockquote>
              <div className="iconBtn">
                <button onClick={() => EditSession(session)}>
                  <BsPencil />
                </button>
                <button onClick={() => handleViewSession(session)}>
                  <FaRegEye />
                </button>
              </div>
            </div>
            <div className="btn">
              <Button width="128px">Join</Button>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </SessionCardWrap>
  );
};

export default SessionCard;
