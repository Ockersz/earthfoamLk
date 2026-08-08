import { useEffect, useRef, useState } from "react";
import "./AboutPageContent.css";

const assetBaseUrl = "https://earthfoam.com/assets/";
const asset = (fileName) => `${assetBaseUrl}${fileName}`;

const makeSrcSet = (files) =>
  files.map(({ file, width }) => `${asset(file)} ${width}w`).join(", ");

const heroImage1Files = [
  { file: "PDP_MATTRESS_HERO04_640x400_q93.webp", width: 640 },
  { file: "PDP_MATTRESS_HERO04_1280x800_q93.webp", width: 1280 },
  { file: "PDP_MATTRESS_HERO04_2560x1600_q93.webp", width: 2560 },
];

const heroImage2Files = [
  { file: "PDP_MATTRESS_SUBHERO_640x400_q93.webp", width: 640 },
  { file: "PDP_MATTRESS_SUBHERO_1280x800_q93.webp", width: 1280 },
  { file: "PDP_MATTRESS_SUBHERO_2560x1600_q93.webp", width: 2560 },
];

const forestImageFiles = [
  { file: "EF-Blog-October-Website-01_640x839_q93.webp", width: 640 },
  { file: "EF-Blog-October-Website-01_1280x1678_q93.webp", width: 1280 },
  { file: "EF-Blog-October-Website-01_2560x3357_q93.webp", width: 2560 },
];

const latexBenefits = [
  "It comes from a tree.",
  "It's oh so springy.",
  "It's comfortable.",
  "It's durable.",
  "It's sustainable.",
  "It's safe.",
];

function map(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

function constrain(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function StackedRevealSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [opacities, setOpacities] = useState(() =>
    Array(latexBenefits.length + 1).fill(0),
  );

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const totalItems = latexBenefits.length + 1;

    const handleResize = () => {
      section.style.height = `${container.clientHeight * 5}px`;
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const offsetTop = rect.top - window.innerHeight / 2;
      const pos = constrain((offsetTop / rect.height) * -1, 0, 1);

      const nextOpacities = [];
      for (let i = 0; i < totalItems; i++) {
        const start = i / totalItems;
        const end = (i + 1) / totalItems;
        const mapped = map(pos, start, end, 0, 1);
        nextOpacities.push(constrain(mapped, 0, 1));
      }
      setOpacities(nextOpacities);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container"
      style={{ marginBlock: "var(--space-3xl)" }}
    >
      <div
        ref={containerRef}
        style={{
          position: "sticky",
          top: "var(--menu-height)",
          paddingBlock: "var(--space-s)",
        }}
      >
        <h2 className="eyebrow" style={{ textAlign: "center" }}>
          Why latex?
        </h2>

        <div
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "var(--space-l)",
          }}
        >
          {latexBenefits.map((benefit, index) => (
            <p
              key={benefit}
              className="h5"
              style={{
                marginBottom: "var(--space-3xs-2xs)",
                opacity: opacities[index],
                transition: "opacity 0.05s ease-out",
              }}
            >
              {benefit}
            </p>
          ))}

          <p
            className="body-m font-light"
            style={{
              maxWidth: "430px",
              textAlign: "center",
              marginInline: "auto",
              marginTop: "var(--space-m)",
              opacity: opacities[latexBenefits.length],
              transition: "opacity 0.05s ease-out",
            }}
          >
            No wonder it used to be the standard in mattresses until cheaper
            synthetic alternatives all but replaced it.
          </p>
        </div>
      </div>
    </section>
  );
}

function StoryVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <section
      className="container"
      style={{
        marginBottom: "var(--space-xl)",
        marginTop: "var(--space-3xl)",
      }}
      data-animation-waypoint
    >
      <hgroup style={{ textAlign: "center" }}>
        <h2 className="h4 wrap-pretty" data-animate="slide-up">
          This is the story of Earthfoam.
          <br />
          A story to read before bed. Before choosing a bed.
        </h2>
        <a
          className="eyebrow"
          href="https://instagram.com/earthfoam"
          style={{
            display: "block",
            marginTop: "var(--space-s)",
            textDecoration: "underline",
          }}
          target="_blank"
          rel="noreferrer"
          data-animate="slide-up"
          data-delay="1"
        >
          @earthfoam
        </a>
      </hgroup>

      <figure style={{ textAlign: "center", marginTop: "var(--space-l)" }}>
        <ef-video
          style={{
            width: "250px",
            maxWidth: "100%",
            marginInline: "auto",
          }}
          data-animate="slide-up"
          data-delay="2"
          data-playing={isPlaying ? "true" : "false"}
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={asset("EFTV_03_JoshKalu_SheistySolo_250x444_crf18.mp4")}
            width="250"
            height="444"
            playsInline
            preload="none"
            className="rounded"
            style={{ aspectRatio: "250 / 444" }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <track
              label="English"
              kind="subtitles"
              srcLang="en"
              src={asset("EFTV_03_JoshKalu_SheistySolo.wav.vtt")}
              default
            />
          </video>
          <img
            className="poster rounded"
            src={asset("Sheisty-Thumb02_500x888_q93.webp")}
            width="500"
            height="888"
            srcSet={`${asset("Sheisty-Thumb02_500x888_q93.webp")} 500w`}
            alt=""
          />
        </ef-video>
        <figcaption
          className="richtext body-s"
          style={{ marginTop: "var(--space-s)" }}
          data-animate="slide-up"
          data-delay="3"
        >
          <p>
            Video featuring{" "}
            <a
              href="https://instagram.com/shi333sty"
              rel="nofollow noreferrer noopener"
              target="_blank"
            >
              @shi333sty
            </a>
          </p>
        </figcaption>
      </figure>
    </section>
  );
}

