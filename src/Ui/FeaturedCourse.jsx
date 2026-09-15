/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { formatCurrency } from "../Utils/helper";
export default function FeaturedCourse({ featured }) {
  const { imageUrl, title, instructor, description, rating, price, courseId } = featured;
  return <Link to={`/courses/${courseId}`} className="featured-card"><img src={imageUrl} alt="" loading="lazy" /><div><span className="eyebrow">IN THE SPOTLIGHT</span><h3>{title}</h3><p>{description}</p><p className="course-instructor">{instructor}</p><div className="course-meta"><strong>{formatCurrency(price)}</strong><span className="course-rating"><FiStar />{rating}</span></div><span className="text-link">Discover this course <FiArrowRight /></span></div></Link>;
}
