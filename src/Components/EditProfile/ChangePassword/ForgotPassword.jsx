import React  from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { PasswordWrap } from "./password.styles";
const ForgotPassword = () => {
    
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/editprofile");
  };

  return (
    <PasswordWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Forgot Password </h4>
      </div>
      <p>We’ll send a verification code to this email or phone number if it matches an existing account.</p>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="email"
        type="email"
        label="Email"
        name="email"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="VerificationCode"
        type="text"
        label="Verification code"
        name="VerificationCode"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />

      <Button width="177px">Save</Button>
    </PasswordWrap>
  );
};

export default ForgotPassword;
