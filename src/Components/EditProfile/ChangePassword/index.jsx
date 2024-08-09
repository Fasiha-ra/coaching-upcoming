import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { PasswordWrap } from "./password.styles";
import DeactivateAccount from "../DeactivateAccount";
import Modal from "../../Modal/index";
import DeactivateRequest from "../DeactivateAccount/DeactivateRequest";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [errors, setErrors] = useState({});
  const [deactivate, setDeactivate] = useState(false);
  const [request, setRequest] = useState(false);
  
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }
    if (!newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (newPassword !== retypePassword) {
      newErrors.retypePassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/profile")
    }
  };

  const DeactivateHandler = () => {
    setDeactivate(true);
  };

  const RequestHandler = () => {
    setDeactivate(false);
    setRequest(true);
  };

  const backToProfile = () => {
    navigate("/editprofile");
  };

  return (
    <PasswordWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Change Password</h4>
      </div>
      <p>Create a new password</p>
     <div className="inputWrapper">
     <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="currentPassword"
        type="password"
        label="Current password"
        name="currentPassword"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        bgClr="transparent"
      />
      {errors.currentPassword && <span className="error">{errors.currentPassword}</span>}
     </div>
     <div className="inputWrapper">
     <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="newPassword"
        type="password"
        label="New password"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        bgClr="transparent"
      />
      {errors.newPassword && <span className="error">{errors.newPassword}</span>}
     </div>
     <div className="inputWrapper">
     <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="retypePassword"
        type="password"
        label="Retype new password"
        name="retypePassword"
        value={retypePassword}
        onChange={(e) => setRetypePassword(e.target.value)}
        bgClr="transparent"
      />
      {errors.retypePassword && <span className="error">{errors.retypePassword}</span>}
     </div>
      <span>
        <Link to="/forgot-password">Forget Password?</Link>
      </span>
      <Button width="177px" onClick={handleSubmit}>
        Save
      </Button>
      <div className="info">
        <h4 className="heading">Deactivate Account</h4>
      </div>
      <p>Are you sure you want to close your account?</p>
      <div className="bton">
        <Button type="outline" width="192px" onClick={DeactivateHandler}>
          Continue
        </Button>
      </div>
      {deactivate && (
        <Modal open={deactivate} setOpen={setDeactivate} width="757px">
          <DeactivateAccount click={RequestHandler} />
        </Modal>
      )}
      {request && (
        <Modal open={request} setOpen={setRequest} width="757px">
          <DeactivateRequest />
        </Modal>
      )}
    </PasswordWrap>
  );
};

export default ChangePassword;
