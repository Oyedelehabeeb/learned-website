import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserExperienceDesignCourses } from "../../Services/apiCourses";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../Utils/constants";

export function useUserExperienceDesign() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const { data: { data: userExperienceDesign, count } = {}, isLoading } =
    useQuery({
      queryKey: ["user-experience-design", page],
      queryFn: () => getUserExperienceDesignCourses({ page }),
    });

  //PRE-FETCHING FOR PAGINATION
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["user-experience-design", page + 1],
      queryFn: () => getUserExperienceDesignCourses({ page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["user-experience-design", page - 1],
      queryFn: () => getUserExperienceDesignCourses({ page: page - 1 }),
    });

  return { userExperienceDesign, isLoading, count };
}
