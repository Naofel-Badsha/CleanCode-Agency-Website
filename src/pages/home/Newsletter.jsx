import { FiArrowRight } from "react-icons/fi";
import HeadingSection from "../../components/HeadingSection";

const Newsletter = () => {
  return (
    <div className="section-container text-center">
      <HeadingSection
        heading="Stay Updated with Our Newsletter"
        subheading=""
        description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar."
      />

      <div className="flex items-center flex-col md:flex-row justify-center gap-4 ">
        <button className="bg-[#E3311D] text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-[#1F2937] transition ">
          <span>Subscribe Now</span>
          <FiArrowRight />
        </button>
        <button className="border border-[#E3311D] px-6 py-3 rounded-md hover:bg-[#E3311D] hover:text-white text-[#E3311D] transition ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
