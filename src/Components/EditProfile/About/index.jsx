import React, { useState } from "react";
import { AboutWrap } from "./about.styles";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";

const About = ({ formData, setFormData, handleChange, handleSubmit}) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const backToProfile = () => {
    navigate("/profile");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.bio.trim()) newErrors.bio = "Bio cannot be empty";
    if (formData.bio.length > 2000) newErrors.bio = "Bio cannot exceed 2000 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      navigate("/ProfileSkills");
    }else{
      console.log("Please write something");
    }
  };

  const handleBioChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, bio: value });
    if (errors.bio) validateForm(); 
  };

  return (
    <AboutWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="Back" />
        <h4 className="heading">About Yourself</h4>
      </div>
      <p>
        You can write about your years of experience, industry, or skills.
        People also talk about their achievements or previous job experiences.
      </p>
     <div className="inputWrapper">
     <TextField
        variant="textarea"
        parentClass="textareaHolder"
        onChange={handleBioChange}
        name="bio"
        value={formData.bio}
      />
      {errors.bio && <span className="error">{errors.bio}</span>}
     </div>
      <p>{formData.bio.length}/2000</p>
      <Button width="177px" onClick={handleSave}>Save</Button>
    </AboutWrap>
  );
};

export default About;
