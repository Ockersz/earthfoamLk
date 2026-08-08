import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const urls = [
  { category: "Core", name: "Home Page", path: "/", url: "https://earthfoam.com/" },
  { category: "Core", name: "Products Overview", path: "/products", url: "https://earthfoam.com/products" },
  { category: "Core", name: "About Us", path: "/about", url: "https://earthfoam.com/about" },
  { category: "Core", name: "Contact", path: "/contact", url: "https://earthfoam.com/contact" },
  { category: "Core", name: "Cart / Checkout", path: "/cart", url: "https://earthfoam.com/cart" },
  
  { category: "Product Detail", name: "The Mattress (Foam)", path: "/products/mattress", url: "https://earthfoam.com/products/mattress" },
  { category: "Product Detail", name: "The Topper", path: "/products/topper", url: "https://earthfoam.com/products/topper" },
  { category: "Product Detail", name: "The Spring Mattress", path: "/products/spring-mattress", url: "https://earthfoam.com/products/spring-mattress" },
  { category: "Product Detail", name: "The Pillow", path: "/products/pillow", url: "https://earthfoam.com/products/pillow" },

  { category: "Landing / Feature", name: "Mattress Reviews", path: "/products/landing/mattress-reviews", url: "https://earthfoam.com/products/landing/mattress-reviews" },
  { category: "Landing / Feature", name: "Mattress Materials", path: "/products/landing/mattress-materials", url: "https://earthfoam.com/products/landing/mattress-materials" },
  { category: "Landing / Feature", name: "Mattress Organic", path: "/products/landing/mattress-organic", url: "https://earthfoam.com/products/landing/mattress-organic" },
  { category: "Landing / Feature", name: "Mattress Experience", path: "/products/landing/mattress-experience", url: "https://earthfoam.com/products/landing/mattress-experience" },

  { category: "Help & Support", name: "Common Questions (FAQ)", path: "/help/common-questions", url: "https://earthfoam.com/help/common-questions" },
  { category: "Help & Support", name: "Shipping and Returns", path: "/help/shipping-and-returns", url: "https://earthfoam.com/help/shipping-and-returns" },
  { category: "Help & Support", name: "Certifications", path: "/help/certifications", url: "https://earthfoam.com/help/certifications" },
  { category: "Help & Support", name: "Mattress Warranty (10 Year)", path: "/help/mattress-warranty", url: "https://earthfoam.com/help/mattress-warranty" },
  { category: "Help & Support", name: "Mattress Topper Warranty", path: "/help/mattress-topper-warranty", url: "https://earthfoam.com/help/mattress-topper-warranty" },
  { category: "Help & Support", name: "Pillow Warranty", path: "/help/pillow-warranty", url: "https://earthfoam.com/help/pillow-warranty" },

  { category: "Blog & Stories", name: "Blog Index", path: "/blog", url: "https://earthfoam.com/blog" },
  { category: "Blog & Stories", name: "Sourcing Our Foam: Sri Lanka", path: "/blog/sourcing-our-foam-the-story-of-sri-lanka", url: "https://earthfoam.com/blog/sourcing-our-foam-the-story-of-sri-lanka" },
  { category: "Blog & Stories", name: "Behind the Dreams: Collaboration", path: "/blog/behind-the-dreams-our-new-collaboration", url: "https://earthfoam.com/blog/behind-the-dreams-our-new-collaboration" },
  { category: "Blog & Stories", name: "Introducing the Spring Mattress", path: "/blog/introducing-the-spring-mattress", url: "https://earthfoam.com/blog/introducing-the-spring-mattress" },
  { category: "Blog & Stories", name: "Sheep to Sleep: Wools of NZ", path: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand", url: "https://earthfoam.com/blog/sheep-to-sleep-working-with-wools-of-new-zealand" },
  { category: "Blog & Stories", name: "Inside Chicago Factory", path: "/blog/making-our-beds-inside-our-chicago-factory", url: "https://earthfoam.com/blog/making-our-beds-inside-our-chicago-factory" }
];

const outputDir = path.resolve(process.cwd(), 'docs', 'scraped_pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function scrapeAll() {
  console.log(`Starting scrape of ${urls.length} pages via curl...`);
  const manifest = [];

  for (let i = 0; i < urls.length; i++) {
    const page = urls[i];
    console.log(`[${i + 1}/${urls.length}] Fetching ${page.name} (${page.url})...`);
    try {
      const html = execSync(`curl.exe -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" "${page.url}"`, {
        encoding: 'utf8',
        maxBuffer: 20 * 1024 * 1024
      });

      if (!html || html.length < 50) {
        console.error(`Empty response for ${page.url}`);
        manifest.push({ ...page, status: 500, error: 'Empty response' });
        continue;
      }

      // Generate clean filename
      const safeName = (page.path === '/' ? 'home' : page.path.replace(/^\//, '').replace(/\//g, '__')) + '.html';
      const filePath = path.join(outputDir, safeName);
      fs.writeFileSync(filePath, html, 'utf8');

      // Extract basic page details
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';

      const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                        html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
      const description = descMatch ? descMatch[1].trim() : '';

      // Extract main tag or body content
      const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      const mainContent = mainMatch ? mainMatch[1] : '';

      // Extract custom elements used on the page (ef-*)
      const customElements = Array.from(new Set(Array.from(html.matchAll(/<ef-([a-z0-9-]+)/gi)).map(m => `ef-${m[1]}`)));

      // Extract stylesheets linked
      const stylesheets = Array.from(new Set(Array.from(html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)).map(m => m[1])));

      // Extract scripts
      const scripts = Array.from(new Set(Array.from(html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)).map(m => m[1])));

      // Extract images
      const images = Array.from(new Set(Array.from(html.matchAll(/src=["'](\/assets\/[^"']+)["']/gi)).map(m => m[1])));

      manifest.push({
        ...page,
        status: 200,
        filename: safeName,
        filePath: filePath,
        title,
        description,
        customElements,
        stylesheets,
        scripts,
        imageCount: images.length,
        sizeBytes: html.length
      });
      console.log(`✓ Saved ${safeName} (${(html.length / 1024).toFixed(1)} KB, ${customElements.length} custom components, ${images.length} images)`);
    } catch (err) {
      console.error(`Error fetching ${page.url}:`, err.message);
      manifest.push({ ...page, status: 500, error: err.message });
    }
  }

  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`\n========================================`);
  console.log(`All ${manifest.length} pages scraped successfully!`);
  console.log(`Manifest written to ${manifestPath}`);
  console.log(`========================================\n`);
}

scrapeAll();
