import React, { useState } from "react";
import { CreateWrapper } from "./createSession.styles";
import backarrow from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import time from "../../../assets/profile/time.png";
import date from "../../../assets/profile/calendar.png";
import Button from "../../Button/index";
import upload from "../../../assets/session/uploadimg.png";
import Dropdown from "../../Dropdown";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import axios from "axios";
import { serverDomain } from "../../../Constant/serverDomain";

const CreateSession = ({ click, onSave, user, data }) => {
  const navigate = useNavigate();

  const [sessionOptions, setSessionOptions] = useState([
    { label: "individual", value: "individual", checked: false },
    { label: "Group Session", value: "Group Session", checked: false },
  ]);

  const [sessionTypeOptions, setSessionTypeOptions] = useState([
    { label: "Talent Management", value: "Talent Management", checked: false },
    { label: "Human Resource", value: "Human Resource", checked: false },
    { label: "Women Empowerment", value: "Women Empowerment", checked: false },
    { label: "Employee Growth", value: "Employee Growth", checked: false },
    { label: "Other", value: "Other", checked: false },
  ]);

  const [sessionRoleOptions, setSessionRoleOptions] = useState([
    { label: "HR", value: "HR", checked: false },
    { label: "Employees", value: "Employees", checked: false },
    { label: "Junior Employees", value: "Junior Employees", checked: false },
    { label: "Managing Staff", value: "Managing Staff", checked: false },
    { label: "Interns", value: "Interns", checked: false },
    { label: "All", value: "All", checked: false },
  ]);

  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [sessionURL, setSessionURL] = useState("");
  const [about, setAbout] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [topics, setTopics] = useState([{ title: "", description: "" }]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [image, setImage] = useState(null);
  const [sessionTitle, setSessionTitle] = useState("");
  const [errors, setErrors] = useState({});

  const handleAddTopic = () => {
    setTopics([...topics, { title: "", description: "" }]);
  };

  const handleTopicChange = (index, field, value) => {
    const newTopics = [...topics];
    newTopics[index][field] = value;
    setTopics(newTopics);
    if (value) {
      setErrors((prev) => ({ ...prev, topics: "" }));
    }
  };

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setImage(file);
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setUploadedImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setErrors((prev) => ({ ...prev, image: "" })); // Clear error if image is uploaded
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("uploadImage").click();
  };

  const handleSave = async () => {
    const newErrors = {};
    if (!image) newErrors.image = "Image is required.";
    if (!sessionTitle) newErrors.sessionTitle = "Session title is required.";
    if (!about) newErrors.about = "About is required.";
    if (!startDate) newErrors.startDate = "Start date is required.";
    if (!startTime) newErrors.startTime = "Start time is required.";
    if (!endDate) newErrors.endDate = "End date is required.";
    if (!endTime) newErrors.endTime = "End time is required.";
    if (!sessionURL) newErrors.sessionURL = "Session URL is required.";
    if (!topics.every((topic) => topic.title && topic.description))
      newErrors.topics = "All topics must have a title and description.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", image);

      const imgResult = await axios.post(`${serverDomain}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newSession = {
        sessionCatId: 1,
        sessionType: sessionOptions
          .filter((option) => option.checked)[0]
          .label.replace(" ", ""),
        title: sessionTitle,
        about,
        startDate,
        startTime,
        endDate,
        endTime,
        image: imgResult.data?.fileUrl,
        sessionInfo: {
          sessionFor: sessionTypeOptions.filter((option) => option.checked),
          sessionForRole: sessionRoleOptions.filter((option) => option.checked),
          sessionURL,
        },
        topics,
        coachId: data?.id || user,
      };

      const res = await axios.post(`${serverDomain}/session`, newSession, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateWrapper>
      <div className="createHolder">
        <div className="backimg">
          <button onClick={click}>
            <img src={backarrow} alt="back" />
          </button>
        </div>
        <div className="createSession">
          <h4 className="title">Create Session</h4>
          <span className="subTtile">
            Add following information to create session
          </span>
          <Dropdown
            width="500px"
            label="Session Type"
            options={sessionOptions}
            setOptions={setSessionOptions}
          />
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Title"
              name="title"
              bgClr="transparent"
              value={sessionTitle}
              onChange={(e) => {
                setSessionTitle(e.target.value);
                if (e.target.value) {
                  setErrors((prev) => ({ ...prev, sessionTitle: "" }));
                }
              }}
            />
            {errors.sessionTitle && (
              <span className="error">{errors.sessionTitle}</span>
            )}
          </div>
          <div className="inputWrapper">
            <TextField
              variant="textarea"
              label="About"
              parentClass="textareaHolder"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
                if (e.target.value) {
                  setErrors((prev) => ({ ...prev, about: "" }));
                }
              }}
            />
            {errors.about && <span className="error">{errors.about}</span>}
          </div>
          <div className="timeWrap">
            <span className="heading">Date & Time</span>
            <div className="flex">
              <div className="start">
                <span className="heading">Start From</span>
                <div className="btnFlex">
                  <div className="inputWrapper">
                    <strong>
                      <img src={date} alt="date" />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                          setStartDate(date);
                          if (date) {
                            setErrors((prev) => ({ ...prev, startDate: "" }));
                          }
                        }}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select Date"
                        minDate={new Date()}
                      />
                    </strong>
                    {errors.startDate && (
                      <span className="error">{errors.startDate}</span>
                    )}
                  </div>
                  <div className="Wrapper">
                    <strong>
                      <img src={time} alt="time" />
                      <TimePicker
                        onChange={(time) => {
                          setStartTime(time);
                          if (time) {
                            setErrors((prev) => ({ ...prev, startTime: "" }));
                          }
                        }}
                        value={startTime}
                        disableClock={true}
                        format="hh:mm a"
                      />
                    </strong>
                    {errors.startTime && (
                      <p className="error">{errors.startTime}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="end">
                <span className="heading">Ends On</span>
                <div className="btnFlex">
                  <div className="inputWrapper">
                    <strong>
                      <img src={date} alt="date" />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => {
                          setEndDate(date);
                          if (date) {
                            setErrors((prev) => ({ ...prev, endDate: "" }));
                          }
                        }}
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select Date"
                        minDate={startDate || new Date()}
                      />
                    </strong>
                    {errors.endDate && (
                      <span className="error">{errors.endDate}</span>
                    )}
                  </div>
                  <div className="Wrapper">
                    <strong>
                      <img src={time} alt="time" />
                      <TimePicker
                        onChange={(time) => {
                          setEndTime(time);
                          if (time) {
                            setErrors((prev) => ({ ...prev, endTime: "" }));
                          }
                        }}
                        value={endTime}
                        disableClock={true}
                        format="hh:mm a"
                      />
                    </strong>
                    {errors.endTime && (
                      <p className="error">{errors.endTime}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="upload">
            <div className="Upload">
              <span className="heading">Upload Image</span>
              <div className="inputWrapper">
                <div className="uploadImage" onClick={handleClick}>
                  <input
                    type="file"
                    id="uploadImage"
                    onChange={handleImageUpload}
                    accept="image/*"
                    hidden
                  />
                  {uploadedImage ? (
                    <div className="uploadPlaceholder">
                      <img src={uploadedImage} alt="uploaded" />
                    </div>
                  ) : (
                    <div className="uploadPlaceholder">
                      <img src={upload} alt="upload" />
                    </div>
                  )}
                </div>
                {errors.image && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "5px",
                      display: "block",
                    }}
                  >
                    {errors.image}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="addTopic">
            <h4 className="title">Add Topics</h4>
            {topics.map((topic, index) => (
              <div className="topic" key={index}>
                <TextField
                  parentClass="inputHolder"
                  className="input-field"
                  field_Name="title"
                  type="text"
                  label={`Title ${index + 1} `}
                  name={`topicTitle${index}`}
                  bgClr="transparent"
                  value={topic.title}
                  onChange={(e) =>
                    handleTopicChange(index, "title", e.target.value)
                  }
                />
                <TextField
                  variant="textarea"
                  label=" Description"
                  parentClass="textareaHolder"
                  value={topic.description}
                  onChange={(e) =>
                    handleTopicChange(index, "description", e.target.value)
                  }
                />
              </div>
            ))}
            {errors.topics && <span className="error">{errors.topics}</span>}
          </div>
          <div className="addMore">
            <Button
              className="addButton"
              width="180px"
              onClick={handleAddTopic}
            >
              <FaPlus /> Add More
            </Button>
          </div>
          <div className="sessionDropdown">
            <h4 className="title">Session Info</h4>
            <div className="flexWrap">
              <div className="drop1">
                <Dropdown
                  width="500px"
                  label="Session For"
                  options={sessionTypeOptions}
                  setOptions={setSessionTypeOptions}
                />
              </div>
              <div className="drop2">
                <Dropdown
                  width="500px"
                  label="Session For Role"
                  options={sessionRoleOptions}
                  setOptions={setSessionRoleOptions}
                />
              </div>
            </div>
          </div>
          <div className="inputWrapper">
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="url"
              type="text"
              label="Session URL"
              name="sessionUrl"
              bgClr="transparent"
              value={sessionURL}
              onChange={(e) => {
                setSessionURL(e.target.value);
                if (e.target.value) {
                  setErrors((prev) => ({ ...prev, sessionURL: "" }));
                }
              }}
            />
            {errors.sessionURL && (
              <span className="error">{errors.sessionURL}</span>
            )}
          </div>

          <Button
            width="230px"
            className="saveSession"
            variant="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </CreateWrapper>
  );
};

export default CreateSession;
