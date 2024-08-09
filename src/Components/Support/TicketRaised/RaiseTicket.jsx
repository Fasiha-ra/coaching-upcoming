import React from "react";
import { TicketRaisedWrap } from "./TicketRaise.styles";
import backArrow from "../../../assets/support/backArrow.png";
import support from "../../../assets/support/support.png";
import product from "../../../assets/support/product.png";
import Button from "../../Button";
import TextField from "../../TextField/TextField";
const RaiseTicket = ({ backPage }) => {
  return (
    <TicketRaisedWrap>
      <div className="headingHolder">
        <img src={backArrow} alt="arrow" onClick={backPage} />
        <h4>Ticket has been raised</h4>
      </div>
      <div className="card">
      <div className="ticketCard">
        <div className="imgHolder">
          <img src={support} alt="support" />

          <div className="headingWrapper">
            <h4>System Issue</h4>
            <span>02 Apr 2024, 5:60 pm</span>
          </div>
        </div>
        <div className="ticketID">
          <span>Ticket id : #ASDFGHJLB</span>
        </div>
      </div>
      </div>
      <div className="card">
        <div className="ticketCard">
          <div className="imgHolder">
            <img src={product} alt="support" />
            <div className="headingWrapper">
              <h4>System Support</h4>
              <span>02 Apr 2024, 5:60 pm</span>
            </div>
          </div>
         
        </div>
        <div className="textarea">
        <TextField
        parentClass="TextAreaHold"
        variant="textarea"
              // parentClass="emailWrapper"
              className="input-field"
              placeholder="Please describe your issue here in as much details as possible"
              bgClr="rgba(255, 255, 255, 0.37)"
            />
        </div>
        <div className="btnHolder">
          <Button width="186px">Send</Button>
        </div>
      </div>
    </TicketRaisedWrap>
  );
};

export default RaiseTicket;
