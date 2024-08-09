import React from "react";
import { RightBarWrapper } from "./RightSideBar.styles";
import Footer from "../Footer";
import UpgradeCourse from "./UpgradeCourse";
import RequestMeeting from "./meeting/RequestMeeting";
import TrendingSession from "./TrendingSession";
import Meeting from "./meeting";
import { TrendingSessionData } from "../../Constant/Data";

const RightSideBar = ({upcomingSessions}) => {
  console.log("upcomingSessions",upcomingSessions)
  return <RightBarWrapper>
    <div className="rightsidebarContent">
            <TrendingSession data={upcomingSessions} title="Upcoming Sessions"/>
          </div>
          <div className="rightsidebarContent">
            <Meeting />
          </div>
          <div className="rightsidebarContent">
            <TrendingSession data={TrendingSessionData} title="Completed Sessions"/>
          </div>
          <div className="rightsidebarContent">
            <RequestMeeting />
          </div>
        <div className="rightsidebarContent">
            <UpgradeCourse />
          </div>
          <div className="rightsidebarContent">
            <Footer />
          </div>
  </RightBarWrapper>;
};

export default RightSideBar;
