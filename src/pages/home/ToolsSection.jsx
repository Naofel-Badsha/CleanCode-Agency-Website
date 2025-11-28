import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import HeadingSection from "../../components/HeadingSection";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements.",
  },
  {
    icon: FiCode,
    title: "Developer-Friendly",
    description: "Optimized for developers with clean and efficient code.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Build tools that look great on any device and screen size.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with cloud services for better productivity.",
  },
];

const ToolsSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      {/*--------------heading-section---------------*/}
      <HeadingSection
        heading="All-in-One Solution for Your Projects"
        subheading="The tools you need"
      />

      {/*-----------render---------tools-------here------------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition cursor-pointer"
          >
            <tool.icon className="text-[#E3311D] text-4xl mb-4" />
            <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
            <p className="text-gray-600 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>

      {/*----------------button----------------*/}
      <div className="text-center">
        <button className="bg-[#E3311D] text-white px-6 py-3 rounded-md  hover:bg-[#1F2937] transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
