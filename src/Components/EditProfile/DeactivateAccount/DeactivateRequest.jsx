import React from "react";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { AccountWrap } from "./account.styles";
const DeactivateRequest = () => {
  return (
    <AccountWrap>
      <div className="infoHeading">
        <h4 className="heading">Deactivate Request Submitted</h4>
        <p>
        Your request to deactivate coach account has been submitted.
        We will get back to yoy in 48 hrs.
        </p>
      </div>

      <Button width="177px">Cancel Request</Button>
    </AccountWrap>
  );
};

export default DeactivateRequest;
