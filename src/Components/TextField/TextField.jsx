"use client";
import React, { useState } from "react";
import {
  IconWrapper,
  InputWrap,
  StyledInput,
  StyledTexfield,
} from "./Texfield.styles";

const TextField = ({
  hasicon,
  placeholder,
  type,
  onChange,
  value,
  label,
  field_Name,
  height,
  variant = "input",
  noMargin,
  bgClr,
  border,
  parentClass,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleField = (e) => {
    setIsClicked(!isClicked);
  };

  return (
    <InputWrap>
      {label && <label htmlFor={field_Name}>{label}</label>}
      <StyledTexfield
        onClick={handleField}
        $hasicon={hasicon}
        $variant={variant}
        $noMargin={noMargin}
        className={parentClass}
        $bgClr={bgClr}
        $border={border}
      >
        <IconWrapper>{hasicon}</IconWrapper>
        {variant === "input" && (
          <StyledInput
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
            autoComplete="off"
          />
        )}

        {variant === "textarea" && (
          <textarea
            {...props}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            id={field_Name}
            autoComplete="off"
          ></textarea>
        )}
      </StyledTexfield>
    </InputWrap>
  );
};

export default TextField;
