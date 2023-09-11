import React from "react";
import "./Style/About.scss";
import me from "../Assets/this-is-me.jpeg";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="avatar-box">
          <div className="design-square">
            <div className="avatar">
              <img src={me} alt="me" />
            </div>
          </div>
        </div>

        <div className="text-box">
          <hr />
          <div className="title-box">About Me</div>

          <div className="content-box">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet.
            <br />
            <br />
            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
            ut diam condimentum, vel euismod erat placerat. In iaculis arcu
            eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non
            efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida
            viverra. Fusce vel tempor elit. Proin tempus,.
          </div>

          <div className="button-box">
            <button className="see-more">
              See More
              <svg
                fill="none"
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 19 5.25 5-5.25 5"
                  stroke="rgba(255, 255, 255, 0.80)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
