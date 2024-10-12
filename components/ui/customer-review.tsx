import { BiUpArrowCircle } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

const CustomerReview: React.FC = () => {
  return (
    <div className="container mx-auto text-white py-12">
      {/* Customer Review Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-6">
        {/* Text Section */}
        <div className="flex flex-col justify-center lg:w-1/2 p-6">
          <button className="h-8 w-32 uppercase bg-white text-purple-700 rounded-full mb-6">
            Testimonial
          </button>

          <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-8">
            Customer Review
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Total Review */}
            <div>
              <p className="text-lg font-semibold mb-4">Total Reviews</p>
              <div className="flex items-center gap-2">
                <h3 className="text-4xl lg:text-5xl font-bold">122 K</h3>
                <button className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-3 py-1 rounded-full">
                  <span>24%</span>
                  <BiUpArrowCircle className="text-xl" />
                </button>
              </div>
              <p className="mt-4 text-sm">Pulvinar commodo arcu</p>
            </div>

            {/* Average Rating */}
            <div>
              <p className="text-lg font-semibold mb-4">Average Rating</p>
              <div className="flex items-center gap-2">
                <h3 className="text-4xl lg:text-5xl font-bold">4.8</h3>
                <div className="flex items-center gap-1">
                  <IoIosStar className="text-purple-400 text-xl" />
                  <IoIosStar className="text-purple-400 text-xl" />
                  <IoIosStar className="text-purple-400 text-xl" />
                  <IoIosStar className="text-purple-400 text-xl" />
                  <FaStarHalfAlt className="text-purple-400 text-xl" />
                </div>
              </div>
              <p className="mt-4 text-sm">Pulvinar commodo arcu</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="https://via.placeholder.com/800x500"
            alt="Customer review logo"
            className="object-contain h-72 sm:h-80 lg:h-96 w-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="bg-blue-600 h-[2px] mt-12"></div>
    </div>
  );
};

export default CustomerReview;
