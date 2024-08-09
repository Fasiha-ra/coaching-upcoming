import React, { useEffect, useState } from "react";
import { CreateWrapper } from "./createSession.styles";
import backarrow from "../../../assets/profile/backarrow.png";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import time from "../../../assets/profile/time.png";
import date from "../../../assets/profile/calendar.png";
import Button from "../../Button/index";
import upload from "../../../assets/home/card.png";
import Dropdown from "../../Dropdown";
import { FaPlus } from "react-icons/fa6";
import { serverDomain } from "../../../Constant/serverDomain";
import axios from "axios";

const EditSession = () => {
  const navigate = useNavigate();

  const  session = useLocation().state?.session;
  console.log(session);
  const [startDate, setStartDate] = useState(session?.startDate);
  const [startTime, setStartTime] = useState(session?.startTime);
  const [sessionURL, setSessionURL] = useState(
    session?.sessionInfo?.sessionURL
  );
  const [about, setAbout] = useState(session?.about);
  const [endDate, setEndDate] = useState(session?.endDate);
  const [endTime, setEndTime] = useState(session?.endTime);
  const [topics, setTopics] = useState(session?.topics);
  const [uploadedImage, setUploadedImage] = useState(session?.image);
  const [image, setImage] = useState(session?.image);
  const [sessionTitle, setSessionTitle] = useState(session?.title);
  const [sessionType, setSessionType] = useState(session?.sessionType);
  const [sessionRole, setSessionRole] = useState(session?.sessionRole);

  const backToView = () => {
    navigate("/viewsession");
  };
  const [sessionOptions, setSessionOptions] = useState([
    {
      label: "Individual Session",
      value: "individual",
      checked: false,
    },
    { label: "Group Session", value: "group", checked: false },
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

  const onSave = async () => {
    const sessionInfo = {
      sessionURL,
      sessionFor: sessionOptions
        .filter((option) => option.checked)
        .map((option) => ({ value: option.value, label: option.label })),
      sessionForRole: sessionRoleOptions
        .filter((option) => option.checked)
        .map((option) => ({ value: option.value, label: option.label })),
      sessionForType: sessionTypeOptions
        .filter((option) => option.checked)
        .map((option) => ({ value: option.value, label: option.label })),
    };
    const newSession = {
      title: sessionTitle,
      image: uploadedImage,
      sessionInfo,
      about,
      topics,
      startDate,
      startTime,
      endDate,
      endTime,
      sessionType: sessionOptions
        .filter((option) => option.checked)
        .map((option) => option.value)
        .join(" "),
    };

    try {
      const res = await axios.put(
        `${serverDomain}/session/${session.id}`,
        newSession,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(newSession);
  };

  console.log("session", session);

  useEffect(() => {
    const newOptions = sessionOptions?.map((option) => {
      // console.log(option?.value, session?.sessionType);
      if (option?.value === session?.sessionType) {
        return { ...option, checked: true };
      }
      return option;
    });
    setSessionOptions(newOptions);

    const newOptions2 = sessionTypeOptions?.map((option, i) => {
      console.log(option);
      console.log(session?.sessionInfo);
      if (
        option?.value ===
        (session?.sessionInfo?.sessionFor[0]?.value ||
          session?.sessionInfo?.sessionForType[0]?.value)
      ) {
        return { ...option, checked: true };
      } else {
        return { ...option, checked: false };
      }
    });
    console.log(newOptions2);
    setSessionTypeOptions(newOptions2);

    const newOptions3 = sessionRoleOptions?.map((option, i) => {
      if (option?.value === session?.sessionInfo?.sessionForRole[i]?.value) {
        return { ...option, checked: true };
      } else {
        return { ...option, checked: false };
      }
    });

    // const newOptions4 = session;
    setSessionRoleOptions(newOptions3);
  }, []);

  return (
    <CreateWrapper>
      <div className="createHolder">
        <div className="backimg">
          <button>
            <img src={backarrow} alt="back" onClick={backToView} />
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
          <TextField
            parentClass="inputHolder"
            className="input-field"
            field_Name="title"
            type="text"
            label="Title"
            name="title"
            placeholder="Change Management : Leading Agile Systems Change Management"
            value={sessionTitle}
            onChange={(e) => setSessionTitle(e.target.value)}
            bgClr="transparent"
          />
          <TextField
            variant="textarea"
            label="About"
            parentClass="textareaHolder"
            placeholder="Change is now and forever."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <div className="timeWrap">
            <span className="heading">Date & Time</span>
            <div className="flex">
              <div className="start">
                <span className="heading">Start From</span>
                <div className="btnFlex">
                  <strong>
                    <img src={date} alt="date" />
                    April 30 2024
                  </strong>
                  <strong>
                    <img src={time} alt="time" />
                    9:00 pm
                  </strong>
                </div>
              </div>
              <div className="end">
                <span className="heading">Ends On</span>
                <div className="btnFlex">
                  <strong>
                    <img src={date} alt="date" />
                    April 30 2024
                  </strong>
                  <strong>
                    <img src={time} alt="time" />
                    9:00 pm
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="uploadimg">
            <span className="heading">Upload Image</span>
            <div className="img">
              <img
                src={
                  session?.image ? `${serverDomain}${session?.image}` : upload
                }
                alt="upload"
              />
            </div>
          </div>
          <div className="topics">
            <span className="heading">Add Topics</span>
            <div className="dropdownFlex">
              <div className="drop">
                <Dropdown
                  width="300px"
                  label="Session For"
                  options={sessionTypeOptions}
                  setOptions={setSessionTypeOptions}
                />
              </div>
              <div className="drop2">
                <Dropdown
                  width="600px"
                  label="Session For Role"
                  options={sessionRoleOptions}
                  setOptions={setSessionRoleOptions}
                />
              </div>
            </div>
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Title 1"
              name="title"
              placeholder="Introduction to talent management"
              value={(topics && topics[0]?.title) || topics[0]}
              onChange={(e) =>
                setTopics((prev) => [...prev, (prev[0].title = e.target.value)])
              }
              bgClr="transparent"
            />
            <TextField
              variant="textarea"
              label="Description"
              parentClass="textareaHolder"
              placeholder="Change is now and forever."
              value={topics[0].description}
              onChange={(e) =>
                setTopics((prev) => [
                  ...prev,
                  (prev[0].description = e.target.value),
                ])
              }
            />
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Title 2"
              name="title"
              placeholder="Introduction to talent management"
              // value={formData.firstName}
              // onChange={handleInputChange}
              bgClr="transparent"
              value={topics[2]}
              onChange={(e) =>
                setTopics((prev) => [...prev, (prev[2] = e.target.value)])
              }
            />
            <TextField
              variant="textarea"
              label="Description"
              parentClass="textareaHolder"
              placeholder="Change is now and forever. It is not optional any more than breathing and sleeping and doing it well is a requirement of organization health. Learning to capture the competitive advantage of a changing landscape is an essential skill for leaders."
              value={topics[1]}
              onChange={(e) =>
                setTopics((prev) => [...prev, (prev[1] = e.target.value)])
              }
            />
            <Button width="180px">
              <FaPlus /> Add More
            </Button>
          </div>
          <div className="info">
            <span className="heading">Session Info</span>
            <TextField
              parentClass="inputHolder"
              className="input-field"
              field_Name="title"
              type="text"
              label="Session URL"
              name="title"
              value={sessionURL}
              onChange={(e) => setSessionURL(e.target.value)}
              bgClr="transparent"
            />
          </div>
          <Button width="240px" onClick={onSave}>
            Save Session
          </Button>
        </div>
      </div>
    </CreateWrapper>
  );
};

export default EditSession;
