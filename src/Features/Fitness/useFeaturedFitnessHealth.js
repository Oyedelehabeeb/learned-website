import { useQuery } from "@tanstack/react-query";
import { getFeaturedFitnessHealth } from "../../Services/apiFeaturedCourses";

export function useFeaturedFitnessHealth() {
  const { data: featuredFitnessHealth, isLoading } = useQuery({
    queryKey: ["featured-fitness-health"],
    queryFn: getFeaturedFitnessHealth,
  });
  return { featuredFitnessHealth, isLoading };
}
