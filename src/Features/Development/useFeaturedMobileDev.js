import { useQuery } from "@tanstack/react-query";
import { getFeaturedMobileDevelopment } from "../../Services/apiFeaturedCourses";

export function useFeaturedMobileDev() {
  const { data: featuredMobileDev, isLoading } = useQuery({
    queryKey: ["featured-mobile-dev"],
    queryFn: getFeaturedMobileDevelopment,
  });
  return { featuredMobileDev, isLoading };
}
