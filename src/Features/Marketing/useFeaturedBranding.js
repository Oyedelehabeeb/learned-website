import { useQuery } from "@tanstack/react-query";
import { getFeaturedBranding } from "../../Services/apiFeaturedCourses";

export function useFeaturedBranding() {
  const { data: featuredBranding, isLoading } = useQuery({
    queryKey: ["featured-branding"],
    queryFn: getFeaturedBranding,
  });
  return { featuredBranding, isLoading };
}
