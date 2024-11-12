import { useQuery } from "@tanstack/react-query";
import { getFeaturedInvesting } from "../../Services/apiFeaturedCourses";

export function useFeaturedInvesting(id) {
  const {
    data: featuredInvesting,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-investing", id],
    queryFn: () => getFeaturedInvesting(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredInvesting, isLoading, error };
}
