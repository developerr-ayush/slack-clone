/* eslint-disable react/prop-types */
export default function Content(props) {
  return (
    <>
      <div className="container">
        <div className={props.reverse ? "even-column" : "even-column reverse"}>
          <div className="visual-section">
            <video src={props.video} autoPlay loop></video>
          </div>
          <div className="content-section">
            <h2 className="title">{props.title}</h2>
            <p className="para">{props.para}</p>
            <a href="" className="anchor">
              {props.anchor}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
