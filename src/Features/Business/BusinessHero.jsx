import { FaBriefcase, FaChartLine, FaUserTie } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const businessPaths = [
    {
      title: "Entrepreneur",
      description:
        "Launch and scale your own business with proven entrepreneurial strategies",
      icon: FaBriefcase,
      path: "/business/entrepreneur",
      skills: ["Business Planning", "Startup Strategy", "Innovation"],
    },
    {
      title: "Sales",
      description:
        "Master the art of selling and build high-performing sales teams",
      icon: FaChartLine,
      path: "/business/sales",
      skills: ["Sales Psychology", "Lead Generation", "Negotiation"],
    },
    {
      title: "Management",
      description:
        "Develop leadership skills and manage teams for maximum productivity",
      icon: FaUserTie,
      path: "/business/management",
      skills: ["Team Leadership", "Strategic Planning", "Operations"],
    },
  ];
export default function BusinessHero() { return <CategoryExplore title="Business" description="Turn ambition into action with skills in entrepreneurship, management, and sales." paths={businessPaths} />; }
