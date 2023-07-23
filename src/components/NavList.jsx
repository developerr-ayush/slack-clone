import React from "react";
import {
  faChevronRight,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";

const Navbar = ({ extraClass, navList }) => {
  console.log(navList);
  return (
    <nav className={`navbar ${extraClass}`}>
      <ul className="navbar-list">
        {navList.map((item, index) => (
          <NavbarItem
            key={index}
            title={item.title}
            subItems={item.subItems}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
