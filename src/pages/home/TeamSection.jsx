import HeadingSection from "../../components/HeadingSection";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { Link } from "react-router";

const teamMembers = [
  {
    id: 1,
    image: "https://i.ibb.co/60xXGn3P/image-35.webp",
    name: "John Doe",
    role: "CEO",
    linkedIn: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    facebook: "https://facebook.com/johndoe",
  },
  {
    id: 2,
    image: "https://i.ibb.co/XZmrBcbQ/image-53.webp",
    name: "Jane Smith",
    role: "CTO",
    linkedIn: "https://linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },

  {
    id: 3,
    image: "https://i.ibb.co/R1b8dRb/image-59.webp",
    name: "Mark Johnson",
    role: "Designer",
    linkedIn: "https://linkedin.com/in/markjohnson",
    twitter: "https://twitter.com/markjohnson",
    instagram: "https://instagram.com/markjohnson",
    facebook: "https://facebook.com/markjohnson",
  },
  {
    id: 4,
    image: "https://i.ibb.co/rf1r3g6b/image-52.webp",
    name: "Emily Carter",
    role: "Developer",
    linkedIn: "https://linkedin.com/in/emilycarter",
    twitter: "https://twitter.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    facebook: "https://facebook.com/emilycarter",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-colorBg">
      <div className="section-container">
        <HeadingSection
          heading="Meet The Experts"
          subheading="Our Team"
          description=""
        />

        {/*-----------Team---------Member---------Cards---------------*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h- object-cover hover:scale-110 duration-500"
                />
              </div>
              {/*---------------Content----------------*/}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                {/*--------------Social----------Icons-------------*/}

                <div className="flex space-x-4 mb-5 items-center py-2">
                  <Link
                    className="bg-[#1F2937] p-3 rounded-full hover:bg-[#E3311D] duration-300"
                    to={member.linkedIn}
                  >
                    <FaLinkedinIn className="text-white hover:text-white text-sm" />
                  </Link>

                  <Link
                    className="bg-[#1F2937] p-3 rounded-full hover:bg-[#E3311D] duration-300"
                    to={member.twitter}
                  >
                    <FaTwitter className="text-white hover:text-white text-sm" />
                  </Link>
                  <Link
                    className="bg-[#1F2937] p-3 rounded-full hover:bg-[#E3311D] duration-300"
                    to={member.instagram}
                  >
                    <FaInstagram className="text-white hover:text-white text-sm" />
                  </Link>
                  <Link
                    className="bg-[#1F2937] p-3 rounded-full hover:bg-[#E3311D] duration-300"
                    to={member.facebook}
                  >
                    <FaFacebookF className="text-white hover:text-white text-sm" />
                  </Link>
                </div>

                {/*-----------Contact---------Button--------------*/}
                <button className="bg-[#E3311D] text-white px-6 py-2 rounded-full hover:bg-[#1F2937] transition duration-300">
                  Conatct {member.name.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
