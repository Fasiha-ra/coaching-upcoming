import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { SkillWrap } from "./skill.styles";
import { FaGreaterThan } from "react-icons/fa6";

const ProfileSkills = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(formData?.skills || []);
  const [skillInput, setSkillInput] = useState("");
  const [error, setError] = useState("");

  const backToProfile = () => {
    navigate("/profile");
  };

  const handleAddSkill = () => {
    if (skillInput.trim() === "") {
      setError("Skill cannot be empty.");
      return;
    }
    if (skills.length >= 5) {
      setError("You can only add up to 5 skills.");
      return;
    }
    if (skills.includes(skillInput.trim())) {
      setError("Skill already exists.");
      return;
    }
    
    setFormData({
      ...formData,
      skills: [...skills, skillInput.trim()],
    });
    setSkills([...skills, skillInput.trim()]);
    setSkillInput("");
    setError(""); // Clear the error message on successful addition
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddSkill();
    }
  };

  const handleSave = () => {
    if (skills.length === 0) {
      setError("Please add at least one skill before saving.");
      return;
    }
    console.log("Skills:", skills);
    // handleSubmit();
    navigate("/experience")
  };

  const handleInputChange = (e) => {
    setSkillInput(e.target.value);
    if (error) {
      setError(""); // Clear error message when the input changes
    }
  };

  return (
    <SkillWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="Back" />
        <h4 className="heading">Add Skills</h4>
      </div>
      <p>Show your top skills — add up to 5 skills you want to be known for.</p>
     <div className="inputWrapper">
     <TextField
        hasicon={<FaGreaterThan />}
        parentClass="inputHolder"
        className="input-field"
        field_Name="skills"
        type="text"
        placeholder="Skills : ( ex : Management )"
        name="skills"
        value={skillInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        bgClr="transparent"
      />
      {error && <span className="error-message">{error}</span>}
     </div>
      <div className="managementWrap">
        <div className="flex">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
      <Button width="177px" onClick={handleSave}>Save</Button>
    </SkillWrap>
  );
};

export default ProfileSkills;
