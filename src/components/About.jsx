import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        Hey there! I&apos;m{" "}
        <a
          href="https://www.linkedin.com/in/harsh-mishra2003/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Harsh Mishra,
        </a>{" "}
        I am a passionate web developer, designer, and AI/ML enthusiast. I love
        solving problems and creating intuitive, visually appealing
        applications.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1, 1)} className={style.text}>
        With a strong foundation in the MERN stack and problem-solving skills
        sharpened on{" "}
        <a
          href="https://leetcode.com/u/Harsh_2204/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {" "}
          LeetCode
        </a>{" "}
        , I thrive on turning ideas into reality through code.As the Vice
        President of the Technical Club, I actively foster innovation and
        collaboration. I&apos;m always eager to explore new technologies, refine
        my skills, and take on exciting challenges. When I&apos;m not coding,
        you&apos;ll probably find me playing chess!
      </motion.p>
      <motion.p variants={fadeIn("", "", 1.25, 1)} className={style.text}>
        Reach out to me —I&apos;m excited to collaborate!{" "}
        <a
          href="https://drive.google.com/file/d/1fvJ9vD0Elyspt8OV6o1dgGIckEWw9ZyI/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {" "}
          Check out my resume
        </a>{" "}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, "about", "");
