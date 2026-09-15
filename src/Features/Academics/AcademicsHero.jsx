import { FaFlask, FaStethoscope, FaFileMedical, FaBone } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const academicPaths = [
    {
      title: "Clinical Research",
      description:
        "Master the fundamentals of clinical research methodology and data analysis",
      icon: FaFlask,
      path: "/academics/clinical-research",
      subjects: ["Research Methods", "Data Analysis", "Ethics"],
    },
    {
      title: "Medical Coding",
      description:
        "Learn medical coding systems and healthcare documentation standards",
      icon: FaStethoscope,
      path: "/academics/medical-coding",
      subjects: ["ICD-10", "CPT Codes", "Healthcare"],
    },
    {
      title: "Research Paper Writing",
      description:
        "Develop advanced academic writing and research publication skills",
      icon: FaFileMedical,
      path: "/academics/research-paper-writing",
      subjects: ["Academic Writing", "Citations", "Methodology"],
    },
    {
      title: "Anatomy",
      description: "Explore human anatomy and physiological systems in detail",
      icon: FaBone,
      path: "/academics/anatomy",
      subjects: ["Human Body", "Physiology", "Medical Terms"],
    },
  ];
export default function AcademicsHero() { return <CategoryExplore title="Teaching & academics" description="Deepen your knowledge with courses in research, medical sciences, and academic writing." paths={academicPaths} />; }
