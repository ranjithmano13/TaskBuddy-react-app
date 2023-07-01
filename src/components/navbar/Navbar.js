import "./navbar.css";
import React, { useState } from "react";
import { MdClear, MdMenu } from "react-icons/md";
import { ProPic,bg } from "../../assets";
import { IconContext } from "react-icons";

const Navbar = ({setIsMenuOpen}) => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = ()=>{
    setToggle(!toggle);
    setIsMenuOpen (toggle);
  }
  return (
    <nav>
      <div className="navbar">
        <div className="nav-header">
          <IconContext.Provider value={{ className: "menu-toggle-icon" }}>
            {toggle ? (
              <MdMenu size={52} onClick={toggleMenu} />
            ) : (
              <MdClear size={52} onClick={toggleMenu} />
            )}
          </IconContext.Provider>

          <h1 className="nav-header gradient-text">Task Buddy</h1>
        </div>
        <div className="nav-menu">
          <button type="button" className="signin-button">
            SignIn
          </button>
          <img src={bg} width={44} height={44} alt="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
