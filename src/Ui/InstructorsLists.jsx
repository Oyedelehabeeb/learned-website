/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";
export default function InstructorsLists({ instructor }) {
  const { name, title, rating, avatarUrl, instructorId } = instructor;
  return <Link to={`/instructors/${instructorId}`} className="instructor-card"><img src={avatarUrl} alt="" loading="lazy" /><div><h3>{name}</h3><p>{title}</p><span className="course-rating"><FiStar />{rating}</span></div></Link>;
}
