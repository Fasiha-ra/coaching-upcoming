import React, { useState } from "react";
import { SignUpWrapper } from "./SignUp.styles";
import Logo from "../../assets/authentication/Logo.png";
import bgImg from "../../assets/authentication/bg-img.png";
import TextField from "../TextField/TextField";
import Button from "../Button";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/otp");
    console.log("Password:", password);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
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
              Welcome to our Evolve - X platform!<br /> Enhance your skills and broaden your knowledge.
            </p>
          </div>
          <div className="inputHolder">
            <TextField
              hasicon={<AiOutlineEyeInvisible />}
              parentClass="emailWrapper"
              className="input-field"
              field_Name="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleInputChange}
              bgClr="rgba(255, 255, 255, 0.37)"
            />
          </div>
          <Button width="208px" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </SignUpWrapper>
  );
};

export default Password;
