import React, { useState } from "react";
import BG from "../../../assets/profile/editBG.png";
import Logo from "../../../assets/profile/editLOGO.png";
import { EditProfileWrap } from "./editProfile.styles";
import back from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import { FaGreaterThan } from "react-icons/fa6";
import { serverDomain } from "../../../Constant/serverDomain";
import Button from "../../Button";

const EditProfile = ({ formData, setFormData, handleChange, user }) => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(
    user || formData?.id ? null : BG
  );
  const [logoImage, setLogoImage] = useState(
    user || formData?.id ? null : Logo
  );
  const [primaryTopics, setPrimaryTopics] = useState(
    formData?.primaryTrainingTopic
  );
  const [secondaryTopics, setSecondaryTopics] = useState(
    formData?.secondaryTrainingTopic
  );
  const [primaryTopicInput, setPrimaryTopicInput] = useState("");
  const [secondaryTopicInput, setSecondaryTopicInput] = useState("");
  const [errors, setErrors] = useState({});

  const backToProfile = () => {
    navigate("/profile");
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target?.files[0];
    const { name } = e.target;
    if (name === "cover") {
      setFormData({ ...formData, cover: file });
    } else {
      setFormData({ ...formData, avatar: file });
    }

    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  const handleAddPrimaryTopic = () => {
    if (primaryTopicInput.trim() !== "") {
      setFormData({
        ...formData,
        primaryTrainingTopic: [...primaryTopics, primaryTopicInput.trim()],
      });
      setPrimaryTopics([...primaryTopics, primaryTopicInput.trim()]);
      setPrimaryTopicInput("");
      setErrors((prevErrors) => ({ ...prevErrors, primaryTrainingTopic: "" }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        primaryTrainingTopic: "Primary topic cannot be empty",
      }));
    }
  };

  const handleAddSecondaryTopic = () => {
    if (secondaryTopicInput.trim() !== "") {
      setFormData({
        ...formData,
        secondaryTrainingTopic: [
          ...secondaryTopics,
          secondaryTopicInput.trim(),
        ],
      });
      setSecondaryTopics([...secondaryTopics, secondaryTopicInput.trim()]);
      setSecondaryTopicInput("");
      setErrors((prevErrors) => ({
        ...prevErrors,
        secondaryTrainingTopic: "",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        secondaryTrainingTopic: "Secondary topic cannot be empty",
      }));
    }
  };

  const handleKeyPress = (e, addTopic) => {
    if (e.key === "Enter") {
      addTopic();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Contact Number is required";
    if (!formData.state) newErrors.state = "Country / Region is required";
    if (!formData.city) newErrors.city = "City is required";
    if (primaryTopics.length === 0)
      newErrors.primaryTrainingTopic = "At least one Primary topic is required";
    if (secondaryTopics.length === 0)
      newErrors.secondaryTrainingTopic =
        "At least one Secondary topic is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid. Saving data...");
      navigate("/About");
    } else {
      console.log("Form is invalid. Fix errors and try again.");
    }
  };

  return (
    <EditProfileWrap>
      <div className="flex">
        <div className="backimg" onClick={backToProfile}>
          <img src={back} alt="back" />
        </div>
        <div className="wrap">
          <div
            className="bgImg"
            onClick={() => document.getElementById("bgInput").click()}
          >
            <img
              src={
                backgroundImage
                  ? backgroundImage
                  : `${serverDomain}${formData.cover}`
              }
              alt="background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
            />
            <input
              type="file"
              id="bgInput"
              name="cover"
              style={{ display: "none" }}
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => handleImageChange(e, setBackgroundImage)}
            />
          </div>
          <div
            className="logo"
            onClick={() => document.getElementById("logoInput").click()}
          >
            <figure>
              <img
                src={
                  logoImage ? logoImage : `${serverDomain}${formData.avatar}`
                }
                alt="logo"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <input
                type="file"
                name="avatar"
                id="logoInput"
                style={{ display: "none" }}
                accept="image/jpeg, image/png, image/jpg"
                onChange={(e) => handleImageChange(e, setLogoImage)}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="info">
        <h4 className="heading">Profile Info</h4>
        <div className="grid">
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="firstName"
              type="text"
              label="First Name"
              name="firstName"
              bgClr="transparent"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </div>
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="lastName"
              type="text"
              label="Last Name"
              name="lastName"
              bgClr="transparent"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="grid">
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="email"
              type="email"
              label="Email id"
              name="email"
              bgClr="transparent"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="number"
              type="number"
              label="Contact Number"
              name="phone"
              bgClr="transparent"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="grid">
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="Country"
              type="text"
              label="Country / Region"
              name="state"
              bgClr="transparent"
              value={formData.state}
              onChange={handleInputChange}
            />
            {errors.state && <span className="error">{errors.state}</span>}
          </div>
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="city"
              type="text"
              label="City"
              name="city"
              bgClr="transparent"
              value={formData.city}
              onChange={handleInputChange}
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </div>
        </div>
        <h4 className="heading">Add Primary Training Topic</h4>
        <div className="addTopic">
          <div className="inputWrapper">
            <TextField
              hasicon={<FaGreaterThan />}
              parentClass="inputHolder"
              className="input-field"
              field_Name="primaryTraining"
              type="text"
              placeholder="Training Topics : ( ex : Management ) "
              name="primaryTraining"
              bgClr="transparent"
              value={primaryTopicInput}
              onChange={(e) => setPrimaryTopicInput(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, handleAddPrimaryTopic)}
            />
            {errors.primaryTrainingTopic && (
              <span className="error">{errors.primaryTrainingTopic}</span>
            )}
          </div>
        </div>
        <div className="managementWrap">
          <div className="flex">
            {primaryTopics.map((topic, index) => (
              <span key={index}>{topic}</span>
            ))}
          </div>
        </div>
        <h4 className="heading">Add Secondary Training Topic</h4>
        <div className="addTopic">
         <div className="inputWrapper"> <TextField
            hasicon={<FaGreaterThan />}
            parentClass="inputHolder"
            className="input-field"
            field_Name="secondaryTraining"
            type="text"
            placeholder="Training Topics : ( ex : Management ) "
            name="secondaryTraining"
            bgClr="transparent"
            value={secondaryTopicInput}
            onChange={(e) => setSecondaryTopicInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, handleAddSecondaryTopic)}
          />
          {errors.secondaryTrainingTopic && (
            <span className="error">{errors.secondaryTrainingTopic}</span>
          )}</div>
        </div>
        <div className="managementWrap">
          <div className="flex">
            {secondaryTopics.map((topic, index) => (
              <span key={index}>{topic}</span>
            ))}
          </div>
          <button>+</button>
        </div>
        <div className="saveBtn">
          <Button width="180px" className="button" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </EditProfileWrap>
  );
};

export default EditProfile;
