import { FaLaptopCode, FaPaintBrush, FaPenNib } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const designPaths = [
    {
      title: "Web Design",
      description:
        "Create stunning, responsive websites with modern design principles",
      icon: FaLaptopCode,
      path: "/design/web-design",
      skills: ["HTML/CSS", "Responsive Design", "UI Frameworks"],
    },
    {
      title: "Graphics Design",
      description:
        "Master visual communication through compelling graphic design",
      icon: FaPaintBrush,
      path: "/design/graphics-design-illustration",
      skills: ["Adobe Creative", "Branding", "Visual Identity"],
    },
    {
      title: "UX Design",
      description:
        "Design intuitive user experiences that delight and engage users",
      icon: FaPenNib,
      path: "/design/user-experience-design",
      skills: ["User Research", "Prototyping", "Usability Testing"],
    },
  ];
export default function DesignHero() { return <CategoryExplore title="Design" description="Bring your ideas to life through thoughtful visuals and digital experiences." paths={designPaths} />; }
