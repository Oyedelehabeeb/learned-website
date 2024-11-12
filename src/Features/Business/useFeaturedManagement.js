import { useQuery } from "@tanstack/react-query";
import { getFeaturedManagement } from "../../Services/apiFeaturedCourses";

export function useFeaturedManagement() {
  const { data: featuredManagement, isLoading } = useQuery({
    queryKey: ["featured-management"],
    queryFn: getFeaturedManagement,
  });
  return { featuredManagement, isLoading };
}
