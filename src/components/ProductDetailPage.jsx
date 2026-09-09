import { useState, useEffect } from "react";
import { PRODUCTS_DATA } from "../data/productsData.js";
import NotFoundPage from "./NotFoundPage.jsx";
import "./ProductDetailPage.css";

const assetBaseUrl = "/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

function OptionDownTriangle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none" aria-hidden="true">
      <path fill="currentColor" d="M4.2 6 .043 0h8.314z" />
    </svg>
  );
}

function PrevArrowSvg() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M29.2794 19.2929C29.6699 19.6834 29.6699 20.3166 29.2794 20.7071L22.9154 27.0711C22.5249 27.4616 21.8917 27.4616 21.5012 27.0711C21.1107 26.6805 21.1107 26.0474 21.5012 25.6569L27.1581 20L21.5012 14.3431C21.1107 13.9526 21.1107 13.3195 21.5012 12.9289C21.8917 12.5384 22.5249 12.5384 22.9154 12.9289L29.2794 19.2929ZM28.5723 21L10.0008 21L10.0008 19L28.5723 19L28.5723 21Z"
        fill="#F8F7ED"
      />
      <circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="#F8F7ED" strokeWidth="2" />
    </svg>
  );
}

function NextArrowSvg() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M29.2794 19.2929C29.6699 19.6834 29.6699 20.3166 29.2794 20.7071L22.9154 27.0711C22.5249 27.4616 21.8917 27.4616 21.5012 27.0711C21.1107 26.6805 21.1107 26.0474 21.5012 25.6569L27.1581 20L21.5012 14.3431C21.1107 13.9526 21.1107 13.3195 21.5012 12.9289C21.8917 12.5384 22.5249 12.5384 22.9154 12.9289L29.2794 19.2929ZM28.5723 21L10.0008 21L10.0008 19L28.5723 19L28.5723 21Z"
        fill="#F8F7ED"
      />
      <circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="#F8F7ED" strokeWidth="2" />
    </svg>
  );
}

function VideoPlayIconSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" aria-hidden="true">
      <rect width="13" height="13" x=".5" y=".5" stroke="currentColor" rx="6.5" />
      <path fill="currentColor" d="M10 7 5.5 9.598V4.402z" />
    </svg>
  );
}

