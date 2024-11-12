import { useParams } from "react-router-dom";
import { useAllCourses } from "../Services/useAllCourses";
import PageNotFound from "./PageNotFound";
import Loader from "./Loader";

import { formatCurrency } from "./../Utils/helper";

const CourseDetails = () => {
  const { courseId } = useParams();

  const { allCourses, isLoading } = useAllCourses();

  const course = allCourses.find(
    (course) => course.courseId === Number(courseId)
  );

  if (isLoading) return <Loader />;
  if (!course) return <PageNotFound />;

  const {
    title,
    price,
    rating,
    instructor,
    language,
    student,
    description,
    imageUrl: image,
  } = course;

  // function handleAddCartItem() {
  //   const newItem = {
  //     id: courseId,
  //     title,
  //     imageUrl: image,
  //     price,
  //     instructor,
  //     rating,
  //   };
  //   addItemToCart(newItem);
  //   setIsAddedToCart(true);
  // }

  // function handleAddWishlistItem() {
  //   const newItem = {
  //     id: courseId,
  //     title,
  //     imageUrl: image,
  //     price,
  //     instructor,
  //     rating,
  //   };
  //   addWishlistItem(newItem);
  //   setIsAddedToWishlist(true);
  // }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl text-center font-bold">{title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-md shadow-lg"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Instructor: {instructor}
            </h2>

            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold mr-2">Rating:</span>
              <span className="text-yellow-500 text-lg font-bold">
                {rating} ⭐
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Language: {language}</h3>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                Students Enrolled: {student}
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Price: {formatCurrency(price)}
            </h3>
          </div>

          {/* <div className="flex space-x-4">
            {!isAddedToWishlist && (
              <button
                className="flex-grow px-4 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                onClick={handleAddWishlistItem}
                disabled={isAdding2}
              >
                Add to Wishlist
              </button>
            )}

            {!isAddedToCart && (
              <button
                className="flex-grow px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleAddCartItem}
                disabled={isAdding1}
              >
                Add to Cart
              </button>
            )}
          </div> */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Course Description</h3>
        <p className="text-beige border border-solid border-customGray rounded-md bg-customGray p-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
