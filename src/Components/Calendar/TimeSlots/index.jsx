
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Title, { ManageTitle } from "../Title";
const localizer = momentLocalizer(moment);

// Get today's date
const today = new Date();

const events = [
  {
    id: 1,
    title: "Title",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      0
    ),
    end: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      11,
      0
    ),
  },
  {
    id: 2,
    title: "ManageTitle",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      5,
      0
    ),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0),
  },
  {
    id: 3,
    title: "Event Next Week",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      8,
      0
    ),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
  },
  {
    id: 4,
    title: "Event Next Month",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      3,
      0
    ),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 0),
  },
];

const CustomEvent = ({ event }) => {
  console.log("CustomEvent rendering:", event);
  if (event.title === "Title") {
    return <Title />;
  } else if (event.title === "ManageTitle") {
    return <ManageTitle />;
  } else {
    return <span>{event.title}</span>;
  }
};
const TimeSlots = ({ click }) => (
  <div style={{ height: 800 }}>
    <Calendar
      localizer={localizer}
      events={events}
      views={["day"]}
      defaultView="day"
      defaultDate={new Date()}
      onSelectEvent={click}
      components={{
        event: CustomEvent,
      }}
    />
  </div>
);

export default TimeSlots;
