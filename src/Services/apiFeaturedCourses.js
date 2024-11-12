import supabase from "./supabase";

export async function getFeaturedWebDesign() {
  const { data, error } = await supabase.from("featuredWebDesign").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedGraphicDesign() {
  const { data, error } = await supabase
    .from("featuredGraphicDesign")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedUserExperienceDesign() {
  const { data, error } = await supabase.from("featuredUxDesign").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedWebDevelopment() {
  const { data, error } = await supabase.from("featuredWebDev").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedMobileDevelopment() {
  const { data, error } = await supabase.from("featuredMobileDev").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedGameDevelopment() {
  const { data, error } = await supabase.from("featuredGameDev").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedDataScience() {
  const { data, error } = await supabase
    .from("featuredDataScience")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedDigitalMarketing() {
  const { data, error } = await supabase
    .from("featuredDigitalMarketing")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedSocialMediaMarketing() {
  const { data, error } = await supabase
    .from("featuredMediaMarketing")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedBranding() {
  const { data, error } = await supabase.from("featuredBranding").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedEntrepreneur() {
  const { data, error } = await supabase
    .from("featuredEntrepreneur")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedSales() {
  const { data, error } = await supabase.from("featuredSales").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedManagement() {
  const { data, error } = await supabase.from("featuredManagement").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedFitnessHealth() {
  const { data, error } = await supabase
    .from("featuredHealthFitness")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedNutrition() {
  const { data, error } = await supabase.from("featuredNutrition").select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedMentalHealth() {
  const { data, error } = await supabase
    .from("featuredMentalHealth")
    .select("*");
  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedCryptocurrency(id) {
  const { data, error } = await supabase
    .from("crypto")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedInvesting(id) {
  const { data, error } = await supabase
    .from("investing")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedAccounting(id) {
  const { data, error } = await supabase
    .from("accounting")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedClinicalResearch(id) {
  const { data, error } = await supabase
    .from("clinicalResearch")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedMedicalCoding(id) {
  const { data, error } = await supabase
    .from("medicalCoding")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedAnatomy(id) {
  const { data, error } = await supabase
    .from("anatomy")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
export async function getFeaturedResearchPaper(id) {
  const { data, error } = await supabase
    .from("research")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("Data not found");
  }
  return data;
}
