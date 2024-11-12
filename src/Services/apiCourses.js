import { PAGE_SIZE } from "../Utils/constants";
import supabase from "./supabase";

export async function getWebDevelopmentCourses({ page }) {
  let query = supabase.from("webDevelopment").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getMobileDevelopmentCourses({ page }) {
  let query = supabase
    .from("mobileDevelopment")
    .select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getGameDevelopmentCourses({ page }) {
  let query = supabase.from("gameDevelopment").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getDataScienceCourses({ page }) {
  let query = supabase.from("dataScience").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getWebDesignCourses({ page }) {
  let query = supabase.from("webDesign").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getGraphicsDesignCourses({ page }) {
  let query = supabase.from("graphicDesign").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getUserExperienceDesignCourses({ page }) {
  let query = supabase.from("userExperience").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getDigitalMarketingCourses({ page }) {
  let query = supabase.from("digitalMarketing").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getSocialMediaMarketingCourses({ page }) {
  let query = supabase.from("socialMarketing").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getBrandingCourses({ page }) {
  let query = supabase.from("branding").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getEntrepreneurCourses({ page }) {
  let query = supabase.from("entrepreneur").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getSalesCourses({ page }) {
  let query = supabase.from("sales").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getManagementCourses({ page }) {
  let query = supabase.from("management").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getFitnessCourses({ page }) {
  let query = supabase.from("fitness").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getNutritionCourses({ page }) {
  let query = supabase.from("nutrition").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getMentalHealthCourses({ page }) {
  let query = supabase.from("mentalHealth").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getCryptocurrencyCourses({ page }) {
  let query = supabase.from("crypto").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getInvestingCourses({ page }) {
  let query = supabase.from("investing").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getAccountingCourses({ page }) {
  let query = supabase.from("accounting").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getClinicalResearchCourses({ page }) {
  let query = supabase.from("clinicalResearch").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getMedicalCodingCourses({ page }) {
  let query = supabase.from("medicalCoding").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getAnatomyCourses({ page }) {
  let query = supabase.from("anatomy").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getResearchPapersCourses({ page }) {
  let query = supabase.from("research").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

export async function getAllCourses() {
  // Execute all queries in parallel
  const [
    webDevelopment,
    mobileDevelopment,
    gameDevelopment,
    dataScience,
    webDesign,
    graphicDesign,
    userExperience,
    digitalMarketing,
    socialMarketing,
    branding,
    entrepreneur,
    sales,
    management,
    fitness,
    nutrition,
    mentalHealth,
    crypto,
    investing,
    accounting,
    clinicalResearch,
    medicalCoding,
    anatomy,
    researchPapers,
    featuredNutrition,
    featuredHealthFitness,
    featuredMentalHealth,
    featuredWebDev,
    featuredDataScience,
    featuredMobileDev,
    featuredGameDev,
    featuredWebDesign,
    featuredGraphicDesign,
    featuredUxDesign,
    featuredDigitalMarketing,
    featuredMediaMarketing,
    featuredBranding,
    featuredEntrepreneur,
    featuredSales,
    featuredManagement,
  ] = await Promise.all([
    supabase.from("webDevelopment").select("*"),
    supabase.from("mobileDevelopment").select("*"),
    supabase.from("gameDevelopment").select("*"),
    supabase.from("dataScience").select("*"),
    supabase.from("webDesign").select("*"),
    supabase.from("graphicDesign").select("*"),
    supabase.from("userExperience").select("*"),
    supabase.from("digitalMarketing").select("*"),
    supabase.from("socialMarketing").select("*"),
    supabase.from("branding").select("*"),
    supabase.from("entrepreneur").select("*"),
    supabase.from("sales").select("*"),
    supabase.from("management").select("*"),
    supabase.from("fitness").select("*"),
    supabase.from("nutrition").select("*"),
    supabase.from("mentalHealth").select("*"),
    supabase.from("crypto").select("*"),
    supabase.from("investing").select("*"),
    supabase.from("accounting").select("*"),
    supabase.from("clinicalResearch").select("*"),
    supabase.from("medicalCoding").select("*"),
    supabase.from("anatomy").select("*"),
    supabase.from("research").select("*"),
    supabase.from("featuredNutrition").select("*"),
    supabase.from("featuredHealthFitness").select("*"),
    supabase.from("featuredMentalHealth").select("*"),
    supabase.from("featuredWebDev").select("*"),
    supabase.from("featuredDataScience").select("*"),
    supabase.from("featuredMobileDev").select("*"),
    supabase.from("featuredGameDev").select("*"),
    supabase.from("featuredWebDesign").select("*"),
    supabase.from("featuredGraphicDesign").select("*"),
    supabase.from("featuredUxDesign").select("*"),
    supabase.from("featuredDigitalMarketing").select("*"),
    supabase.from("featuredMediaMarketing").select("*"),
    supabase.from("featuredBranding").select("*"),
    supabase.from("featuredEntrepreneur").select("*"),
    supabase.from("featuredSales").select("*"),
    supabase.from("featuredManagement").select("*"),
  ]);

  // Check for errors in any query
  if (
    webDevelopment.error ||
    mobileDevelopment.error ||
    gameDevelopment.error ||
    dataScience.error ||
    webDesign.error ||
    graphicDesign.error ||
    userExperience.error ||
    digitalMarketing.error ||
    socialMarketing.error ||
    branding.error ||
    entrepreneur.error ||
    sales.error ||
    management.error ||
    fitness.error ||
    nutrition.error ||
    mentalHealth.error ||
    crypto.error ||
    investing.error ||
    accounting.error ||
    clinicalResearch.error ||
    medicalCoding.error ||
    anatomy.error ||
    researchPapers.error ||
    featuredNutrition.error ||
    featuredHealthFitness.error ||
    featuredMentalHealth.error ||
    featuredWebDev.error ||
    featuredDataScience.error ||
    featuredMobileDev.error ||
    featuredGameDev.error ||
    featuredWebDesign.error ||
    featuredGraphicDesign.error ||
    featuredUxDesign.error ||
    featuredDigitalMarketing.error ||
    featuredMediaMarketing.error ||
    featuredBranding.error ||
    featuredEntrepreneur.error ||
    featuredSales.error ||
    featuredManagement.error
  ) {
    throw new Error("Data not found");
  }

  // Combine data from all the tables
  const allCourses = [
    ...webDevelopment.data,
    ...mobileDevelopment.data,
    ...gameDevelopment.data,
    ...dataScience.data,
    ...webDesign.data,
    ...graphicDesign.data,
    ...userExperience.data,
    ...digitalMarketing.data,
    ...socialMarketing.data,
    ...branding.data,
    ...entrepreneur.data,
    ...sales.data,
    ...management.data,
    ...fitness.data,
    ...nutrition.data,
    ...mentalHealth.data,
    ...crypto.data,
    ...investing.data,
    ...accounting.data,
    ...clinicalResearch.data,
    ...medicalCoding.data,
    ...anatomy.data,
    ...researchPapers.data,
    ...featuredNutrition.data,
    ...featuredHealthFitness.data,
    ...featuredMentalHealth.data,
    ...featuredWebDev.data,
    ...featuredDataScience.data,
    ...featuredMobileDev.data,
    ...featuredGameDev.data,
    ...featuredWebDesign.data,
    ...featuredGraphicDesign.data,
    ...featuredUxDesign.data,
  ];

  return allCourses;
}

export async function getUserId() {
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session) throw new Error("User not authenticated");
  return data.session.user.id; // This is the user's unique id
}

export async function addToCart(newItem) {
  try {
    const { data, error } = await supabase.from("cart").insert([newItem]);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    throw error;
  }
}

export async function getCart() {
  const userId = await getUserId();
  const { data, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Failed to fetch cart items");
  return data;
}

export async function deleteCart(itemId, userId) {
  const { data, error } = await supabase
    .from("cart")
    .delete()
    .eq("id", itemId)
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    throw new Error("Cart item could not be deleted");
  }
  return data;
}

export async function getMyLearning(userId) {
  if (!userId) return [];

  const { data, error } = await supabase
    .from("myLearning")
    .select("*")
    .eq("user_id", userId)
    .order("purchase_date", { ascending: false });

  if (error) throw error;
  return data;
}

export async function addToMyLearning(learningItems) {
  console.log("Sending to Supabase:", learningItems);

  const { data, error } = await supabase
    .from("cart")
    .insert([learningItems])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  console.log("Supabase response:", data);
  return data;
}

export async function clearCart(cartItemIds) {
  console.log("Clearing cart items:", cartItemIds);

  const { data, error } = await supabase
    .from("cart")
    .delete()
    .in("id", cartItemIds)
    .select();

  if (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }

  console.log("Cart cleared:", data);
  return data;
}

export async function addToWishList(newItem) {
  try {
    const { data, error } = await supabase.from("wishlist").insert([newItem]);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    throw error;
  }
}

export async function getWishlist() {
  const userId = await getUserId();
  const { data, error } = await supabase
    .from("wishlist")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error("Failed to fetch wishlist items");
  return data;
}

export async function deleteWishlist(itemId, userId) {
  const { data, error } = await supabase
    .from("wishlist")
    .delete()
    .eq("id", itemId)
    .eq("user_id", userId);
  if (error) {
    throw new Error("Failed to add to cart");
  }
  return data;
}
