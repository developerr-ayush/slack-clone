import React from "react";
import blackLogo from '../assets/img/slack-logo.png';
import whiteLogo from '../assets/img/slack-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faNavicon, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <header className="header sticky">
            <div className="header-wrap container flex">
                <a href="/" className="site-logo">
                    <img src={whiteLogo} alt="" />
                </a>
                <nav className="navbar web">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <button
                                className="navbar-anchor navbar-btn"
                                ariaExpanded="false"
                            >
                                Product
                            </button>
                            <ul className="navbar-subnav">
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Features
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Channels
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Integration
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Security
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Slack Connect
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Customers
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-anchor">
                                Solutions
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-anchor">
                                Enterprise
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-anchor">
                                Resources
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="navbar-anchor">
                                Pricing
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="search-wrap">
                    <button className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                <nav className="navbar web">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="/" className="navbar-anchor">Sign in</a>
                        </li>
                    </ul>
                </nav>
                <div className="btn-group web">
                    <button className="btn-outline-primary btn">Sign in</button>
                    <button className="btn-primary btn">Download Slack</button>
                </div>
                <button className="btn-hamburger mob" ariaExpanded="false">
                    <FontAwesomeIcon icon={faBars} />

                </button>
                <div className="sidemenu mob">
                    <div className="header-sidemenu-top">
                        <a className="site-logo">
                            <img src={blackLogo} alt="" />
                        </a>
                        <button className="btn-close"><span className="icon">Close</span></button>
                    </div>
                    <div className="header-sidemenu-middle">
                        <nav className="navbar">
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <button
                                        className="navbar-anchor navbar-btn"
                                        ariaExpanded="false"
                                    >
                                        Product
                                    </button>
                                    <ul className="navbar-subnav">
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Features
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Channels
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Integration
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Security
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Slack Connect
                                            </a>
                                        </li>
                                        <li className="navbar-item">
                                            <a href="/" className="navbar-anchor">
                                                Customers
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Solutions
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Enterprise
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Resources
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Pricing
                                    </a>
                                </li>
                                <li className="navbar-item">
                                    <a href="/" className="navbar-anchor">
                                        Sign in
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-sidemenu-bottom">
                        <div className="btn-group">
                            <button className="btn-outline-primary btn">Sign in</button>
                            <button className="btn-primary btn">Download Slack</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
