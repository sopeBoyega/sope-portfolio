import { Link } from "react-router-dom";
import linkImg from "../assets/link.svg";
import github from "../assets/github.svg";

export default function ProjectItem(props) {
  return (
    <div className="projects-spread">
      <div className="card">
        <div className="card-text">
          <h3>{props.title}</h3>
          <img src={props.img} alt="" className="project-img" />
          <p>{props.description}</p>

          <div className="project-links ">
            <Link to={props.link} className="bg-link-black">
              <button>
                <img src={linkImg} alt="" className="menu-btn" />
              </button>
            </Link>

            {/* <Link to={props.github}>
              <button>
                <img src={github} alt="" className="menu-btn" />
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
