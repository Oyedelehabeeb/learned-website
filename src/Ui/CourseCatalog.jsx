/* eslint-disable react/prop-types */
import { Link, useSearchParams } from "react-router-dom";
import { FiArrowLeft, FiBookOpen } from "react-icons/fi";
import CourseLists from "./CourseLists";
import FeaturedCourse from "./FeaturedCourse";
import InstructorsLists from "./InstructorsLists";
import Pagination from "./Pagination";
import InstructorsPagination from "./InstructorsPagination";
import Loader from "./Loader";
import QueryError from "./QueryError";

export default function CourseCatalog({ title, description, subject, slug, courses = [], count = 0, instructors = [], instructorCount = 0, featured, loading, instructorsLoading, error, onRetry, instructorsError, onRetryInstructors }) {
  const [params, setParams] = useSearchParams();
  const sort = params.get("sortBy") || "price-asc";
  const [field, direction] = sort.split("-");
  const sorted = [...courses].sort((a, b) => (Number(a[field]) - Number(b[field])) * (direction === "desc" ? -1 : 1));
  const spotlight = Array.isArray(featured) ? featured[0] : featured;
  return <div className="catalog-page"><Link className="back-link" to={`/${slug}/${slug}-hero`}><FiArrowLeft />{subject}</Link><header className="page-heading catalog-heading"><span className="eyebrow">MAKE YOUR NEXT MOVE</span><h1>{title}</h1><p>{description}</p><span className="catalog-count"><FiBookOpen />{loading ? "Discover your next skill" : `${count} courses to explore`}</span></header><section aria-label="Available courses"><div className="section-heading"><h2>Find your next course</h2><div className="catalog-sort"><label htmlFor="course-sort">Sort by</label><select id="course-sort" value={sort} onChange={event => { const next = new URLSearchParams(params); next.set("sortBy", event.target.value); setParams(next); }}><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="rating-desc">Highest rated</option><option value="rating-asc">Rating: low to high</option></select></div></div>{error ? <QueryError onRetry={onRetry} /> : loading ? <Loader /> : sorted.length ? <><div className="catalog-grid">{sorted.map(course => <CourseLists key={course.courseId} course={course} />)}</div><Pagination count={count} /></> : <div className="empty-state"><FiBookOpen /><h2>No courses here yet.</h2><p>Explore another learning path to find your next skill.</p><Link className="btn btn-outline" to={`/${slug}/${slug}-hero`}>Explore {subject.toLowerCase()}</Link></div>}</section>{spotlight && <section className="catalog-section"><div className="section-heading"><h2>In the spotlight</h2><span>A course worth a closer look</span></div><FeaturedCourse featured={spotlight} /></section>}<section className="catalog-section"><div className="section-heading"><h2>Meet your instructors</h2><span>Learn from a fresh perspective</span></div>{instructorsError ? <QueryError onRetry={onRetryInstructors} /> : instructorsLoading ? <Loader /> : instructors.length ? <><div className="instructor-grid">{instructors.map(instructor => <InstructorsLists key={instructor.instructorId} instructor={instructor} />)}</div><InstructorsPagination count={instructorCount} /></> : <p className="empty-message">Instructor profiles will appear here when available.</p>}</section></div>;
}
