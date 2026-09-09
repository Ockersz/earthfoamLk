import { useEffect } from "react";
import "./BlogPageContent.css";

const asset = (f) => `/assets/${f}`;

// Arrow down icon (from scraped HTML)
function ArrowDown() {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.55806 12.4419C4.80214 12.686 5.19786 12.686 5.44194 12.4419L9.41942 8.46447C9.6635 8.22039 9.6635 7.82466 9.41942 7.58058C9.17534 7.33651 8.77961 7.33651 8.53553 7.58058L5 11.1161L1.46447 7.58058C1.22039 7.33651 0.82466 7.33651 0.580583 7.58058C0.336505 7.82466 0.336505 8.22039 0.580583 8.46447L4.55806 12.4419ZM4.375 0L4.375 12H5.625L5.625 0L4.375 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

// All blog posts in order (featured first, then grid articles)
const featuredPost = {
  href: "/blog/sourcing-our-foam-the-story-of-sri-lanka",
  img: {
    src: asset("EF-Blog-October-Website-01_640x839_q93.webp"),
    srcSet: `${asset("EF-Blog-October-Website-01_640x839_q93.webp")} 640w, ${asset("EF-Blog-October-Website-01_1280x1678_q93.webp")} 1280w`,
    width: 640,
    height: 839,
    sizes: "(min-width: 1024px) 33vw, 100vw",
  },
  readTime: "4 minute read",
  title: "Sourcing Our Foam: The Story of Sri Lanka",
};

const articles = [
  {
    href: "/blog/introducing-the-spring-mattress",
    img: {
      src: asset("EF-HybridSprings2025_640x822_q93.webp"),
      srcSet: `${asset("EF-HybridSprings2025_640x822_q93.webp")} 640w, ${asset("EF-HybridSprings2025_1280x1645_q93.webp")} 1280w`,
      width: 640,
      height: 822,
      sizes: "(min-width: 1024px) 33vw, 100vw",
    },
    title: "Introducing the Spring Mattress",
  },
  {
    href: "/blog/behind-the-dreams-our-new-collaboration",
    img: {
      src: asset("EF-Prairie2024_640x822_q93.webp"),
      srcSet: `${asset("EF-Prairie2024_640x822_q93.webp")} 640w, ${asset("EF-Prairie2024_1280x1645_q93.webp")} 1280w`,
      width: 640,
      height: 822,
      sizes: "(min-width: 1024px) 33vw, 100vw",
    },
    title: "Behind the Dreams: Our New Collaboration",
  },
  {
    href: "/blog/making-our-beds-inside-our-sri-lankan-factory",
    img: {
      src: asset("EF-Blog-October-Website-04_640x822_q93.webp"),
      srcSet: `${asset("EF-Blog-October-Website-04_640x822_q93.webp")} 640w, ${asset("EF-Blog-October-Website-04_1280x1645_q93.webp")} 1280w`,
      width: 640,
      height: 822,
      sizes: "(min-width: 1024px) 33vw, 100vw",
    },
    title: "Making Our Beds: Inside Our Sri Lankan Factory",
  },
  {
    href: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand",
    img: {
      src: asset("EF-Blog-October-Website-03_640x822_q93.webp"),
      srcSet: `${asset("EF-Blog-October-Website-03_640x822_q93.webp")} 640w, ${asset("EF-Blog-October-Website-03_1280x1645_q93.webp")} 1280w`,
      width: 640,
      height: 822,
      sizes: "(min-width: 1024px) 33vw, 100vw",
    },
    title: "Sheep to Sleep: Working with Wools of certified farmers around the world",
  },
  {
    href: "/blog/sourcing-our-foam-the-story-of-sri-lanka",
    img: {
      src: asset("EF-Blog-October-Website-01_640x839_q93.webp"),
      srcSet: `${asset("EF-Blog-October-Website-01_640x839_q93.webp")} 640w, ${asset("EF-Blog-October-Website-01_1280x1678_q93.webp")} 1280w`,
      width: 640,
      height: 839,
      sizes: "(min-width: 1024px) 33vw, 100vw",
    },
    title: "Sourcing Our Foam: The Story of Sri Lanka",
  },
];

export default function BlogPageContent() {
  useEffect(() => {
    document.title = "Our Journal | Earthfoam";

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
      document.title = "Earthfoam";
    };
  }, []);

  return (
    <div className="blogPage">
      <main>
        {/* Hero header: featured post image + hgroup side by side on desktop */}
        <header className="container">
          <hgroup style={{ textAlign: "center" }} data-animation-waypoint>
            <p className="eyebrow" data-animate="slide-up">
              Light Reading
            </p>
            <h1 className="h2" data-animate="slide-up" data-delay="1">
              Our Journal
            </h1>
            <div
              className="richtext"
              style={{ maxWidth: "375px", marginInline: "auto" }}
              data-animate="slide-up"
              data-delay="2"
            >
              <p>
                We love a good story. From falling in love with latex to tapping
                trees to founding fair trade networks, we have a lot of them to
                tell.
              </p>
            </div>
            <span
              className="blogPage__scrollArrow"
              data-animate="slide-up"
              data-delay="3"
            >
              <ArrowDown />
            </span>
          </hgroup>

          {/* Featured Post */}
          <a
            href={featuredPost.href}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-xs)",
              textAlign: "center",
            }}
            data-animation-waypoint
          >
            <div className="blogPage__featuredWrap" data-animate="slide-up">
              <img
                src={featuredPost.img.src}
                srcSet={featuredPost.img.srcSet}
                width={featuredPost.img.width}
                height={featuredPost.img.height}
                sizes={featuredPost.img.sizes}
                alt=""
                className="blogPage__featuredImg"
                style={{ borderRadius: "var(--radius-s)", aspectRatio: "320 / 420" }}
              />
              <small
                className="eyebrow blogPage__featuredTag"
              >
                {featuredPost.readTime}
              </small>
            </div>
            <p
              style={{ paddingInline: "var(--space-2xs)" }}
              className="font-medium"
              data-animate="slide-up"
              data-delay="1"
            >
              {featuredPost.title}
            </p>
          </a>
        </header>

        {/* Article grid */}
        <section className="container">
          <ul className="blogPage__grid">
            {articles.map((article, i) => (
              <li key={`${article.href}-${i}`} data-animation-waypoint>
                <a
                  href={article.href}
                  className="blogPage__card"
                  data-animate="slide-up"
                >
                  <img
                    src={article.img.src}
                    srcSet={article.img.srcSet}
                    width={article.img.width}
                    height={article.img.height}
                    sizes={article.img.sizes}
                    alt=""
                    className="blogPage__cardImg"
                  />
                  <p className="font-medium blogPage__cardTitle">
                    {article.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
