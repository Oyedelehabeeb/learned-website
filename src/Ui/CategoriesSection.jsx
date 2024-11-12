import { NavLink } from "react-router-dom";

function CategoriesSection() {
  return (
    <section className="py-12 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Category Card */}
        <NavLink
          to="/design"
          className="flex flex-col items-center p-4 bg-white shadow-sm rounded"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-lg font-semibold">Design</h3>
        </NavLink>
        <NavLink
          to="/design"
          className="flex flex-col items-center p-4 bg-white shadow-sm rounded"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-lg font-semibold">Design</h3>
        </NavLink>
        <NavLink
          to="/design"
          className="flex flex-col items-center p-4 bg-white shadow-sm rounded"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-lg font-semibold">Design</h3>
        </NavLink>
        <NavLink
          to="/design"
          className="flex flex-col items-center p-4 bg-white shadow-sm rounded"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-lg font-semibold">Design</h3>
        </NavLink>
        <NavLink
          to="/design"
          className="flex flex-col items-center p-4 bg-white shadow-sm rounded"
        >
          <span className="text-5xl mb-4">🎨</span>
          <h3 className="text-lg font-semibold">Design</h3>
        </NavLink>
        {/* Repeat for other categories */}
      </div>
    </section>
  );
}

export default CategoriesSection;
