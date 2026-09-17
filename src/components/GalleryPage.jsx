import { useEffect, useRef } from "react";
import { PRODUCTS_DATA } from "../data/productsData.js";
import "./GalleryPage.css";

const assetBaseUrl = "/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

const HYBRID_VARIANT_SLUGS = [
  "osaka",
  "ventura",
  "brandford",
  "meriden",
  "athens-euro-top",
  "athens-legacy",
  "athens-signature",
  "aurora",
];

const variants = HYBRID_VARIANT_SLUGS.map((variantSlug) => ({
  variantSlug,
  href: `/products/hybrid-mattress/${variantSlug}`,
  ...PRODUCTS_DATA[`hybrid-mattress-${variantSlug}`],
}));

export default function GalleryPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Hybrid Mattress | Earthfoam";

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
  }, []);

  return (
    <div className="galleryPage" ref={containerRef}>
      <main className="container">
        <header data-animation-waypoint>
          <h1 className="h2" data-animate="slide-up">
            The Hybrid Mattress.
          </h1>
          <div className="richtext body-s" data-animate="slide-up" data-delay="1">
            <p>
              Responsive pocketed coils paired with natural latex comfort.
              Pick the model that matches how you sleep.
            </p>
          </div>
        </header>

        <div className="galleryPage-grid">
          {variants.map((variant, index) => (
            <div key={variant.variantSlug} data-animation-waypoint>
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
