import { useEffect } from "react";
import "./HelpPage.css";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Not Found | Earthfoam";
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  return (
    <div className="helpPage notFoundPage">
      <main className="container">
        <div>
          <h1 className="h1">404 Error</h1>
        </div>

        <div className="help__contentColumn" style={{ gap: "var(--space-2xs)" }}>
          <p className="h3" style={{ marginBottom: "var(--space-m)" }}>
            Our apologies, we could not find the page you were looking for. Care to try again?
          </p>
          <div>
            <a href="/" className="button" style={{ width: "100%", maxWidth: "320px" }}>
              Back to Homepage
            </a>
          </div>
          <div>
            <a
              href="/contact"
              className="button button--inverse"
              style={{ width: "100%", maxWidth: "320px" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
