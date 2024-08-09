import React, { useEffect, useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { ExperienceWrap } from "./Experience.styles";
import { RiArrowDropDownLine } from "react-icons/ri";

const Experience = ({ formData, setFormData, handleChange, handleSubmit }) => {
  const [description, setDescription] = useState(
    formData?.coachingExperience[0]?.description || ""
  );
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/profile");
  };

  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [yearsDropdownOpen, setYearsDropdownOpen] = useState(false);
  const [error, setError] = useState({
    experience: "",
    years: "",
    description: ""
  });

  const [experienceOptions, setExperienceOptions] = useState([
    { label: "Women Empowerment", value: "WomenEmpowerment", checked: false },
    { label: "Talent Management", value: "TalentManagement", checked: false },
    { label: "Junior Employees", value: "JuniorEmployees", checked: false },
    { label: "Anonymous Forum", value: "AnonymousForum", checked: false },
    {
      label: "Employee Personal Development Program",
      value: "employee",
      checked: false,
    },
    {
      label: "Employee Growth Program",
      value: "Employeesprogram",
      checked: false,
    },
    {
      label: "Other.................................................",
      value: "others",
      checked: false,
    },
  ]);

  const [yearsOptions, setYearsOptions] = useState([
    { label: "00 To 2 Years", value: "yeartwo", checked: false },
    { label: "02 To 05 Years", value: "yearfive", checked: false },
    { label: "05 To 10 Years", value: "yearten", checked: false },
    { label: "10 To 15 Years", value: "yearfiften", checked: false },
    { label: "15+ Years", value: "yearsixteen", checked: false },
  ]);

  const handleCheckboxChange = (index, options, setOptions) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
    setError((prev) => ({ ...prev, experience: "", years: "" })); // Clear error messages
  };

  const toggleDropdown = (setDropdownOpen, otherDropdownSetOpen) => {
    setDropdownOpen((prevState) => !prevState);
    otherDropdownSetOpen(false);
    setError((prev) => ({ ...prev, experience: "", years: "" })); // Clear error messages
  };

  const getSelectedOptionsText = (options) => {
    return (
      options
        .filter((option) => option.checked)
        .map((option) => option.label)
        .join(", ") || "Select..."
    );
  };

  useEffect(() => {
    if (formData.coachingExperience) {
      const titles = formData.coachingExperience?.map((t) => t.title);
      titles.forEach((element) => {
        experienceOptions
          .filter((o) => o.label === element)
          .map((option) => (option.checked = true));
      });
      const years = formData.coachingExperience?.map(
        (y) => y.yearsOfExperience
      );
      years.forEach((elem) => {
        yearsOptions
          .filter((i) => i.label === elem)
          .map((option) => (option.checked = true));
      });
    }

    const selectedTitles = experienceOptions
      .filter((option) => option.checked)
      .map((checked) => checked.label);

    const selectedYears = yearsOptions
      .filter((option) => option.checked)
      .map((checked) => checked.label);

    const data = selectedTitles.map((title, index) => ({
      title,
      yearsOfExperience: selectedYears[index] || "N/A", // Default to "N/A" if no year is selected
      description,
    }));

    setFormData({
      ...formData,
      coachingExperience: data,
    });
  }, [experienceOptions, yearsOptions, description]);

  const handleSave = () => {
    const selectedTitles = experienceOptions.filter((option) => option.checked);
    const selectedYears = yearsOptions.filter((option) => option.checked);

    let newError = {
      experience: "",
      years: "",
      description: ""
    };

    if (selectedTitles.length === 0) {
      newError.experience = "Please select at least one coaching experience.";
    }

    if (selectedYears.length === 0) {
      newError.years = "Please select years of experience.";
    }

    if (description.trim() === "") {
      newError.description = "Please provide a description.";
    }

    if (newError.experience || newError.years || newError.description) {
      setError(newError);
      return;
    }

    setError({
      experience: "",
      years: "",
      description: ""
    });
    // handleSubmit();
    navigate("/education")
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
    if (error.description) {
      setError((prev) => ({ ...prev, description: "" })); // Clear error message when input changes
    }
  };

  return (
    <ExperienceWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="back" />
        <h4 className="heading">Add Coaching Experience</h4>
      </div>
      <p>Add your past or current working position</p>
     <div className="inputWrapper">
     <label>
        Coaching Experience
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() =>
              toggleDropdown(setExperienceDropdownOpen, setYearsDropdownOpen)
            }
          >
            {getSelectedOptionsText(experienceOptions)}
            <RiArrowDropDownLine size={24} />
          </div>
          {experienceDropdownOpen && (
            <div className="dropdown">
              {experienceOptions.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(
                        index,
                        experienceOptions,
                        setExperienceOptions
                      )
                    }
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        {error.experience && <span className="error-message">{error.experience}</span>}
      </label>
     </div>
     <div className="inputWrapper">
     <label>
        Experience in Years
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() =>
              toggleDropdown(setYearsDropdownOpen, setExperienceDropdownOpen)
            }
          >
            {getSelectedOptionsText(yearsOptions)}
            <RiArrowDropDownLine size={24} />
          </div>
          {yearsDropdownOpen && (
            <div className="dropdown">
              {yearsOptions.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(index, yearsOptions, setYearsOptions)
                    }
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        {error.years && <span className="error-message">{error.years}</span>}
      </label>
     </div>
     <div className="inputWrapper">
     <TextField
        variant="textarea"
        label="Description"
        parentClass="textareaHolder"
        value={description}
        onChange={handleInputChange}
      />
      {error.description && <span className="error-message">{error.description}</span>}
     </div>
      <Button width="177px" onClick={handleSave}>
        Save
      </Button>
      <button className="bton">+</button>
    </ExperienceWrap>
  );
};

export default Experience;
