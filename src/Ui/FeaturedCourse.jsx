/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { formatCurrency } from "./../Utils/helper";
function FeaturedCourseList({ featured }) {
  const { imageUrl, title, instructor, description, rating, price, courseId } =
    featured;
  return (
    <>
      <NavLink to={`/courses/${courseId}`}>
        <h2 className="text-2xl font-bold mb-4 mt-10">Featured Courses</h2>

        <div className="mx-auto bg-white shadow-md rounded-lg overflow-hidden md:flex">
          <div className="md:w-1/3">
            <img
              src={imageUrl}
              alt={instructor}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="md:w-2/3 p-6">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

            <p className="text-gray-600 mt-2">{description}</p>

            <div className="flex items-center mt-4">
              <p className="text-gray-600 font-bold">Rating: {rating} ⭐</p>
            </div>

            <p className="text-sm text-gray-500 mt-2">{instructor}</p>

            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-semibold text-gray-800">
                {formatCurrency(price)}
              </p>

              <button className="bg-darkGray text-beige px-4 py-2 rounded-lg hover:bg-beige">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default FeaturedCourseList;
