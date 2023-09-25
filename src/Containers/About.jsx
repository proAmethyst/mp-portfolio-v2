import React from "react";
import "./Style/About.scss";
import me from "../Assets/this-is-me.jpeg";
import { Link } from "react-router-dom";
import Square from "../Components/Square";
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
          <div className="text-box-1">
            <div className="title-box">About Me</div>
            <div className="name-box">Mihai PROFIR</div>
          </div>

          <Square className="moveSquare" />
        </div>
        

        <div className="text-box">

          <div className="content-box">
            I am an ambitious person, open at all what means new, friendly and
            quickly adaptable. I like to be organized, calm and serious but also
            to have an open and friendly attitude. I am punctual and capable to
            quickly analyze certain new and unpredictable situations.
            <br />
            <br />
            I attend the Faculty of Applied Science at the Politehnica
            University of Bucharest and worked as a research assistant in Flow
            Physics department at INCAS.
            <br />
            <br />
            Currently, in parallel with my current job, I am following a
            professional reformation whose purpose is the transition to the IT
            branch along with professional enrichment in this direction. I
            started from scratch acquiring information and skills on the Front
            End development. For the future, along with the enrichment of the
            skills already obtained, I`m heading to learning mobile development
            and backend development. Among the acquired skills are: JavaScript,
            SASS, React and the implementing and use off different CSS
            frameworks such as Bootstrap or Tailwind CSS.
          </div>

          <div className="button-box">
            <Link to="/story" className="story-path" >
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
