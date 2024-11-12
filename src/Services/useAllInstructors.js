import { useQuery } from "@tanstack/react-query";
import { getAllInstructors } from "./apiInstructors";

export function useAllInstructors() {
  const { data: allInstructors = [], isLoading } = useQuery({
    queryKey: ["all-instructors"],
    queryFn: getAllInstructors,
  });
  return { allInstructors, isLoading };
}
