import { useQuery } from "@tanstack/react-query";
import { getFeaturedMentalHealth } from "../../Services/apiFeaturedCourses";

export function useFeaturedMentalHealth() {
  const { data: featuredMentalHealth, isLoading } = useQuery({
    queryKey: ["featured-mental-health"],
    queryFn: getFeaturedMentalHealth,
  });
  return { featuredMentalHealth, isLoading };
}
