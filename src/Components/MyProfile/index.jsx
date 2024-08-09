import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import RightSideBar from "../rightSideBar";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import { Educationdata, Experiencedata } from "../../Constant/Data";
import Certificate from "./Certificate";
const MyProfile = ({formData}) => {
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile formData={formData}/>
        <About formData={formData}/>
        <Analysis />
        <Skills formData={formData}/>
        <Education data={formData?.coachingExperience} />
        <Education data={formData?.educationDetails} />
        <Certificate  data={formData}/>
        <Rating />
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
    </ProfileWrapper>
  );
};

export default MyProfile;
