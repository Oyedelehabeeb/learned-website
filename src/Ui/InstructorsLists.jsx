import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function InstructorsLists({ instructor }) {
  const { name, title, rating, avatarUrl, instructorId } = instructor;
  return (
    <NavLink
      to={`/instructors/${instructorId}`}
      className="flex gap-x-4 justify-between items-center border rounded-lg shadow hover:shadow-lg p-4"
    >
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 object-cover rounded-full"
      />
      <div className="">
        <h3 className="text-xl font-semibold mt-3">{name}</h3>
        <p className="text-gray-600">{title}</p>
        <p className="">
          Rating:{" "}
          <span className="text-gray-600 font-bold">
            {rating} <span>⭐</span>
          </span>
        </p>
      </div>
    </NavLink>
  );
}

export default InstructorsLists;
