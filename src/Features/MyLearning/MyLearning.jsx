import { Link } from "react-router-dom";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";
import { useSession } from "../../Services/useSession";
import MyLearningList from "./MyLearningList";
import { useMyLearning } from "./useMyLearning";
import Loader from "../../Ui/Loader";
export default function MyLearning() {
  const { data: session, isLoading: sessionLoading } = useSession();
  const { myLearning = [], isLoading } = useMyLearning(session?.user?.id);
  return <div><header className="page-heading"><span className="eyebrow">KEEP YOUR MOMENTUM</span><h1>My learning</h1><p>Your courses, together in one place. Every step counts.</p></header>{sessionLoading || isLoading ? <Loader /> : myLearning.length ? <div className="learning-list">{myLearning.map(item => <MyLearningList key={item.id || item.courseId} item={item} />)}</div> : <div className="empty-state"><span className="category-icon"><FiBookOpen /></span><h2>Your next chapter is waiting.</h2><p>When you enroll in a course, you’ll find it here.<br />Start by exploring a subject that interests you.</p><Link className="btn btn-primary" to="/home">Explore subjects <FiArrowRight /></Link></div>}</div>;
}
