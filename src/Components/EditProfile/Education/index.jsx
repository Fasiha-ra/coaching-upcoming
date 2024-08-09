import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { EducationWrap } from "./education.styles";

const Education = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const backToProfile = () => {
    navigate("/profile");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.educationDetails[0]?.school) {
      newErrors.school = "School / University is required";
    }
    if (!formData.educationDetails[0]?.degree) {
      newErrors.degree = "Degree is required";
    }
    if (!formData.educationDetails[0]?.specialization) {
      newErrors.specialization = "Specialization is required";
    }
    if (!formData.educationDetails[0]?.startDate) {
      newErrors.startDate = "Start Date is required";
    }
    if (!formData.educationDetails[0]?.endDate) {
      newErrors.endDate = "End Date is required";
    }
    if (!formData.educationDetails[0]?.grade) {
      newErrors.grade = "Grade is required";
    }
    if (!formData.educationDetails[0]?.description) {
      newErrors.description = "Description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // handleSubmit();
      navigate("/certificates")
    }
  };

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      educationDetails: [
        {
          ...formData.educationDetails[0],
          [field]: e.target.value,
        },
      ],
    });

    if (errors[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }
  };

  return (
    <EducationWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add education details</h4>
      </div>
      <p>Add your education details</p>
      <div className="inputWrapper">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="school"
          type="text"
          label="School / University"
          name="school"
          value={formData.educationDetails[0]?.school}
          onChange={(e) => handleInputChange(e, "school")}
          bgClr="transparent"
        />
        {errors.school && <p className="error">{errors.school}</p>}
      </div>
      <div className="inputWrapper">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="degree"
          type="text"
          label="Degree"
          name="degree"
          value={formData.educationDetails[0]?.degree}
          onChange={(e) => handleInputChange(e, "degree")}
          bgClr="transparent"
        />
        {errors.degree && <p className="error">{errors.degree}</p>}
      </div>
      <div className="inputWrapper">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="specialization"
          type="text"
          label="Specialization"
          name="specialization"
          value={formData.educationDetails[0]?.specialization}
          onChange={(e) => handleInputChange(e, "specialization")}
          bgClr="transparent"
        />
        {errors.specialization && <p className="error">{errors.specialization}</p>}
      </div>
      <div className="flex">
        <div className="inputWrapper">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="startDate"
            type="text"
            label="Start Date"
            name="startDate"
            value={formData.educationDetails[0]?.startDate}
            onChange={(e) => handleInputChange(e, "startDate")}
            bgClr="transparent"
          />
          {errors.startDate && <p className="error">{errors.startDate}</p>}
        </div>
        <div className="inputWrapper">
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="endDate"
            type="text"
            label="End Date"
            name="endDate"
            value={formData.educationDetails[0]?.endDate}
            onChange={(e) => handleInputChange(e, "endDate")}
            bgClr="transparent"
          />
          {errors.endDate && <p className="error">{errors.endDate}</p>}
        </div>
      </div>
      <div className="inputWrapper">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="grade"
          type="text"
          label="Grade"
          name="grade"
          value={formData.educationDetails[0]?.grade}
          onChange={(e) => handleInputChange(e, "grade")}
          bgClr="transparent"
        />
        {errors.grade && <p className="error">{errors.grade}</p>}
      </div>
      <div className="inputWrapper">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="description"
          type="text"
          label="Description"
          name="description"
          value={formData.educationDetails[0]?.description}
          onChange={(e) => handleInputChange(e, "description")}
          bgClr="transparent"
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <Button width="177px" onClick={handleSave}>Save</Button>
      <button className="bton">+</button>
    </EducationWrap>
  );
};

export default Education;
