import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiStar, FiUsers, FiBookOpen } from "react-icons/fi";
import { useAllInstructors } from "../Services/useAllInstructors";
import EmptyState from "./EmptyState";
import Loader from "./Loader";
export default function InstructorsDetails() {
  const { instructorId } = useParams();
  const { allInstructors = [], isLoading } = useAllInstructors();
  if (isLoading) return <Loader />;
  const instructor = allInstructors.find(item => String(item.instructorId) === String(instructorId));
  if (!instructor) return <EmptyState icon={FiUsers} title="This profile isn’t available." description="Head back to discover and explore another learning path." />;
  return <div><Link className="back-link" to="/home"><FiArrowLeft />Back to discover</Link><header className="instructor-profile"><img src={instructor.avatarUrl} alt={instructor.name} /><div><span className="eyebrow">MEET YOUR INSTRUCTOR</span><h1>{instructor.name}</h1><p>{instructor.instructorTitle || instructor.title}</p><div className="detail-metadata">{instructor.rating && <span><FiStar />{instructor.rating} rating</span>}{instructor.numCourse && <span><FiBookOpen />{instructor.numCourse} courses</span>}{instructor.students && <span><FiUsers />{instructor.students} learners</span>}</div></div></header><section className="course-description"><span className="eyebrow">A FRESH PERSPECTIVE</span><h2>About {instructor.name?.split(" ")[0]}</h2><p>{instructor.description || "Explore their courses to discover your next learning opportunity."}</p></section></div>;
}
