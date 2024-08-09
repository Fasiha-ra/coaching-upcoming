import React, { useState } from "react";
import { EmployeeWrap } from "./EmployeePopup.styles";
import logo from "../../assets/notification/logo.png";
import time from "../../assets/profile/time.png";
import calendar from "../../assets/profile/calendar.png";
import Button from "../Button";
import Modal from "../Modal";
import AcceptPopup from "./Accept"; 
import Rejected from "./Rejected";

const EmployeePopup = () => {
  const [accept, setAccept] = useState(false);
  const [rejected, setRejected] = useState(false);
  const RejectPopup = () => {
    setRejected(true);
  }
  const AcceptHandler = (e) => {
    e.preventDefault();
    setAccept(true);
    
  };
  return (
    <EmployeeWrap>
      <img src={logo} alt="logo" />
      <div className="heading">
        <h4>Anish Mehra</h4>
        <h5>Junior Engineer at Cognizant tech. prv. ltd</h5>
        <span>corporatemailid@gmail.com</span>
      </div>
      <div className="sessions">
        <h5>Session Details</h5>
        <h4>Tech Stack Specialization & Work-like Projects</h4>
        <div className="flex">
          <span>
            <img src={calendar} alt="calendar" />
            9:00 am
          </span>
          <span>
            <img src={time} alt="time" />
            17 June
          </span>
        </div>
      </div>
      <div className="btnWrap">
        <Button width="128px" onClick={AcceptHandler}>
          Accept
        </Button>
        <Button type="outline" width="128px" onClick={RejectPopup}>
          Reject
        </Button>
      </div>
      {accept && (
        <Modal open={accept} setOpen={setAccept} width="585px">
          <AcceptPopup />
        </Modal>
      )}
      {rejected &&(
        <Modal open={rejected} setOpen={setRejected} width= "585px">
            <Rejected/>
        </Modal>
      )}
    </EmployeeWrap>
  );
};

export default EmployeePopup;
