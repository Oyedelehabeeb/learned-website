import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function WebDesignLists({ course }) {
  const { title, imageUrl, price, instructor, rating, courseId } = course;

  return (
    <NavLink to={`/courses/${courseId}`}>
      <div className="border rounded-md shadow-sm hover:shadow-md overflow-hidden transition-transform duration-300  flex flex-col">
        <img src={imageUrl} alt="Course" className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
            {title}
          </h3>
          <p className="text-gray-600">{instructor}</p>
          <p className="text-forest text-lg font-semibold">{price}</p>
          <p className="text-gray-600 font-bold">
            Rating: {rating} <span className="text-forest">⭐</span>
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default WebDesignLists;
