import React from "react";
import blackLogo from '../assets/img/slack-logo.png';
import whiteLogo from '../assets/img/slack-white.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [selectAria, setSelectAria] = useState(false);
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
                                aria-expanded="false"
                            >
                                Product
                                <FontAwesomeIcon icon={faChevronRight} />
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
                    <button className="btn-search">
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
                <button className="btn-hamburger mob" aria-expanded="false">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="sidemenu mob">
                    <div className="sidemenu-top flex">
                        <a className="site-logo">
                            <img src={blackLogo} alt="" />
                        </a>
                        <button className="btn-close">
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                    </div>
                    <div className="sidemenu-middle">
                        <nav className="navbar">
                            <ul className="navbar-list">
                                <li className="navbar-item">
                                    <button
                                        className="navbar-anchor navbar-btn"
                                        aria-expanded="false"
                                    >
                                        Product
                                        <FontAwesomeIcon icon={faChevronRight} />

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
                    <div className="sidemenu-bottom">
                        <div className="btn-group">
                            <button className="btn-primary-outline btn btn-lg">Sign in</button>
                            <button className="btn-primary btn btn-lg">Download Slack</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
