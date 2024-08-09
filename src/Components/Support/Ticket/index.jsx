import React from "react";
import { TicketsWrap } from "./Tickets.styles";
import { TicketData } from "../../../Constant/Data";
import Button from "../../Button";
const Tickets = ({
  title,
  type,
  width,
  name,
  click = () => {},
  activeTickets,
}) => {
  return (
    <TicketsWrap>
      <h4>{title}</h4>
      <div className="cardHolder">
        {activeTickets?.map((value, index) => (
          <div className="ticketCard" key={index}>
            <img src={TicketData[0].img} alt="support" />
            <div className="heading">
              <h4>{value.issue}</h4>
              <span>
                {new Date(value.createdAt).toDateString()}{" - "}
                {new Date(value.createdAt).toLocaleTimeString()}
              </span>
            </div>
            <div className="btnHolder">
              <span>{value.ticketId}</span>
              <Button width={width} type={type} onClick={() => click()}>
                {name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </TicketsWrap>
  );
};

export default Tickets;
