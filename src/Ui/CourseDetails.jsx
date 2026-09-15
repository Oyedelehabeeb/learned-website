import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiStar, FiGlobe, FiUsers, FiBookOpen } from "react-icons/fi";
import { useAllCourses } from "../Services/useAllCourses";
import CourseLists from "./CourseLists";
import EmptyState from "./EmptyState";
import Loader from "./Loader";
export default function CourseDetails() {
  const { courseId } = useParams();
  const { allCourses = [], isLoading } = useAllCourses();
  if (isLoading) return <Loader />;
  const course = allCourses.find(item => String(item.courseId) === String(courseId));
  if (!course) return <EmptyState icon={FiBookOpen} title="We couldn’t find that course." description="Explore another subject and find something you’ll love learning." />;
  return <div className="course-detail-page"><Link className="back-link" to="/home"><FiArrowLeft />Back to discover</Link><div className="course-detail-grid"><section><header className="page-heading"><span className="eyebrow">A NEW PERSPECTIVE STARTS HERE</span><h1>{course.title}</h1><p>With {course.instructor}</p></header><div className="detail-metadata"><span><FiStar />{course.rating} rating</span>{course.language && <span><FiGlobe />{course.language}</span>}{course.student && <span><FiUsers />{course.student} learners</span>}</div><section className="course-description"><span className="eyebrow">TAKE A CLOSER LOOK</span><h2>About this course</h2><p>{course.description || "Explore this course and build the skills to take your next step."}</p></section><aside className="learning-note"><FiBookOpen /><h2>Make room for your next skill.</h2><p>Save this course to your wishlist or add it to your cart when you’re ready to begin.</p></aside></section><aside className="course-purchase"><CourseLists course={course} /><p>Review your selection in the cart before checkout.</p></aside></div></div>;
}
