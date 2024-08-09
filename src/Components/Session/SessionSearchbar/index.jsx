import React from "react";
import { SearchbarHolder } from "./SessionSearchbar.styles";
import Button from "../../Button";
import { FaAngleRight } from "react-icons/fa6";
import SearchBar from "../../TextField/SearchBar";
const SessionSearchbar = ({createHandle}) => {
  return (
    <SearchbarHolder>
      <div className="search">
        <div className="filter">
          <Button type="white" width="209px">
            Filter <FaAngleRight />
          </Button>
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
      </div>
      <Button width="207px" onClick={createHandle}>Create Session</Button>
    </SearchbarHolder>
  );
};

export default SessionSearchbar;
