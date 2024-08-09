import React, { useState } from "react";
import RightSideBar from "../rightSideBar";
import { FinancialWrap } from "./Financial.styles";
import Button from "../Button";
import { IoIosArrowForward } from "react-icons/io";
import time from "../../assets/profile/time.png";
import calendar from "../../assets/profile/calendar.png";
import { financialData } from "../../Constant/Data";
import Modal from "../Modal";
import Bill from "./Bill";
const Financial = () => {
  const [billRequest, setBillRequest] = useState(false);
  const billHandler = () => {
    setBillRequest(true);
  };
  return (
    <FinancialWrap>
      <div className="financial">
        <div className="flex">
          <div className="date">01 Jan - 01 Feb 2024</div>
          <div className="filterWrap">
            <Button type="white">
              Start Date - End Date <IoIosArrowForward />
            </Button>
            <Button type="white">
              Filter <IoIosArrowForward />
            </Button>
          </div>
        </div>
        <div className="flex">
          <h4>Completed Session Details</h4>
          <span>Total Session : 10</span>
        </div>
        {financialData.map((val, ind) => (
          <div className="detail">
            <input type="checkbox" className="check" />
            <div className="management">
              <h4 key={ind}>{val.title}</h4>

              <div className="timeHolder">
                <span>
                  <img src={time} alt="time" /> 9:00 am
                </span>
                <span>
                  <img src={calendar} alt="calendar" /> 17 June 2024
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="btn">
          <Button width="241px" onClick={billHandler}>
            Request Bill
          </Button>
        </div>
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
      {billRequest && (
        <Modal open={billRequest} setOpen={setBillRequest} width="921px">
          <Bill />
        </Modal>
      )}
    </FinancialWrap>
  );
};

export default Financial;
