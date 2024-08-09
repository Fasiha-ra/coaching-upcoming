import React from "react";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { AccountWrap } from "./account.styles";
const DeactivateAccount = ({click}) => {
  return (
    <AccountWrap>
      <div className="infoHeading">
        <h4 className="heading">Deactivate Account</h4>
        <p>
          Are you sure you want to close your account? You’ll lose your
          connections, messages, endorsements, and recommendations.
        </p>
      </div>

      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="password"
        type="password"
        label="Enter password"
        name="password"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />
      <Button width="177px" onClick={click}>Done</Button>
    </AccountWrap>
  );
};

export default DeactivateAccount;
