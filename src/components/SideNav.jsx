import { useEffect, useId, useState } from "react";
import "./SideNav.css";

const primaryNavItems = [
  { label: "Shop", href: "/products" },
  { label: "Story", href: "/about" },
  { label: "Journal", href: "/blog" },
];

const secondaryNavItems = [
  { label: "Certifications", href: "/help/certifications" },
  { label: "Shipping & Returns", href: "/help/shipping-and-returns" },
  { label: "Common Questions", href: "/help/common-questions" },
  {
    label: "Made With Earthfoam",
    href: "https://madewith.earthfoam.com/",
    external: true,
  },
  { label: "Contact Us", href: "/contact" },
];

const mobileWordmarkSrc = "https://earthfoam.com/graphics/logo_menu.svg";

function MenuIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <line
        x1="27.5303"
        y1="4.53033"
        x2="4.90291"
        y2="27.1577"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="27.5303"
        y1="4.53033"
        x2="4.90291"
        y2="27.1577"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="27.4697"
        y1="27.5303"
        x2="4.84225"
        y2="4.90291"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M1.86644 11.2C2.3819 11.2 2.79977 10.7822 2.79977 10.2667C2.79977 9.75124 2.3819 9.33337 1.86644 9.33337C1.35097 9.33337 0.933105 9.75124 0.933105 10.2667C0.933105 10.7822 1.35097 11.2 1.86644 11.2Z"
        fill="currentColor"
      />
      <path
        d="M9.33324 11.2C9.8487 11.2 10.2666 10.7822 10.2666 10.2667C10.2666 9.75124 9.8487 9.33337 9.33324 9.33337C8.81777 9.33337 8.3999 9.75124 8.3999 10.2667C8.3999 10.7822 8.81777 11.2 9.33324 11.2Z"
        fill="currentColor"
      />
      <path
        d="M10.7334 7.46683H1.22183L1.6885 6.5335H8.86677C8.95997 6.53348 9.05102 6.50555 9.12821 6.45332C9.20539 6.40109 9.26517 6.32694 9.29984 6.24043L11.1665 1.57376C11.1949 1.50296 11.2055 1.42628 11.1973 1.35043C11.1892 1.27459 11.1626 1.20189 11.1199 1.13871C11.0771 1.07552 11.0196 1.02378 10.9522 0.988005C10.8848 0.952229 10.8097 0.933514 10.7334 0.933496H1.5933L0.797168 0.136429C0.709541 0.0488014 0.590692 -0.000427246 0.466768 -0.000427246C0.342844 -0.000427246 0.223995 0.0488014 0.136368 0.136429C0.0487404 0.224057 -0.000488281 0.342905 -0.000488281 0.466829C-0.000488281 0.590753 0.0487404 0.709602 0.136368 0.797229L0.933435 1.59336V5.9567L0.0495679 7.72443C0.0139161 7.79558 -0.00294925 7.87466 0.000574618 7.95416C0.00409849 8.03367 0.0278945 8.11095 0.0697012 8.17866C0.111508 8.24637 0.169936 8.30227 0.239434 8.34104C0.308931 8.37981 0.387188 8.40016 0.466768 8.40017H10.7334C10.8572 8.40017 10.9759 8.351 11.0634 8.26348C11.1509 8.17597 11.2001 8.05727 11.2001 7.9335C11.2001 7.80973 11.1509 7.69103 11.0634 7.60352C10.9759 7.516 10.8572 7.46683 10.7334 7.46683Z"
        fill="currentColor"
      />
    </svg>
  );
}

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

