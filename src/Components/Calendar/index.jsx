import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import LectureSchedule from "../LectureSchedule";

import { format, addDays } from "date-fns";
import { useLocation } from "react-router-dom";

const Calendar = () => {

  const [lecture, setLecture] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [sessionType, setSessionType] = useState(""); // State for session type

  const location = useLocation().state
  const session = location?.session

  console.log("calender session", session);
  const BackToPage = () => {
    setLecture(false);
  };
  const Lecturehandle = () => {
    setLecture(true);
  };

  const handleNext = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 1)); // Move to next day
  };

  const handlePrevious = () => {
    const today = new Date(); // Current date
    if (currentDate <= today) {
      return;
    }
    setCurrentDate((prevDate) => addDays(prevDate, -1)); // Move to previous day
  };

  const formattedDate = format(currentDate, "EEEE, MMMM d yyyy");
  return (
    <>
      <CalendarWrap>
        {!lecture ? (
          <div className="calenderHolder">
            <h4>
              {formattedDate}{" "}
              <FaAngleLeft
                onClick={handlePrevious}
                style={{ cursor: "pointer" }}
              />
              <FaAngleRight
                onClick={handleNext}
                style={{ cursor: "pointer" }}
              />
            </h4>
            <CalendarHeader setSessionType={setSessionType} title={"Calendar"}/>
            <TimeSlots click={Lecturehandle} />
          </div>
        ) : (
          <LectureSchedule BackToPage={BackToPage} />
        )}
      </CalendarWrap>
    </>
  );
};

export default Calendar;
