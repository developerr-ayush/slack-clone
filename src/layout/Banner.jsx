import React from "react";
import bannerVideo from "../assets/video/banner.mp4";
import googleImg from "../assets/img/google.webp";
export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="even-column">
            <div className="content-section">
              <h2 className="title">
                <span className="white">Made for People.</span>
                <span className="yellow">Built for productivity.</span>
              </h2>
              <p>
                Connect the right people, find anything that you need and
                automate the rest. That’s work in Slack, your productivity
                platform.
              </p>
              <div className="login-wrap">
                <button className="btn-fill btn">
                  Sign up with email address
                </button>
                <button className="btn-fill btn btn-google">
                  <img src="googleImg" alt="" className="google-icon" />
                  Sign up with google
                </button>
              </div>
            </div>
            <div className="visual-section">
              <video src={bannerVideo}></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
