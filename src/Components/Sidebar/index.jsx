import React from "react";
import { SidebarWrap } from "./Sidebar.styles";
import { data } from "./data";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Redirect to the home page or login page
    navigate("/");
  };
  return (
    <SidebarWrap>
      <div className="sidebarHolder">
        <ul>
          {data.map((val, ind) => (
            <li
              key={ind}
              onClick={() => {
                if (val.action === "logout") {
                  handleLogout();
                } else {
                  navigate(val.link);
                }
              }}
            >
              <NavLink to={val.link} activeClassName="active">
                <img src={val.img} alt="images" />
                {val.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrap>
  );
};

export default Sidebar;
