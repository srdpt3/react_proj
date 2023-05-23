import React from "react";
import home1 from "../img/home1.jpg";
import { About, Image, Hide, Description } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>To become a champion</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              fight <span>one more</span> round
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> - Muhammad Ali.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for beginner friendly boxing & strength training.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="guy with a camera"
        ></motion.img>
      </Image>
      <Wave></Wave>
    </About>
  );
};

export default AboutSection;
