import { useParams } from "react-router-dom";
import { useAllInstructors } from "../Services/useAllInstructors";
import Loader from "./Loader";

function InstructorsDetails() {
  const { instructorId } = useParams();
  const { allInstructors, isLoading } = useAllInstructors();
  const instructor = allInstructors?.find(
    (instructor) => instructor.instructorId === Number(instructorId)
  );

  const {
    name,
    instructorTitle,
    numCourse,
    students,
    rating,
    description,
    avatarUrl,
  } = instructor || {};

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-8">
        <img
          src={avatarUrl}
          alt={name}
          className="w-40 h-40 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600 mb-4">{instructorTitle}</p>
          <div className="flex gap-6">
            <span className="text-gray-800 font-medium">
              Courses: <strong>{numCourse}</strong>
            </span>
            <span className="text-gray-800 font-medium">
              Students: <strong>{students}</strong>
            </span>
            <span className="text-gray-800 font-medium">
              Rating: <strong>{rating}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Instructor Bio Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About the Instructor</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default InstructorsDetails;
