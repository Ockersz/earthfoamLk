"use client";

import { useEffect, useState } from "react";
import HomeHeroLogo from "./HomeHeroLogo.jsx";
import "./HomeHero.css";

export { default as HomeHeroLogo } from "./HomeHeroLogo.jsx";

export const heroImages = [
  {
    src: "https://earthfoam.com/assets/Home_hero_full_01_1280x800_q93.webp",
    srcSet:
      "https://earthfoam.com/assets/Home_hero_full_01_640x400_q93.webp 640w, https://earthfoam.com/assets/Home_hero_full_01_1280x800_q93.webp 1280w, https://earthfoam.com/assets/Home_hero_full_01_2560x1600_q93.webp 2560w",
    position: "center center",
  },
  {
    src: "https://earthfoam.com/assets/Home_hero_full_02_1280x800_q93.webp",
    srcSet:
      "https://earthfoam.com/assets/Home_hero_full_02_640x400_q93.webp 640w, https://earthfoam.com/assets/Home_hero_full_02_1280x800_q93.webp 1280w, https://earthfoam.com/assets/Home_hero_full_02_2560x1600_q93.webp 2560w",
    position: "center center",
  },
  {
    src: "https://earthfoam.com/assets/Home_hero_34_1280x800_q93.webp",
    srcSet:
      "https://earthfoam.com/assets/Home_hero_34_640x400_q93.webp 640w, https://earthfoam.com/assets/Home_hero_34_1280x800_q93.webp 1280w, https://earthfoam.com/assets/Home_hero_34_2560x1600_q93.webp 2560w",
    position: "center center",
  },
];

const IMAGE_MOTION_DURATION_MS = 13000;
const CROSSFADE_DURATION_MS = 1250;
const NEXT_IMAGE_DELAY_MS = IMAGE_MOTION_DURATION_MS - 1350;
const LOGO_INTRO_DURATION_MS = 1800;

export default function HomeHero({
  images = heroImages,
  Logo = HomeHeroLogo,
  className = "",
}) {
  const [{ activeIndex, exitingIndex }, setSlideState] = useState({
    activeIndex: 0,
    exitingIndex: null,
  });
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSlideState((current) => ({
        activeIndex: (current.activeIndex + 1) % images.length,
        exitingIndex: current.activeIndex,
      }));
    }, NEXT_IMAGE_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (exitingIndex === null) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSlideState((current) =>
        current.exitingIndex === exitingIndex
          ? { ...current, exitingIndex: null }
          : current,
      );
    }, CROSSFADE_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, [exitingIndex]);

  useEffect(() => {
    images.slice(1).forEach((image) => {
      const preloadImage = new Image();
      preloadImage.decoding = "async";
      preloadImage.sizes = "100vw";
      preloadImage.srcset = image.srcSet;
      preloadImage.src = image.src;
    });
  }, [images]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsIntroComplete(true);
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsIntroComplete(true);
    }, LOGO_INTRO_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section
      className={[
        "homeHero",
        isIntroComplete ? "is-intro-complete" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Homepage hero"
    >
      <div className="homeHero__imagesContainer">
        <div className="homeHero__images">
          {images.map((image, index) => (
            <img
              key={image.src}
              className={[
                "homeHero__image",
                index === activeIndex ? "is-active" : "",
                index === exitingIndex ? "is-exiting" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-index={index}
              src={image.src}
              srcSet={image.srcSet}
              sizes="100vw"
              alt=""
              aria-hidden="true"
              decoding="async"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading="eager"
              style={{ objectPosition: image.position }}
            />
          ))}
        </div>

        <div
          className={[
            "homeHero__logo",
            isIntroComplete ? "homeHero__logo--transitionComplete" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <Logo />
        </div>
      </div>

      <div className="homeHero__copy">
        <h1 className="homeHero__headline">
          The sleep{" "}
          <i className="homeHero__wave" aria-label="dreams">
            {"dreams".split("").map((letter, index) => (
              <span key={letter + index} style={{ "--index": index }}>
                {letter}
              </span>
            ))}
          </i>{" "}
          are made&nbsp;of.
        </h1>

        <p className="homeHero__eyebrow">A story to read before bed</p>

        <div className="homeHero__mobileAction">
          <a href="/products" className="homeHero__button">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
