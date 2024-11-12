// src/Hooks/useSession.js
import { useQuery } from "@tanstack/react-query";
import { getSession } from "./apiAuthentication";

export function useSession() {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
  return { data, isLoading };
}
