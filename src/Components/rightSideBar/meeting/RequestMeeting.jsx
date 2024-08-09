import React, {useState} from "react";
import { GroupSessionWrap } from "./GroupSession.styles";
import { IoIosArrowForward } from "react-icons/io";
import { RequestMeetingData } from "../../../Constant/Data";
import clock from "../../../assets/profile/time.png";
import calendar from "../../../assets/profile/calendar.png";
import Button from "../../Button";
import Modal from "../../Modal";
import EmployeePopup from "../../RequestEmployeePopup";
const RequestMeeting = () => {
  const [view, setView]=useState(false);
    const clickView = () => {
        setView(true);
    }
  return (
    <GroupSessionWrap>
      <div className="wrapper">
        <div className="headingWrapper">
          <h5>Request - 1:1 Meetings</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        {RequestMeetingData.map((value, index) => (
          <div className="groupHolder" key={index}>
            <h5>
              {value.title} <span>{value.name}</span>
            </h5>
            <div className="flex">
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
            <div className="btn">
                <Button onClick={clickView}>View</Button>
            </div>
            </div>
          </div>
        ))}
      </div>
      {view&& (
        <Modal open={view} setOpen={setView} width="585px">
            <EmployeePopup func={setView}/>
        </Modal>
      )}
    </GroupSessionWrap>
  );
};

export default RequestMeeting;
