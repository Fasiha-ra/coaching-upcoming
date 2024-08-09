import React from "react";
import { SearchbarWrap } from "./Texfield.styles";
import TextField from "./TextField";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <SearchbarWrap>
      <TextField
        className="input-field"
        parentClass="customClass"
        field_Name="text"
        type="text"
        hasicon={<CiSearch />}
        placeholder="Search"
        border="#ddd"
        bgClr="#fff"
      />
    </SearchbarWrap>
  );
};

export default SearchBar;
