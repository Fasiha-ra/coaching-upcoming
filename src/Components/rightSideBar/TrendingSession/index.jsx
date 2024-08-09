import React from "react";
import { TrendingSessionWrap } from "./trending.styles";
import { IoIosArrowForward } from "react-icons/io";
import { serverDomain } from "../../../Constant/serverDomain";

const TrendingSession = ({title, data}) => {
  return (
    <TrendingSessionWrap>
     <div className="wrapper">
     <div className="headingWrapper">
        <h5>{title}</h5>
        <div className="arrowIcon">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="cardHodler">
        {data?.map((value, index) => (
          <div className="card" key={index}>
            <img src={`${serverDomain}${value.image}`} alt="session" />
            <h5>{value.title}</h5>
          </div>
        ))}
      </div>
     </div>
    </TrendingSessionWrap>
  );
};

export default TrendingSession;
