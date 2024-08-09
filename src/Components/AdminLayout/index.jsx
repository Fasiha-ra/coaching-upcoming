import React from "react";
import Header from "../Header/index";
import { MainLayoutSection } from "./adminLayout.styles";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <MainLayoutSection >
      <div className="mainHeader">
        <Header/>
      </div>
      <div className="mainSidebarContent">
        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </MainLayoutSection>
  );
};

export default AdminLayout;
