import HeadingSection from "../../components/HeadingSection";
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";
import { motion } from "motion/react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description:
      "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
  },
  {
    icon: FiCompass,
    title: "Developer-Friendly",
    description:
      "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
  },
  {
    icon: FiActivity,
    title: "Responsive Design",
    description:
      "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
  },
  {
    icon: FiTruck,
    title: "Cloud Integration",
    description:
      "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
  },
];

const Services = () => {
    useEffect(() => {
      AOS.init({ duration: "2000" });
    }, []);

  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeadingSection
        heading="Explore our range of professional services tailored to meet your business needs."
        subheading="Services"
        description="Explore our range of professional services designed to support your business growth. From web development to branding and digital strategy, we provide customized solutions that enhance performance, strengthen online presence, and deliver long-term success.!"
      />

      {/*--------------services----------container-----------------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16">
        {services.map((service, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer"
          >
            <service.icon className="text-[#E3311D] text-4xl mb-4" />
            <p className="text-gray-600 mt-2 md:px-10">{service.description}</p>
          </div>
        ))}
      </div>

      {/*------------------button------------------*/}
      <div className="text-center">
        <motion.button
          animate={{ y: [0, 40] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[#E3311D] text-white px-8 py-3 rounded-md  hover:bg-[#1F2937] transition"
        >
          Explore More
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
