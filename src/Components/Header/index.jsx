import React, { useState } from "react";
import { HeaderWrap, NavigationWrap, ToggleButton } from "./Header.styles";
import MainLogo from "../../assets/header/mainLogo.png";
import { Link } from "react-router-dom";
import navLinks from "./routes";
import { useLocation } from "react-router-dom";
import hamburger from "../../assets/header/hamburger.svg";
import { RxCross2 } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";
const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  const handleNavLinkClick = () => {
    setShowNav(false);
  };
  return (
    <HeaderWrap $navActive={showNav}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={MainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
          <ToggleButton onClick={toggleSidebar}>
            <FaLongArrowAltRight />
          </ToggleButton>
        </div>
        <NavigationWrap $navActive={showNav}>
          {navLinks.map((value, index) => (
            <li key={index}>
              <Link
                to={value.link}
                className={
                  location.pathname === value.link ? "item active" : "item"
                }
                onClick={handleNavLinkClick}
              >
                <div className="item">
                  <div className="icons">
                    <img src={value.icon} alt="header icons" />
                  </div>
                  {value.title}
                </div>
              </Link>
            </li>
          ))}
        </NavigationWrap>
        <div className="hamburgerWrapper" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <RxCross2 size={20} />
          ) : (
            <img src={hamburger} alt="hamburger" />
          )}
        </div>
      </div>
    </HeaderWrap>
  );
};

export default Header;
