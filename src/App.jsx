import { useEffect, useState } from "react";
import HomeHero from "./components/HomeHero.jsx";
import HomePageContent, { SiteFooter } from "./components/HomePageContent.jsx";
import AboutPageContent from "./components/AboutPageContent.jsx";
import BlogPageContent from "./components/BlogPageContent.jsx";
import BlogPost, { BLOG_POSTS } from "./components/BlogPost.jsx";
import { CertificationsPage, ShippingReturnsPage, CommonQuestionsPage } from "./components/HelpPage.jsx";
import SideNav from "./components/SideNav.jsx";

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    const handleGlobalClick = (event) => {
      // Find closest anchor tag
      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      // Only intercept internal links without target="_blank"
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("//") &&
        (!target || target === "_self")
      ) {
        event.preventDefault();
        if (window.location.pathname !== href) {
          window.history.pushState({}, "", href);
          setCurrentPath(href);
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  const isAboutPage = currentPath === "/about" || currentPath === "/about/";
  const isBlogIndex = currentPath === "/blog" || currentPath === "/blog/";
  const blogSlug = (() => {
    const match = currentPath.match(/^\/blog\/([^/]+)\/?$/);
    return match ? match[1] : null;
  })();
  const isBlogPost = blogSlug && Boolean(BLOG_POSTS[blogSlug]);
  const isCertifications = currentPath === "/help/certifications" || currentPath === "/help/certifications/";
  const isShipping = currentPath === "/help/shipping-and-returns" || currentPath === "/help/shipping-and-returns/";
  const isCommonQuestions = currentPath === "/help/common-questions" || currentPath === "/help/common-questions/";

  useEffect(() => {
    if (isAboutPage) {
      document.title = "About | Earthfoam";
    } else if (isBlogIndex) {
      document.title = "Our Journal | Earthfoam";
    } else if (isBlogPost) {
      document.title = `${BLOG_POSTS[blogSlug].title} | Earthfoam`;
    } else {
      document.title = "Earthfoam";
    }
  }, [isAboutPage, isBlogIndex, isBlogPost, blogSlug]);

  return (
    <>
      <SideNav />
      <main id="body__content">
        {isAboutPage ? (
          <AboutPageContent />
        ) : isBlogPost ? (
          <BlogPost slug={blogSlug} />
        ) : isBlogIndex ? (
          <BlogPageContent />
        ) : isCertifications ? (
          <CertificationsPage />
        ) : isShipping ? (
          <ShippingReturnsPage />
        ) : isCommonQuestions ? (
          <CommonQuestionsPage />
        ) : (
          <>
            <HomeHero />
            <HomePageContent />
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
