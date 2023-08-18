import ProjectItem from "./ProjectItem";
import { Link } from "react-router-dom";

import budie from "../assets/budie-app.png";
import movo from "../assets/movo.png";

import ultra from "../assets/ultra.png";

import linkImg from "../assets/link.svg";
import github from "../assets/github.svg";

export default function Projects() {
  return (
    <div className="font1">
      <div className="projects">
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

        <ProjectItem
          img={ultra}
          tech="React, TailwindCSS"
          title="03. ULTRA"
          description="This is the landing page for a financial company. It showcases their products, services, etc."
          link="https://kereniy.github.io/ultra/"
          github="https://github.com/kerenIy/ultra"
        />
      </div>
    </div>
  );
}
