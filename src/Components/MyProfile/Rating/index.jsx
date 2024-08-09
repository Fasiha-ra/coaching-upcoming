import React from "react";
import { RatingWrap } from "./Rating.styles";
import stars from "../../../assets/profile/stars.png";
import { RatingData } from "../../../Constant/Data";
const Rating = () => {
  return (
    <RatingWrap>
        <h2>Ratings & Reviews</h2>
        {RatingData.map((val, ind) => (
          <div className="iconWrapper" key={ind}>
            <figure>
              <img src={val.img} alt="icon" />
            </figure>
            <div className="textwrap">
              <strong>{val.title}</strong>
              <figure>
                <img src={stars} alt="stars" />
              </figure>
              <span>{val.para}</span>
            </div>
          </div>
        ))}
    </RatingWrap>
  );
};

export default Rating;
