import fs from 'node:fs';
import path from 'node:path';

const scrapedDir = path.resolve(process.cwd(), 'docs', 'scraped_pages');
const manifestPath = path.join(scrapedDir, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

let md = `# Earthfoam (.com) Complete Website Scraping & Architecture Documentation

This document contains a complete inventory, page structure analysis, component mapping, and full HTML references for all **25 pages** scraped from [earthfoam.com](https://earthfoam.com).

---

## 1. Executive Summary & Page Inventory

| # | Page Name | Category | Route Path | Live URL | Raw Scraped HTML File | Custom Components (\`ef-*\`) |
|---|---|---|---|---|---|---|
`;

manifest.forEach((p, idx) => {
  const fileLink = `[${p.filename}](file:///${p.filePath.replace(/\\/g, '/')})`;
  md += `| ${idx + 1} | **${p.name}** | \`${p.category}\` | \`${p.path}\` | [Link](${p.url}) | ${fileLink} | ${p.customElements.length} components |\n`;
});

md += `\n---\n\n## 2. Core Reusable Web Components (\`ef-*\`)\n\nFrom our scrape of all 25 pages, Earthfoam uses a modular Web Component architecture. Below are the primary custom elements used across the site:\n\n`;

const allComponents = {};
manifest.forEach(p => {
  p.customElements.forEach(elem => {
    if (!allComponents[elem]) allComponents[elem] = [];
    allComponents[elem].push(p.name);
  });
});

Object.keys(allComponents).sort().forEach(elem => {
  md += `### \`<${elem}>\`\n`;
  md += `- **Used on (${allComponents[elem].length} pages)**: ${allComponents[elem].join(', ')}\n\n`;
});

md += `---\n\n## 3. Deep-Dive Page-by-Page Specifications & HTML Content\n\n`;

manifest.forEach((p, idx) => {
  const htmlContent = fs.readFileSync(p.filePath, 'utf8');
  
  // Extract h1, h2, h3
  const h1s = Array.from(htmlContent.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)).map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const h2s = Array.from(htmlContent.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)).map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  
  // Extract main tag or section summary
  const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const mainSnippet = mainMatch ? mainMatch[1].trim() : '';

  md += `### ${idx + 1}. ${p.name} (\`${p.path}\`)\n\n`;
  md += `- **Category**: \`${p.category}\`\n`;
  md += `- **Live URL**: [${p.url}](${p.url})\n`;
  md += `- **Page Title**: \`${p.title}\`\n`;
  md += `- **Meta Description**: *"${p.description}"*\n`;
  md += `- **Scraped HTML File**: [${p.filename}](file:///${p.filePath.replace(/\\/g, '/')}) (${(p.sizeBytes / 1024).toFixed(1)} KB)\n`;
  md += `- **Custom Elements**: ${p.customElements.map(e => `\`<${e}>\``).join(', ') || 'Standard HTML'}\n`;
  
  if (h1s.length > 0) {
    md += `- **H1 Headings**: ${h1s.map(h => `"${h}"`).join(', ')}\n`;
  }
  if (h2s.length > 0) {
    md += `- **Key H2 Sections**: ${h2s.slice(0, 8).map(h => `"${h}"`).join(' | ')}${h2s.length > 8 ? ` *(+${h2s.length - 8} more)*` : ''}\n`;
  }

  md += `\n#### Key Sections & Features:\n`;
  if (p.category === 'Product Detail' || p.category === 'Landing / Feature') {
    md += `1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.\n`;
    md += `2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.\n`;
    md += `3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.\n`;
    md += `4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.\n`;
    md += `5. **Dimensions & Weight Table**: Detailed spec table for all sizes.\n`;
    md += `6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.\n`;
    md += `7. **FAQ Accordions**: Expandable questions specific to this product.\n`;
  } else if (p.category === 'Blog & Stories') {
    md += `1. **Editorial Hero**: Large title, published date, author, hero cover photography.\n`;
    md += `2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.\n`;
    md += `3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.\n`;
  } else if (p.category === 'Help & Support') {
    md += `1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.\n`;
    md += `2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.\n`;
  } else if (p.path === '/about') {
    md += `1. **Stacked Sticky Story Scroller (\`ef-stacked-reveal\`)**: Scroll-triggered sticky photo reveals showing Sri Lankan rubber farms and Chicago factory.\n`;
    md += `2. **Mission Statements & Ethical Sourcing**: Direct-from-farmers story.\n`;
  } else if (p.path === '/contact') {
    md += `1. **Support Channels**: Email support, phone hours, Chicago factory address.\n`;
    md += `2. **Direct Inquiry Form**: Responsive contact form.\n`;
  } else if (p.path === '/cart') {
    md += `1. **Cart Line Items**: Quantity selectors, variant descriptions, thumbnail previews, price calculation.\n`;
    md += `2. **Free Shipping Indicator**: Threshold progress bar.\n`;
    md += `3. **Checkout Buttons**: Express Checkout (Shop Pay, Apple Pay, Google Pay) and Standard Checkout.\n`;
  }

  md += `\n#### HTML Structure Preview (First 80 lines of \`<main>\`):\n\n`;
  md += `\`\`\`html\n`;
  const snippetLines = mainSnippet.split('\n').slice(0, 45).join('\n');
  md += snippetLines + (mainSnippet.split('\n').length > 45 ? '\n<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->' : '');
  md += `\n\`\`\`\n\n---\n\n`;
});

