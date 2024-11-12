/* eslint-disable react/prop-types */
function MyLearningList({ item }) {
  const { title, instructor, imageUrl } = item;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Example Course Card */}
      <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
        <img
          src={imageUrl}
          alt={instructor}
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">Instructor: {instructor}</p>
          <p className="text-gray-600">Progress: 40%</p>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export default MyLearningList;
