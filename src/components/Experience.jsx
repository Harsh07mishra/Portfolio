import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc";
import style from "./styles/experience.module.css";
import { experiences } from "../constants";

const Experience = () => (
  <div className={style.container}>
    <motion.h1 variants={textVariant()} className={style.title}>
      My Experience
    </motion.h1>
    <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
      Where I've worked -
    </motion.p>
    <div className={style.card_container}>
      {experiences.map((experience, index) => (
        <Tilt key={experience.id} className={style.tilt}>
          <motion.div
            variants={fadeIn("right", "tween", index * 0.8, 0.5)}
            className={style.card_shadow}
          >
            <div className={style.card_overlay}>
              <img
                className={style.overlay_img}
                src={experience.hoverImage}
                alt={experience.title}
                loading="lazy"
              />
            </div>
            <div className={style.card}>
              <div className={style.img_container}>
                <img
                  className={style.img}
                  src={experience.icon}
                  alt={experience.title}
                  loading="lazy"
                />
              </div>
              <p className={style.name}>{experience.title}</p>
              <p className={style.company}>{experience.company}</p>
              <p className={style.duration}>{experience.duration}</p>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  </div>
);

// import React from "react";
// import { motion } from "framer-motion";
// import { Tilt } from "react-tilt";
// import { fadeIn, textVariant } from "../utils/motion";
// import SectionWrapper from "../hoc";
// import style from "./styles/service.module.css";
// import { services } from "../constants";

// const Service = () => (
//   <div className={style.container}>
//     <motion.h1 variants={textVariant()} className={style.title}>
//       My Experience
//     </motion.h1>
//     <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
//       What I can do for you -
//     </motion.p>
//     <div className={style.card_container}>
//       {/* Services card */}
//       {services.map((service, index) => (
//         <Tilt key={service.id} className={style.tilt}>
//           <motion.div
//             variants={fadeIn("right", "tween", index * 0.8, 0.5)}
//             className={style.card_shadow}
//           >
//             <div className={style.card_overlay}>
//               <p className={style.text}>{service.text}</p>
//             </div>
//             <div className={style.card}>
//               <div className={style.img_container}>
//                 <img
//                   className={`${style.img} ${
//                     index === 2
//                       ? "w-28 h-28 lg:w-24 lg:h-24 lg:mb-4 xl:w-[5.5rem] xl:h-[5.5rem] xl:mb-4 xl:mt-4"
//                       : ""
//                   }`}
//                   src={service.icon}
//                   alt={service.title}
//                   loading="lazy"
//                 />
//               </div>
//               <p className={style.name}>{service.title}</p>
//               {/* <p className={style.text}>{service.text}</p> */}
//             </div>
//           </motion.div>
//         </Tilt>
//       ))}
//     </div>
//   </div>
// );

// export default SectionWrapper(Service, "service", "my-0");

export default SectionWrapper(Experience, "experience", "my-0");
