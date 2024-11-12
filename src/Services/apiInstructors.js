import { PAGE_SIZE } from "../Utils/constants";
import supabase from "./supabase";

//fetching data from webDesignInstructors table
export async function getWebDesignInstructors({ pageInst }) {
  let query = supabase
    .from("webDesignInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from graphicDesignInstructors table
export async function getGraphicDesignInstructors({ pageInst }) {
  let query = supabase
    .from("graphicsDesignInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from userExperienceDesignInstructors table
export async function getUseExperienceDesignInstructors({ pageInst }) {
  let query = supabase
    .from("userExperienceDesignInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from webDev instructorsTable
export async function getWebDevelopmentInstructors({ pageInst }) {
  let query = supabase
    .from("webDevInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from mobileDev instructorsTable
export async function getMobileDevelopmentInstructors({ pageInst }) {
  let query = supabase
    .from("mobileDevInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from gameDev instructorsTable
export async function getGameDevelopmentInstructors({ pageInst }) {
  let query = supabase
    .from("gameDevInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from dataScienceInstructorsTable
export async function getDataScienceInstructors({ pageInst }) {
  let query = supabase
    .from("dataScienceInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from digitalMarketingInstructorsTable
export async function getDigitalMarketingInstructors({ pageInst }) {
  let query = supabase
    .from("digitalMarketingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from socialMediaMarketingInstructorsTable
export async function getSocialMediaMarketingInstructors({ pageInst }) {
  let query = supabase
    .from("socialMediaMarketingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

//fetching data from brandingInstructorsTable
export async function getBrandingInstructors({ pageInst }) {
  let query = supabase
    .from("brandingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from entrepreneurInstructorsTable
export async function getEntrepreneurInstructors({ pageInst }) {
  let query = supabase
    .from("entrepreneurInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from salesInstructorsTable
export async function getSalesInstructors({ pageInst }) {
  let query = supabase.from("salesInstructors").select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from managementInstructorsTable
export async function getManagementInstructors({ pageInst }) {
  let query = supabase
    .from("managementInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from fitnessHealthInstructorsTable
export async function getFitnessHealthInstructors({ pageInst }) {
  let query = supabase
    .from("fitnessHealthInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from nutritionInstructorsTable
export async function getNutritionInstructors({ pageInst }) {
  let query = supabase
    .from("nutritionInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
//fetching data from mentalHealthInstructorsTable
export async function getMentalHealthInstructors({ pageInst }) {
  let query = supabase
    .from("mentalHealthInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getCryptocurrencyInstructors({ pageInst }) {
  let query = supabase
    .from("cryptoInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getInvestingInstructors({ pageInst }) {
  let query = supabase
    .from("investingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getAccountingInstructors({ pageInst }) {
  let query = supabase
    .from("accountingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getClinicalResearchInstructors({ pageInst }) {
  let query = supabase
    .from("clinicalResearchInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getMedicalCodingInstructors({ pageInst }) {
  let query = supabase
    .from("medicalCodingInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getAnatomyInstructors({ pageInst }) {
  let query = supabase
    .from("anatomyInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}
export async function getResearchPaperInstructors({ pageInst }) {
  let query = supabase
    .from("researchInstructors")
    .select("*", { count: "exact" });

  if (pageInst) {
    const from = (pageInst - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) {
    throw new Error("Data not found");
  }
  return { data, count };
}

export async function getAllInstructors() {
  // Execute all queries in parallel
  const [
    webDevelopmentInstructors,
    mobileDevelopmentInstructors,
    gameDevelopmentInstructors,
    dataScienceInstructors,
    webDesignInstructors,
    graphicDesignInstructors,
    userExperienceDesignInstructors,
    digitalMarketingInstructors,
    socialMediaMarketingInstructors,
    brandingInstructors,
    entrepreneurInstructors,
    salesInstructors,
    managementInstructors,
    fitnessHealthInstructors,
    nutritionInstructors,
    mentalHealthInstructors,
    cryptoInstructors,
    investingInstructors,
    accountingInstructors,
    clinicalResearchInstructors,
    medicalCodingInstructors,
    anatomyInstructors,
    researchInstructors,
  ] = await Promise.all([
    supabase.from("webDevInstructors").select("*"),
    supabase.from("mobileDevInstructors").select("*"),
    supabase.from("gameDevInstructors").select("*"),
    supabase.from("dataScienceInstructors").select("*"),
    supabase.from("webDesignInstructors").select("*"),
    supabase.from("graphicsDesignInstructors").select("*"),
    supabase.from("userExperienceDesignInstructors").select("*"),
    supabase.from("digitalMarketingInstructors").select("*"),
    supabase.from("socialMediaMarketingInstructors").select("*"),
    supabase.from("brandingInstructors").select("*"),
    supabase.from("entrepreneurInstructors").select("*"),
    supabase.from("salesInstructors").select("*"),
    supabase.from("managementInstructors").select("*"),
    supabase.from("fitnessHealthInstructors").select("*"),
    supabase.from("nutritionInstructors").select("*"),
    supabase.from("mentalHealthInstructors").select("*"),
    supabase.from("cryptoInstructors").select("*"),
    supabase.from("investingInstructors").select("*"),
    supabase.from("accountingInstructors").select("*"),
    supabase.from("clinicalResearchInstructors").select("*"),
    supabase.from("medicalCodingInstructors").select("*"),
    supabase.from("anatomyInstructors").select("*"),
    supabase.from("researchInstructors").select("*"),
  ]);

  // Check for errors in any query
  if (
    webDevelopmentInstructors.error ||
    mobileDevelopmentInstructors.error ||
    gameDevelopmentInstructors.error ||
    dataScienceInstructors.error ||
    webDesignInstructors.error ||
    graphicDesignInstructors.error ||
    userExperienceDesignInstructors.error ||
    digitalMarketingInstructors.error ||
    socialMediaMarketingInstructors.error ||
    brandingInstructors.error ||
    entrepreneurInstructors.error ||
    salesInstructors.error ||
    managementInstructors.error ||
    fitnessHealthInstructors.error ||
    nutritionInstructors.error ||
    mentalHealthInstructors.error ||
    cryptoInstructors.error ||
    investingInstructors.error ||
    accountingInstructors.error ||
    clinicalResearchInstructors.error ||
    medicalCodingInstructors.error ||
    anatomyInstructors.error ||
    researchInstructors.error
  ) {
    throw new Error("Data not found");
  }

  // Combine data from all the tables
  const allInstructors = [
    ...webDevelopmentInstructors.data,
    ...mobileDevelopmentInstructors.data,
    ...gameDevelopmentInstructors.data,
    ...dataScienceInstructors.data,
    ...webDesignInstructors.data,
    ...graphicDesignInstructors.data,
    ...userExperienceDesignInstructors.data,
    ...digitalMarketingInstructors.data,
    ...socialMediaMarketingInstructors.data,
    ...brandingInstructors.data,
    ...entrepreneurInstructors.data,
    ...salesInstructors.data,
    ...managementInstructors.data,
    ...fitnessHealthInstructors.data,
    ...nutritionInstructors.data,
    ...mentalHealthInstructors.data,
    ...cryptoInstructors.data,
    ...investingInstructors.data,
    ...accountingInstructors.data,
    ...clinicalResearchInstructors.data,
    ...medicalCodingInstructors.data,
    ...anatomyInstructors.data,
    ...researchInstructors.data,
  ];

  return allInstructors;
}