function BrandMark() {
  return (
    <svg className="sideNav__mark" width="29" height="32" viewBox="0 0 28.8 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M28.439 12.758c-.457-.725-1.199-1.144-2.093-1.182-1.693-.096-3.576 1.22-4.318 2.117-.361.419-.685.915-1.027 1.544-.114.21-.419.382-.647.324-1.122-.19-2.245-.686-3.234-1.106-.647-.286-1.255-.553-1.788-.705-2.625-.744-5.25.286-6.544 2.593-1.445 2.575-.684 5.874 1.731 7.514.19.152.38.152.495.134a.7.7 0 0 0 .457-.363l.475-.877c.171-.343.095-.668-.21-.916a3.364 3.364 0 0 1-.912-4.328c.76-1.335 2.302-1.927 3.861-1.488.875.248.932.286 1.37.496.152.076.323.152.59.286.17.076.323.134.456.19.875.382 1.104.497 2.378.802q.171.057.228.171c.038.077.057.191.02.286l-.191.591s-.38 1.03-1.16 3.07c-.076.23-.362.458-.628.478-4.927.629-7.704 2.917-8.674 3.89-.152.172-.21.343-.19.515 0 .171.114.324.285.438l.799.61c.285.249.608.23.932-.037.856-.82 2.796-2.289 6.106-2.9a.4.4 0 0 1 .171 0s0 .058-.019.134c-.095.21-.152.344-.209.458-.095.19-.21.362-.304.534l-.114.172c-1.199 1.811-3.025 3.013-5.117 3.337-2.892.458-5.707-.591-7.533-2.822-1.56-1.907-2.492-5.512-.058-9.44 1.827-2.86 4.585-4.367 7.21-3.948.361.076.609-.076.704-.438l.285-1.164c.114-.534-.323-.686-.475-.743-2.378-.878-2.112-3.414-1.979-4.158.419-2.403 2.302-4.73 4.737-4.443 1.084.114 1.902.61 2.32 1.43.381.782.343 1.812-.095 2.746-.247.496.058.744.21.84l.989.59a.52.52 0 0 0 .495.096c.152-.038.266-.172.342-.343.875-1.679.913-3.49.152-4.959C18.014 1.26 16.512.267 14.61.038c-3.823-.42-6.734 2.918-7.342 6.389-.286 1.678-.058 3.204.646 4.386.057.114.076.229.02.324-.039.076-.096.114-.19.134-2.322.705-4.414 2.383-5.898 4.748-2.549 4.043-2.473 8.83.21 12.186C4.07 30.608 7 31.981 10.1 31.981c.704 0 1.255-.057 1.73-.153 3.52-.572 6.297-2.86 7.667-6.274.038-.076.057-.133.076-.19.038-.096.095-.21.152-.363.114-.286.305-.438.4-.438h.323c.951.076 2.378-.325 3.253-1.679.152-.228.152-.42.114-.553-.038-.171-.171-.305-.342-.4l-.894-.477c-.19-.095-.552-.19-.913.248-.248.305-.59.439-.78.477h-.057v-.153a70 70 0 0 0 .932-2.498q.142-.514.342-1.03c.057-.21.361-.42.609-.42 3.861-.171 5.307-2.192 5.554-2.574.61-.858.666-1.983.134-2.784zm-1.979 1.259s0 .114-.057.19c-.628.935-1.845 1.297-2.758 1.45h-.133s0-.038.038-.057a.5.5 0 0 1 .095-.115c.057-.095.133-.19.21-.267.418-.515 1.616-1.316 2.32-1.316h.057c.133 0 .19.038.247.096z"
      />
    </svg>
  );
}

function MobileWordmark() {
  return (
    <a className="sideNav__mobileWordmark" href="/" aria-label="Earthfoam home">
      <img src={mobileWordmarkSrc} width="389" height="124" alt="Earthfoam" />
    </a>
  );
}

function SocialLink({ href, tabIndex, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" tabIndex={tabIndex}>
      {children}
    </a>
  );
}

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.classList.toggle("sideNavOpen", isOpen);

    return () => {
      document.body.classList.remove("sideNavOpen");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <aside className={`sideNav ${isOpen ? "is-open" : ""}`} aria-label="Site navigation">
      <div className="sideNav__bar">
        <a className="sideNav__homeMark" href="/" aria-label="Earthfoam home">
          <BrandMark />
        </a>

        <button
          className="sideNav__toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <MenuIcon />
        </button>

        <MobileWordmark />

        <a className="sideNav__cart" href="/cart" aria-label="Cart">
          <CartIcon />
        </a>
      </div>

      <nav className="sideNav__panel" id={panelId} aria-hidden={!isOpen}>
        <ul className="sideNav__primary">
          {primaryNavItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} tabIndex={isOpen ? 0 : -1} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="sideNav__secondary">
          {secondaryNavItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                {item.external ? <ExternalIcon /> : null}
              </a>
            </li>
          ))}
        </ul>

        <footer className="sideNav__footer">
          <div className="sideNav__social">
            <SocialLink href="https://instagram.com/earthfoam" tabIndex={isOpen ? 0 : -1}>
              Instagram
            </SocialLink>
            <SocialLink href="https://twitter.com/earthfoam" tabIndex={isOpen ? 0 : -1}>
              X
            </SocialLink>
          </div>
          <p>Copyright © 2025 Shevick Sales Corp. All rights reserved.</p>
        </footer>
      </nav>

      <button
        className="sideNav__backdrop"
        type="button"
        aria-label="Close menu"
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />
    </aside>
  );
}
