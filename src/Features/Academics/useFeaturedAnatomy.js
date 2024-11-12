import { useQuery } from "@tanstack/react-query";
import { getFeaturedAnatomy } from "../../Services/apiFeaturedCourses";

export function useFeaturedAnatomy(id) {
  const {
    data: featuredAnatomy,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-anatomy", id],
    queryFn: () => getFeaturedAnatomy(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredAnatomy, isLoading, error };
}