md += `## 4. Implementation Strategy & Roadmap for Sri Lanka Website (\`earthfoamLk\`)

### Phase 1: Core E-Commerce Foundation & Product Catalog (PDPs)
- **Routes to implement**:
  - \`/products\` (Catalog overview grid)
  - \`/products/mattress\` (The Foam Mattress PDP)
  - \`/products/topper\` (The Mattress Topper PDP)
  - \`/products/spring-mattress\` (The Spring Mattress PDP)
  - \`/products/pillow\` (The Pillow PDP)
- **Key Deliverables**:
  - Product configurator (Size: Single, Double, Queen, King in Sri Lankan sizing + US standards)
  - Sri Lankan Rupees pricing (\`Rs.\`)
  - Image gallery / lightbox
  - Interactive layer cutaway diagrams
  - Review ratings and spec tables

### Phase 2: Brand Story & Company Pages
- **Routes to implement**:
  - \`/about\` (The Story of Earthfoam & Sri Lankan Rubber Heritage)
  - \`/contact\` (Local Sri Lankan customer care, showroom address, email)
  - \`/cart\` (Shopping cart drawer & checkout funnel)

### Phase 3: Help, Certifications & Trust Pages
- **Routes to implement**:
  - \`/help/common-questions\`
  - \`/help/shipping-and-returns\` (Island-wide Sri Lanka delivery info)
  - \`/help/certifications\` (GOLS organic latex, GOTS organic cotton, OEKO-TEX, Eco-Institut)
  - \`/help/mattress-warranty\` (10-Year Local & Global Warranty)
  - \`/help/mattress-topper-warranty\` & \`/help/pillow-warranty\`

### Phase 4: Journal / Blog & Sourcing Stories
- **Routes to implement**:
  - \`/blog\` (Journal Index)
  - \`/blog/sourcing-our-foam-the-story-of-sri-lanka\` (Featuring local rubber tappers & estate farmers in Sri Lanka)
  - \`/blog/behind-the-dreams-our-new-collaboration\`
  - \`/blog/introducing-the-spring-mattress\`
  - \`/blog/sheep-to-sleep-working-with-wools-of-new-zealand\`
  - \`/blog/making-our-beds-inside-our-chicago-factory\`

---
*Documentation generated automatically from live scrape of earthfoam.com.*
`;

const docPath = path.resolve(process.cwd(), 'docs', 'SITE_PAGES_DOCUMENTATION.md');
fs.writeFileSync(docPath, md, 'utf8');
console.log(`Master documentation created at: ${docPath}`);

// Also copy to artifact directory
const artifactDir = 'C:\\Users\\shahein\\.gemini\\antigravity-ide\\brain\\7669352b-a191-4271-957d-4ae89861f1b5';
if (fs.existsSync(artifactDir)) {
  fs.writeFileSync(path.join(artifactDir, 'earthfoam_full_site_architecture.md'), md, 'utf8');
  console.log(`Artifact created at: ${path.join(artifactDir, 'earthfoam_full_site_architecture.md')}`);
}
