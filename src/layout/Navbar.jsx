import React, { useState } from "react";
import blackLogo from "../assets/img/slack-logo.png";
import whiteLogo from "../assets/img/slack-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faClose,
  faCloudDownload,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../components/Search";
import Logo from "../components/Logo";
import NavList from "../components/NavList";

const navigationList = [
  {
    title: "Product",
    subItems: [
      { label: "Features", link: "/" },
      { label: "Channels", link: "/" },
      { label: "Integration", link: "/" },
      { label: "Security", link: "/" },
      { label: "Slack Connect", link: "/" },
      { label: "Customers", link: "/" },
      { label: "Download Slack", link: "/", icon: faCloudDownload },
    ],
  },
  { title: "Solutions", subItems: [{ label: "Solutions", link: "/" }] },
  { title: "Enterprise", subItems: [{ label: "Enterprise", link: "/" }] },
  { title: "Resources", link: "/resource" },
  { title: "Pricing", link: "/" },
];

export default function Navbar() {
  const [sidemenu, setsidemenu] = useState("");

  return (
    <header className="header sticky">
      <div className="header-wrap container flex">
        <Logo Default={true} />
        <NavList extraClass="web" navList={navigationList} />
        <Search />
        <NavList
          extraClass="web"
          navList={[{ title: "Sign Up", link: "/hello" }]}
        />
        {/* <nav className="navbar web">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-anchor">
                Sign in
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="btn-group web">
          <button className="btn-primary-outline btn">Talk to sales</button>
          <button className="btn-primary btn">Try for free</button>
        </div>
        <button
          className="btn-hamburger mob"
          aria-expanded="false"
          onClick={(e) => {
            setsidemenu("active");
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`sidemenu mob ${sidemenu}`}>
          <div className="sidemenu-top flex">
            <Logo Default={false} />

            <button
              className="btn-close"
              onClick={(e) => {
                setsidemenu("");
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="sidemenu-middle">
            <NavList navList={navigationList} />
          </div>
          <div className="sidemenu-bottom">
            <div className="btn-group">
              <button className="btn-primary-outline btn btn-lg">
                Sign in
              </button>
              <button className="btn-primary btn btn-lg">Download Slack</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
