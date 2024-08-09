import React, { useState } from "react";
import RightSideBar from "../rightSideBar";
import { NotificationWrap } from "./Notification.styles";
import { Link } from "react-router-dom";
import tick from "../../assets/notification/tick.png";
import Button from "../Button";
import Modal from "../Modal";
import EmployeePopup from "../RequestEmployeePopup";

const Notification = () => {
    const [view, setView]=useState(false);
    const clickView = () => {
        setView(true);
    }
  return (
    <NotificationWrap>
      <div className="notification">
        <h3>Notifications</h3>
        <div className="tabs">
          <ul className="listed">
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Request</Link>
            </li>
            <li>
              <Link href="/">Enrollment</Link>
            </li>
            <li>
              <Link href="/">Financial</Link>
            </li>
            <li>
              <Link href="/">Other</Link>
            </li>
          </ul>
        </div>
        <div className="wrapper">
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Course Enrolled</strong> Notification triggered when a
                employee enrolls in a course.
              </h4>
              <span>28 min ago</span>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Employee</strong> has requested for 1:1 meet on{" "}
                <strong>01 Jan 2024 12:00 am</strong> on Training Management.
              </h4>
              <span>1 day ago</span>
              <br />
              <div className="btn">
                <Button width="128px" onClick={clickView}>view</Button>
              </div>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Employee</strong>  has enrolled for Training Management.
              </h4>
              <span>1 day ago</span>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Instructor Application Accepted</strong> Instructors are informed if their application to teach a course 
                is accepted.
              </h4>
              <span>1 day ago</span>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Course Enrolled</strong> Notification triggered when a employee  enrolls in a course.
              </h4>
              <span>28 min ago</span>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Employee</strong> has requested for 1:1 meet on{" "}
                <strong>01 Jan 2024 12:00 am</strong> on Training Management.
              </h4>
              <span>1 day ago</span>
              <br />
              <div className="btn">
                <Button width="128px" onClick={clickView}>view</Button>
              </div>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Employee</strong>  has enrolled for Training Management.
              </h4>
              <span>28 min ago</span>
            </div>
          </div>
          <div className="notiHolder">
            <img src={tick} alt="tick" />
            <div className="text">
              <h4>
                <strong>Instructor Application Accepted Instructors</strong>  are informed if their application to teach a course 
                is accepted.
              </h4>
              <span>1 day ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
      {view&& (
        <Modal open={view} setOpen={setView} width="585px">
            <EmployeePopup func={setView}/>
        </Modal>
      )}
    </NotificationWrap>
  );
};

export default Notification;
