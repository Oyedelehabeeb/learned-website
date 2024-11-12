/* eslint-disable react/prop-types */
function SalesLists({ course }) {
  const { title, imageUrl, price, instructor, rating } = course;

  return (
    <div>
      <div className="border rounded-md shadow-lg hover:shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
        <img src={imageUrl} alt="Course" className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
            {title}
          </h3>
          <p className="text-gray-600">{instructor}</p>
          <p className="text-yellow-500 text-lg font-semibold">{price}</p>
          <p className="text-gray-600 font-bold">
            Rating: {rating}
            <span>⭐</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SalesLists;
