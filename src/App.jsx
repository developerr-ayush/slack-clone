import "./assets/scss/style.scss";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";
import Content from "./layout/Content";
import speedVideo from "./assets/video/speed.mp4";
import Work from "./assets/video/work.mp4";
import Team from "./assets/video/team.mp4";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Content
        title="Move faster with your tools in one place"
        para="Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack."
        anchor="Learn more about the Slack platform"
        video={speedVideo}
        reverse
      />
      <Content
        title="Choose how you want to work"
        para="In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live."
        anchor="Learn more about flexible communication"
        video={Work}
      />
      <Content
        title="Bring your team together"
        para="At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        anchor="Learn more about channels"
        video={Team}
        reverse
      />
    </>
  );
}

export default App;
