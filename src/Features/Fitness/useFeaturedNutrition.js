import { useQuery } from "@tanstack/react-query";
import { getFeaturedNutrition } from "../../Services/apiFeaturedCourses";

export function useFeaturedNutrition() {
  const { data: featuredNutrition, isLoading } = useQuery({
    queryKey: ["featured-nutrition"],
    queryFn: getFeaturedNutrition,
  });
  return { featuredNutrition, isLoading };
}
