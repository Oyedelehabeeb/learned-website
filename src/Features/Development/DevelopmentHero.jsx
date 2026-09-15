import { FaLaptopCode, FaMobileAlt, FaGamepad, FaDatabase } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const developmentPaths = [
    {
      title: "Web Development",
      description: "Build modern, responsive websites and web applications",
      icon: FaLaptopCode,
      path: "/development/web-development",
      technologies: ["React", "Node.js", "JavaScript"],
    },
    {
      title: "Mobile Development",
      description: "Create powerful mobile apps for iOS and Android platforms",
      icon: FaMobileAlt,
      path: "/development/mobile-development",
      technologies: ["React Native", "Flutter", "Swift"],
    },
    {
      title: "Game Development",
      description:
        "Design and develop engaging games and interactive experiences",
      icon: FaGamepad,
      path: "/development/game-development",
      technologies: ["Unity", "C#", "Unreal Engine"],
    },
    {
      title: "Data Science",
      description: "Analyze data and build machine learning models",
      icon: FaDatabase,
      path: "/development/data-science",
      technologies: ["Python", "TensorFlow", "SQL"],
    },
  ];
export default function DevelopmentHero() { return <CategoryExplore title="Development" description="Build your next idea with skills in web, mobile, game development, and data science." paths={developmentPaths} />; }
