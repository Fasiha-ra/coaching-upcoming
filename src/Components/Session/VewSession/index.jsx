import React from "react";
import { ViewWrap } from "./View.astyles";
import Rating from "../../MyProfile/Rating";
import Session from "../../Home/sessionCard/Session";
import Accordions from "../../Accordions";
import { items } from "../../../Constant/Data";
import Button from "../../Button";
import date from "../../../assets/profile/calendar.png";
import time from "../../../assets/profile/time.png";
import sessionImg from "../../../assets/profile/session.png";
import employe from "../../../assets/session/employe.png";
import employes from "../../../assets/session/employes.png";
import { useNavigate } from "react-router-dom";
const ViewSession = () => {
  const navigate = useNavigate();
  const editSessionOpen = () =>{
    navigate("/editSession");
  }
  return (
    <ViewWrap>
      <div className="view">
        <div className="sessionDetail">
          <div className="textHolder">
            <span className="subTitle">Talent Management | Group Session</span>
            <h2>Adapting to Change and Embracing Innovation</h2>
            <div className="date flex">
              <figure>
                <img src={date} alt="date" />
              </figure>
              <span>April 30, 2024 - May 07, 2024</span>
            </div>
            <div className="time flex">
              <figure>
                <img src={time} alt="time" />
              </figure>
              <span>09:00 pm - 11:00 pm</span>
            </div>
            <div className="session flex">
              <figure>
                <img src={employe} alt="employe" />
              </figure>
              <span>Role : Junior Employee </span>
            </div>
            <div className="session flex">
              <figure>
                <img src={employes} alt="employes" />
              </figure>
              <span>20 Employees Enrolled</span>
            </div>
            <div className="btns">
              <Button width="150px" onClick={editSessionOpen}>Edit Session</Button>
              <Button type="outline" width="150px">
                Delete Session
              </Button>
            </div>
          </div>
          <figure className="thumb">
            <img src={sessionImg} alt="sessionImg" />
          </figure>
        </div>
        <div className="sessionPara">
          <h5>About Session</h5>
          <p>
            Change is now and forever. It is not optional any more than
            breathing and sleeping and doing it well is a requirement of
            organization health. Learning to capture the competitive advantage
            of a changing landscape is an essential skill for leaders.
            <br />
            This course is based on the forty five years of experience helping
            companies like Merck, Shell Oil, Honeywell, Honda and dozens of
            others to create cultures of engagement and continuous improvement.
          </p>
        </div>
        <div className="Accordions">
          <h4>Topics</h4>
          <Accordions items={items} />
        </div>
        <div className="rating">
          <Rating />
        </div>
        <div className="session">
          <Session title="My Sessions" />
        </div>
      </div>
    </ViewWrap>
  );
};

export default ViewSession;
