import React from "react";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection></ServiceSection>
      <FaqSection></FaqSection>
    </motion.div>
  );
};

export default AboutUs;
