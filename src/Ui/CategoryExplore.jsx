/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
export default function CategoryExplore({ title, description, paths }) {
  return <div className="explore-page">
    <div className="breadcrumb"><Link to="/home">Discover</Link><span>/</span><span>{title}</span></div>
    <header className="page-heading"><span className="eyebrow">EXPLORE A NEW DIRECTION</span><h1>{title}</h1><p>{description}</p></header>
    <div className="section-heading"><h2>Find your next skill</h2><span>{paths.length} learning paths</span></div>
    <div className="path-grid">{paths.map((path, index) => { const Icon = path.icon; return <Link className="path-card" to={path.path} key={path.path}>
      <div className="path-card-top"><span className={`category-icon tone-${index % 4}`}><Icon /></span><FiArrowUpRight /></div>
      <h3>{path.title}</h3><p>{path.description}</p><div className="tag-list">{path.subjects?.map(subject => <span key={subject}>{subject}</span>)}</div><span className="text-link">Explore courses <FiArrowRight /></span>
    </Link>; })}</div>
    <aside className="learning-note"><span className="eyebrow">MAKE ROOM FOR GROWTH</span><h2>A little learning. A lot of possibility.</h2><p>Choose a subject that sparks your curiosity and build your skills at your own pace.</p><Link className="text-link" to="/mylearning">Go to my learning <FiArrowRight /></Link></aside>
  </div>;
}
