import { useQuery } from "@tanstack/react-query";
import { getFeaturedWebDevelopment } from "../../Services/apiFeaturedCourses";

export function useFeaturedWebDev() {
  const { data: featuredWebDev, isLoading } = useQuery({
    queryKey: ["featured-web-dev"],
    queryFn: getFeaturedWebDevelopment,
  });
  return { featuredWebDev, isLoading };
}
