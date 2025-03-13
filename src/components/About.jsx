import { Link } from "react-router-dom";
import avatar from "../assets/myemoji.png";
import SectionTitle from "./SectionTitle";

import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import hand from "../assets/waving-hand.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { viewRef, inView } = useInView({
    triggerOnce: false, // Animation will trigger only once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        top: 0,
      }}
      animate={{ opacity: 1, x: 0, top: 0 }}
      exit={{
        opacity: 0,
        x: -300,
        top: 0,
      }}
      transition={{ duration: 1 }}
    >
      <div className="box-margin desk-margin font1">
        <img src={avatar} alt="" className="avatar" />

        <div className="about-text">
          <h3 className="job-intro">
            <span>Aspiring Fullstack  engineer</span>
            <span className="span"> & cloud enthusiast.</span>
          </h3>
          <SectionTitle title="ABOUT ME" />
          <p>
            Hey there <img src={hand} alt="" className="about-icon" />, I'm
            Mosope Adegboyega. I'm an Aspiring FullStack Engineer passionate about finding
            the intersection between technology & design.
          </p>
          <p>
            I build attention-grabbing, dynamic and functional user interfaces
            with a variety of tools and technologies.
          </p>
          <p>
            I love learning.Here are a few courses I am currently taking to
            become a better software engineer:
          </p>

          <div className="icons">
            <Link to="https://github.com/sopeBoyega">
              <button>
                <img src={github} alt="" className="menu-btn" />
              </button>
            </Link>

      

            <Link to="https://www.linkedin.com/in/mosopefoluwa-adegboyega-16812a26a/">
              <button>
                <img src={linkedin} alt="" className="menu-btn" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
