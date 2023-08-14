import SectionTitle from "../components/SectionTitle";

import html from "../assets/html-logo.png";
import css from "../assets/css-logo.png";

import js from "../assets/js-logo.png";
import react from "../assets/react-logo.png";

import git from "../assets/git-logo.png";
import tailwind from "../assets/tailwind-logo.svg";
import figma from "../assets/figma_logo.svg";
import Experience from "./Experience";
import Projects from "./Projects";

export default function Skills() {
  return (
    <div className="box-margin font1 desk-margin">
      <SectionTitle title="TECHNOLOGY & TOOLS" />

      <div className="technologies">
        <div>
          <img src={html} alt="" />
          <p>Html5</p>
        </div>
        <div>
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>

        <div>
          <img src={css} alt="" />
          <p>CSS3</p>
        </div>

        <div>
          <img src={react} alt="" />
          <p>React</p>
        </div>

        <div>
          <img src={tailwind} alt="" />
          <p> TailwindCSS</p>
        </div>
        <div>
          <img src={git} alt="" />
          <p>Git</p>
        </div>

        <div>
          <img src={figma} alt="" />
          <p>Figma</p>
        </div>
      </div>
      <br />
      <SectionTitle title="work experience" />
      <Experience
        role="Jnr Front End Engineer"
        company=" /Dexter Digital Technologies"
        timeline="Jan 2023 - Jun 2023"
        description="As a junior front-end developer, 
         I played a crucial role in building and designing
         web pages and applications. Utilizing my skills in HTML, 
         JavaScript, CSS, and React.js, I created visually appealing
         and functional interfaces. Additionally, I gained experience
         working with external APIs,further enhancing the interactivity
          and dynamic capabilities of the projects I contributed to."
      />

      <SectionTitle title="projects" />
      <Projects />

      <br />
    </div>
  );
}
