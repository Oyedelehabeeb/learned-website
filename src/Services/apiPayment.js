import supabase from "./supabase";

export async function getPayment() {
  const { data, error } = await supabase.from("payments").select("*");
  if (error) throw new Error("Failed to fetch payments");
  return data;
}
