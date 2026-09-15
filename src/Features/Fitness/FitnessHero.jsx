import { FaDumbbell, FaAppleAlt, FaBrain } from "react-icons/fa";
import CategoryExplore from "../../Ui/CategoryExplore";
const fitnessPaths = [
    {
      title: "Fitness & Exercise",
      description:
        "Build strength, endurance, and achieve your physical fitness goals",
      icon: FaDumbbell,
      path: "/fitness/fitness-health",
      aspects: ["Strength Training", "Cardio", "Flexibility", "Recovery"],
    },
    {
      title: "Nutrition & Diet",
      description:
        "Learn optimal nutrition strategies for health and performance",
      icon: FaAppleAlt,
      path: "/fitness/nutrition",
      aspects: ["Meal Planning", "Supplements", "Weight Management"],
    },
    {
      title: "Mental Health",
      description:
        "Develop mental resilience and emotional well-being practices",
      icon: FaBrain,
      path: "/fitness/mental-health",
      aspects: ["Stress Management", "Mindfulness", "Sleep Health"],
    },
  ];
export default function FitnessHero() { return <CategoryExplore title="Health & fitness" description="Explore movement, nutrition, and mental wellbeing for a healthier everyday life." paths={fitnessPaths} />; }
