import React from "react";
import home1 from "../img/home1.png";
import { About, Image, Hide, Description } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
const AboutSection = () => {
  //   const titleAnimation = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1, transition: { duration: 2 } },
  //   };

  //   const container = {
  //     hidden: { x: 100 },
  //     show: {
  //       x: 0,
  //       transition: {
  //         duration: 0.75,
  //         ease: "easeOut",
  //         staggerChildren: 1,
  //       },
  //     },
  //   };

  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>your dreams</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera"></img>
      </Image>
    </About>
  );
};

export default AboutSection;
