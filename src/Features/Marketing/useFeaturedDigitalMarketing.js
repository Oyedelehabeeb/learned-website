import { useQuery } from "@tanstack/react-query";
import { getFeaturedDigitalMarketing } from "../../Services/apiFeaturedCourses";

export function useFeaturedDigitalMarketing() {
  const { data: featuredDigitalMarketing, isLoading } = useQuery({
    queryKey: ["featured-digital-marketing"],
    queryFn: getFeaturedDigitalMarketing,
  });
  return { featuredDigitalMarketing, isLoading };
}
