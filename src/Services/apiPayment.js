import { getUserId } from "./apiCourses";
import supabase from "./supabase";

export async function getPayment() {
  const userId = await getUserId();
  const { data, error } = await supabase
    .from("payments")
    .select("*")
    .eq("user_id", userId);
  if (error) throw new Error("Failed to fetch payments");
  return data;
}

export async function deletePaymentHistory(id) {
  const { data, error } = await supabase.from("payments").delete().eq("id", id);
  if (error) throw new Error("Failed to fetch payments");
  return data;
}
