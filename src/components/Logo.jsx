import React from "react";
import blackLogo from "../assets/img/slack-logo.png";
import whiteLogo from "../assets/img/slack-white.png";

export default function Logo({ Default, extraClass }) {
  return (
    <a href="/" className={`site-logo ${extraClass ? extraClass : ""}`}>
      <img src={Default ? whiteLogo : blackLogo} alt="" />
    </a>
  );
}
