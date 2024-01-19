import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";

import budie from "../assets/budie-app.png";
import movo from "../assets/movo.png";

import ultra from "../assets/ultra.png";

import kiasup from "../assets/kiasup.jpg"

import linkImg from "../assets/link.svg";
import github from "../assets/github.svg";

export default function Projects() {
  return (
    <div className="font1">
      <div className="projects">
        <ProjectItem
          img={kiasup}
          tech="React, TailwindCSS"
          title="01. Kiasup"
          description="Kaisup is a dynamic platform dedicated to connecting artisans, service providers, freelancers, and small-scale workers with clients seeking their expertise."
          link="https://www.kiasup.com/"
          github="https://www.kiasup.com/"
        />

        <ProjectItem
          img={movo}
          tech="HTML, CSS, JS"
          title="01. MOVO"
          description="Movo is an application that allows users get recommendations for movies based on whatever genres they choose"
          link="https://movo-app-kereniy.vercel.app/"
          github="https://github.com/kerenIy/movo-project"
        />

        <ProjectItem
          img={budie}
          tech="React, TailwindCSS"
          title="02. BUDIE"
          description="This is a web and mobile application that allows users track their expenses and make budgets"
          link="https://budie-app.vercel.app/"
          github="https://github.com/kerenIy/budie-app"
        />
      </div>
    </div>
  );
}
