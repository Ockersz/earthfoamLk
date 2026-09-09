import { useEffect, useRef } from "react";
import "./ProductsPage.css";

const assetBaseUrl = "/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

const makeSrcSet = (files) =>
  files.map(({ file, width }) => `${asset(file)} ${width}w`).join(", ");

const products = [
  {
    name: "Mattress",
    href: "/products/mattress",
    description:
      "Springy, supportive natural latex sandwiched between wool & soft quilted cotton.",
    price: "FROM RS. 240,000",
    delay: 1,
    defaultImage: [
      { file: "Home_ProdCarousel_Mattress02_640x400_q93.webp", width: 640 },
      { file: "Home_ProdCarousel_Mattress02_1280x800_q93.webp", width: 1280 },
      { file: "Home_ProdCarousel_Mattress02_2560x1600_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Home_ProdCarousel_Mattress10_640x400_q93.webp", width: 640 },
      { file: "Home_ProdCarousel_Mattress10_1280x800_q93.webp", width: 1280 },
      { file: "Home_ProdCarousel_Mattress10_2560x1600_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Spring Mattress",
    href: "/products/spring-mattress",
    description: "A spring mattress done right.",
    price: "FROM RS. 420,000",
    delay: 2,
    defaultImage: [
      { file: "Hybrid-Carousel-01_640x400_q93.webp", width: 640 },
      { file: "Hybrid-Carousel-01_1280x800_q93.webp", width: 1280 },
      { file: "Hybrid-Carousel-01_2560x1600_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Hybrid-Carousel-02_640x400_q93.webp", width: 640 },
      { file: "Hybrid-Carousel-02_1280x800_q93.webp", width: 1280 },
      { file: "Hybrid-Carousel-02_2560x1600_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Topper",
    href: "/products/topper",
    description:
      "A squishy layer of natural rubber to make a firm mattress softer.",
    price: "FROM RS. 105,000",
    delay: 3,
    defaultImage: [
      { file: "PLP_Preview_Topper_640x390_q93.webp", width: 640 },
      { file: "PLP_Preview_Topper_1280x781_q93.webp", width: 1280 },
      { file: "PLP_Preview_Topper_2560x1562_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "PDP_TOPPER_HERO04_640x400_q93.webp", width: 640 },
      { file: "PDP_TOPPER_HERO04_1280x800_q93.webp", width: 1280 },
      { file: "PDP_TOPPER_HERO04_2560x1600_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Pillow",
    href: "/products/pillow",
    description: "A smaller bed for your head.",
    price: "FROM RS. 30,000",
    delay: 4,
    defaultImage: [
      { file: "PLP_Preview_Pillow_640x390_q93.webp", width: 640 },
      { file: "PLP_Preview_Pillow_1280x781_q93.webp", width: 1280 },
      { file: "PLP_Preview_Pillow_2560x1562_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "PDP_PILLOW_HERO03_640x400_q93.webp", width: 640 },
      { file: "PDP_PILLOW_HERO03_1280x800_q93.webp", width: 1280 },
      { file: "PDP_PILLOW_HERO03_2560x1600_q93.webp", width: 2560 },
    ],
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = "Sleep Well. | Earthfoam";

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
      document.title = "Earthfoam";
    };
  }, []);

  return (
    <div className="productsPage" ref={containerRef}>
      <main className="container">
        <header data-animation-waypoint>
          <h1 className="h2" data-animate="slide-up">
            Sleep Well.
          </h1>
          <div
            className="richtext body-s"
            data-animate="slide-up"
            data-delay="1"
          >
            <p>
              Your bed should make you feel really, really good. Not just when
              you fall asleep, but when you wake up. Earthfoam Mattresses are
              made of natural rubber, wool, and cotton: chosen for their quality,
              collected ethically, and assembled with care in our own Earthfoam
              factory.
            </p>
          </div>
        </header>

        <div className="products-overview-grid">
          {products.map((prod) => (
            <div key={prod.name} data-animation-waypoint>
              <a
                href={prod.href}
                data-animate="slide-up"
                data-offset="4"
                data-duration="3"
                data-delay={prod.delay}
              >
                <div className="image">
                  <img
                    src={asset(prod.defaultImage[0].file)}
                    srcSet={makeSrcSet(prod.defaultImage)}
                    sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 96vw"
                    alt={prod.name}
                    loading="eager"
                  />
                  <img
                    src={asset(prod.hoverImage[0].file)}
                    srcSet={makeSrcSet(prod.hoverImage)}
                    sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 96vw"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className="description">
                  <h3 className="body-l" style={{ gridArea: "title" }}>
                    {prod.name}
                  </h3>
                  <p className="body-m" style={{ gridArea: "description" }}>
                    {prod.description}
                  </p>
                  <small
                    className="eyebrow"
                    style={{ gridArea: "price", whiteSpace: "nowrap" }}
                  >
                    {prod.price}
                  </small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
