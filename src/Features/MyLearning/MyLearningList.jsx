/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
export default function MyLearningList({ item }) {
  return <article className="collection-row"><img src={item.imageUrl} alt="" loading="lazy" /><div className="collection-info"><span className="eyebrow">YOUR LEARNING COLLECTION</span><h3>{item.title}</h3><p>{item.instructor}</p></div>{(item.courseId || item.id) && <Link className="btn btn-outline" to={`/courses/${item.courseId || item.id}`}>View course <FiArrowRight /></Link>}</article>;
}
