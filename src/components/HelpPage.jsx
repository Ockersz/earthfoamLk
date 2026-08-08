import { useEffect, useRef } from "react";
import "./HelpPage.css";

// ── Shared Accordion component (replaces ef-accordion + ef-accordion-fold) ──
function Accordion({ children }) {
  return <div className="help__accordion">{children}</div>;
}

function AccordionFold({ id, question, children }) {
  return (
    <div className="help__accordionFold" id={id}>
      <details>
        <summary className="body-m wrap-pretty">{question}</summary>
        <div className="richtext body-s">{children}</div>
      </details>
    </div>
  );
}

// ── Shared HelpPage layout wrapper ──────────────────────────────────────────
function HelpPageLayout({ title, menuItems, children }) {
  const menuRef = useRef(null);

  useEffect(() => {
    // Highlight menu item whose section is visible
    const sections = document.querySelectorAll(".help__contentColumn section[id]");
    const menuLinks = menuRef.current?.querySelectorAll("li") ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const li = [...menuLinks].find((l) =>
            l.querySelector(`a[href="#${id}"]`),
          );
          if (li) li.classList.toggle("visible", entry.isIntersecting);
        });
        // Always mark 'overview' when near top
        const overviewLi = [...menuLinks].find((l) =>
          l.querySelector('a[href="#overview"]'),
        );
        if (overviewLi && window.scrollY < 200) {
          overviewLi.classList.add("visible");
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="helpPage">
      <main className="container">
        {/* H1 and menu sit in column 1 on desktop */}
        <div>
          <h1 className="h1" id="overview">{title}</h1>
        </div>

        <menu ref={menuRef}>
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </menu>

        {/* Content column sits in column 2 on desktop */}
        <div className="help__contentColumn">
          {children}
        </div>
      </main>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// CERTIFICATIONS PAGE
// ════════════════════════════════════════════════════════════════════════════
export function CertificationsPage() {
  useEffect(() => {
    document.title = "Certifications | Earthfoam";
    return () => { document.title = "Earthfoam"; };
  }, []);

  return (
    <HelpPageLayout
      title="Certifications"
      menuItems={[
        { href: "#overview", label: "Overview" },
        { href: "#global-organic-textile-standard-gots", label: "Global Organic Textile Standard (GOTS)" },
        { href: "#oeko-tex-standard-100", label: "Oeko-Tex® Standard 100" },
        { href: "#global-organic-latex-standard-gols", label: "Global Organic Latex Standard (GOLS)" },
        { href: "#fair-for-life", label: "Fair for Life" },
      ]}
    >
      {/* Intro */}
      <section className="richtext">
        <p>With so many certifications floating around, it can be confusing to figure out what they all mean, and if they're even real.</p>
        <p>For Earthfoam, we sought only the strictest certifications concerning fair trade, organic, emissions, and health. And we are proud to have received them all.</p>
        <p>Our certifications are under our name, up to date, and administered by an unbiased third party.</p>
        <p>We hope this brings you some comfort.</p>
      </section>

      {/* GOTS */}
      <section id="global-organic-textile-standard-gots">
        <h2>Global Organic Textile Standard (GOTS)</h2>
        <div className="richtext">
          <p><a target="_blank" rel="noreferrer" href="https://earthfoam.com/assets/2026-EF-Cert-GOTS.jpg">View the certificate</a></p>
          <p>GOTS verifies that we are using only organically grown and processed fibers. Having the GOTS certification is important for our mattress, topper, and pillow covers, which are all made using organic cotton, as well as organic wool (in topper and mattress covers only).</p>
        </div>
      </section>

      {/* Oeko-Tex */}
      <section id="oeko-tex-standard-100">
        <h2>Oeko-Tex® Standard 100</h2>
        <div className="richtext">
          <p><a target="_blank" rel="noreferrer" href="https://earthfoam.com/assets/17.HUS.25845 -en.jpg">View the certificate</a></p>
          <p>Oeko-Tex® Standard 100 sets the standard for textile safety, from yarn to finished product. Every product carrying the label has passed laboratory tests for harmful substances. Each component of an Oeko-Tex® Standard 100 certified product has been tested against a list of over 1,000 harmful substances.</p>
        </div>
      </section>

      {/* GOLS */}
      <section id="global-organic-latex-standard-gols">
        <h2>Global Organic Latex Standard (GOLS)</h2>
        <div className="richtext">
          <p><a target="_blank" rel="noreferrer" href="https://earthfoam.com/assets/2026-EF-Cert-GOLS.pdf">View the certificate</a></p>
          <p>GOLS is the only certification that can verify that we're using only organically grown and processed rubber.</p>
        </div>
      </section>

      {/* Fair for Life */}
      <section id="fair-for-life">
        <h2>Fair for Life</h2>
        <div className="richtext">
          <p><a target="_blank" rel="noreferrer" href="https://earthfoam.com/assets/FFL_Certificate_Shevick Sales Corp. DBA  Sleep On Latex DBA Earthfoam_20231019.jpg">View the certificate</a></p>
          <p>Fair for Life is fair trade certification. It focuses on the working conditions of our employees, and the overall security of the most vulnerable people in our supply chain; the agricultural farmers and workers. As the most stringent fair trade certification, Fair for Life is the most impactful certification we have.</p>
        </div>
      </section>
    </HelpPageLayout>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// SHIPPING & RETURNS PAGE
// ════════════════════════════════════════════════════════════════════════════
export function ShippingReturnsPage() {
  useEffect(() => {
    document.title = "Shipping & Returns | Earthfoam";
    return () => { document.title = "Earthfoam"; };
  }, []);

  return (
    <HelpPageLayout
      title="Shipping & Returns"
      menuItems={[
        { href: "#overview", label: "Overview" },
        { href: "#shipping", label: "Shipping" },
        { href: "#returns", label: "Returns" },
        { href: "#warranty", label: "Warranty" },
      ]}
    >
      {/* Intro */}
      <section className="richtext">
        <p>Every Earthfoam order is packaged and shipped from our factory outside Chicago.</p>
        <p>Below are our shipping and return policies, designed to make it as easy as possible for you to receive your order and send it back if needed. You can always <a href="/contact">contact us</a> if you have questions or run into any issues.</p>
      </section>

      {/* Shipping */}
      <section id="shipping">
        <h2>Shipping</h2>
        <div className="richtext">
          <p>All of our products ship within the contiguous United States for free. In certain cases, you may have the option to purchase faster shipping.</p>
          <p>Earthfoam mainly uses FedEx for shipping. We've found they take the best care of our packages. Occasionally, we ship through UPS, USPS, or Freight (king mattresses). When you order a king size mattress, the freight service we use will call you to schedule a time for a drop-off.</p>
          <p>Earthfoam gladly ships to Alaska, Hawaii, Canada, and just about any other place in the world. You'll just have to take responsibility for the cost of shipping, taxes, duties, customs charges, etc. if ordering outside of the contiguous United States.</p>
          <p>All orders will ship within 1-5 business days.</p>
        </div>
      </section>

      {/* Returns */}
      <section id="returns">
        <h2>Returns</h2>
        <div className="richtext">
          <p>Every item we sell comes with a sleep trial. With any of our products, you can return them within the sleep trial for a full refund (or exchange credit), no questions asked.</p>
          <p><strong>Mattresses</strong><br />For mattresses, we partner with a removal service that will pick up your returned mattress at no extra cost. The Sleep Trial for the Earthfoam Organic Mattress is 100 days, beginning when your mattress is delivered.</p>
          <p><strong>Toppers</strong><br />If you return your Earthfoam Organic Topper, we'll send you a larger box and a prepaid return label to make the process as easy as possible for you. The sleep trial on our toppers is 100 days, starting when your topper is delivered.</p>
          <p><strong>Pillows</strong><br />Our pillow can easily fit back into its original packaging, so we'll just send you a prepaid return label for pillow returns. The sleep trial on our pillows is 30 days, starting when your pillow is delivered.</p>
          <p>Refunds are processed once we receive returns, or pick them up in the case of our mattresses. If you'd like to exchange your product for a different size or firmness, we will apply your return credit toward the new product.</p>
          <p>Customers are allowed one return/exchange per product category each year.</p>
          <p>To initiate a return or exchange, please use our <a href="https://shop.earthfoam.com/a/service" rel="nofollow noreferrer noopener">Returns/Exchanges Portal</a> or contact our customer service at <a href="mailto:support@earthfoam.com">support@earthfoam.com</a> or by calling <a href="tel:312-626-9680">312-626-9680</a>.</p>
        </div>
      </section>

      {/* Warranty */}
      <section id="warranty">
        <h2>Warranty</h2>
        <div className="richtext">
          <p>Foam rubber is well known for its durability, often outlasting customer expectations by a long shot. Still, we want you to feel protected in your purchase.</p>
          <p>Below is our 10-year mattress and topper warranty, and our 5-year pillow warranty.</p>
          <p>
            <a href="/help/mattress-warranty">Earthfoam Organic Mattress Warranty</a><br />
            <a href="/help/mattress-topper-warranty">Earthfoam Organic Topper Warranty</a><br />
            <a href="/help/pillow-warranty">Earthfoam Organic Pillow Warranty</a>
          </p>
        </div>
      </section>
    </HelpPageLayout>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// COMMON QUESTIONS PAGE
// ════════════════════════════════════════════════════════════════════════════
export function CommonQuestionsPage() {
  useEffect(() => {
    document.title = "Common Questions | Earthfoam";
    return () => { document.title = "Earthfoam"; };
  }, []);

  return (
    <HelpPageLayout
      title="Common Questions"
      menuItems={[
        { href: "#overview", label: "Overview" },
        { href: "#shipping", label: "Shipping" },
        { href: "#returns", label: "Returns" },
        { href: "#payment", label: "Payment" },
        { href: "#earthfoam-the-foam", label: "Earthfoam (the foam)" },
        { href: "#products", label: "Products" },
      ]}
    >
      {/* Intro */}
      <section className="richtext">
        <p>We know buying a mattress is a big deal, and we would love to help answer any questions you have. If you don't see your question here, please <a href="/contact">contact us</a>. We have real, well-trained humans ready to help you.</p>
      </section>

      {/* Shipping */}
      <section id="shipping" className="has-accordion">
        <h2>Shipping</h2>
        <Accordion>
          <AccordionFold id="how-long-will-it-take" question="How long will it take for my order to be delivered?">
            <p>All of our products ship within five business days and are typically delivered within ten business days of ordering.</p>
          </AccordionFold>
          <AccordionFold id="where-do-you-ship-from" question="Where do you ship from?">
            <p>Our products all ship from our warehouse in Niles, IL, just outside of Chicago.</p>
          </AccordionFold>
          <AccordionFold id="is-shipping-free" question="Is shipping free?">
            <p>As long as you are ordering within the contiguous United States, shipping is free. Anyone ordering from outside the contiguous United States will automatically be charged for shipping at checkout.</p>
          </AccordionFold>
          <AccordionFold id="which-service-shipping" question="Which service do you use for shipping?">
            <p>We generally ship through FedEx Ground and FedEx Freight (for king mattresses). We are able to ship through UPS and sometimes USPS upon request (additional charges may apply). Please reach out to us if you would like for us to ship using a specific service and we will do our best to accommodate.</p>
          </AccordionFold>
          <AccordionFold id="signature-required" question="Do you require a signature upon delivery?">
            <p>No, we do not. We do have the ability to add a signature requirement if you'd like. Feel free to reach out to us before your order ships to arrange for a signature requirement.</p>
          </AccordionFold>
          <AccordionFold id="how-are-mattresses-delivered" question="How are mattresses delivered?">
            <p>Each mattress, with the exception of our King and Cal King mattresses, is delivered by FedEx Ground. The mattress is left at your door, in a mailroom, or wherever packages are typically delivered at your residence. A signature is not required unless you have requested with us otherwise.</p>
            <p>King and Cal King mattresses ship with FedEx Freight. These mattresses are delivered to your door, in a mailroom, or wherever packages are typically delivered at your residence, and a signature is required. FedEx Freight will call after the order ships to schedule a date and time for your delivery.</p>
            <p>If you choose our free delivery option, we highly recommend having extra hands available on the day of delivery to help move the mattress inside your home.</p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Returns */}
      <section id="returns" className="has-accordion">
        <h2>Returns</h2>
        <Accordion>
          <AccordionFold id="what-is-return-policy" question="What is your return policy?">
            <p>You may return your mattresses or toppers within 100 days of delivery for a full refund, no questions asked. Our pillow can be returned within 30 days of delivery for a full refund, no questions asked.</p>
          </AccordionFold>
          <AccordionFold id="do-you-accept-exchanges" question="Do you accept exchanges?">
            <p>Yes! If you choose to exchange your item within the return period, we will apply the credit from your return towards a new item.</p>
          </AccordionFold>
          <AccordionFold id="fit-topper-back-in-packaging" question="How will I fit the expanded topper or mattress back into its packaging?">
            <p>If you can't fit the topper back in its box, we will send out a larger return box at no charge. We do not require that mattresses are placed back in their packaging. If you choose to return a mattress, we will have it removed from your home at no extra cost.</p>
          </AccordionFold>
          <AccordionFold id="what-do-you-do-with-returned-items" question="What do you do with returned items?">
            <p>Our returned items are never resold. All pillow and topper returns are kept in a segregated area of our warehouse. They are regularly picked up by a local mattress refurbisher that uses them in their own refurbished mattresses (not sold by us or under our brand name).</p>
            <p>We offer our customers the option to donate any mattress returns to any non-profit for a full refund. If we pick the mattress up, we will do their best to donate the mattress to charity.</p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Payment */}
      <section id="payment" className="has-accordion">
        <h2>Payment</h2>
        <Accordion>
          <AccordionFold id="what-credit-cards" question="What credit cards do you accept?">
            <p>You can purchase from Earthfoam using Visa, MasterCard, Discover, American Express and Apple Pay.</p>
          </AccordionFold>
          <AccordionFold id="does-earthfoam-offer-financing" question="Does Earthfoam offer financing?">
            <p>We do! We offer our customers the option to pay in installments at checkout.</p>
          </AccordionFold>
          <AccordionFold id="can-i-order-over-phone" question="Can I place my order over the phone?">
            <p>Yes! Call us Monday-Saturday between 9am-5pm CT at <a href="tel:312-626-9680" rel="nofollow noreferrer noopener">312-626-9680</a>.</p>
          </AccordionFold>
          <AccordionFold id="does-earthfoam-have-sales" question="Does Earthfoam ever have any sales, discounts or promotions?">
            <p>We don't do any sales and don't offer any discount codes. We do this because we want all of our customers to know that they are getting the best price possible, regardless of where they hear about us from or when they buy from us.</p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Earthfoam the foam */}
      <section id="earthfoam-the-foam" className="has-accordion">
        <h2>Earthfoam (the foam)</h2>
        <Accordion>
          <AccordionFold id="what-is-earthfoam" question="What is Earthfoam?">
            <p>Earthfoam is the material at the core of our products. It is foam rubber (also known as latex foam) made in our own Sri Lankan factory from organic, fair trade Sri Lankan rubber. Natural rubber has a long history among native Central and South American cultures. Foam Rubber was first produced in 1929 by the Dunlop Rubber Company and widely utilized in mattresses prior to the introduction of Polyurethane Foam (used in most mattresses sold today).</p>
          </AccordionFold>
          <AccordionFold id="where-is-earthfoam-made" question="Where is Earthfoam made?">
            <p>Our foam is made in The Earthfoam factory in Sri Lanka. The foam used in our pillows is made in The Netherlands.</p>
          </AccordionFold>
          <AccordionFold id="how-is-earthfoam-made" question="How is Earthfoam made?">
            <p>Rubber tree sap (natural latex) is provided to us by our network of small farmers in Sri Lanka. Our collection facility removes water from the sap and sends it to the foam factory. To bond liquid rubber molecules into plush foam, we mix it with a small amount of sulfur, zinc oxide, accelerators, and antioxidants. This mixture is placed in a mould and baked to form foam.</p>
          </AccordionFold>
          <AccordionFold id="how-can-mattress-be-organic" question="Can you explain how a mattress can be considered organic?">
            <p>In order for a product to be considered organic, the agricultural inputs must be farmed without the use of herbicides, pesticides, GMOs, or synthetic fertilizer. Since Earthfoam, as well as our wool and cotton, are all certified organic, our entire final mattress is organic, too.</p>
          </AccordionFold>
          <AccordionFold id="do-you-sell-to-businesses" question="Do you sell Earthfoam to other businesses?">
            <p>Yes. If your business is interested in purchasing from Earthfoam, please reach out to <a href="mailto:foamfactory@earthfoam.com" rel="nofollow noreferrer noopener">foamfactory@earthfoam.com</a>.</p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Products */}
      <section id="products" className="has-accordion">
        <h2>Products</h2>
        <Accordion>
          <AccordionFold id="where-are-products-made" question="Where are Earthfoam products made?">
            <p>Our mattresses, toppers and pillows are quilted, sewn, assembled and packaged in our Niles, IL factory.</p>
          </AccordionFold>
          <AccordionFold id="do-you-have-showroom" question="Do you have a showroom in your factory?">
            <p>We do not currently have a showroom that is open to the public in our factory.</p>
          </AccordionFold>
          <AccordionFold id="can-i-buy-in-stores" question="Can I buy Earthfoam products in any stores?">
            <p>No, we only sell our products online.</p>
          </AccordionFold>
          <AccordionFold id="vs-sleep-on-latex" question="Are your products different than Sleep On Latex products?">
            <p>We make Sleep On Latex and Earthfoam products in the same Niles, IL factory with the same foam made in our Sri Lankan Foam factory. The Earthfoam Mattress and Pillow have the same configuration as the Sleep On Latex Pure Green Mattress and Natural Latex Pillow, just different branding and labels.</p>
          </AccordionFold>
        </Accordion>
      </section>
    </HelpPageLayout>
  );
}
