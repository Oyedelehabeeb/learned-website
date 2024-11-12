import { useQuery } from "@tanstack/react-query";
import { getFeaturedMedicalCoding } from "../../Services/apiFeaturedCourses";

export function useFeaturedMedicalCoding(id) {
  const {
    data: featuredMedicalCoding,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-medical-coding", id],
    queryFn: () => getFeaturedMedicalCoding(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredMedicalCoding, isLoading, error };
}
