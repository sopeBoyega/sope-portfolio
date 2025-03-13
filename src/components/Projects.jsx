import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import budie from "../assets/budie-app.png";
import movo from "../assets/movo.png";

import veskee from "../assets/veskee.png";

import soundmind from "../assets/soundmind.png";
import tomato from "../assets/tomato.png";

import kiasup from "../assets/kiasup.jpg";
import jikoo from "../assets/jikoo.png";
import ridebuddy from "../assets/ridebuddy.png";

import facier from "../assets/facier.png";

import linkImg from "../assets/link.svg";
import github from "../assets/github.svg";

export default function Projects() {
  return (
    <div className="font1">
      <div className="projects">
        <div className="projects-spread">
          <div className="card">
            <div className="card-text">
              <h3>01. SoundMind</h3>
              <img src={soundmind} alt="" className="project-img" />
              <p>
                SoundMind is a mental wellness platform designed to provide
                users with accessible mental health support through various
                features The platform emphasizes quick access to therapy,
                transparency in tracking progress, and robust community support,
                all while ensuring user data is encrypted and secure. To get
                started, users can create an account, choose a therapist that
                fits their needs, and book their first session, all through the
                platform's user-friendly interface. Overall, SoundMind aims to
                make mental health support more accessible and personalized for
                individuals seeking to improve their well-being.
              </p>

              <div className="project-links ">
                <Link to="https://soundmind-web.vercel.app/">
                  <button>
                    <img src={linkImg} alt="" className="menu-btn" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProjectItem
          img={tomato}
          tech="React,CSS,Node and Express ,MongoDB and Git"
          title="02. Tomato"
          description="Tomato aims to ease the people from having to go through the stress of making their own food for consumption .
Using React(MERN stack) the Website was built .
Tomato offers a wide variety of foods which are delivered within the best possible time"
          link="https://supestores.onrender.com/"
        />
      </div>
    </div>
  );
}
