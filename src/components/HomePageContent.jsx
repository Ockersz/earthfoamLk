import { useEffect, useRef, useState } from "react";
import "./HomePageContent.css";

const assetBaseUrl = "https://earthfoam.com/assets/";
const graphicBaseUrl = "https://earthfoam.com/graphics/";

const asset = (fileName) => `${assetBaseUrl}${fileName}`;
const graphic = (fileName) => `${graphicBaseUrl}${fileName}`;

const makeSrcSet = (files) =>
  files.map(({ file, width }) => `${asset(file)} ${width}w`).join(", ");

const marqueeItems = [
  "It comes from a tree",
  "It's oh so springy",
  "It's comfortable",
  "It's durable",
  "It's sustainable",
  "It's safe",
];

const footerMarqueeItems = [
  "Free Shipping",
  "100-Day Trial",
  "Free Returns",
  "10-Year Warranty",
];

const products = [
  {
    name: "Mattress",
    href: "/products/mattress",
    description: "Naturally cool with cushiony support.",
    price: "From $799.00",
    defaultImage: [
      { file: "Home_ProdTile_Mattress_Default_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Mattress_Default_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Mattress_Default_2560x2560_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Home_ProdTile_Mattress_Hover_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Mattress_Hover_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Mattress_Hover_2560x2560_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Topper",
    href: "/products/topper",
    description: "Extra squish.",
    price: "From $349.00",
    defaultImage: [
      { file: "Home_ProdTile_Topper_Default_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Topper_Default_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Topper_Default_2560x2560_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Home_ProdTile_Topper_Hover_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Topper_Hover_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Topper_Hover_2560x2560_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Pillow",
    href: "/products/pillow",
    description: "Always fluffed.",
    price: "From $99.00",
    defaultImage: [
      { file: "Home_ProdTile_Pillow_Default_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Pillow_Default_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Pillow_Default_2560x2560_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Home_ProdTile_Pillow_Hover_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Pillow_Hover_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Pillow_Hover_2560x2560_q93.webp", width: 2560 },
    ],
  },
  {
    name: "Spring Mattress",
    href: "/products/spring-mattress",
    description: "A spring mattress done right.",
    price: "From $1399.00",
    defaultImage: [
      { file: "Home_ProdTile_Hybrid_Default_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Hybrid_Default_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Hybrid_Default_2560x2560_q93.webp", width: 2560 },
    ],
    hoverImage: [
      { file: "Home_ProdTile_Hybrid_Hover_640x640_q93.webp", width: 640 },
      { file: "Home_ProdTile_Hybrid_Hover_1280x1280_q93.webp", width: 1280 },
      { file: "Home_ProdTile_Hybrid_Hover_2560x2560_q93.webp", width: 2560 },
    ],
  },
];

const pressQuotes = [
  {
    quote:
      "If you're looking for a firm-but-not-too-firm, built-to-last, not-overly-thick organic mattress topper that can make any bed feel brand new, night after night, this is the one.",
    logo: "Press-Logo_AptTherapy_320x97_q93.webp",
    width: 320,
    height: 97,
    label: "Apartment Therapy",
  },
  {
    quote:
      "I move around a lot during the night, so no matter what position I end up in—side, back, or stomach—it keeps me comfy.",
    logo: "Press-Logo_OprahDaily_320x116_q93.webp",
    width: 320,
    height: 116,
    label: "Oprah Daily",
  },
  {
    quote:
      "It’s a dream for those of us who need extra head support — no more folding floppy pillows in half!",
    logo: "Press-Logo_GoodTrade_320x59_q93.webp",
    width: 320,
    height: 59,
    label: "The Good Trade",
  },
  {
    quote:
      "I genuinely didn't think it was possible for a pillow to dethrone my go-to pillow, but it turns out I was just missing out on Earthfoam.",
    logo: "Press-Logo_Hunker_320x142_q93.webp",
    width: 320,
    height: 142,
    label: "Hunker",
  },
  {
    quote:
      "Earthfoam conforms to your body but without that ‘sinking’ feeling you get with other foam mattresses.",
    logo: "Press-Logo_Inhabitat_320x39_q93.webp",
    width: 320,
    height: 39,
    label: "Inhabitat",
  },
];

const featureSlides = [
  {
    src: "prodzoom-matt02_640x414_q93.webp",
    srcSet: [
      { file: "prodzoom-matt02_640x414_q93.webp", width: 640 },
      { file: "prodzoom-matt02_1280x828_q93.webp", width: 1280 },
      { file: "prodzoom-matt02_2560x1656_q93.webp", width: 2560 },
    ],
  },
  {
    src: "Home_hero_13_640x400_q93.webp",
    srcSet: [
      { file: "Home_hero_13_640x400_q93.webp", width: 640 },
      { file: "Home_hero_13_1280x800_q93.webp", width: 1280 },
      { file: "Home_hero_13_2560x1600_q93.webp", width: 2560 },
    ],
  },
  {
    src: "Home_zoom_full_01_640x400_q93.webp",
    srcSet: [
      { file: "Home_zoom_full_01_640x400_q93.webp", width: 640 },
      { file: "Home_zoom_full_01_1280x800_q93.webp", width: 1280 },
      { file: "Home_zoom_full_01_2560x1600_q93.webp", width: 2560 },
    ],
  },
];

const blogPosts = [
  {
    title: "Making Our Beds: Inside Our Chicago Factory",
    href: "/blog/making-our-beds-inside-our-chicago-factory",
    src: "EF-Blog-October-Website-04_640x822_q93.webp",
    srcSet: [
      { file: "EF-Blog-October-Website-04_640x822_q93.webp", width: 640 },
      { file: "EF-Blog-October-Website-04_1280x1645_q93.webp", width: 1280 },
    ],
  },
  {
    title: "Sheep to Sleep: Working with Wools of New Zealand",
    href: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand",
    src: "EF-Blog-October-Website-03_640x822_q93.webp",
    srcSet: [
      { file: "EF-Blog-October-Website-03_640x822_q93.webp", width: 640 },
      { file: "EF-Blog-October-Website-03_1280x1645_q93.webp", width: 1280 },
    ],
  },
  {
    title: "Sourcing Our Foam: The Story of Sri Lanka",
    href: "/blog/sourcing-our-foam-the-story-of-sri-lanka",
    src: "EF-Blog-October-Website-01_640x839_q93.webp",
    srcSet: [
      { file: "EF-Blog-October-Website-01_640x839_q93.webp", width: 640 },
      { file: "EF-Blog-October-Website-01_1280x1678_q93.webp", width: 1280 },
    ],
  },
];

const reviewVideos = [
  {
    src: "EFTV_SNAILWORLD_PRAIRIE01_250x444_crf18.mp4",
    poster: "beefsworld-preview01_9-16_250x444_q93.webp",
    caption: (
      <>
        Dreamscapes created by{" "}
        <a href="https://beefsworld.com/" rel="nofollow noreferrer noopener">
          Beef's World
        </a>
        .
      </>
    ),
  },
  {
    src: "EF_2026_FEB_THEKLA_1080x1920.mp4_250x444_crf18.mp4",
    poster: "vidpreview-thekla_250x444_q93.webp",
    caption: (
      <>
        Fall onto a mattress with{" "}
        <a href="https://instagram.com/theklahutyrova/" rel="nofollow noreferrer noopener">
          Thekla Hutyrova
        </a>
        .
      </>
    ),
  },
  {
    src: "Video%20Aug%2021%202023,%2011%2002%2041%20AM_250x444_crf18.mp4",
    poster: "cecily-preview_250x444_q93.webp",
    caption: (
      <>
        Song by{" "}
        <a href="https://www.instagram.com/its_cecily/" rel="nofollow noreferrer noopener">
          Cecily Hennigan
        </a>
        .
      </>
    ),
  },
];

const footerLinks = [
  { label: "Shop", href: "/products" },
  { label: "Story", href: "/about" },
  { label: "Journal", href: "/blog" },
  { label: "Certifications", href: "/help/certifications" },
  { label: "Shipping & Returns", href: "/help/shipping-and-returns" },
  { label: "Common Questions", href: "/help/common-questions" },
  {
    label: "Made With Earthfoam",
    href: "https://madewith.earthfoam.com/",
    external: true,
  },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/help/privacy-policy" },
  { label: "Terms of Service", href: "/help/terms-of-service" },
];

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.83984 9.2326L13.9706 1.10181L14.4437 1.57485L6.31289 9.70565L5.83984 9.2326Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M14.5604 6.08049H13.8734V1.68707H9.46191V1H14.5604L14.5604 6.08049Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M13.2039 14.5599H1V2.35596H7.09293V3.04303H1.66896V13.891H12.5169V8.467H13.2038L13.2039 14.5599Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M29.2794 19.2929C29.6699 19.6834 29.6699 20.3166 29.2794 20.7071L22.9154 27.0711C22.5249 27.4616 21.8917 27.4616 21.5012 27.0711C21.1107 26.6805 21.1107 26.0474 21.5012 25.6569L27.1581 20L21.5012 14.3431C21.1107 13.9526 21.1107 13.3195 21.5012 12.9289C21.8917 12.5384 22.5249 12.5384 22.9154 12.9289L29.2794 19.2929ZM28.5723 21L10.0008 21L10.0008 19L28.5723 19L28.5723 21Z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="19" transform="rotate(-180 20 20)" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function Marquee({ items, className = "" }) {
  const repeatedItems = Array.from({ length: 5 }).flatMap(() => items);

  return (
    <div className={`homepageMarquee ${className}`.trim()} style={{ "--item-count": items.length }}>
      <div className="homepageMarquee__track eyebrow">
        {repeatedItems.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <a className="productTile" href={product.href}>
      <div className="productTile__image">
        <img
          src={asset(product.defaultImage[0].file)}
          srcSet={makeSrcSet(product.defaultImage)}
          sizes="(min-width: 768px) 50vw, 100vw"
          width="640"
          height="640"
          alt=""
          loading="lazy"
        />
        <img
          src={asset(product.hoverImage[0].file)}
          srcSet={makeSrcSet(product.hoverImage)}
          sizes="(min-width: 768px) 50vw, 100vw"
          width="640"
          height="640"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="productTile__description">
        <h3 className="body-l">{product.name}</h3>
        <p className="body-m">{product.description}</p>
        <small className="eyebrow">{product.price}</small>
      </div>
    </a>
  );
}

function PressQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  useEffect(() => {
    if (isDragging) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % pressQuotes.length);
    }, 5500);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, isDragging]);

  const showPreviousQuote = () => {
    setActiveIndex((current) => (current - 1 + pressQuotes.length) % pressQuotes.length);
  };

  const showNextQuote = () => {
    setActiveIndex((current) => (current + 1) % pressQuotes.length);
  };

  const handleDragStart = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragStartX.current = event.clientX;
    setDragOffset(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleDragMove = (event) => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();

    const maxDrag = Math.min(220, event.currentTarget.clientWidth * 0.18);
    const nextOffset = event.clientX - dragStartX.current;

    setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, nextOffset)));
  };

  const endDrag = (event) => {
    if (!isDragging) {
      return;
    }

    const threshold = Math.min(
      120,
      Math.max(48, event.currentTarget.clientWidth * 0.08),
    );

    const finalOffset = event.clientX - dragStartX.current;

    if (finalOffset <= -threshold) {
      showNextQuote();
    } else if (finalOffset >= threshold) {
      showPreviousQuote();
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const cancelDrag = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section className="pressQuotes" aria-label="Press quotes">
      <div
        className={`pressQuotes__quoteWrap ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={endDrag}
        onPointerCancel={cancelDrag}
      >
        <q
          key={pressQuotes[activeIndex].label}
          className="pressQuotes__quote h3"
          style={{
            opacity: Math.max(0.72, 1 - Math.abs(dragOffset) / 420),
            transform: `translateX(${dragOffset}px)`,
            transitionDuration: isDragging ? "0ms" : undefined,
          }}
        >
          {pressQuotes[activeIndex].quote}
        </q>
      </div>
      <div className="pressQuotes__pagination" aria-label="Choose quote">
        {pressQuotes.map((item, index) => (
          <button
            key={item.label}
            type="button"
            className={`pressQuotes__bullet ${index === activeIndex ? "is-active" : ""}`}
            aria-label={`Show ${item.label} quote`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="pressQuotes__logos">
        {pressQuotes.map((item, index) => (
          <button
            key={item.logo}
            type="button"
            className={`pressQuotes__logo ${index === activeIndex ? "is-active" : ""}`}
            aria-label={`Show ${item.label} quote`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={asset(item.logo)}
              width={item.width}
              height={item.height}
              alt={item.label}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function StoryMedia() {
  return (
    <section className="twoUpMedia container">
      <figure>
        <img
          src={asset("Home_2up_left_640x859_q93.webp")}
          srcSet={makeSrcSet([
            { file: "Home_2up_left_640x859_q93.webp", width: 640 },
            { file: "Home_2up_left_1280x1719_q93.webp", width: 1280 },
            { file: "Home_2up_left_2560x3438_q93.webp", width: 2560 },
          ])}
          sizes="(min-width: 1024px) 50vw, 100vw"
          width="640"
          height="859"
          alt=""
          loading="lazy"
        />
      </figure>
      <figure className="twoUpMedia__story">
        <VideoCard
          src="EF_Hero_horiz_512x288_crf18.mp4"
          poster="EF_Hero_horiz-preview_512x288_q93.webp"
          width="512"
          height="288"
          aspectRatio="512 / 288"
        />
        <figcaption className="richtext body-m font-light">
          <h1>From tree to sleep.</h1>
          <p>
            Watch how Earthfoam is made from the tapping of the rubber trees, to
            the vulcanization process, finally cut into foam blocks.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

function ShippingAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    ["Free Returns", "We ship for free to the Contiguous USA."],
    [
      "100 Night Trial",
      "Our mattresses and toppers can be returned for free within 100 days of delivery. No questions asked.",
    ],
    [
      "10 Year Warranty",
      "Our mattresses and toppers can be returned for free within 100 days of delivery. No questions asked.",
    ],
  ];

  return (
    <section className="accordionSection container">
      <div aria-hidden="true" />
      <div className="accordionSection__body">
        <h2 className="h3 wrap-pretty">
          We want shopping for an Earthfoam mattress to be as nice as sleeping on one.
        </h2>
        <div className="accordionList">
          {items.map(([title, body], index) => (
            <details
              key={title}
              open={openIndex === index}
              onToggle={(event) => {
                if (event.currentTarget.open) {
                  setOpenIndex(index);
                } else if (openIndex === index) {
                  setOpenIndex(null);
                }
              }}
            >
              <summary className="body-m wrap-pretty">{title}</summary>
              <div className="richtext body-s">
                <p>{body}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitionDisabled, setIsTransitionDisabled] = useState(false);
  const dragStartX = useRef(0);
  const transitionFrame = useRef(null);

  const carouselSlides = [
    {
      ...featureSlides[featureSlides.length - 1],
      key: "clone-last",
      realIndex: featureSlides.length - 1,
      isClone: true,
    },
    ...featureSlides.map((slide, index) => ({
      ...slide,
      key: slide.src,
      realIndex: index,
      isClone: false,
    })),
    {
      ...featureSlides[0],
      key: "clone-first",
      realIndex: 0,
      isClone: true,
    },
  ];

  useEffect(
    () => () => {
      if (transitionFrame.current) {
        window.cancelAnimationFrame(transitionFrame.current);
      }
    },
    [],
  );

  const jumpToTrackIndex = (index) => {
    if (transitionFrame.current) {
      window.cancelAnimationFrame(transitionFrame.current);
    }

    setIsTransitionDisabled(true);
    setTrackIndex(index);

    transitionFrame.current = window.requestAnimationFrame(() => {
      transitionFrame.current = window.requestAnimationFrame(() => {
        setIsTransitionDisabled(false);
      });
    });
  };

  useEffect(() => {
    if (trackIndex !== 0 && trackIndex !== featureSlides.length + 1) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      if (trackIndex === 0) {
        jumpToTrackIndex(featureSlides.length);
      } else {
        jumpToTrackIndex(1);
      }
    }, 460);

    return () => window.clearTimeout(timeoutId);
  }, [trackIndex]);

  const moveToSlide = (index) => {
    const lastIndex = featureSlides.length - 1;
    const nextIndex = (index + featureSlides.length) % featureSlides.length;
    let nextTrackIndex = nextIndex + 1;

    if (activeIndex === lastIndex && nextIndex === 0) {
      nextTrackIndex = featureSlides.length + 1;
    } else if (activeIndex === 0 && nextIndex === lastIndex) {
      nextTrackIndex = 0;
    }

    setDragOffset(0);
    setActiveIndex(nextIndex);
    setTrackIndex(nextTrackIndex);
  };

  const goToPrevious = () => {
    moveToSlide(activeIndex - 1);
  };

  const goToNext = () => {
    moveToSlide(activeIndex + 1);
  };

  const handleStageDragStart = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    dragStartX.current = event.clientX;
    setDragOffset(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleStageDragMove = (event) => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();

    const maxDrag = event.currentTarget.clientWidth * 0.72;
    const nextOffset = event.clientX - dragStartX.current;

    setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, nextOffset)));
  };

  const endStageDrag = (event) => {
    if (!isDragging) {
      return;
    }

    const stage = event.currentTarget;
    const finalOffset = event.clientX - dragStartX.current;
    const threshold = Math.min(64, Math.max(28, stage.clientWidth * 0.06));

    if (stage.hasPointerCapture(event.pointerId)) {
      stage.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);

    if (finalOffset <= -threshold) {
      moveToSlide(activeIndex + 1);
    } else if (finalOffset >= threshold) {
      moveToSlide(activeIndex - 1);
    } else {
      setDragOffset(0);
    }
  };

  const cancelStageDrag = (event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleStageTransitionEnd = () => {
    if (trackIndex === 0) {
      jumpToTrackIndex(featureSlides.length);
    } else if (trackIndex === featureSlides.length + 1) {
      jumpToTrackIndex(1);
    }
  };

  return (
    <section className="featuredProductCarousel container-full">
      <div className="featuredProductCarousel__viewport">
        <div
          className={`featuredProductCarousel__stage ${
            isDragging ? "is-dragging" : ""
          } ${isTransitionDisabled ? "is-instant" : ""}`}
          style={{
            transform: `translate3d(calc(${-trackIndex * 100}% + ${dragOffset}px), 0, 0)`,
          }}
          onPointerDown={handleStageDragStart}
          onPointerMove={handleStageDragMove}
          onPointerUp={endStageDrag}
          onPointerCancel={cancelStageDrag}
          onTransitionEnd={handleStageTransitionEnd}
        >
          {carouselSlides.map((slide) => (
            <img
              key={slide.key}
              className="featuredProductCarousel__image"
              src={asset(slide.src)}
              srcSet={makeSrcSet(slide.srcSet)}
              sizes="100vw"
              width="640"
              height="414"
              alt=""
              aria-hidden={slide.isClone || slide.realIndex !== activeIndex}
              draggable="false"
              loading="lazy"
            />
          ))}
        </div>
        <div className="featuredProductCarousel__controls">
          <button type="button" aria-label="Previous" onClick={goToPrevious}>
            <span className="featuredProductCarousel__previousIcon">
              <ArrowIcon />
            </span>
          </button>
          <button type="button" aria-label="Next" onClick={goToNext}>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <footer className="featuredProductCarousel__footer">
        <div className="featuredProductCarousel__copy body-l">
          <h2 className="font-medium">The Foam Mattress.</h2>
          <p>Naturally cool with cushiony support.</p>
        </div>
        <p className="featuredProductCarousel__price body-l">Starting at $799.00</p>
        <div className="featuredProductCarousel__cta">
          <a className="button" href="/products/mattress">
            Shop Now
          </a>
        </div>
      </footer>
    </section>
  );
}

function BlogPosts() {
  return (
    <section className="featuredBlogPostsSection container">
      <div className="featuredBlogPostsSection__header">
        <div className="featuredBlogPostsSection__spacer" aria-hidden="true" />
        <hgroup>
          <h2 className="h3">Looking for some light reading about the benefits of Earthfoam? Start here.</h2>
          <p className="cta-l">
            <a href="/blog">Curl up with our entire journal.</a>
          </p>
        </hgroup>
      </div>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.href}>
            <a href={post.href}>
              <img
                src={asset(post.src)}
                srcSet={makeSrcSet(post.srcSet)}
                sizes="(min-width: 1024px) 33vw, 100vw"
                width="640"
                height="822"
                alt=""
                loading="lazy"
              />
              <p>{post.title}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function VideoCard({ src, poster, width, height, aspectRatio }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
      return;
    }

    video.pause();
  };

  return (
    <div
      className={`videoCard ${isPlaying ? "is-playing" : ""}`}
      style={{ "--video-aspect-ratio": aspectRatio }}
    >
      <video
        ref={videoRef}
        src={asset(src)}
        poster={asset(poster)}
        width={width}
        height={height}
        playsInline
        preload="none"
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        onClick={togglePlayback}
        onContextMenu={(event) => event.preventDefault()}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <img src={asset(poster)} alt="" />
      </video>
      <button
        className="videoCard__toggle"
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={togglePlayback}
      >
        {isPlaying ? (
          <span className="videoCard__pause" aria-hidden="true" />
        ) : (
          <span className="videoCard__play" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

function ReviewVideos() {
  return (
    <section className="reviewVideos container">
      <hgroup className="reviewVideos__header text-center">
        <h2 className="h4 wrap-pretty">
          Meet the bed your mind, body, and soul have been dreaming about.
        </h2>
        <p className="eyebrow wrap-pretty">
          <a href="https://instagram.com/earthfoam">@earthfoam</a>
        </p>
      </hgroup>
      <div className="reviewVideos__rail">
        {reviewVideos.map((video) => (
          <figure key={video.src}>
            <VideoCard
              src={video.src}
              poster={video.poster}
              width="250"
              height="444"
              aspectRatio="250 / 444"
            />
            <figcaption className="richtext body-s">{video.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function HomePageContent() {
  return (
    <>
      <div className="homeMarqueeBand container-full">
        <Marquee items={marqueeItems} />
      </div>

      <section className="homeIntro container text-center">
        <h2 className="h3 mx-auto">
          Climb into a comfy, bouncy, supportive, organic, sustainable mattress
          made to last.
        </h2>
        <a href="/products">
          <p className="body-s">Yawn, stretch, shop all.</p>
        </a>
      </section>

      <section className="productOverview container">
        <div className="productOverview__grid">
          {products.map((product) => (
            <ProductCard key={product.href} product={product} />
          ))}
        </div>
      </section>

      <div className="pressQuotesBand">
        <PressQuotes />
      </div>

      <section className="storyTeaser container text-center wrap-pretty">
        <h2 className="eyebrow">What is Earthfoam</h2>
        <h3 className="h2">Good sleep grows on trees.</h3>
        <div className="richtext font-light">
          <p>
            Earthfoam starts as the milky sap of organic rubber trees in Sri
            Lanka. When shaped and baked, it's delightfully springy, comfortable,
            durable, safe, and sustainable.
          </p>
        </div>
        <a className="button" href="/about">
          Our Story
        </a>
      </section>

      <StoryMedia />
      <ShippingAccordion />
      <FeaturedProductCarousel />
      <BlogPosts />
      <ReviewVideos />
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="siteFooter color-invert">
      <div className="siteFooter__marquee">
        <a href="/help/shipping-and-returns">
          <Marquee items={footerMarqueeItems} />
        </a>
      </div>
      <div className="siteFooter__inner container">
        <section className="siteFooter__newsletter">
          <h2 className="wrap-pretty">
            Sign up for very occasional bedtime reading, updates, and offers.
          </h2>
          <form
            className="siteFooter__form body-l"
            method="GET"
            action="https://manage.kmail-lists.com/subscriptions/subscribe"
          >
            <input type="hidden" name="g" value="RePdxG" />
            <input
              className="body-s"
              type="email"
              placeholder="Email address"
              name="email"
              autoComplete="off"
            />
            <button type="submit" aria-label="Submit newsletter signup">
              <ArrowIcon />
            </button>
          </form>
        </section>

        <nav className="siteFooter__nav body-m" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              {link.external ? <ExternalIcon /> : null}
            </a>
          ))}
        </nav>

        <div className="siteFooter__social">
          <div className="siteFooter__socialLinks">
            <a href="https://instagram.com/earthfoam" target="_blank" rel="noreferrer">
              <img src={graphic("soc_inst.svg")} alt="Instagram" width="20" height="19" />
            </a>
            <a href="https://twitter.com/earthfoam" target="_blank" rel="noreferrer">
              <img src={graphic("soc_tw.svg")} alt="Twitter" width="20" height="16" />
            </a>
          </div>
          <div className="body-s">
            <p>Copyright &copy; 2025 Shevick Sales Corp.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>

        <div className="siteFooter__taglineWrap">
          <div className="eyebrow siteFooter__tagline">Harvested in Sri Lanka.</div>
          <div className="siteFooter__tagline siteFooter__tagline--delay">
            ශ්‍රී ලංකාවේ අස්වනු නෙලනු ලැබේ.
          </div>
        </div>
      </div>
    </footer>
  );
}
