import { useQuery } from "@tanstack/react-query";
import { getFeaturedDataScience } from "../../Services/apiFeaturedCourses";

export function useFeaturedDataScience() {
  const { data: featuredDataScience, isLoading } = useQuery({
    queryKey: ["data-science"],
    queryFn: getFeaturedDataScience,
  });
  return { featuredDataScience, isLoading };
}
