import { PRODUCTS_DATA } from "../src/data/productsData.js";

console.log("Checking PRODUCTS_DATA integrity...");

const slugs = ["topper", "mattress", "spring-mattress", "pillow"];

for (const slug of slugs) {
  const p = PRODUCTS_DATA[slug];
  if (!p) {
    console.error(`Missing product data for ${slug}`);
    process.exit(1);
  }
  console.log(`✓ [${slug}] Title: ${p.title} | Price: ${p.price} | Options: ${p.options?.map(o => o.name).join(", ")} | Hotspots: ${p.hotspots?.layers.length || 0}`);
}

console.log("All 4 products verified successfully!");
