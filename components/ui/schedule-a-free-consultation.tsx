import { FaCalendarAlt } from "react-icons/fa";

const ScheduleFreeConsultation = () => {
  return (
    <div className="bg-[#2a133f] py-10">
      <div className="container mx-auto flex justify-between items-center rounded-lg px-6 bg-[#3e1d72] py-7">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Schedule a Free Consultation
          </h2>
          <p className="text-gray-400 mt-2">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg">
            <FaCalendarAlt />
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleFreeConsultation;
