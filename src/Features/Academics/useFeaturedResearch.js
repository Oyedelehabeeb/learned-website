import { useQuery } from "@tanstack/react-query";
import { getFeaturedResearchPaper } from "../../Services/apiFeaturedCourses";

export function useFeaturedResearchPaper(id) {
  const {
    data: featuredResearchPaper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-research", id],
    queryFn: () => getFeaturedResearchPaper(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredResearchPaper, isLoading, error };
}
