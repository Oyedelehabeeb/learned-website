import { useQuery } from "@tanstack/react-query";
import { getFeaturedGameDevelopment } from "../../Services/apiFeaturedCourses";

export function useFeaturedGameDev() {
  const { data: featuredGameDev, isLoading } = useQuery({
    queryKey: ["featured-game-dev"],
    queryFn: getFeaturedGameDevelopment,
  });
  return { featuredGameDev, isLoading };
}
