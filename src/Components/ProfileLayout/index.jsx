import React, { useState, useEffect } from "react";
import Header from "../Header/index";
import { MainLayoutSection } from "./ProfileLayout.styles";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../Sidebar";
import CustomSideBar from "../Sidebar/CustomeSideBar";

const ProfileLayout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(
    window.innerWidth >= 992
  );
  const [showCustomSidebar, setShowCustomSidebar] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (location.pathname.includes("/calendar")) {
      setShowCustomSidebar(true);
    } else {
      setShowCustomSidebar(false);
    }
  }, [location]);

  return (
    <MainLayoutSection $sidebarVisible={sidebarVisible}>
      <div className="mainHeader">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="mainSidebarContent">
        <div className="mainSidebar">
        {showCustomSidebar ? <CustomSideBar /> : <SideBar />}
         
         
        </div>
        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </MainLayoutSection>
  );
};

export default ProfileLayout;
