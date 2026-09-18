import { useEffect, useRef } from "react";
import { PRODUCTS_DATA } from "../data/productsData.js";
import { GALLERY_CATEGORIES } from "../data/galleryCategories.js";
import "./GalleryPage.css";

const assetBaseUrl = "/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

export default function GalleryPage({ category }) {
  const containerRef = useRef(null);
  const config = GALLERY_CATEGORIES[category];

  // Only list products that already have content (heroImages) so the
  // gallery doesn't try to render a tile for a still-empty placeholder entry.
  const variants = (config?.productKeys || [])
    .filter((key) => PRODUCTS_DATA[key] && PRODUCTS_DATA[key].heroImages)
    .map((key) => ({
      key,
      href: config.hrefFor(key),
      ...PRODUCTS_DATA[key],
    }));

  useEffect(() => {
    document.title = config ? config.documentTitle : "Not Found | Earthfoam";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-animation-triggered", "");
          }
        });
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.0 }
    );

    const waypoints =
      containerRef.current?.querySelectorAll("[data-animation-waypoint]") || [];
    waypoints.forEach((el) => observer.observe(el));

    const animTimeout = setTimeout(() => {
      waypoints.forEach((el) => {
        el.setAttribute("data-animation-triggered", "");
      });
    }, 40);

    return () => {
      clearTimeout(animTimeout);
      observer.disconnect();
    };
  }, [category]);

  if (!config) return null;

  return (
    <div className="galleryPage" ref={containerRef}>
      <main className="container">
        <header data-animation-waypoint>
          <h1 className="h2" data-animate="slide-up">
            {config.title}
          </h1>
          <div className="richtext body-s" data-animate="slide-up" data-delay="1">
            <p>{config.subtitle}</p>
          </div>
        </header>

        <div className="galleryPage-grid">
          {variants.map((variant, index) => (
            <div key={variant.key} data-animation-waypoint>
              <a
                href={variant.href}
                data-animate="slide-up"
                data-offset="4"
                data-duration="3"
                data-delay={index + 1}
              >
                <div className="image">
                  <img
                    src={asset(variant.heroImages[0].src)}
                    srcSet={variant.heroImages[0].srcSet}
                    sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 96vw"
                    alt={variant.heroImages[0].alt}
                    loading="eager"
                  />
                  {variant.heroImages[1] && (
                    <img
                      src={asset(variant.heroImages[1].src)}
                      srcSet={variant.heroImages[1].srcSet}
                      sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 96vw"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="description">
                  <h3 className="body-l">{variant.title}</h3>
                  {variant.subTitle && <p className="body-m">{variant.subTitle}</p>}
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
