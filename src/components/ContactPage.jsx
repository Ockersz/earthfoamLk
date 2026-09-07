import { useEffect } from "react";
import "./HelpPage.css";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Earthfoam";
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  return (
    <div className="helpPage contactPage">
      <main className="container">
        <div>
          <h1 className="h1">Say hi</h1>
        </div>

        <div className="help__contentColumn" style={{ gap: "var(--space-2xs)" }}>
          <p className="h3 wrap-pretty" style={{ marginBottom: "var(--space-m)" }}>
            Our flagship store is open on all 7 days from 10AM - 6PM. Please call us or leave a message any time round the clock.
          </p>

          <div>
            <a
              href="mailto:info@earthfoam.lk"
              className="button"
              style={{
                width: "100%",
                maxWidth: "320px",
                display: "flex",
                gap: "var(--space-2xs)",
                justifyContent: "center",
              }}
            >
              <span>Email</span>
              <span>/</span>
              <span>info@earthfoam.lk</span>
            </a>
          </div>

          <div>
            <a
              href="tel:+94114245245"
              className="button button--inverse"
              style={{
                width: "100%",
                maxWidth: "320px",
                display: "flex",
                gap: "var(--space-2xs)",
                justifyContent: "center",
              }}
            >
              <span>Call</span>
              <span>/</span>
              <span>+94 114 245 245</span>
            </a>
          </div>

          <div className="richtext" style={{ marginTop: "var(--space-m)" }}>
            <p><strong>Sri Lanka Flagship Store:</strong></p>
            <p>
              No 45, Dharmapala Mawatha,
              <br />
              Colombo 03, Sri Lanka
            </p>

            <p style={{ marginTop: "var(--space-s)" }}><strong>Factory:</strong></p>
            <p>
              Earthfoam PVT Ltd,
              <br />
              Div. S4, HEPZ BOI,
              <br />
              Poruwadanda, Horana, Sri Lanka
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
