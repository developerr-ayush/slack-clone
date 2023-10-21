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
                <button className="btn-primary btn">
                  Sign up with email address
                </button>
                <button className="btn-primary btn btn-google">
                  <img src={googleImg} alt="" className="google-icon" />
                  <span className="btn-text">Sign up with google</span>
                </button>
              </div>
              <h4 className="web">
                Slack is free to try for as long as you like
              </h4>
            </div>
            <div className="visual-section">
              <video src={bannerVideo} autoPlay loop></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
