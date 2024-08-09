import React, { useState, useRef } from "react";
import Icon from "../../assets/profile/imgIcon.png";
import TextField from "../TextField/TextField";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";
import { SignUpWrapper, ProfileWrap } from "./Form.styles";

const UpdatedProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    contactNumber: "",
    city: "",
    state: "",
    profileImage: null,
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file", file);
      setFormData((prevData) => ({
        ...prevData,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
    console.log("Form Data:", formData);
  };

  return (
    <ProfileWrap >
      <div className="container">
        <div className="profile">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {!formData.profileImage ? (
            <img src={Icon} alt="profileIcon" />
          ) : (
            <img src={formData.profileImage} alt="profile" />
          )}
          <button
            style={{ color: "white" }}
            onClick={() => fileInputRef.current.click()}
          >
            Upload Profile
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <TextField
              className="input-field"
              label="First Name *"
              name="firstName"
              type="text"
              placeholder="Mehra"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Last Name *"
              name="lastName"
              type="text"
              placeholder="Anish"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="E-mail ID *"
              name="Email"
              type="email"
              placeholder="anishmehra85@gmail.com"
              value={formData.Email}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Contact Number *"
              name="contactNumber"
              type="number"
              placeholder="8756349867"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="City *"
              name="city"
              type="text"
              placeholder="ASDFGHJL1234567"
              value={formData.city}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="State *"
              name="state"
              type="text"
              placeholder="Talent Management"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn">
            <Button width="172px" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </ProfileWrap>
  );
};

export default UpdatedProfile;
