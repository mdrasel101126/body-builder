import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-icon">
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
      <h2>BODY BUILDER</h2>
    </nav>
  );
};

export default Header;
