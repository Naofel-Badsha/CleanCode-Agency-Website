import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegCirclePlay } from "react-icons/fa6";

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="bg-colorBg">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col-reverse lg:flex-row justify-between items-center gap-20">
        {/*-----------left-------------side----------------*/}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            CleanCode Agency — Elevating Brands with Clean Web Design
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            CleanCode Agency delivers clean, modern, and high-performing web
            designs that help businesses stand out. We combine creativity,
            strategy, and seamless development to elevate your brand and create
            meaningful digital experiences that drive results.!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 lg:justify-start">
            <button className="bg-[#E3311D] text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-[#1F2937] transition">
              <span>Get Started</span>
              <FiArrowRight />
            </button>
            <button className="border border-[#E3311D] px-6 py-3 rounded-md hover:bg-[#E3311D] hover:text-white text-[#E3311D] transition">
              Contact Us
            </button>
          </div>
        </div>

        {/*--------------right-------------side----------------*/}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative ">
          <div className="relative group">
            <img
              src="https://i.ibb.co/jPPY7876/image-14.webp"
              alt="banner image"
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={openModal}
              className="absolute inset-0 flex items-center justify-center rounded-lg group-hover:opacity-75 transition z-0"
            >
              <FaRegCirclePlay className="text-white text-5xl hover:text-[#E3311D] animate-bounce duration-300" />
            </button>
          </div>
        </div>

        {/*----------------Video--Modal-----------------*/}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-white text-lg hover:text-white bg-black px-2 rounded-full"
              >
                &times;
              </button>
              <iframe
                width="540"
                height="315"
                src="https://www.youtube.com/embed/Kb0THChZnTE"
                title="CleanCode Tech Startup Office Tour"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