export default function AboutPageContent() {
  useEffect(() => {
    document.documentElement.toggleAttribute("data-animation-enabled", true);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-animation-triggered", "");
          }
        }
      },
      { rootMargin: "0px 0px -50px 0px", threshold: 0.05 },
    );

    const waypoints = document.querySelectorAll("[data-animation-waypoint]");
    waypoints.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Header & Hero Images */}
      <section>
        <hgroup
          className="container flex-y lg:flex-x lg:items-end"
          style={{
            gap: "var(--space-m)",
            paddingInline: "var(--space-xs-l)",
            marginTop: "var(--space-3xl)",
            marginBottom: "var(--space-xl)",
          }}
          data-animation-waypoint
        >
          <h1
            className="h5"
            style={{ minWidth: "50%" }}
            data-animate="slide-up"
          >
            Hello,
            <br />
            Sleepyhead.
          </h1>
          <p
            className="body-m font-light"
            style={{ maxWidth: "415px" }}
            data-animate="slide-up"
            data-delay="1"
          >
            We’re the people of Earthfoam: an independent, family-owned company
            making mattresses delightful from tree and sheep to shop and sleep.
          </p>
        </hgroup>

        <div data-animation-waypoint className="container-full">
          <img
            src={asset(heroImage1Files[0].file)}
            srcSet={makeSrcSet(heroImage1Files)}
            sizes="100vw"
            width="640"
            height="400"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "100vh",
            }}
            data-animate="fade-in"
          />
        </div>

        <div data-animation-waypoint className="container">
          <div
            className="h3 container"
            style={{
              maxWidth: "600px",
              marginTop: "var(--space-3xl)",
              marginBottom: "var(--space-2xl)",
              marginLeft: "auto",
              marginRight: "var(--space-m)",
            }}
            data-animate="slide-up"
          >
            We make a mattress, a topper, and a pillow out of our dream material:
            <br />
            <br />
            Natural latex.
          </div>
        </div>

        <div data-animation-waypoint className="container-full">
          <img
            src={asset(heroImage2Files[0].file)}
            srcSet={makeSrcSet(heroImage2Files)}
            sizes="100vw"
            width="640"
            height="400"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "100vh",
            }}
            data-animate="fade-in"
          />
        </div>
      </section>

      {/* 2. Sticky Stacked Reveal */}
      <StackedRevealSection />

      {/* 3. Sri Lanka Forest Detail */}
      <section
        className="container aboutImageDetail"
        style={{
          maxWidth: "635px",
          marginBlock: "var(--space-xl)",
        }}
      >
        <div data-animation-waypoint>
          <img
            src={asset(forestImageFiles[0].file)}
            srcSet={makeSrcSet(forestImageFiles)}
            sizes="100vw"
            width="640"
            height="839"
            alt=""
            className="rounded"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              aspectRatio: "1 / 1",
              marginBottom: "var(--space-xl)",
            }}
            data-animate="slide-up"
          />
        </div>

        <div data-animation-waypoint>
          <div className="richtext" data-animate="slide-up">
            <h2 id="deep-in-the-forests-of-sri-lanka-shading-the-dappled-forest-floor-are-the-rubber-trees-that-give-our-mattresses-their-comfy-bounce">
              Deep in the forests of Sri Lanka, shading the dappled forest floor,
              are the rubber trees that give our mattresses their comfy bounce.
            </h2>

            <p>
              In our quest to create the perfect latex foam, we traced the
              highest quality raw materials to their source. Sri Lanka has one of
              the oldest rubber tree industries in the world, but we weren’t
              satisfied with the lack of transparency of existing latex
              suppliers.
            </p>

            <p>
              We have a true relationship with the people who work on our
              products. We built our own fair trade network of 323 individual small
              farmers employing more than 1,200 workers (and counting). Every one
              of these farms is GOLS certified organic, which reduces water and
              energy use and boosts the biodiversity of the forests. (An endangered
              purple faced monkey was recently spotted on one of our rubber tree
              farms!)
            </p>

            <p>
              We process the latex at our own factory in Sri Lanka, so we know it
              doesn’t contain fillers or fire retardants and all of our workers earn
              a living wage.
            </p>
          </div>

          <div
            style={{ marginTop: "var(--space-l)" }}
            data-animate="slide-up"
            data-delay="1"
          >
            <a
              className="button"
              href="/blog/sourcing-our-foam-the-story-of-sri-lanka"
            >
              Our Fair Trade Network
            </a>
          </div>
        </div>
      </section>

      {/* 4. Story Video Section */}
      <StoryVideoSection />
    </>
  );
}
