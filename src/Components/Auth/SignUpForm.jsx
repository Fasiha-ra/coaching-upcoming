import React, { useState } from "react";
import { SignUpWrapper } from "./Form.styles";
import Logo from "../../assets/authentication/Logo.png";
import bgImg from "../../assets/authentication/bg-img.png";
import TextField from "../TextField/TextField";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal/index";
import thumb from "../../assets/authentication/thumbIcon.png";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [onSubmit, setOnSubmit] = useState(false);
  const handleModal = () => {
    setOnSubmit(true);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/UpdatedProfile");
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    contactNumber: "",
    password: "",
    reenterpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate('/');
    console.log("Form Data:", formData);
  };

  return (
    <SignUpWrapper>
      <div className="imgHolder">
        <img src={bgImg} alt="" />
      </div>
      <div className="formHolder">
        <form onSubmit={handleSubmit}>
          <div className="textHolder">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <p>
              Welcome to our Evolve - X platform!
              <br /> Enhance your skills and broaden your knowledge.
            </p>
          </div>
          <div className="inputHolder">
            <div className="grid">
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="firstName"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="lastName"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="emailId"
                type="email"
                placeholder="Email ID"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="contactNumber"
                type="number"
                placeholder="Mobile Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
              <TextField
                parentClass="emailWrapper"
                className="input-field"
                field_Name="reenterpassword"
                type="password"
                placeholder="Re-enter password"
                name="reenterpassword"
                value={formData.reenterpassword}
                onChange={handleInputChange}
                bgClr="rgba(255, 255, 255, 0.37)"
              />
            </div>
          </div>
          <Button width="208px" type="submit" onClick={handleModal}>
            Sign Up
          </Button>
        </form>
      </div>
      {onSubmit && (
        <Modal open={onSubmit} setOpen={setOnSubmit} width="605px" radius="0px">
          <div className="modalWrap" onClick={clickHandler}>
            <figure>
              <img src={thumb} alt="thumb" />
            </figure>
            <h3>Request Sent</h3>
            <span>
              Request has been sent to super admin for sign in the account
            </span>
          </div>
        </Modal>
      )}
    </SignUpWrapper>
  );
};

export default SignUpForm;
