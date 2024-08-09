import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImg from "../../assets/authentication/bg-img.png";
import Logo from "../../assets/authentication/Logo.png";
import OtpInput from "../TextField/otpInput";
import { SignUpWrapper } from "./SignUp.styles";
import Button from "../Button";
import { AuthContext } from "../Context/Context";

const OTP = () => {
  const { email } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/editprofile');
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
            <p>Please enter OTP sent to {email}</p>
          </div>
          <div className="inputHolder">
            <OtpInput />
          </div>
          <p>Don’t receive OTP? <span>Resend</span></p>
          <Button width="208px" type="submit">Continue</Button>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default OTP;
