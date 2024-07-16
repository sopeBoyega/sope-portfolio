import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";
import budie from "../assets/budie-app.png";
import movo from "../assets/movo.png";

import veskee from "../assets/veskee.png";

import ultra from "../assets/ultra.png";

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
              <h3>01. FACIER</h3>
              <img src={facier} alt="" className="project-img" />
              <p>
                Facier is a facial-recognition based attendance system for
                classrooms. It allows lecturers to capture and track their
                student attendance records using facial recognition.
              </p>

              <div className="project-links ">
                <Link to="https://github.com/kerenIy/fras_system">
                  <button>
                    <img src={github} alt="" className="menu-btn" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ProjectItem
          img={kiasup}
          tech="React, TailwindCSS"
          title="01. Kiasup"
          description="Kiasup is a dynamic platform dedicated to connecting artisans, service providers, freelancers, and small-scale workers with clients seeking their expertise."
          link="https://www.kiasup.com/"
        />

        <ProjectItem
          img={veskee}
          tech="HTML, CSS, JS"
          title="02. VESKEE"
          description="Veskee is a financial application that is revolutionising the economic framework of large establishments through superior software solutions"
          link="https://veskee.com/"
        />

        <ProjectItem
          img={jikoo}
          tech="REACT"
          title="03. JIKOO"
          description="Jikoo is a food delivery application that allows users to order food, and gives food vendors an opportunity to sell their food on a larger marketplace."
          link="https://jikoo.ng/"
        />
        <ProjectItem
          img={ridebuddy}
          tech="REACT"
          title="04. RIDEBUDDY"
          description="This is a web and mobile application that allows users track their expenses and make budgets"
          link="https://ridebuddyinc.com/"
        />
      </div>
    </div>
  );
}
