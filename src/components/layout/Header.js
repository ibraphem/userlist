import React from "react";
import "./Layout.css";

const Header = ({ keyword }) => {
  return (
    <header>
      <input type="text" placeholder="Search users..." onChange={keyword} />
    </header>
  );
};

export default Header;
