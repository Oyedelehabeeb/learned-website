import { useQuery } from "@tanstack/react-query";
import { getFeaturedClinicalResearch } from "../../Services/apiFeaturedCourses";

export function useFeaturedClinicalResearch(id) {
  const {
    data: featuredClinicalResearch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-clinical-research", id],
    queryFn: () => getFeaturedClinicalResearch(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredClinicalResearch, isLoading, error };
}
