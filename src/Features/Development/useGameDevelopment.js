import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getGameDevelopmentCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useGameDevelopment() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { data: { data: gameDevelopment, count } = {}, isLoading } = useQuery({
    queryKey: ["game-development", page],
    queryFn: () => getGameDevelopmentCourses({ page }),
  });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["game-development", page + 1],
      queryFn: () => getGameDevelopmentCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["game-development", page - 1],
      queryFn: () => getGameDevelopmentCourses({ page: page - 1 }),
    });

  return { gameDevelopment, count, isLoading };
}
