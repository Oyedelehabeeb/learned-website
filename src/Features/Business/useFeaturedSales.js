import { useQuery } from "@tanstack/react-query";
import { getFeaturedSales } from "../../Services/apiFeaturedCourses";

export function useFeaturedSales() {
  const { data: featuredSales, isLoading } = useQuery({
    queryKey: ["featured-sales"],
    queryFn: getFeaturedSales,
  });
  return { featuredSales, isLoading };
}
