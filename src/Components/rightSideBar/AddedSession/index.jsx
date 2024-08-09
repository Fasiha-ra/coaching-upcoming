import React from "react";
import { AddedSessionWrap } from "./AddedSession.styles";
import { AddedData } from "../../../Constant/Data";
const AddedSession = () => {
  return (
    <AddedSessionWrap>
      <div className="wrapper">
        <h4 className="heading">Total Sessions Added</h4>
        {AddedData.map((val, ind) => (
          <div className="wrapper card" key={ind}>
            <h4 className="cardHeading">{val.title}</h4>
            <div className="detail">
              {val.detail.map((val, ind) => (
                <ul key={ind}>
                  <li>
                    <span>{val.subTitle}</span>
                    <span>{val.count}</span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AddedSessionWrap>
  );
};

export default AddedSession;
