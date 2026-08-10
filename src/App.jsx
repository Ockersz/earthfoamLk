import { useEffect, useState } from "react";
import HomeHero from "./components/HomeHero.jsx";
import HomePageContent, { SiteFooter } from "./components/HomePageContent.jsx";
import AboutPageContent from "./components/AboutPageContent.jsx";
import BlogPageContent from "./components/BlogPageContent.jsx";
import BlogPost, { BLOG_POSTS } from "./components/BlogPost.jsx";
import {
  CertificationsPage,
  ShippingReturnsPage,
  CommonQuestionsPage,
  MattressWarrantyPage,
  MattressTopperWarrantyPage,
  PillowWarrantyPage,
} from "./components/HelpPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";
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

  const isHome = currentPath === "/" || currentPath === "";
  const isProducts = currentPath === "/products" || currentPath === "/products/";
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
  const isMattressWarranty = currentPath === "/help/mattress-warranty" || currentPath === "/help/mattress-warranty/";
  const isTopperWarranty = currentPath === "/help/mattress-topper-warranty" || currentPath === "/help/mattress-topper-warranty/";
  const isPillowWarranty = currentPath === "/help/pillow-warranty" || currentPath === "/help/pillow-warranty/";
  const isContact = currentPath === "/contact" || currentPath === "/contact/";

  useEffect(() => {
    if (isProducts) {
      document.title = "Sleep Well. | Earthfoam";
    } else if (isAboutPage) {
      document.title = "About | Earthfoam";
    } else if (isBlogIndex) {
      document.title = "Our Journal | Earthfoam";
    } else if (isBlogPost) {
      document.title = `${BLOG_POSTS[blogSlug].title} | Earthfoam`;
    } else if (isCertifications) {
      document.title = "Certifications | Earthfoam";
    } else if (isShipping) {
      document.title = "Shipping & Returns | Earthfoam";
    } else if (isCommonQuestions) {
      document.title = "Common Questions | Earthfoam";
    } else if (isMattressWarranty) {
      document.title = "Mattress Warranty | Earthfoam";
    } else if (isTopperWarranty) {
      document.title = "Mattress Topper Warranty | Earthfoam";
    } else if (isPillowWarranty) {
      document.title = "Pillow Warranty | Earthfoam";
    } else if (isContact) {
      document.title = "Contact | Earthfoam";
    } else if (isHome) {
      document.title = "Earthfoam";
    } else {
      document.title = "Not Found | Earthfoam";
    }
  }, [
    isHome,
    isProducts,
    isAboutPage,
    isBlogIndex,
    isBlogPost,
    isCertifications,
    isShipping,
    isCommonQuestions,
    isMattressWarranty,
    isTopperWarranty,
    isPillowWarranty,
    isContact,
    blogSlug,
  ]);

  return (
    <>
      <SideNav />
      <main id="body__content">
        {isHome ? (
          <>
            <HomeHero />
            <HomePageContent />
          </>
        ) : isProducts ? (
          <ProductsPage />
        ) : isAboutPage ? (
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
        ) : isMattressWarranty ? (
          <MattressWarrantyPage />
        ) : isTopperWarranty ? (
          <MattressTopperWarrantyPage />
        ) : isPillowWarranty ? (
          <PillowWarrantyPage />
        ) : isContact ? (
          <ContactPage />
        ) : (
          <NotFoundPage />
        )}
      </main>
      <SiteFooter />
    </>
  );
}
