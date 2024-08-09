import React, { useState } from 'react';
import { DropdownWrap } from './Dropdown.styles';
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ label, options, setOptions, width }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckboxChange = (index) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const getSelectedOptionsText = () => {
    return options.filter(option => option.checked).map(option => option.label).join(", ") || "Select...";
  };

  return (
    <DropdownWrap $width={width}>
      <label>
        {label}
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={toggleDropdown}
          >
            {getSelectedOptionsText()}
            <RiArrowDropDownLine size={24} />
          </div>
          {dropdownOpen && (
            <div className="dropdown">
              {options.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() => handleCheckboxChange(index)}
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </label>
    </DropdownWrap>
  );
};

export default Dropdown;
