import { Link } from "react-router-dom";
import avatar from "../assets/myemoji.png";
import SectionTitle from "./SectionTitle";

import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import hand from "../assets/waving-hand.png";

export default function About() {
  return (
    <div className="box-margin desk-margin font1">
      <img src={avatar} alt="" className="avatar" />

      <div className="about-text">
        <h3 className="job-intro">
          <span>frontend engineer</span> &{" "}
          <span className="span">cloud enthusiast.</span>
        </h3>
        <SectionTitle title="ABOUT ME" />
        <p>
          Hey there <img src={hand} alt="" className="about-icon" />, I'm
          Ibitein Iyalla. I'm a Front-end Engineer passionate about finding the
          intersection between technology & design.
        </p>
        <p>
          I build attention-grabbing, dynamic and functional user interfaces
          with a variety of tools and technologies.
        </p>
        <p>
          I love learning.Here are a few courses I am currently taking to become
          a better software engineer:
        </p>

        <div className="icons">
          <Link to="https://github.com/kerenIy">
            <button>
              <img src={github} alt="" className="menu-btn" />
            </button>
          </Link>

          <Link to="https://twitter.com/teinsapanda">
            <button>
              <img src={twitter} alt="" className="menu-btn" />
            </button>
          </Link>

          <Link to="https://www.linkedin.com/in/ibitein-iyalla-101449233/">
            <button>
              <img src={linkedin} alt="" className="menu-btn" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
