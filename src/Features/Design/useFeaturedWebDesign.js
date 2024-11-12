import { useQuery } from "@tanstack/react-query";
import { getFeaturedWebDesign } from "../../Services/apiFeaturedCourses";

export function useFeaturedWebDesign() {
  const { data: featuredWebDesign, isLoading } = useQuery({
    queryKey: ["featuredWebDesign"],
    queryFn: getFeaturedWebDesign,
  });
  return { featuredWebDesign, isLoading };
}
