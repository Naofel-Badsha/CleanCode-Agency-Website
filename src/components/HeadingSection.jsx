import { motion } from "motion/react";
import { fadeInUp, transitions } from "../utils/animations";

const HeadingSection = ({ subheading, heading, description }) => {
  return (
    <div className="text-center mb-12">
      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ ...transitions.default, delay: 0.3 }}
        className="text-[#E3311D] font-semibold uppercase"
      >
        {subheading}
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ ...transitions.default, delay: 0.5 }}
        className="text-3xl lg:text-4xl font-bold text-gray-800 mt-3 sm:w-3/5 leading-normal lg:leading-snug capitalize mx-auto"
      >
        {heading}
      </motion.h2>

      {description && (
        <p className="text-gray-600 mt-4 sm:w-3/5 text-base mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadingSection;
