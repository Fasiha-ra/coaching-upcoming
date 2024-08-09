import React from "react";
import { EmployeeWrap } from "./EmployeePopup.styles";
import accept from "../../assets/notification/done.png";
const AcceptPopup = () => {
  return (
    <EmployeeWrap>
      <div className="accept">
      <div className="acceptLogo">
      <img src={accept} alt="accept" />
      <h2>Request Accepted</h2>
      </div>
      <div className="heading">
        <h4>Anish Mehra</h4>
        <h5>Junior Engineer at Cognizant tech. prv. ltd</h5>
        <span>corporatemailid@gmail.com</span>
      </div>
      </div>
    </EmployeeWrap>
  );
};

export default AcceptPopup;