function FloatingNavDotsSvg() {
  return (
    <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function ProductDetailPage({ slug }) {
  const product = PRODUCTS_DATA[slug];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedFirmnessIndex, setSelectedFirmnessIndex] = useState(0);
  const [showSizeInfo, setShowSizeInfo] = useState(false);
  const [showFirmnessInfo, setShowFirmnessInfo] = useState(false);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setActiveImageIndex(0);
    setSelectedSizeIndex(0);
    setSelectedFirmnessIndex(0);
    setShowSizeInfo(false);
    setShowFirmnessInfo(false);
    setHoveredHotspot(null);
  }, [slug]);

  if (!product) {
    return <NotFoundPage />;
  }

  const selectedSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const selectedFirmness = product.firmnessOptions
    ? product.firmnessOptions[selectedFirmnessIndex] || product.firmnessOptions[0]
    : null;
  const activeImage = product.heroImages[activeImageIndex] || product.heroImages[0];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? product.heroImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === product.heroImages.length - 1 ? 0 : prev + 1
    );
  };

  const inquiryUrl = `/contact?inquiry=${encodeURIComponent(
    `Price inquiry for ${product.fullTitle} (${selectedSize.name}${
      selectedFirmness ? ` - ${selectedFirmness.name}` : ""
    })`
  )}`;

  return (
    <div className="pdpPage">
      {/* Floating Top-Right Shop Now Nav */}
      <a href="/products" className="ef-floating-nav" aria-label="Shop Now">
        <FloatingNavDotsSvg />
        <span>Shop Now</span>
      </a>

      {/* ==================================================================
          Section 0: <ef-product-hero>
          ================================================================== */}
      <ef-product-hero class="flex-x" style={{ position: "relative" }}>
        {/* Left Column: 60% Width Full-Bleed Carousel */}
        <div className="ef-product-carousel">
          <img
            src={asset(activeImage.src)}
            srcSet={activeImage.srcSet}
            sizes="(min-width: 1024px) 60vw, 100vw"
            alt={activeImage.alt}
            loading="eager"
          />

          {/* Floating Video Tutorial Card (Top Left) */}
          {product.videoTour && (
            <div className="notification-container">
              <div className="notification">
                <div className="notification__body">
                  <div className="notification__previewContents">
                    <div className="notification__preview">
                      <div className="flex-x items-center body-s" style={{ color: "var(--gray2)", gap: "var(--space-3xs)", marginBottom: "var(--space-2xs)" }}>
                        <VideoPlayIconSvg />
                        <span>{product.videoTour.tag}</span>
                      </div>
                      <div className="flex-x body-s items-center" style={{ gap: "var(--space-2xs)" }}>
                        <img
                          className="icon"
                          src={asset(product.videoTour.thumb)}
                          alt=""
                          aria-hidden="true"
                        />
                        <div>
                          <p className="font-medium">{product.videoTour.title}</p>
                          <p style={{ color: "var(--gray2)", fontSize: "12px", marginTop: "2px" }}>{product.videoTour.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Arrows (Bottom Left & Bottom Right) */}
          {product.heroImages.length > 1 && (
            <div className="button-bar">
              <button
                type="button"
                className="button-prev"
                style={{ transform: "scaleX(-1)" }}
                onClick={handlePrevImage}
                aria-label="Previous photo"
              >
                <PrevArrowSvg />
              </button>
              <button
                type="button"
                className="button-next"
                onClick={handleNextImage}
                aria-label="Next photo"
              >
                <NextArrowSvg />
              </button>
            </div>
          )}
        </div>

        {/* Right Column: 40% Width Variant Bar & Details */}
        <div className="pdp-right-col">
          <div className="pdp-variant-bar-desktop">
            <div>
              {/* Header Title, Price & Reviews */}
              <div className="pdp-hgroup">
                <h1 className="h2 wrap-pretty">{product.fullTitle}</h1>
                <div className="pdp-price-row">
                  <p className="body-l price-indicator">{product.price}</p>
                  <a href="#reviews" className="stars-rating-wrap">
                    <span className="stars">★★★★★</span>
                    <span className="reviews-count">
                      See all {product.reviewsCount} reviews
                    </span>
                  </a>
                </div>
              </div>

              {/* Pitch Copy */}
              <div className="richtext-pdp">
                <p>{product.pitch1}</p>
                <p>{product.pitch2}</p>
                <p>
                  <strong>{product.shippingText}</strong>
                </p>
              </div>

              {/* Configuration Variant Selectors */}
              <div className="configuration">
                {/* Size Option */}
                <div className="variant-option-wrap">
                  <div className="variant-option-row">
                    <div className="option">
                      <label className="body-m font-light" htmlFor="option-A-Size">Size</label>
                      <select
                        className="body-m font-regular variant-option"
                        id="option-A-Size"
                        value={selectedSizeIndex}
                        onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
                      >
                        {product.sizes.map((s, idx) => (
                          <option key={s.name} value={idx}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      <OptionDownTriangle />
                    </div>
                    <button
                      type="button"
                      className={`infoButton ${showSizeInfo ? "is-active" : ""}`}
                      onClick={() => setShowSizeInfo(!showSizeInfo)}
                      aria-label="Size guide"
                    >
                      i
                    </button>
                  </div>

                  {showSizeInfo && (
                    <div className="info-drawer">
                      <table className="ef-table">
                        <thead className="eyebrow">
                          <tr>
                            <td>Size</td>
                            <td>Width</td>
                            <td>Length</td>
                            <td>Weight</td>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizes.map((s) => (
                            <tr key={s.name}>
                              <td>{s.name}</td>
                              <td>{s.width}</td>
                              <td>{s.length}</td>
                              <td>{s.weight}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Firmness Option */}
                {product.firmnessOptions && (
                  <div className="variant-option-wrap">
                    <div className="variant-option-row">
                      <div className="option">
                        <label className="body-m font-light" htmlFor="option-A-Firmness">Firmness</label>
                        <select
                          className="body-m font-regular variant-option"
                          id="option-A-Firmness"
                          value={selectedFirmnessIndex}
                          onChange={(e) =>
                            setSelectedFirmnessIndex(Number(e.target.value))
                          }
                        >
                          {product.firmnessOptions.map((f, idx) => (
                            <option key={f.name} value={idx}>
                              {f.name}
                            </option>
                          ))}
                        </select>
                        <OptionDownTriangle />
                      </div>
                      <button
                        type="button"
                        className={`infoButton ${showFirmnessInfo ? "is-active" : ""}`}
                        onClick={() => setShowFirmnessInfo(!showFirmnessInfo)}
                        aria-label="Firmness guide"
                      >
                        i
                      </button>
                    </div>

                    {showFirmnessInfo && (
                      <div className="info-drawer">
                        {product.firmnessOptions.map((f) => (
                          <div key={f.name} style={{ marginBottom: "8px" }}>
                            <strong style={{ color: "var(--black)" }}>{f.name}</strong>: {f.desc}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Action CTA Button & Side-by-side Shipping Note */}
                <div>
                  <div className="action-row">
                    <a href={inquiryUrl} className="button add-to-cart">
                      Contact Us for Price Inquiry
                    </a>
                    <div className="body-s flex-y shipping-indicator">
                      <p>{product.shippingBadge}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Materials & Certifications Metadata Sections */}
            <div className="sections">
              {product.materials && (
                <div>
                  <h2 className="body-s font-medium">Materials</h2>
                  <div className="body-s">
                    <section className="richtext">
                      {product.materials.map((m) => (
                        <p key={m}>{m}</p>
                      ))}
                    </section>
                  </div>
                </div>
              )}

              {product.certifications && (
                <div>
                  <h2 className="body-s font-medium">Certifications</h2>
                  <div className="body-s">
                    <ul className="linkList">
                      {product.certifications.map((c) => (
                        <li key={c.name}>
                          <a href={c.href} target="_blank" rel="noopener noreferrer">
                            <span>{c.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </ef-product-hero>

      {/* ==================================================================
          Section 1: <ef-product-intro>
          ================================================================== */}
      <ef-product-intro style={{ display: "block", position: "relative" }} className="container-full">
        <hgroup className="container" style={{ textAlign: "center", marginTop: "var(--space-2xl)", marginBottom: "var(--space-xl)" }}>
          <h2 className="h4" style={{ marginBottom: "var(--space-s)" }}>What a dream.</h2>
          <p className="body-s">Naturally breathable, comfy but firm, super supportive, and no sinking feeling.</p>
        </hgroup>
      </ef-product-intro>

      {/* ==================================================================
          Section 2: <ef-product-image-zoomer> (Comfort / "From tree to sleep")
          ================================================================== */}
      <ef-product-image-zoomer style={{ display: "block", position: "relative" }} className="container-full">
        <div className="reveal lg:scroll-snap" style={{ position: "relative" }}>
          <div className="reveal-content">
            <img
              src={asset("PDP_MATTRESS_SUBHERO_640x400_q93.webp")}
              srcSet={`${asset("PDP_MATTRESS_SUBHERO_640x400_q93.webp")} 640w, ${asset("PDP_MATTRESS_SUBHERO_1280x800_q93.webp")} 1280w, ${asset("PDP_MATTRESS_SUBHERO_2560x1600_q93.webp")} 2560w`}
              alt="Mattress subhero"
              sizes="100vw"
            />
            <div className="hidden lg:block" style={{ position: "absolute", top: 0, left: 0, bottom: 0, height: "100%" }}>
              <div className="notification-container notifications-manualintro">
                <div className="notification">
                  <div className="notification__body">
                    <div className="notification__previewContents">
                      <div className="notification__preview">
                        <div className="flex-x items-center body-s" style={{ color: "var(--gray2)", gap: "var(--space-3xs)", marginBottom: "var(--space-2xs)" }}>
                          <VideoPlayIconSvg />
                          <span>Our Story</span>
                        </div>
                        <div className="flex-x body-s items-center" style={{ gap: "var(--space-2xs)" }}>
                          <img
                            className="icon"
                            src={asset("EF_Hero_vert-preview_120x120_q93.webp")}
                            alt=""
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-medium">From tree to sleep</p>
                            <p style={{ color: "var(--gray2)", fontSize: "12px", marginTop: "2px" }}>See the process and materials of how an Earthfoam mattress is made.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ef-product-image-zoomer>

      {/* ==================================================================
          Section 3: <ef-product-image-copy order="copy-image"> (Comfort)
          ================================================================== */}
      <ef-product-image-copy className="container-responsive-lg lg:scroll-snap" style={{ marginBlock: "var(--space-2xl)" }} order="copy-image">
        <div className="image" style={{ position: "relative" }}>
          <img
            src={asset("09_B_640x640_q93.webp")}
            srcSet={`${asset("09_B_640x640_q93.webp")} 640w, ${asset("09_B_1280x1280_q93.webp")} 1280w, ${asset("09_B_2560x2560_q93.webp")} 2560w`}
            alt="woman resting on bed"
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            className="lg:rounded"
          />
        </div>
        <div className="body container" style={{ marginBlock: "var(--space-m)" }}>
          <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>Comfort</h2>
          <ul style={{ marginBottom: "var(--space-l)", listStyle: "none" }}>
            <li className="h2">There’s no wrong side of this bed.</li>
          </ul>
          <div className="richtext block body-s">
            <p>Earthfoam absorbs pressure instantly and returns to its original shape the moment you move. This keeps you comfortable all night, in any position, without bothering anyone else in bed.</p>
            <p style={{ marginTop: "12px" }}>The high density of our foam provides stability for people of all shapes and sizes, and the breathability of our materials dissipates body heat as you sleep.</p>
            <p style={{ marginTop: "12px" }}>Keep in mind, as much as you may like the idea of sleeping on a cloud, our bodies prefer it firm. Even our medium mattress is on the firmer side to support your spine, cradle your joints, and prevent back pain.</p>
          </div>
        </div>
      </ef-product-image-copy>

      {/* ==================================================================
          Section 4: <ef-product-image-copy order=""> (Materials)
          ================================================================== */}
      <ef-product-image-copy className="container-responsive-lg lg:scroll-snap" style={{ marginBlock: "var(--space-2xl)" }} order="">
        <div className="image" style={{ position: "relative" }}>
          <img
            src={asset("Home_2up_left_640x859_q93.webp")}
            srcSet={`${asset("Home_2up_left_640x859_q93.webp")} 640w, ${asset("Home_2up_left_1280x1719_q93.webp")} 1280w, ${asset("Home_2up_left_2560x3438_q93.webp")} 2560w`}
            alt=""
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            className="lg:rounded"
          />
        </div>
        <div className="body container" style={{ marginBlock: "var(--space-m)" }}>
          <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>Materials</h2>
          <ul style={{ marginBottom: "var(--space-l)", listStyle: "none" }}>
            <li className="h2">Tapped like syrup.</li>
            <li className="h2">Molded like jello.</li>
            <li className="h2">Baked like a cake.</li>
          </ul>
          <div className="richtext block body-s">
            <p>Natural rubber is so good. But it’s misunderstood. This springy material comes from trees. Trees! The word rubber sounds plasticky and artificial, but it’s the most natural, breathable, durable, and sustainable material available for mattresses.</p>
            <p style={{ marginTop: "12px" }}>We source our liquid rubber from a network of independent farmers in Sri Lanka, and we process it at our own factory nearby. To bond liquid rubber molecules into plush foam, we mix it with a small amount of sulfur, zinc oxide, accelerators, and antioxidants. Our foam has earned the most stringent organic, fair trade, and health certifications available.</p>
            <p style={{ marginTop: "12px" }}>Our mattresses also feature GOTS-certified organic wool and cotton. Our wool comes from a farmer-owned collective in New Zealand dedicated to high-quality wool, happy sheep, and sustainability. Our cotton is grown in India and Turkey without the use of pesticides or synthetic fertilizer and processed in certified organic factories in Canada, Germany, and Pakistan.</p>
          </div>
        </div>
      </ef-product-image-copy>

      {/* ==================================================================
          Section 5: <ef-product-image-map> (5-Layer Hotspot Diagram)
          ================================================================== */}
      {product.hotspots && (
        <div className="ef-product-image-map flex-y lg:flex-x-rev lg:scroll-snap container-responsive-lg" style={{ maxWidth: "var(--content-maxwidth)", gap: "var(--space-s)", marginBlock: "var(--space-2xl)" }}>
          <div className="map" style={{ overflow: "hidden" }}>
            <img
              src={asset("mattress-crossection_640x816_q93.webp")}
              srcSet={`${asset("mattress-crossection_640x816_q93.webp")} 640w, ${asset("mattress-crossection_1280x1632_q93.webp")} 1280w, ${asset("mattress-crossection_2560x3265_q93.webp")} 2560w`}
              alt="Mattress cross section"
              sizes="100vw"
              className="lg:rounded"
            />
            <div style={{ position: "relative" }}>
              {product.hotspots.layers.map((layer, idx) => (
                <button
                  key={layer.num}
                  type="button"
                  data-index={idx}
                  className={`ef-map-hotspot ${hoveredHotspot === idx ? "hover" : ""}`}
                  style={{ left: `${layer.x}%`, top: `${layer.y}%` }}
                  onMouseEnter={() => setHoveredHotspot(idx)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                  onClick={() => setHoveredHotspot(hoveredHotspot === idx ? null : idx)}
                  aria-label={`Layer ${layer.num}: ${layer.title}`}
                >
                  {layer.num}
                </button>
              ))}
            </div>
          </div>

          <div className="descriptions" style={{ paddingBlock: "var(--space-l)" }}>
            <hgroup className="container" style={{ marginBottom: "var(--space-m)", paddingInline: "var(--space-xs)" }}>
              <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>Design</h2>
              <p className="body-l font-medium">Expertly made with five plush layers.</p>
            </hgroup>

            <div className="ef-map-description-list">
              <ol className="flex-y">
                {product.hotspots.layers.map((layer, idx) => (
                  <li
                    key={layer.num}
                    data-index={idx}
                    className={`rounded ${hoveredHotspot === idx ? "hover" : ""}`}
                    style={{ paddingInline: "var(--space-xs)" }}
                    onMouseEnter={() => setHoveredHotspot(idx)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    onClick={() => setHoveredHotspot(hoveredHotspot === idx ? null : idx)}
                  >
                    <div>{layer.num}</div>
                    <h3 className="body-m font-medium">{layer.title}</h3>
                    <p className="body-s" style={{ color: "var(--gray2)" }}>{layer.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          Section 6: <ef-product-image-copy> (Durability)
          ================================================================== */}
      <ef-product-image-copy className="container-responsive-lg lg:scroll-snap" style={{ marginBlock: "var(--space-2xl)" }} order="">
        <div className="image" style={{ position: "relative" }}></div>
        <div className="body container" style={{ marginBlock: "var(--space-m)" }}>
          <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>Durability</h2>
          <ul style={{ marginBottom: "var(--space-l)", listStyle: "none" }}>
            <li className="h2">Like new, night after night.</li>
          </ul>
          <div className="richtext block body-s">
            <p>Our mattresses are made to last up to three times longer than the one you have now.</p>
            <p style={{ marginTop: "12px" }}>Natural foam rubber is famous for its durability, and we rigorously test our mattresses to meet higher-than-industry standards. For peace of mind, we include a comprehensive 10-year warranty with every purchase.</p>
          </div>
        </div>
      </ef-product-image-copy>

      {/* ==================================================================
          Section 8: Accordion Section (Peace of Mind)
          ================================================================== */}
      <section className="container accordionSection">
        <div></div>
        <div className="flex-y" style={{ gap: "var(--space-m)" }}>
          <h2 className="h3 wrap-pretty">We want shopping for an Earthfoam mattress to be as nice as sleeping on one.</h2>
          <div style={{ borderTop: "2px solid var(--color-border-major, var(--black))", display: "block" }}>
            <div className="ef-accordion-fold" style={{ borderBottom: "1px solid var(--color-border-minor, var(--gray3))" }}>
              <details open>
                <summary className="body-m wrap-pretty">Free shipping &amp; free returns</summary>
                <div className="richtext body-s" style={{ color: "var(--color-fg-subdued, var(--gray2))" }}>
                  <p><a href="/help/shipping-and-returns">We ship for free</a> to all locations.</p>
                </div>
              </details>
            </div>

            <div className="ef-accordion-fold" style={{ borderBottom: "1px solid var(--color-border-minor, var(--gray3))" }}>
              <details>
                <summary className="body-m wrap-pretty">100-night trial</summary>
                <div className="richtext body-s" style={{ color: "var(--color-fg-subdued, var(--gray2))" }}>
                  <p>Our mattresses and toppers can be <a href="/help/shipping-and-returns">returned for free</a> within 100 days of delivery. No questions asked.</p>
                </div>
              </details>
            </div>

            <div className="ef-accordion-fold" style={{ borderBottom: "1px solid var(--color-border-minor, var(--gray3))" }}>
              <details>
                <summary className="body-m wrap-pretty">10-year warranty</summary>
                <div className="richtext body-s" style={{ color: "var(--color-fg-subdued, var(--gray2))" }}>
                  <p>We stand behind all of our products and include a comprehensive <a href="/help/mattress-warranty">10-year warranty</a> for our mattresses.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Section 9: Asset Links Section (Certifications)
          ================================================================== */}
      <section className="container assetLinkListSection" style={{ paddingInline: "var(--space-xs)", marginBlock: "var(--space-2xl)", maxWidth: "var(--layout-maxwidth-s)" }}>
        <div>
          <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>Peace of mind</h2>
          <h3 className="h2 wrap-pretty">Certified to help you sleep easier.</h3>
          <div className="richtext body-s" style={{ marginTop: "var(--space-s)" }}>
            <p>As a small, independent company, we make every decision ourselves. We’ve worked hard to control as much of our process as possible to do right by the people, places, and animals we rely on.</p>
            <p style={{ marginTop: "12px" }}>Our products carry several internationally recognized certifications for meeting stringent fair trade, organic, safety, and emissions standards.</p>
          </div>
        </div>

        <ul className="linkList">
          <li>
            <a href="/assets/2026-EF-Cert-GOTS.jpg" target="_blank" rel="noopener noreferrer">
              Global Organic Textile Standard (GOTS)
            </a>
          </li>
          <li>
            <a href="/assets/2026-EF-Cert-GOLS.pdf" target="_blank" rel="noopener noreferrer">
              Global Organic Latex Standard (GOLS)
            </a>
          </li>
          <li>
            <a href="/assets/FFL_Certificate_Shevick%20Sales%20Corp.%20DBA%20%20Sleep%20On%20Latex%20DBA%20Earthfoam_20231019.jpg" target="_blank" rel="noopener noreferrer">
              Fair For Life – Fair Trade
            </a>
          </li>
          <li>
            <a href="/assets/17.HUS.25845%20-en.jpg" target="_blank" rel="noopener noreferrer">
              Oeko-Tex® Standard 100
            </a>
          </li>
        </ul>
      </section>

      {/* ==================================================================
          Section 10: Reviews (<ef-product-reviews>)
          ================================================================== */}
      <section id="reviews" className="block container" style={{ marginBlock: "var(--space-3xl)" }}>
        <header style={{ marginBottom: "var(--space-m)" }}>
          <div className="flex-x" style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
            <hgroup>
              <h2 className="eyebrow" style={{ marginBottom: "var(--space-3xs)" }}>Reviews</h2>
              <p className="h2">Customer Reviews &amp; Ratings</p>
            </hgroup>
            <div className="flex-x items-center" style={{ gap: "var(--space-3xs)" }}>
              <span style={{ color: "var(--sunset)", fontSize: "16px" }}>★★★★★</span>
              <span className="body-l font-medium">4.9</span>
              <span className="body-s" style={{ color: "var(--gray2)" }}>({product.reviewsCount} reviews)</span>
            </div>
          </div>
        </header>

        <div className="reviews-grid-clean">
          {product.reviewsList.map((rev) => (
            <div key={rev.title} className="review-item-card">
              <div style={{ color: "var(--sunset)", fontSize: "14px" }}>★★★★★</div>
              <h3 className="body-l font-medium">{rev.title}</h3>
              <p className="body-m" style={{ color: "var(--gray1)", lineHeight: "1.5" }}>"{rev.body}"</p>
              <span className="eyebrow" style={{ color: "var(--gray2)", marginTop: "8px" }}>
                {rev.author} — {rev.location} (Verified Buyer)
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================
          Section 11: Video Song Showcase
          ================================================================== */}
      <section className="container flex-y" style={{ gap: "var(--space-xl)", marginBlock: "var(--space-3xl)", alignItems: "center" }}>
        <hgroup className="flex-y" style={{ gap: "var(--space-2xs)", textAlign: "center" }}>
          <h2 className="h4">Still not convinced? Maybe a song will help.</h2>
          <div>
            <a href="https://instagram.com/earthfoam" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
              <span className="eyebrow">@earthfoam</span>
            </a>
          </div>
        </hgroup>

        <figure className="flex-y" style={{ gap: "var(--space-s)", alignItems: "center", maxWidth: "100%" }}>
          <div className="ef-video" style={{ aspectRatio: "250 / 444", maxHeight: "450px", maxWidth: "100%" }}>
            <video
              src={asset("EF_2026_FEB_HAILES01_1080x1920_1_250x444_crf18.mp4")}
              width="250"
              height="444"
              controls
              playsInline
              preload="none"
              className="rounded"
              style={{ width: "250px", height: "444px", maxHeight: "450px", maxWidth: "100%", backgroundColor: "var(--gray3)", borderRadius: "8px" }}
            />
          </div>
          <figcaption className="body-s richtext" style={{ textAlign: "center" }}>
            <p>Song by <a href="https://www.instagram.com/hailes.wav/" target="_blank" rel="noopener noreferrer">Hailes</a></p>
          </figcaption>
        </figure>
      </section>

    </div>
  );
}
