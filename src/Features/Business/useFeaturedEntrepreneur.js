import { useQuery } from "@tanstack/react-query";
import { getFeaturedEntrepreneur } from "../../Services/apiFeaturedCourses";

export function useFeaturedEntrepreneur() {
  const { data: featuredEntrepreneur, isLoading } = useQuery({
    queryKey: ["featured-entrepreneur"],
    queryFn: getFeaturedEntrepreneur,
  });
  return { featuredEntrepreneur, isLoading };
}
