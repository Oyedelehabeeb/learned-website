import { useQuery } from "@tanstack/react-query";
import { getFeaturedAccounting } from "../../Services/apiFeaturedCourses";

export function useFeaturedAccounting(id) {
  const {
    data: featuredAccounting,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-accounting", id],
    queryFn: () => getFeaturedAccounting(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredAccounting, isLoading, error };
}
