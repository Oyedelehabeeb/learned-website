function PopularCourses() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Card */}
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        <div className="border rounded shadow-sm overflow-hidden hover:border-l-slate-400 hover:shadow-lg">
          <img
            src="/path/to/course-image.jpg"
            alt="Course"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Course Name</h3>
            <p className="text-gray-700">By Instructor Name</p>
            <p className="text-yellow-500 font-bold">$19.99</p>
          </div>
        </div>
        {/* Repeat this block for more courses */}
      </div>
    </section>
  );
}

export default PopularCourses;
