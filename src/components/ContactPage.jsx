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
            We are available Monday - Saturday from 9am - 5pm Central Time (Closed
            July 3rd &amp; 4th in Observance of Independence Day)
          </p>

          <div>
            <a
              href="mailto:support@earthfoam.com"
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
              <span>support@earthfoam.com</span>
            </a>
          </div>

          <div>
            <a
              href="tel:312.626.9680"
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
              <span>312.626.9680</span>
            </a>
          </div>

          <div className="richtext" style={{ marginTop: "var(--space-m)" }}>
            <p>Our address is:</p>
            <p>
              <a
                href="https://www.google.com/maps/place/5620+W+Jarvis+Ave,+Niles,+IL+60714/@42.0159548,-87.770796,17z/data=!3m1!4b1!4m5!3m4!1s0x880fced7ce7c63b9:0xf3277b7942583998!8m2!3d42.0159548!4d-87.7686073"
                rel="nofollow noreferrer noopener"
                target="_blank"
              >
                5620 W. Jarvis Ave.
                <br />
                Niles, IL 60714
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
