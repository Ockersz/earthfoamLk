import { useState, useEffect, useRef } from "react";
import { PRODUCTS_DATA } from "../data/productsData.js";
import NotFoundPage from "./NotFoundPage.jsx";
import "./ProductDetailPage.css";

const assetBaseUrl = "/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

const IMAGE_SWIPE_DURATION_MS = 650;

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



function FloatingNavDotsSvg() {
  return (
    <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="9.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="1.5" r="1.5" fill="currentColor" />
      <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function VerifiedBadgeSvg() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2.508 9.528L2.616 9.408L2.712 9.348L2.82 9.408C2.976 9.288 3.108 9.156 3.216 9.024C3.324 8.892 3.528 8.544 3.852 8.004L4.596 6.744C4.992 6.072 7.068 3.252 7.536 2.724C8.616 1.488 8.976 1.116 9.12 0.924C9.252 0.756 9.336 0.624 9.336 0.528C9.336 0.468 9.3 0.372 9.24 0.372C9.18 0.372 9.084 0.42 8.964 0.504L9.06 0.288L8.652 0.528L8.676 0.36C8.652 0.431999 8.46 0.624 8.412 0.624C8.376 0.624 8.364 0.588 8.364 0.528V0.48L8.028 0.648C8.004 0.648 7.98 0.636 7.98 0.599999C7.98 0.564 8.004 0.48 8.028 0.36C7.86 0.539999 7.62 0.744 7.308 0.96C6.888 1.248 5.256 3.3 4.596 4.368C4.152 5.076 3.972 5.496 3.9 5.496C3.876 5.496 3.864 5.448 3.852 5.352C3.636 5.844 3.444 6.252 3.252 6.552C3.06 6.852 2.88 7.008 2.748 7.008C2.592 7.008 2.46 6.708 2.316 6.096C2.256 5.832 2.124 5.664 1.932 5.568L1.896 5.556C1.86 5.556 1.812 5.58 1.752 5.616C1.692 5.652 1.656 5.688 1.632 5.688H1.62L1.404 5.616L1.212 5.904C1.188 5.94 1.14 5.952 1.104 5.952C1.044 5.952 0.996 5.94 0.972 5.904C0.924 6.072 0.864 6.156 0.816 6.156C0.78 6.156 0.708 6.132 0.612 6.072C0.696 6.708 0.768 7.128 0.84 7.332C0.984 7.728 1.308 8.628 1.62 9.228C1.656 9.3 1.704 9.384 1.74 9.456C1.86 9.384 1.896 9.372 1.98 9.372L2.076 9.384C2.136 9.408 2.172 9.444 2.172 9.504L2.448 9.372C2.496 9.372 2.508 9.42 2.508 9.528Z" fill="#F67B71" />
    </svg>
  );
}

// Grows from 50% to 100% width as it scrolls up through the viewport.
// Once it reaches 100%, the scroll listener detaches so it stays pinned
// at full width and never shrinks back, even when scrolling back up.
function ImageZoomer({ src, alt }) {
  const containerRef = useRef(null);
  const [widthPercent, setWidthPercent] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 1024;
      const growthDistance = isMobile ? viewportHeight / 2.5 : viewportHeight / 1.2;
      const progress = Math.min(
        Math.max((viewportHeight - rect.top) / growthDistance, 0),
        1
      );
      setWidthPercent(50 + progress * 50);

      if (progress >= 1) {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ef-product-image-zoomer ref={containerRef} className="container-full">
      <div
        className={`reveal-content${widthPercent >= 100 ? " is-full" : ""}`}
        style={{ position: "relative", width: `${widthPercent}%`, marginInline: "auto" }}
      >
        <img src={src} alt={alt} sizes="100vw" />
      </div>
    </ef-product-image-zoomer>
  );
}

