import { useQuery } from "@tanstack/react-query";
import { getFeaturedCryptocurrency } from "../../Services/apiFeaturedCourses";

export function useFeaturedCryptocurrency(id) {
  const {
    data: featuredCryptocurrency,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["featured-cryptocurrency", id],
    queryFn: () => getFeaturedCryptocurrency(id),
    enabled: !!id, // Only run if `id` exists
  });

  return { featuredCryptocurrency, isLoading, error };
}
