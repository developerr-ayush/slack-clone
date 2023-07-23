import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
const NavbarItem = ({ title, subItems, icon, link }) => (
  <li className="navbar-item">
    {subItems ? (
      <button className="navbar-anchor navbar-btn" aria-expanded="false">
        {title}
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    ) : (
      <a href={link} className={`navbar-anchor ${icon ? "navbar-icon" : ""}`}>
        {icon && <FontAwesomeIcon icon={icon} />}
        {title}
      </a>
    )}
    {subItems && (
      <ul className="navbar-subnav">
        {subItems.map((subItem, index) => (
          <li className="navbar-item" key={index}>
            <a
              href={subItem.link}
              className={`navbar-anchor ${subItem.icon ? "navbar-icon" : ""}`}
            >
              {subItem.icon && <FontAwesomeIcon icon={subItem.icon} />}
              {subItem.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default NavbarItem;