export default function ProductDetailPage({ slug }) {
  const product = PRODUCTS_DATA[slug];
  const heroRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [slideDirection, setSlideDirection] = useState("next");
  const swipeTimeoutRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openInfoDrawer, setOpenInfoDrawer] = useState(null);
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [expandedHotspot, setExpandedHotspot] = useState(null);
  const [openMobileSections, setOpenMobileSections] = useState({});
  const [openGuaranteeIndex, setOpenGuaranteeIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [showSpecsBar, setShowSpecsBar] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [activeSpecsTab, setActiveSpecsTab] = useState("Overview");
  const [reviewSearchQuery, setReviewSearchQuery] = useState("");
  const [reviewVariantFilter, setReviewVariantFilter] = useState("");
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  // Advances the hero carousel with a two-image slide: the outgoing image
  // stays mounted for IMAGE_SWIPE_DURATION_MS so it can animate out while
  // the incoming image animates in.
  const goToImage = (nextIndex, direction) => {
    setSlideDirection(direction);
    setPrevImageIndex(activeImageIndex);
    setActiveImageIndex(nextIndex);

    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
    }
    swipeTimeoutRef.current = setTimeout(() => {
      setPrevImageIndex(null);
    }, IMAGE_SWIPE_DURATION_MS);
  };

  // Initialize and reset on product change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (swipeTimeoutRef.current) {
      clearTimeout(swipeTimeoutRef.current);
    }
    setActiveImageIndex(0);
    setPrevImageIndex(null);
    setOpenInfoDrawer(null);
    setHoveredHotspot(null);
    setExpandedHotspot(null);
    setOpenMobileSections({});
    setOpenGuaranteeIndex(0);
    setActiveVideoModal(null);
    setShowSpecsBar(false);
    setIsSpecsOpen(false);
    setActiveSpecsTab("Overview");
    setReviewSearchQuery("");
    setReviewVariantFilter("");

    if (product && product.options) {
      const initial = {};
      product.options.forEach((opt) => {
        initial[opt.id] = 0;
      });
      setSelectedOptions(initial);
    }
  }, [slug]);

  // Scroll listener for sticky bottom Specs bar
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowSpecsBar(rect.bottom < 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance hero carousel every 3s, looping infinitely.
  // Depending on activeImageIndex means any manual prev/next click also
  // restarts this 3s countdown, instead of racing the running timer.
  useEffect(() => {
    if (!product || !product.heroImages || product.heroImages.length <= 1) return;

    const timer = setTimeout(() => {
      const nextIndex =
        activeImageIndex === product.heroImages.length - 1 ? 0 : activeImageIndex + 1;
      goToImage(nextIndex, "next");
    }, 3000);

    return () => clearTimeout(timer);
  }, [slug, activeImageIndex, product?.heroImages?.length]);

  if (!product) {
    return <NotFoundPage />;
  }

  // Calculate current dynamic price
  const calculateCurrentPrice = () => {
    if (!product.options) return product.price;

    let base = product.basePrice || 0;
    const sizeOpt = product.options.find((o) => o.id === "Size");
    const qtyOpt = product.options.find((o) => o.id === "Quantity");

    if (sizeOpt && selectedOptions["Size"] !== undefined) {
      const val = sizeOpt.values[selectedOptions["Size"]];
      if (val && val.price) return val.price;
    }
    if (qtyOpt && selectedOptions["Quantity"] !== undefined) {
      const val = qtyOpt.values[selectedOptions["Quantity"]];
      if (val && val.price) return val.price;
    }

    const topperOpt = product.options.find((o) => o.id === "Pillow Topper");
    if (topperOpt && selectedOptions["Pillow Topper"] !== undefined) {
      const tVal = topperOpt.values[selectedOptions["Pillow Topper"]];
      if (tVal && tVal.priceAdd) {
        base += tVal.priceAdd;
      }
      return `$${base.toLocaleString()}.00`;
    }

    return product.price;
  };

  const currentPrice = calculateCurrentPrice();
  const activeImage = product.heroImages[activeImageIndex] || product.heroImages[0];

  const handlePrevImage = () => {
    const nextIndex =
      activeImageIndex === 0 ? product.heroImages.length - 1 : activeImageIndex - 1;
    goToImage(nextIndex, "prev");
  };

  const handleNextImage = () => {
    const nextIndex =
      activeImageIndex === product.heroImages.length - 1 ? 0 : activeImageIndex + 1;
    goToImage(nextIndex, "next");
  };

  const handleOptionChange = (optionId, index) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: Number(index),
    }));
  };

  const toggleInfoDrawer = (optionId) => {
    setOpenInfoDrawer((prev) => (prev === optionId ? null : optionId));
  };

  const handleSpecsToggle = () => {
    setIsSpecsOpen((prev) => !prev);
  };

  // Build inquiry URL for Sri Lanka pairing
  const getSelectedSummary = () => {
    if (!product.options) return "";
    return product.options
      .map((opt) => {
        const valIndex = selectedOptions[opt.id] || 0;
        const val = opt.values[valIndex];
        return val ? `${opt.name}: ${val.name}` : "";
      })
      .filter(Boolean)
      .join(", ");
  };

  const inquiryUrl = `/contact?inquiry=${encodeURIComponent(
    `Price inquiry for ${product.fullTitle} (${getSelectedSummary()})`
  )}`;

  // Filter reviews
  const filteredReviews = (product.reviewsList || []).filter((rev) => {
    const matchesSearch =
      reviewSearchQuery === "" ||
      rev.title.toLowerCase().includes(reviewSearchQuery.toLowerCase()) ||
      rev.body.toLowerCase().includes(reviewSearchQuery.toLowerCase()) ||
      rev.author.toLowerCase().includes(reviewSearchQuery.toLowerCase());

    const matchesVariant =
      reviewVariantFilter === "" ||
      (rev.specs && rev.specs.includes(reviewVariantFilter));

    return matchesSearch && matchesVariant;
  });

  return (
    <div className="pdpPage">
      {/* Floating Top-Right Shop Now Nav (Circle -> Pill on Hover) */}
      <a href="/products" className="ef-floating-nav" aria-label="Shop Now">
        <FloatingNavDotsSvg />
        <span>Shop Now</span>
      </a>

      {/* ==================================================================
          Section 0: Mobile Header (<header class="header-mobile">)
          ================================================================== */}
      <header className="header-mobile container flex-y lg:hidden">
        <h1 className="h1 wrap-pretty">{product.fullTitle}</h1>

        <div className="block lg:hidden">
          {/* <p className="mobile-price-indicator">{currentPrice}</p> */}
          {/* <div className="mobile-rating-row">
            <span style={{ color: "var(--sunset)", letterSpacing: "2px" }}>★★★★★</span>
            <a href="#reviews" className="body-s">
              See all {product.reviewsCount} reviews
            </a>
          </div> */}

          {/* Mobile Picklists */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2xs)" }}>
            {product.options &&
              product.options.map((opt) => (
                <div key={opt.id} className="option">
                  <label className="body-m font-light" htmlFor={`option-mobile-${opt.id}`}>
                    {opt.name}
                  </label>
                  <select
                    className="body-m font-regular variant-option"
                    id={`option-mobile-${opt.id}`}
                    value={selectedOptions[opt.id] || 0}
                    onChange={(e) => handleOptionChange(opt.id, e.target.value)}
                  >
                    {opt.values.map((v, vIdx) => (
                      <option key={v.name} value={vIdx}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                  <OptionDownTriangle />
                </div>
              ))}

            {/* need to change for inquiry button */}
            {/* <div>
              <a href={inquiryUrl} className="button add-to-cart" style={{ width: "100%", display: "block" }}>
                Add to Cart
              </a>
            </div> */}
            <div className="body-s flex-y" style={{ color: "var(--gray2)", gap: "3px", textAlign: "center" }}>
              <p>{product.shippingBadge}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ==================================================================
          Hero Viewport Section (<ef-product-hero>)
          ================================================================== */}
      <ef-product-hero ref={heroRef} className="flex-x" style={{ position: "relative" }}>
        {/* Left Column: 60% Width Full-Bleed Sticky Carousel */}
        <div className="ef-product-carousel">
          {prevImageIndex !== null && product.heroImages[prevImageIndex] && (
            <img
              key={`outgoing-${prevImageIndex}`}
              src={asset(product.heroImages[prevImageIndex].src)}
              srcSet={product.heroImages[prevImageIndex].srcSet}
              sizes="(min-width: 1024px) 60vw, 100vw"
              alt=""
              aria-hidden="true"
              className={`carousel-outgoing carousel-outgoing-${slideDirection}`}
            />
          )}
          <img
            key={`incoming-${activeImageIndex}`}
            src={asset(activeImage.src)}
            srcSet={activeImage.srcSet}
            sizes="(min-width: 1024px) 60vw, 100vw"
            alt={activeImage.alt}
            loading="eager"
            className={
              prevImageIndex !== null
                ? `carousel-incoming carousel-incoming-${slideDirection}`
                : "carousel-incoming"
            }
          />





          {/* Navigation Arrows (Bottom Left & Bottom Right) */}
          {product.heroImages.length > 1 && (
            <div className="button-bar">
              <button
                type="button"
                className="button-prev"
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
        <div className="pdp-right-col hidden lg:flex-x">
          <div className="pdp-variant-bar-desktop">
            <div style={{ marginBlock: "var(--space-l)" }}>
              {/* Header Title, Price & Reviews */}
              <div className="pdp-hgroup">
                <h1 className="h2 wrap-pretty">{product.fullTitle}</h1>
                {/* <div className="pdp-price-row">
                  <p className="body-l price-indicator">{currentPrice}</p>
                  <a href="#reviews" className="stars-rating-wrap">
                    <span className="stars">★★★★★</span>
                    <span className="reviews-count">
                      See all {product.reviewsCount} reviews
                    </span>
                  </a>
                </div> */}
              </div>

              {/* Pitch Copy */}
              <div className="richtext-pdp">
                <p>{product.pitch1}</p>
                {product.pitch2 && <p>{product.pitch2}</p>}
                <p>
                  <strong>{product.shippingText}</strong>
                </p>
              </div>

              {/* Configuration Variant Picklists */}
              <div className="configuration">
                {product.options &&
                  product.options.map((opt) => (
                    <div key={opt.id} className="variant-option-wrap">
                      <div className="variant-option-row">
                        <div className="option">
                          <label className="body-m font-light" htmlFor={`option-desktop-${opt.id}`}>
                            {opt.name}
                          </label>
                          <select
                            className="body-m font-regular variant-option"
                            id={`option-desktop-${opt.id}`}
                            value={selectedOptions[opt.id] || 0}
                            onChange={(e) => handleOptionChange(opt.id, e.target.value)}
                          >
                            {opt.values.map((v, vIdx) => (
                              <option key={v.name} value={vIdx}>
                                {v.name}
                              </option>
                            ))}
                          </select>
                          <OptionDownTriangle />
                        </div>

                        {opt.hasInfo && (
                          <button
                            type="button"
                            className={`infoButton ${openInfoDrawer === opt.id ? "is-active" : ""}`}
                            onClick={() => toggleInfoDrawer(opt.id)}
                            aria-label={`${opt.name} guide`}
                          >
                            {openInfoDrawer === opt.id ? "×" : "i"}
                          </button>
                        )}
                      </div>

                      {/* Expandable Drawers for size/firmness/topper info */}
                      {opt.id === "Size" && (
                        <div className={`info-drawer${openInfoDrawer === opt.id ? " is-open" : ""}`}>
                          <div className="info-drawer-inner">
                            <table className="ef-table">
                              <thead className="eyebrow">
                                <tr>
                                  {opt.values[0]?.name && <td>Size</td>}
                                  {opt.values[0]?.length && <td>Length</td>}
                                  {opt.values[0]?.width && <td>Width</td>}
                                  {opt.values[0]?.heights && <td>Available Heights</td>}
                                  {opt.values[0]?.weight && <td>Weight</td>}
                                </tr>
                              </thead>
                              <tbody>
                                {opt.values.map((s, sIdx) => (
                                  <tr key={s.name || sIdx}>
                                    {s.name && <td>{s.name}</td>}
                                    {s.length && <td>{s.length}</td>}
                                    {s.width && <td>{s.width}</td>}
                                    {s.heights && <td>{s.heights}</td>}
                                    {s.weight && <td>{s.weight}</td>}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            {product.sizeDescription && (
                              <div style={{ marginTop: "12px", whiteSpace: "pre-line" }}>
                                {product.sizeDescription}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {opt.id === "Firmness" && (
                        <div className={`info-drawer${openInfoDrawer === opt.id ? " is-open" : ""}`}>
                          <div className="info-drawer-inner">
                            {opt.values.map((f) => (
                              <div key={f.name} style={{ marginBottom: "12px" }}>
                                <strong style={{ color: "var(--black)" }}>{f.name}</strong>
                                <p style={{ marginTop: "4px" }}>{f.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {opt.id === "Pillow Topper" && (
                        <div className={`info-drawer${openInfoDrawer === opt.id ? " is-open" : ""}`}>
                          <div className="info-drawer-inner">
                            {product.pillowTopperGuide && (
                              <div style={{ marginBottom: "12px" }}>
                                <strong style={{ color: "var(--black)" }}>
                                  {product.pillowTopperGuide.title}
                                </strong>
                                <p style={{ marginTop: "4px", whiteSpace: "pre-line" }}>
                                  {product.pillowTopperGuide.desc}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* need to change to Inquiry Button */}

                {/* CTA Action Row */}
                {/* <div className="action-row" style={{ marginTop: "var(--space-2xs)" }}>
                  <a href={inquiryUrl} className="button add-to-cart">
                    Add to Cart
                  </a>
                  <div className="body-s flex-y shipping-indicator">
                    <p>{product.shippingBadge}</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Materials & Certifications Sections */}
            <div className="sections">
              {product.materials && (
                <div>
                  <h2 className="body-s font-medium">Materials</h2>
                  <div className="body-s">
                    <section className="richtext materials-list">
                      {product.materials.map((m) => (
                        <p key={m} 
                        // style={{ marginBottom: "4px" }}
                        >
                          {m}
                        </p>
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
                            {c.name}
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
          Section 1: Mobile Accordions (<ef-accordion-fold>)
          ================================================================== */}
      <div className="block lg:hidden mobile-accordions-wrap">
        <div className="mobile-accordion-fold">
          <button
            type="button"
            className="accordion-summary body-l"
            aria-expanded={!!openMobileSections.overview}
            onClick={() =>
              setOpenMobileSections((prev) => ({ ...prev, overview: !prev.overview }))
            }
          >
            Overview
          </button>
          <div className={`accordion-panel${openMobileSections.overview ? " is-open" : ""}`}>
            <div className="accordion-panel-inner mobile-accordion-content">
              <h3 className="body-m font-medium" style={{ marginBottom: "6px" }}>About</h3>
              <p>{product.pitch1}</p>
              {product.pitch2 && <p style={{ marginTop: "8px" }}>{product.pitch2}</p>}

              <h3 className="body-m font-medium" style={{ marginTop: "16px", marginBottom: "6px" }}>Certifications</h3>
              <ul className="linkList">
                {product.certifications &&
                  product.certifications.map((c) => (
                    <li key={c.name}>
                      <a href={c.href} target="_blank" rel="noopener noreferrer">
                        {c.name}
                      </a>
                    </li>
                  ))}
              </ul>

              <h3 className="body-m font-medium" style={{ marginTop: "16px", marginBottom: "6px" }}>Customer Experience</h3>
              <ul className="linkList">
                <li><a href="/help/shipping-and-returns">Free shipping &amp; returns</a></li>
                <li><a href="/help/shipping-and-returns">100-night trial. No questions asked</a></li>
                <li><a href="/help/shipping-and-returns">Comprehensive warranty</a></li>
              </ul>
            </div>
          </div>
        </div>

        {product.options && product.options.some((o) => o.id === "Size") && (
          <div className="mobile-accordion-fold">
            <button
              type="button"
              className="accordion-summary body-l"
              aria-expanded={!!openMobileSections.sizing}
              onClick={() =>
                setOpenMobileSections((prev) => ({ ...prev, sizing: !prev.sizing }))
              }
            >
              Sizing &amp; Details
            </button>
            <div className={`accordion-panel${openMobileSections.sizing ? " is-open" : ""}`}>
              <div className="accordion-panel-inner mobile-accordion-content">
                <table className="ef-table">
                  <thead className="eyebrow">
                    <tr>
                      {product.options.find((o) => o.id === "Size")?.values[0]?.name && <td>Size</td>}
                      {product.options.find((o) => o.id === "Size")?.values[0]?.length && <td>Length</td>}
                      {product.options.find((o) => o.id === "Size")?.values[0]?.width && <td>Width</td>}
                      {product.options.find((o) => o.id === "Size")?.values[0]?.heights && (
                        <td>Available Heights</td>
                      )}
                      {product.options.find((o) => o.id === "Size")?.values[0]?.weight && <td>Weight</td>}
                    </tr>
                  </thead>
                  <tbody>
                    {product.options
                      .find((o) => o.id === "Size")
                      ?.values.map((s, sIdx) => (
                        <tr key={s.name || sIdx}>
                          {s.name && <td>{s.name}</td>}
                          {s.length && <td>{s.length}</td>}
                          {s.width && <td>{s.width}</td>}
                          {s.heights && <td>{s.heights}</td>}
                          {s.weight && <td>{s.weight}</td>}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {product.sizeDescription && (
                  <p style={{ marginTop: "12px", whiteSpace: "pre-line" }}>{product.sizeDescription}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {product.options && product.options.some((o) => o.id === "Firmness") && (
          <div className="mobile-accordion-fold">
            <button
              type="button"
              className="accordion-summary body-l"
              aria-expanded={!!openMobileSections.firmness}
              onClick={() =>
                setOpenMobileSections((prev) => ({ ...prev, firmness: !prev.firmness }))
              }
            >
              Firmness
            </button>
            <div className={`accordion-panel${openMobileSections.firmness ? " is-open" : ""}`}>
              <div className="accordion-panel-inner mobile-accordion-content">
                {product.options
                  .find((o) => o.id === "Firmness")
                  ?.values.map((f) => (
                    <div key={f.name} style={{ marginBottom: "12px" }}>
                      <h3 className="body-m font-medium">{f.name}</h3>
                      <p>{f.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {product.faqCategories && (
          <div className="mobile-accordion-fold">
            <button
              type="button"
              className="accordion-summary body-l"
              aria-expanded={!!openMobileSections.faq}
              onClick={() =>
                setOpenMobileSections((prev) => ({ ...prev, faq: !prev.faq }))
              }
            >
              FAQ
            </button>
            <div className={`accordion-panel${openMobileSections.faq ? " is-open" : ""}`}>
              <div className="accordion-panel-inner mobile-accordion-content">
                {product.faqCategories.map((cat) => (
                  <div key={cat.title} style={{ marginBottom: "16px" }}>
                    <h3 className="body-m font-medium" style={{ marginBottom: "8px" }}>{cat.title}</h3>
                    {cat.items.map((item) => (
                      <div key={item.q} style={{ marginBottom: "12px" }}>
                        <p className="font-medium" style={{ color: "var(--black)" }}>{item.q}</p>
                        <p style={{ marginTop: "4px" }}>{item.a}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================================================================
          Section 2: Intro Headline Banner (<ef-product-intro>)
          ================================================================== */}
      {product.intro && (
        <ef-product-intro className="container-full">
          <hgroup
            className="container"
            style={{ textAlign: "center", marginTop: "var(--space-2xl)", marginBottom: "var(--space-xl)" }}
          >
            <h2 className="h4" style={{ marginBottom: "var(--space-s)" }}>
              {product.intro.title}
            </h2>
            <p className="body-s">{product.intro.subtitle}</p>
          </hgroup>
        </ef-product-intro>
      )}

      {/* ==================================================================
          Section 3: Image Zoomer 1 (<ef-product-image-zoomer>)
          ================================================================== */}
      {/* {product.zoomer1 && (
        <ef-product-image-zoomer className="container-full">
          <div className="reveal-content" style={{ position: "relative" }}>
            <img
              src={asset(product.zoomer1.image)}
              alt="Earthfoam detail view"
              sizes="100vw"
            />

          </div>
        </ef-product-image-zoomer>
      )} */}
      {product.zoomer1 && (
        <ImageZoomer src={asset(product.zoomer1.image)} alt="Earthfoam detail view" />
      )}

      {/* ==================================================================
          Section 4: Product Image Copy 1 (<ef-product-image-copy>)
          ================================================================== */}
      {product.imageCopy1 && (
        <ef-product-image-copy
          className="container-responsive-lg"
          style={{ marginBlock: "var(--space-2xl)" }}
          order={product.imageCopy1.order || ""}
        >
         
          <div className="body container " style={{ marginBlock: "var(--space-m)", paddingInline: "var(--space-2xl)" }}>
            <h2 className="eyebrow">{product.imageCopy1.eyebrow}</h2>
            {product.imageCopy1.title && (
              <ul style={{ marginTop: "var(--space-s)" }}>
                <li className="h2" >{product.imageCopy1.title}</li>
              </ul>
            )}
            {product.imageCopy1.bullets && (
              <ul>
                {product.imageCopy1.bullets.map((b) => (
                  <li key={b} className="h2">{b}</li>
                ))}
              </ul>
            )}
            <div className="richtext block body-s" style={{ color: "var(--gray2)", marginTop: "var(--space-s)" }}>
              {product.imageCopy1.paragraphs.map((p, pIdx) => (
                <p key={pIdx} style={{ marginTop: pIdx > 0 ? "12px" : "0" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
           <div className="image" style={{ position: "relative" }}>
            {product.imageCopy1.image && (
              <img
                src={asset(product.imageCopy1.image)}
                alt=""
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="lg:rounded"
                style={{width: "100%"}}
              />
            )}
          </div>
        </ef-product-image-copy>
      )}

      {/* ==================================================================
          Section 5: Materials Image Copy (for Topper / Mattress)
          ================================================================== */}
      {product.imageCopy2 && (
        <ef-product-image-copy
          className="container-responsive-lg"
          style={{ marginBlock: "var(--space-2xl)" }}
          order={product.imageCopy2.order || ""}
        >
          <div className="image" style={{ position: "relative", maxHeight: "800px" }}>
            {product.imageCopy2.image && (
              <img
                src={asset(product.imageCopy2.image)}
                alt=""
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="lg:rounded"
                style={{width: "100%", maxHeight: "800px", objectFit: "cover"}}
              />
            )}
          </div>
          <div className="body container" style={{ marginBlock: "var(--space-m)", paddingInline: "var(--space-2xl)" }}>
            <h2 className="eyebrow">{product.imageCopy2.eyebrow}</h2>
            {product.imageCopy2.bullets && (
              <ul style={{ marginTop: "var(--space-s)" }}>
                {product.imageCopy2.bullets.map((b) => (
                  <li key={b} className="h2" >{b}</li>
                ))}
              </ul>
            )}
            <div className="richtext block body-s" style={{ color: "var(--gray2)", marginTop: "var(--space-s)" }}>
              {product.imageCopy2.paragraphs.map((p, pIdx) => (
                <p key={pIdx} style={{ marginTop: pIdx > 0 ? "12px" : "0" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          {/* <div className="image" style={{ position: "relative" }}>
            {product.imageCopy2.image && (
              <img
                src={asset(product.imageCopy2.image)}
                alt=""
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="lg:rounded"
              />
            )}
          </div> */}
        </ef-product-image-copy>
      )}

      {/* ==================================================================
          Section 6: Hotspot Interactive Layer Diagram (<ef-product-image-map>)
          ================================================================== */}
      {product.hotspots && (
        <div
          className="ef-product-image-map flex-y lg:flex-x-rev container-responsive-lg"
          style={{ maxWidth: "var(--content-maxwidth)", gap: "var(--space-s)", marginBlock: "var(--space-2xl)" }}
        >
          <div className="map">
            <img
              src={asset(product.hotspots.image)}
              alt="Product cross section diagram"
              sizes="100vw"
            />
            {product.hotspots.layers.map((layer, idx) => (
              <button
                key={layer.num}
                type="button"
                data-index={idx}
                className={`ef-map-hotspot ${hoveredHotspot === idx || expandedHotspot === idx ? "hover" : ""}`}
                style={{ left: `${layer.x}%`, top: `${layer.y}%` }}
                onMouseEnter={() => setHoveredHotspot(idx)}
                onMouseLeave={() => setHoveredHotspot(null)}
                onClick={() => setExpandedHotspot(expandedHotspot === idx ? null : idx)}
                aria-label={`Layer ${layer.num}: ${layer.title}`}
              >
                {layer.num}
              </button>
            ))}
          </div>

          <div className="descriptions" style={{ paddingBlock: "var(--space-l)" }}>
            <hgroup className="container" style={{ marginBottom: "var(--space-m)", paddingInline: "var(--space-xs)" }}>
              <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>
                {product.hotspots.title}
              </h2>
              <p className="body-l font-medium">{product.hotspots.subtitle}</p>
            </hgroup>

            <div className="ef-map-description-list">
              <ol className="flex-y">
                {product.hotspots.layers.map((layer, idx) => (
                  <li
                    key={layer.num}
                    data-index={idx}
                    className={`rounded ${hoveredHotspot === idx || expandedHotspot === idx ? "hover" : ""}${
                      expandedHotspot === idx ? " expanded" : ""
                    }`}
                    onMouseEnter={() => setHoveredHotspot(idx)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    onClick={() => setExpandedHotspot(expandedHotspot === idx ? null : idx)}
                    style={{paddingInline: "var(--space-xs-l)"}}
                  >
                    <div className="list-row">
                      <div className="num">{layer.num}</div>
                      <h3 className="body-m font-medium">{layer.title}</h3>
                    </div>
                    <div className="expand-cont">
                      <p className="body-s expanded-content">
                        {layer.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================
          Section 7: Durability Editorial Copy
          ================================================================== */}
      {product.imageCopy3 && (
        <ef-product-image-copy
          className="container-responsive-lg"
          style={{ marginBlock: "var(--space-2xl)" }}
        >
          <div className="image" style={{ position: "relative" }}></div>
          <div className="body container" style={{ marginBlock: "var(--space-m)" }}>
            <h2 className="eyebrow">{product.imageCopy3.eyebrow}</h2>
            <ul style={{ marginBottom: "var(--space-l)" }}>
              <li className="h2">{product.imageCopy3.title}</li>
            </ul>
            <div className="richtext block body-s">
              {product.imageCopy3.paragraphs.map((p, pIdx) => (
                <p key={pIdx} style={{ marginTop: pIdx > 0 ? "12px" : "0" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </ef-product-image-copy>
      )}

      {/* ==================================================================
          Section 8: Image Zoomer 2 (e.g. Stunt Woman Side Fall / Texture)
          ================================================================== */}
      {/* {product.zoomer2 && (
        <ef-product-image-zoomer className="container-full">
          <div className="reveal-content" style={{ position: "relative" }}>
            <img
              src={asset(product.zoomer2.image)}
              alt="Earthfoam zoom view"
              sizes="100vw"
            />

          </div>
        </ef-product-image-zoomer>
      )} */}
      {product.zoomer2 && (
        <ImageZoomer src={asset(product.zoomer2.image)} alt="Earthfoam zoom view" />
      )}

      {/* ==================================================================
          Section 9: Spring Mattress 2x4 Product Image Grid
          ================================================================== */}
      {product.topperGrid && (
        <div className="container topper-image-grid-wrap">
          <hgroup
            style={{
              textAlign: "center",
              marginBottom: "var(--space-xl)",
              maxWidth: "650px",
              marginInline: "auto",
            }}
          >
            <h2 className="h2 wrap-pretty" style={{ marginBottom: "var(--space-m)" }}>
              {product.topperGrid.title}
            </h2>
            <p className="body-s font-light">{product.topperGrid.subtitle}</p>
          </hgroup>

          <div className="topper-grid-primary">
            {product.topperGrid.primary.map((t) => (
              <figure key={t.title} className="flex-y" style={{ gap: "var(--space-2xs)" }}>
                <img src={asset(t.image)} alt={t.title} />
                <figcaption className="flex-y" style={{ gap: "var(--space-3xs)" }}>
                  <h3 className="font-medium body-s">{t.title}</h3>
                  <p className="body-s font-light" style={{ color: "var(--gray2)" }}>
                    {t.text}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="topper-grid-secondary">
            {product.topperGrid.secondary.map((secImg, secIdx) => (
              <img key={secIdx} src={asset(secImg)} alt="Topper detail" />
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================
          Section 10: Press Quotes Carousel
          ================================================================== */}
      {product.pressQuotes && (
        <div className="press-quotes-carousel container">
          {product.pressQuotes.map((item, idx) => (
            <div key={idx} className="press-quote-slide">
              <img src={asset(item.logo)} alt="Publication Logo" />
              <q>{item.quote}</q>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ==================================================================
          Section 11: Peace of Mind (Certifications Section)
          ================================================================== */}
      <section className="container assetLinkListSection">
        <div>
          <h2 className="eyebrow" style={{ marginBottom: "var(--space-s)" }}>
            Peace of mind
          </h2>
          <h3 className="h2 wrap-pretty">Certified to help you sleep easier.</h3>
          <div className="richtext body-s" style={{ marginTop: "var(--space-s)" }}>
            <p>
              As a small, independent company, we make every decision ourselves. We’ve worked hard to control as much
              of our process as possible to do right by the people, places, and animals we rely on.
            </p>
            <p style={{ marginTop: "12px" }}>
              Our products carry several internationally recognized certifications for meeting stringent fair trade,
              organic, safety, and emissions standards.
            </p>
          </div>
        </div>

        <ul className="linkList" style={{ marginTop: "var(--space-m)" }}>
          {product.certifications &&
            product.certifications.map((c) => (
              <li key={c.name}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.name}
                </a>
              </li>
            ))}
        </ul>
      </section>

      {/* ==================================================================
          Section 12: Shopping Guarantee Accordion Section
          ================================================================== */}
      {product.guarantee && (
        <section className="container accordionSection">
          <div></div>
          <div className="flex-y" style={{ gap: "var(--space-m)" }}>
            <h2 className="h3 wrap-pretty">{product.guarantee.title}</h2>
            <div style={{ borderTop: "2px solid var(--black)", display: "block" }}>
              {product.guarantee.items.map((item, idx) => (
                <div key={item.title} className="ef-accordion-fold">
                  <button
                    type="button"
                    className="accordion-summary body-m wrap-pretty"
                    aria-expanded={openGuaranteeIndex === idx}
                    onClick={() =>
                      setOpenGuaranteeIndex((prev) => (prev === idx ? null : idx))
                    }
                  >
                    {item.title}
                  </button>
                  <div className={`accordion-panel${openGuaranteeIndex === idx ? " is-open" : ""}`}>
                    <div className="accordion-panel-inner richtext body-s">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==================================================================
          Section 13: Customer Reviews (<ef-product-reviews>)
          ================================================================== */}
      <section id="reviews" className="block container reviews-section">
        <header style={{ marginBottom: "var(--space-m)" }}>
          <h2 className="h3" style={{ marginBottom: "var(--space-s)" }}>
            Customer Reviews &amp; Ratings
          </h2>
          <div className="body-m" style={{ marginBottom: "var(--space-3xs)" }}>
            {product.reviewsCount} Customer Reviews
          </div>
          <div className="flex-x" style={{ gap: "var(--space-3xs)", marginBottom: "var(--space-3xs)" }}>
            <div className="body-m inline">100% Posted</div>
            <span>|</span>
            <button
              className="policyToggle inline body-m"
              style={{ cursor: "pointer", textDecoration: "underline", background: "none", border: "none" }}
              onClick={() => setIsPolicyModalOpen(true)}
            >
              Review Policy
            </button>
          </div>
          <div className="body-m" style={{ marginBottom: "var(--space-3xs)" }}>
            {product.rating} avg. rating
          </div>
          <div style={{ color: "var(--sunset)", letterSpacing: "2px", fontSize: "16px" }}>
            ★★★★★
          </div>
        </header>

        {/* Filter and Search Bar  --comment */}
        <div className="reviews-filter-bar">
          <h3 className="body-m font-light" style={{ whiteSpace: "nowrap" }}>
            Search and Filter
          </h3>
          <div className="reviews-filter-menu">
            {product.options &&
              product.options.map((opt) => (
                <div key={opt.id} className="variantSelect">
                  <label htmlFor={`review-filter-${opt.id}`}>{opt.name}</label>
                  <select
                    id={`review-filter-${opt.id}`}
                    value={reviewVariantFilter}
                    onChange={(e) => setReviewVariantFilter(e.target.value)}
                  >
                    <option value="">All</option>
                    {opt.values.map((v) => (
                      <option key={v.name} value={v.name}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                  <OptionDownTriangle />
                </div>
              ))}

            <div className="reviews-search-box">
              <input
                type="text"
                placeholder="Search"
                value={reviewSearchQuery}
                onChange={(e) => setReviewSearchQuery(e.target.value)}
              />
              <img src={asset("search_glass.svg")} alt="Search" width="14" height="14" />
            </div>
          </div>
        </div>

        {/* Reviews Cards List  - comment */}
        <div className="reviews-grid">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev, revIdx) => (
              <div key={revIdx} className="review-card">
                <div>
                  <div style={{ color: "var(--sunset)", letterSpacing: "1px", marginBottom: "4px" }}>
                    {"★".repeat(rev.stars)}
                  </div>
                  <p className="font-medium">{rev.author}</p>
                  <p className="body-s" style={{ color: "var(--gray2)" }}>
                    {rev.date || "Verified Reviewer"}
                  </p>
                  {rev.verified && (
                    <p className="verified-badge">
                      <VerifiedBadgeSvg /> Verified
                    </p>
                  )}
                  {rev.specs && (
                    <p className="body-s" style={{ color: "var(--gray2)", marginTop: "8px" }}>
                      {rev.specs}
                    </p>
                  )}
                </div>
                <div>
                  <h4 className="title font-medium" style={{ fontSize: "16px", marginBottom: "8px" }}>
                    {rev.title}
                  </h4>
                  <p className="body font-light" style={{ color: "var(--black)", lineHeight: "1.5" }}>
                    {rev.body}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="body-m" style={{ color: "var(--gray2)", padding: "var(--space-m)" }}>
              No reviews match your filter.
            </p>
          )}
        </div>
      </section>

      {/* ==================================================================
          Section 14: Portrait Video Song Feature
          ================================================================== */}
      {product.song && (
        <section className="container video-song-section">
          <hgroup className="flex-y" style={{ gap: "var(--space-2xs)" }}>
            <h2 className="h4">{product.song.title}</h2>
            <div>
              <a
                href="https://instagram.com/earthfoam"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                <span className="eyebrow">{product.song.handle}</span>
              </a>
            </div>
          </hgroup>

          <figure className="flex-y" style={{ gap: "var(--space-s)", alignItems: "center" }}>
            <div className="ef-video" style={{ aspectRatio: "250 / 444", maxHeight: "450px", maxWidth: "100%" }}>
              <video
                src={asset(product.song.video)}
                width="250"
                height="444"
                controls
                playsInline
                preload="none"
                poster={product.song.poster ? asset(product.song.poster) : undefined}
                style={{
                  width: "250px",
                  height: "444px",
                  maxHeight: "450px",
                  maxWidth: "100%",
                  backgroundColor: "var(--gray3)",
                }}
              />
            </div>
            <figcaption className="body-s richtext">
              <p>
                Song by{" "}
                <a href={product.song.artistLink} target="_blank" rel="noopener noreferrer">
                  {product.song.artist}
                </a>
              </p>
            </figcaption>
          </figure>
        </section>
      )}

      {/* ==================================================================
          Floating Fixed Bottom Specs Bar & Tabbed Drawer
          ================================================================== */}
      

      {/* Backdrop Overlay when Specs Drawer is open */}
      <div
        className={`pdp-overlay ${isSpecsOpen ? "visible" : ""}`}
        onClick={() => setIsSpecsOpen(false)}
      />

      {/* Video Popup Modal */}
      {activeVideoModal && (
        <div className="pdp-video-modal" onClick={() => setActiveVideoModal(null)}>
          <div className="pdp-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="pdp-video-modal-close"
              onClick={() => setActiveVideoModal(null)}
              aria-label="Close video"
            >
              &times;
            </button>
            <video
              src={asset(activeVideoModal.video)}
              autoPlay
              controls
              playsInline
              style={{ width: "100%", maxHeight: "80vh", display: "block" }}
            />
          </div>
        </div>
      )}

      {/* Review Policy Modal Dialog */}
      {isPolicyModalOpen && (
        <div className="pdp-video-modal" onClick={() => setIsPolicyModalOpen(false)}>
          <div
            className="pdp-video-modal-content"
            style={{ background: "var(--cotton)", padding: "var(--space-l)", maxWidth: "600px", maxHeight: "80vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
              onClick={() => setIsPolicyModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="h3" style={{ marginBottom: "var(--space-xs)", borderBottom: "1px solid var(--black)", paddingBottom: "var(--space-xs)" }}>
              Review Policy
            </h3>
            <div className="richtext body-s" style={{ color: "var(--gray1)", lineHeight: "1.6" }}>
              <p>
                We allow our customers to review our products and post these reviews on our website. These reviews provide valuable feedback and help other customers make purchasing decisions. We designed our review system to be as transparent and helpful as possible.
              </p>
              <h4 className="font-medium" style={{ marginTop: "16px" }}>How Reviews are Collected</h4>
              <p>
                We send a request for a review 21 days after the purchase date. Customers can review any of the products they purchased.
              </p>
              <h4 className="font-medium" style={{ marginTop: "16px" }}>Changing Reviews</h4>
              <p>
                We allow reviewers to change their reviews upon request. If you want to change a review, please contact our customer service team.
              </p>
              <h4 className="font-medium" style={{ marginTop: "16px" }}>Compensation Policy</h4>
              <p>We do not compensate reviewers for their reviews.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
