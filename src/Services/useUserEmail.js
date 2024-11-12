// // hooks/useUserEmail.ts
// import { useQuery } from "@tanstack/react-query";
// import { supabase } from "../supabaseClient";

// export function useUserEmail() {
//   const { data: session, error } = supabase.auth.getSession();
//   if (error || !session?.user) {
//     throw new Error("User not authenticated");
//   }
//   return session.user.email;
// }
