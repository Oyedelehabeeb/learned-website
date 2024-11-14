import { Link } from "react-router-dom";
import { useUser } from "./../Authentication/useUser";

function Home() {
  const { user } = useUser();
  const fullname = user?.user_metadata?.fullname;
  const fullName = user?.user_metadata?.fullName;
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-customGray to-darkGray py-6 text-white text-center">
        <h1 className="text-4xl font-bold">
          Welcome, {fullname ? fullname : fullName}!
        </h1>
        <p className="text-xl mt-2">Explore your course categories below.</p>
      </header>

      {/* course categories */}
      <section className="bg-white">
        <div className="pt-8 container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Course Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">Development</h3>
              <p className="text-white mt-2">
                Learn the latest technologies in web and software development.
              </p>
              <Link
                to="/development"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">Design</h3>
              <p className="text-white mt-2">
                Master design principles and tools to create stunning visuals.
              </p>
              <Link
                to="/design"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">Marketing</h3>
              <p className="text-white mt-2">
                Learn effective marketing strategies to grow your business.
              </p>
              <Link
                to="/marketing"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">Business</h3>
              <p className="text-white mt-2">
                Develop essential business skills and strategies.
              </p>
              <Link
                to="/business"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">
                Health & Fitness
              </h3>
              <p className="text-white mt-2">
                Enhance your well-being with fitness and nutrition courses.
              </p>
              <Link
                to="/fitness"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">
                Accounting & Finance
              </h3>
              <p className="text-white mt-2">
                Learn financial principles and accounting practices.
              </p>
              <Link
                to="/finance"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>

            <div className="category-card bg-gradient-to-r from-customGray to-darkGray p-6 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <h3 className="text-lg font-semibold text-white">
                Teaching & Academics
              </h3>
              <p className="text-white mt-2">
                Enhance your teaching skills and academic knowledge.
              </p>
              <Link
                to="/academics"
                className="mt-4 inline-block bg-darkGray hover:bg-beige hover:text-customGray text-white py-2 px-4 rounded hover:bg-lightGray transition"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
