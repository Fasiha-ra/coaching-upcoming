import React, { useState } from "react";
import { SidebarWrap } from "./Sidebar.styles";
import Button from "../Button";
import SearchBar from "../TextField/SearchBar";
import DatePicker from "react-datepicker";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const CustomSideBar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const [toggleDropdownTopic, setToggleDropdownTopic] = useState(false);
  const [toggleDropdownRole, setToggleDropdownRole] = useState(false);
  const handleToggleDropdownType = () => {
    setToggleDropdownType(!toggleDropdownType);
  };
  const handleToggleDropdownTopic = () => {
    setToggleDropdownTopic(!toggleDropdownTopic);
  };
  const handleToggleDropdownRole = () => {
    setToggleDropdownRole(!toggleDropdownRole);
  };
  const today = new Date();
  return (
    <SidebarWrap>
      <div className="btn">
        <Button width="209px">Create Sessions</Button>
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          inline
          minDate={today}
        />
      </div>
      <div className="dropdown">
        <strong onClick={handleToggleDropdownType}>
          Session Type {toggleDropdownType ? (<FaAngleRight />):(<FaAngleDown />)}
        </strong>
        {toggleDropdownType && (
          <div className="dropdownType">
            <span>
              <input type="checkbox" />
              Individual Session
            </span>
            <span>
              <input type="checkbox" />
              Group Session
            </span>
          </div>
        )}

        <strong onClick={handleToggleDropdownTopic}>
          Session Topic {toggleDropdownTopic ? (<FaAngleRight />):(<FaAngleDown />)}
        </strong>
        {toggleDropdownTopic && (
          <div className="dropdownType">
            <span>
              <input type="checkbox" />
              Individual Session
            </span>
            <span>
              <input type="checkbox" />
              Group Session
            </span>
          </div>
        )}
        <strong onClick={handleToggleDropdownRole}>
          Employee Role {toggleDropdownRole ? (<FaAngleRight />):(<FaAngleDown />)}
        </strong>
        {toggleDropdownRole && (
          <div className="dropdownType">
            <span>
              <input type="checkbox" />
              Individual Session
            </span>
            <span>
              <input type="checkbox" />
              Group Session
            </span>
          </div>
        )}
      </div>
    </SidebarWrap>
  );
};

export default CustomSideBar;
