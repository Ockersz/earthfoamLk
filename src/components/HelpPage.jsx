import { useEffect, useRef } from "react";
import "./HelpPage.css";

// ── Shared Accordion Component ──────────────────────────────────────────────
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

// ── Shared HelpPage Layout Wrapper ──────────────────────────────────────────
function HelpPageLayout({ title, menuItems, children }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      for (const entry of entries) {
        const link = menuRef.current?.querySelector(`a[href="#${entry.target.id}"]`);
        if (!link || !link.parentElement) continue;
        link.parentElement.classList.toggle("visible", entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -40% 0px",
    });

    const targets = document.querySelectorAll(
      ".helpPage main section[id], .helpPage main h1[id]"
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMenuClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <div className="helpPage">
      <main className="container">
        {/* Column 1 on desktop: Title & Sticky Menu */}
        <div>
          <h1 className="h1" id="overview">
            {title}
          </h1>
        </div>

        <menu ref={menuRef}>
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleMenuClick(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </menu>

        {/* Column 2 on desktop: Content Column */}
        <div className="help__contentColumn">{children}</div>
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
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  return (
    <HelpPageLayout
      title="Certifications"
      menuItems={[
        { href: "#overview", label: "Overview" },
        {
          href: "#global-organic-textile-standard-gots",
          label: "Global Organic Textile Standard (GOTS)",
        },
        { href: "#oeko-tex-standard-100", label: "Oeko-Tex® Standard 100" },
        {
          href: "#global-organic-latex-standard-gols",
          label: "Global Organic Latex Standard (GOLS)",
        },
        { href: "#fair-for-life", label: "Fair for Life" },
      ]}
    >
      {/* Intro section */}
      <section className="richtext">
        <p>
          With so many certifications floating around, it can be confusing to
          figure out what they all mean, and if they’re even real.
        </p>
        <p>
          For Earthfoam, we sought only the strictest certifications concerning
          fair trade, organic, emissions, and health. And we are proud to have
          received them all.
        </p>
        <p>
          Our certifications are under our name, up to date, and administered by
          an unbiased third party.
        </p>
        <p>We hope this brings you some comfort.</p>
      </section>

      {/* GOTS */}
      <section id="global-organic-textile-standard-gots">
        <h2>Global Organic Textile Standard (GOTS)</h2>
        <div className="richtext">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="/assets/2026-EF-Cert-GOTS.jpg"
            >
              View the certificate
            </a>
          </p>
          <p>
            GOTS verifies that we are using only organically grown and processed
            fibers. Having the GOTS certification is important for our mattress,
            topper, and pillow covers, which are all made using organic cotton, as
            well as organic wool (in topper and mattress covers only).
          </p>
        </div>
      </section>

      {/* Oeko-Tex */}
      <section id="oeko-tex-standard-100">
        <h2>Oeko-Tex® Standard 100</h2>
        <div className="richtext">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="/assets/17.HUS.25845 -en.jpg"
            >
              View the certificate
            </a>
          </p>
          <p>
            Oeko-Tex® Standard 100 sets the standard for textile safety, from yarn
            to finished product. Every product carrying the label has passed
            laboratory tests for harmful substances. Each component of an
            Oeko-Tex® Standard 100 certified product has been tested against a
            list of over 1,000 harmful substances.
          </p>
        </div>
      </section>

      {/* GOLS */}
      <section id="global-organic-latex-standard-gols">
        <h2>Global Organic Latex Standard (GOLS)</h2>
        <div className="richtext">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="/assets/2026-EF-Cert-GOLS.pdf"
            >
              View the certificate
            </a>
          </p>
          <p>
            GOLS is the only certification that can verify that we’re using only
            organically grown and processed rubber.
          </p>
        </div>
      </section>

      {/* Fair for Life */}
      <section id="fair-for-life">
        <h2>Fair for Life</h2>
        <div className="richtext">
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="/assets/FFL_Certificate_Shevick Sales Corp. DBA  Sleep On Latex DBA Earthfoam_20231019.jpg"
            >
              View the certificate
            </a>
          </p>
          <p>
            Fair for Life is fair trade certification. It focuses on the working
            conditions of our employees, and the overall security of the most
            vulnerable people in our supply chain; the agricultural farmers and
            workers. As the most stringent fair trade certification, Fair for
            Life is the most impactful certification we have.
          </p>
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
    return () => {
      document.title = "Earthfoam";
    };
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
      {/* Intro section */}
      <section className="richtext">
        <p>
          Every Earthfoam order is packaged and shipped from our factory outside
          Colombo 03.
        </p>
        <p>
          Below are our shipping and return policies, designed to make it as easy
          as possible for you to receive your order and send it back if needed.
          You can always <a href="/contact">contact us</a> if you have questions
          or run into any issues.
        </p>
      </section>

      {/* Shipping */}
      <section id="shipping">
        <h2>Shipping</h2>
        <div className="richtext">
          <p>
            We deliver free of charge to most parts of the country. Certain products and locations may be exempted. Please speak to us.
          </p>
          <p>
            Earthfoam may use our in-house delivery team or 3rd party logistics for delivery options. We will discuss with you to make the delivery process as smooth as buying one of our mattresses.
          </p>
          <p>
            We offer worldwide shipping. Please let us know your address so we can calculate the delivery cost for you.
          </p>
          <p>Orders within the Colombo area will be delivered within 4 working days.</p>
        </div>
      </section>

      {/* Returns */}
      <section id="returns">
        <h2>Returns</h2>
        <div className="richtext">
          <p>
            We make sure you are fully satisfied with our products and services. All our products will carry warranty backed by satisfaction trial period. Please speak to us.
          </p>
          <p>
            <strong>Mattresses</strong>
            <br />
            For mattresses, we partner with a removal service that will pick up
            your returned mattress at no extra cost. The Sleep Trial for the
            Earthfoam Organic Mattress is 100 days, beginning when your mattress
            is delivered.
          </p>
          <p>
            <strong>Toppers</strong>
            <br />
            If you return your Earthfoam Organic Topper, we’ll send you a larger
            box and a prepaid return label to make the process as easy as
            possible for you. The sleep trial on our toppers is 100 days, starting
            when your topper is delivered.
          </p>
          <p>
            <strong>Pillows</strong>
            <br />
            Our pillow can easily fit back into its original packaging, so we’ll
            just send you a prepaid return label for pillow returns. The sleep
            trial on our pillows is 30 days, starting when your pillow is
            delivered.
          </p>
          <p>
            Refunds are processed once we receive returns, or pick them up in the
            case of our mattresses. If you’d like to exchange your product for a
            different size or firmness, we will apply your return credit toward
            the new product.
          </p>
          <p>
            Customers are allowed one return/exchange per product category each
            year.
          </p>
          <p>
            To initiate a return, please contact our customer service at{" "}
            <a href="mailto:info@earthfoam.lk">info@earthfoam.lk</a> or talk to one of our representatives on{" "}
            <a href="tel:+94114245245">+94 114 245 245</a>.
          </p>
        </div>
      </section>

      {/* Warranty */}
      <section id="warranty">
        <h2>Warranty</h2>
        <div className="richtext">
          <p>
            Foam rubber is well known for its durability, often outlasting
            customer expectations by a long shot. Still, we want you to feel
            protected in your purchase.
          </p>
          <p>
            Below is our 10-year mattress and topper warranty, and our 5-year
            pillow warranty.
          </p>
          <p>
            <a href="/help/mattress-warranty">
              Earthfoam Organic Mattress Warranty
            </a>
            <br />
            <a href="/help/mattress-topper-warranty">
              Earthfoam Organic Topper Warranty
            </a>
            <br />
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
    return () => {
      document.title = "Earthfoam";
    };
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
      {/* Intro section */}
      <section className="richtext">
        <p>
          We know buying a mattress is a big deal, and we would love to help
          answer any questions you have. If you don’t see your question here,
          please <a href="/contact">contact us</a>. We have real, well-trained
          humans ready to help you.
        </p>
      </section>

      {/* Shipping */}
      <section id="shipping" className="has-accordion">
        <h2>Shipping</h2>
        <Accordion>
          <AccordionFold
            id="how-long-will-it-take-for-my-order-to-be-delivered"
            question="How long will it take for my order to be delivered?"
          >
            <p>
              All of our products will be ready to deliver in 2 working days. Free delivery will be scheduled in consultation with the buyers.
            </p>
          </AccordionFold>
          <AccordionFold
            id="where-do-you-ship-from"
            question="Where do you ship from?"
          >
            <p>
              Our products are shipped directly from our factory in Horana, Sri Lanka.
            </p>
          </AccordionFold>
          <AccordionFold id="is-shipping-free" question="Is shipping free?">
            <p>
              Yes. Shipping is free (*Conditions apply)
            </p>
          </AccordionFold>
          <AccordionFold
            id="which-service-do-you-use-for-shipping"
            question="Which service do you use for shipping?"
          >
            <p>
              We deliver directly to you using our own fleet of vehicles. Occasionally through 3rd party logistic providers.
            </p>
          </AccordionFold>
          <AccordionFold
            id="do-you-require-a-signature-upon-delivery"
            question="Do you require a signature upon delivery?"
          >
            <p>
              Upon delivery, we provide the warranty card and obtain the customer’s signature as confirmation of receipt.
            </p>
          </AccordionFold>
          <AccordionFold
            id="how-are-mattresses-delivered"
            question="How are mattresses delivered?"
          >
            <p>
              Every mattress is delivered directly to your doorstep using our own delivery vehicles. A signature is required upon delivery to confirm receipt.
            </p>
            <p>
              We deliver your products directly to your doorstep.
            </p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Returns */}
      <section id="returns" className="has-accordion">
        <h2>Returns</h2>
        <Accordion>
          <AccordionFold
            id="what-is-your-return-policy"
            question="What is your return policy?"
          >
            <p>Returns may take a minimum of 2 weeks to process.</p>
          </AccordionFold>
          <AccordionFold
            id="do-you-accept-exchanges"
            question="Do you accept exchanges?"
          >
            <p>
              Yes! If you choose to exchange your item within the return period, we
              will apply the credit from your return towards a new item.
            </p>
          </AccordionFold>
          <AccordionFold
            id="how-will-i-fit-the-expanded-topper-or-mattress-back-into-its-packaging"
            question="How will I fit the expanded topper or mattress back into its packaging?"
          >
            <p>
              If you can’t fit the topper back in its box, we will send out a
              larger return box at no charge. We do not require that mattresses
              are placed back in their packaging. If you choose to return a
              mattress, we will have it removed from your home at no extra cost.
            </p>
          </AccordionFold>
          <AccordionFold
            id="what-do-you-do-with-returned-items"
            question="What do you do with returned items?"
          >
            <p>
              Our returned items are never resold. All pillow and topper returns
              are kept in a segregated area of our warehouse. They are regularly
              picked up by a local mattress refurbisher that uses them in their own
              refurbished mattresses (not sold by us or under our brand name).
            </p>
            <p>
              We offer our customers the option to donate any mattress returns to
              any non-profit for a full refund. If we pick the mattress up, we will
              do their best to donate the mattress to charity. Although we do our
              best to avoid disposal, sometimes it is the only possible option. To
              avoid waste, we encourage our customers to reach out to us for
              guidance in choosing the right mattress.
            </p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Payment */}
      <section id="payment" className="has-accordion">
        <h2>Payment</h2>
        <Accordion>
          <AccordionFold
            id="what-credit-cards-do-you-accept"
            question="What credit cards do you accept?"
          >
            <p>
              We accept cash payment, debit and credit cards and scan &amp; go and also bank transfers.
            </p>
          </AccordionFold>
          <AccordionFold
            id="does-earthfoam-offer-financing"
            question="Does Earthfoam offer financing?"
          >
            <p>
              We do! We offer our customers the option to pay in installments at
              checkout.
            </p>
          </AccordionFold>
          <AccordionFold
            id="can-i-place-my-order-over-the-phone"
            question="Can I place my order over the phone?"
          >
            <p>
              Yes. You can order over the phone all the 7 days from 9am to 5pm at{" "}
              <a href="tel:+94114245245" rel="nofollow noreferrer noopener">
                +94 114 245 245
              </a>
              .
            </p>
          </AccordionFold>
          <AccordionFold
            id="does-earthfoam-ever-have-any-sales-discounts-or-promotions"
            question="Does Earthfoam ever have any sales, discounts or promotions?"
          >
            <p>
              Enjoy exclusive offers and discounts at our showroom.
            </p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Earthfoam the foam */}
      <section id="earthfoam-the-foam" className="has-accordion">
        <h2>Earthfoam (the foam)</h2>
        <Accordion>
          <AccordionFold id="what-is-earthfoam" question="What is Earthfoam?">
            <p>
              Earthfoam is the material at the core of our products. It is foam
              rubber (also known as latex foam) made in our own Sri Lankan
              factory from organic, fair trade Sri Lankan rubber. Natural rubber
              has a long history among native Central and South American
              cultures. Foam Rubber was first produced in 1929 by the Dunlop Rubber
              Company and widely utilized in mattresses prior to the introduction
              of Polyurethane Foam (used in most mattresses sold today). A
              vertically integrated supply chain enables us to produce the purest
              and highest-quality foam rubber in a sustainable and responsible
              manner.
            </p>
          </AccordionFold>
          <AccordionFold
            id="where-is-earthfoam-made"
            question="Where is Earthfoam made?"
          >
            <p>
              Our foam, mattresses and pillows are made in The Earthfoam factory in Sri Lanka.
            </p>
          </AccordionFold>
          <AccordionFold
            id="how-is-earthfoam-made"
            question="How is Earthfoam made?"
          >
            <p>
              Rubber tree sap (natural latex) is provided to us by our network of
              small farmers in Sri Lanka. Our collection facility removes water
              from the sap and sends it to the foam factory. To bond liquid rubber
              mole molecules into plush foam, we mix it with a small amount of
              sulfur, zinc oxide, accelerators, and antioxidants. This mixture is
              placed in a mould and baked to form foam. After being produced,
              blocks of foam are washed thoroughly to remove impurities.
            </p>
          </AccordionFold>
          <AccordionFold
            id="can-you-explain-how-a-mattress-can-be-considered-organic"
            question="Can you explain how a mattress can be considered organic?"
          >
            <p>
              In order for a product to be considered organic, the agricultural
              inputs must be farmed without the use of herbicides, pesticides,
              GMO’s, or synthetic fertilizer. Since Earthfoam, as well as our wool
              and cotton, are all certified organic, our entire final mattress is
              organic, too.
            </p>
          </AccordionFold>
          <AccordionFold
            id="do-you-sell-earthfoam-to-other-businesses"
            question="Do you sell Earthfoam to other businesses?"
          >
            <p>
              Yes. If your business is interested in purchasing from Earthfoam,
              please reach out to{" "}
              <a
                href="mailto:info@earthfoam.lk"
                rel="nofollow noreferrer noopener"
              >
                info@earthfoam.lk
              </a>
              .
            </p>
          </AccordionFold>
        </Accordion>
      </section>

      {/* Products */}
      <section id="products" className="has-accordion">
        <h2>Products</h2>
        <Accordion>
          <AccordionFold
            id="where-are-earthfoam-products-made"
            question="Where are Earthfoam products made?"
          >
            <p>
              Our mattresses, toppers and pillows are quilted, sewn, assembled and
              packaged in our Earthfoam factory.
            </p>
          </AccordionFold>
          <AccordionFold
            id="do-you-have-a-showroom-in-your-factory"
            question="Do you have a showroom in your factory?"
          >
            <p>
              We do not currently have a showroom that is open to the public in
              our factory.
            </p>
          </AccordionFold>
          <AccordionFold
            id="can-i-buy-earthfoam-products-in-any-stores"
            question="Can I buy Earthfoam products in any stores?"
          >
            <p>No, we only sell our products online.</p>
          </AccordionFold>
          <AccordionFold
            id="are-your-products-different-than-sleep-on-latex-products"
            question="Are your products different than Sleep On Latex products?"
          >
            <p>
              We make Sleep On Latex and Earthfoam products in our Sri Lankan Foam factory. The
              Earthfoam Mattress and Pillow have the same configuration as the
              Sleep On Latex Pure Green Mattress and Natural Latex Pillow, just
              different branding and labels. The Earthfoam topper is a 2″ Soft
              Topper (as sold through Sleep On Latex) but has a quilted cover (not
              offered through Sleep On Latex). Sleep On Latex offers a wider
              variety of topper thicknesses and firmnesses.
            </p>
          </AccordionFold>
        </Accordion>
      </section>
    </HelpPageLayout>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// MATTRESS WARRANTY PAGE
// ════════════════════════════════════════════════════════════════════════════
export function MattressWarrantyPage() {
  useEffect(() => {
    document.title = "Mattress Warranty | Earthfoam";
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  const menuItems = [
    { href: "#overview", label: "Overview" },
    {
      href: "#who-this-limited-warranty-is-extended-to",
      label: "Who this Limited Warranty is Extended to:",
    },
    {
      href: "#what-this-limited-warranty-covers",
      label: "What this Limited Warranty Covers:",
    },
    {
      href: "#what-this-limited-warranty-does-not-cover",
      label: "What this Limited Warranty Does Not Cover:",
    },
    {
      href: "#how-to-file-a-claim-under-this-limited-warranty",
      label: "How to file a claim under this Limited Warranty:",
    },
  ];

  return (
    <HelpPageLayout title="Mattress Warranty" menuItems={menuItems}>
      <section className="richtext">
        <p>
          Earthfoam warrants that it will, at its option, and at its expense,
          repair or replace this mattress should it be determined to contain a
          defect which is covered by the terms of this Limited Warranty.
        </p>
        <p>
          This Limited Warranty lasts for a period of ten (10) years, with such
          time dating from the date of the product purchase as noted as your
          sales slip or as may be otherwise evidenced by appropriate
          documentation. Proof of direct, authorized purchase is required with
          all warranty claims.
        </p>
        <p>
          This warranty applies only to Earthfoam Organic Mattress and is not
          extended to other products in the Earthfoam product line.
        </p>
      </section>

      <section id="who-this-limited-warranty-is-extended-to">
        <h2>Who this Limited Warranty is Extended to:</h2>
        <div className="richtext">
          <p>
            This Limited Warranty extends to the initial, “original” purchaser of
            this product only and not to any possible future owner(s) of the
            product. For purposes of this Limited Warranty an “original”
            purchaser is the individual or entity who purchased this mattress
            from Earthfoam directly or, as the case may be, from an authorized
            retailer, distributor or dealer.
          </p>
        </div>
      </section>

      <section id="what-this-limited-warranty-covers">
        <h2>What this Limited Warranty Covers:</h2>
        <div className="richtext">
          <p>
            For purposes of this Limited Warranty, a defect includes the following:
          </p>
          <ul>
            <li>
              “Sinkage” or “indentations” in the mattresses foam measuring one inch
              or more deep.
            </li>
            <li>
              Any cracks or splits of the foam of the mattress which significantly
              impact the performance of the mattress as long as such damage is not
              due to any abuse or misuse by the users, including the lack of
              proper support of the mattress or improper handling of the mattress.
            </li>
          </ul>
        </div>
      </section>

      <section id="what-this-limited-warranty-does-not-cover">
        <h2>What this Limited Warranty Does Not Cover:</h2>
        <div className="richtext">
          <p>This Limited Warranty does NOT cover the following:</p>
          <ul>
            <li>
              Damage due to the product due to improper support of the mattress,
              damage due to the product due to improper handling of the mattress
              or to any damage caused by roughhousing or other misuse, including,
              but not limited to: burns, spills, bodily fluids, cuts, etc.
            </li>
            <li>Dissatisfaction due to subjective comfort.</li>
            <li>
              Deterioration of the mattress due to normal wear and tear including
              slight foam indentations of less than one (1) inch.
            </li>
            <li>
              Any product used in a commercial setting such as a hotel, bed and
              breakfast, motel, hospital, nursing home, group home, etc.
            </li>
          </ul>
          <p>
            Commercial warranty terms apply in such a case and not the terms of
            this Limited Warranty.
          </p>
          <p>
            Any mattress sold as “Final” or “As Is” because it had been a floor
            sample, demonstration model, etc.
          </p>
          <p>
            EARTHFOAM SHALL NOT BE LIABLE FOR INCIDENTAL OR CONSEQUENTIAL
            DAMAGES RESULTING FROM THE USE OF THIS PRODUCT OR ARISING OUT OF ANY
            BREACH OF THIS LIMITED WARRANTY; THE EXCLUSIVE REMEDY FOR BREACH OF
            THIS WARRANTY SHALL BE REPLACEMENT OR CREDIT TOWARDS REPLACEMENT AS
            SET FORTH HEREIN. THERE ARE NO EXPRESS OR IMPLIED WARRANTIES,
            INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
            PARTICULAR PURPOSE, OTHER THAN THE WARRANTY DESCRIBED ON THE FACE OF
            THIS LIMITED WARRANTY.
          </p>
          <p>
            IN ANY CASE, THE EXTENT OF LIABILITY ON THE PART OF EARTHFOAM WILL BE
            LIMITED TO THAT OF THE PURCHASE PRICE OF THE PRODUCT.
          </p>
          <p>
            ALL PARTS OF THIS LIMITED WARRANTY APPLY TO THE MAXIMUM EXTENT
            PERMITTED BY LAW OR UNLESS PROHIBITED BY LAW. THIS LIMITED WARRANTY
            GIVES THE PURCHASER SPECIFIC LEGAL RIGHTS, AND THE PURCHASER MAY ALSO
            HAVE OTHER RIGHTS, WHICH MAY VARY FROM STATE TO STATE. SOME STATES DO
            NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.
          </p>
        </div>
      </section>

      <section id="how-to-file-a-claim-under-this-limited-warranty">
        <h2>How to file a claim under this Limited Warranty:</h2>
        <div className="richtext">
          <p>
            To file a claim under the terms of this Limited Warranty, please
            contact Earthfoam at{" "}
            <a href="tel:+94114245245" rel="nofollow noreferrer noopener">
              +94 114 245 245
            </a>{" "}
            or by emailing us at{" "}
            <a href="mailto:info@earthfoam.lk" rel="nofollow noreferrer noopener">
              info@earthfoam.lk
            </a>
            . Please have your proof of purchase documentation ready and
            available. In the event that a warranty claim is filed and a product
            replacement is deemed necessary, purchaser must surrender the
            original product to Earthfoam.
          </p>
          <p>
            In the event that you, the purchaser, makes a claim under this Limited
            Warranty, Earthfoam will, within thirty days of its receipt of your
            returned mattress, repair or replace it, if is found to be defective.
            While Earthfoam will pay for shipping costs associated with the
            replacement product to the original purchaser, any shipping costs
            incurred with the return of a mattress from the purchaser to Earthfoam
            will be borne by the purchaser.
          </p>
        </div>
      </section>
    </HelpPageLayout>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// MATTRESS TOPPER WARRANTY PAGE
// ════════════════════════════════════════════════════════════════════════════
export function MattressTopperWarrantyPage() {
  useEffect(() => {
    document.title = "Mattress Topper Warranty | Earthfoam";
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  const menuItems = [
    { href: "#overview", label: "Overview" },
    {
      href: "#who-this-limited-warranty-is-extended-to",
      label: "Who this Limited Warranty is Extended to:",
    },
    {
      href: "#what-this-limited-warranty-covers",
      label: "What this Limited Warranty Covers:",
    },
    {
      href: "#what-this-limited-warranty-does-not-cover",
      label: "What this Limited Warranty Does Not Cover:",
    },
    {
      href: "#how-to-file-a-claim-under-this-limited-warranty",
      label: "How to file a claim under this Limited Warranty:",
    },
  ];

  return (
    <HelpPageLayout title="Mattress Topper Warranty" menuItems={menuItems}>
      <section className="richtext">
        <p>
          Earthfoam warrants that it will, at its option, and at its expense,
          repair or replace this mattress should it be determined to contain a
          defect which is covered by the terms of this Limited Warranty. This
          Limited Warranty lasts for a period of five (5) years, with such time
          dating from the date of the product purchase as noted as your sales
          slip or as may be otherwise evidenced by appropriate documentation.
          Proof of direct, authorized purchase is required with all warranty
          claims. This warranty applies only to Earthfoam Organic Mattress Topper
          &amp; is not extended to other products in the Earthfoam product line.
        </p>
      </section>

      <section id="who-this-limited-warranty-is-extended-to">
        <h2>Who this Limited Warranty is Extended to:</h2>
        <div className="richtext">
          <p>
            This Limited Warranty extends to the initial, “original” purchaser of
            this product only and not to any possible future owner(s) of the
            product. For purposes of this Limited Warranty an “original”
            purchaser is the individual or entity who purchased this mattress
            from Earthfoam directly or, as the case may be, from an authorized
            retailer, distributor or dealer.
          </p>
        </div>
      </section>

      <section id="what-this-limited-warranty-covers">
        <h2>What this Limited Warranty Covers:</h2>
        <div className="richtext">
          <p>
            Earthfoam warrants that this mattress to be free of defects. For
            purposes of this Limited Warranty, a defect includes the following:
          </p>
          <ul>
            <li>
              “Sinkage” or “indentations” in the mattresses foam measuring one inch
              or more deep.
            </li>
            <li>
              Any cracks or splits of the foam of the mattress which significantly
              impact the performance of the mattress as long as such damage is not
              due to any abuse or misuse by the users, including the lack of
              proper support of the mattress or improper handling of the mattress.
            </li>
          </ul>
        </div>
      </section>

      <section id="what-this-limited-warranty-does-not-cover">
        <h2>What this Limited Warranty Does Not Cover:</h2>
        <div className="richtext">
          <p>This Limited Warranty does NOT cover the following:</p>
          <ul>
            <li>
              Damage due to the product due to improper support of the mattress,
              damage due to the product due to improper handling of the mattress
              or to any damage caused by roughhousing or other misuse, including,
              but not limited to: burns, spills, bodily fluids, cuts, etc.
            </li>
            <li>Dissatisfaction due to subjective comfort.</li>
            <li>
              Deterioration of the mattress due to normal wear and tear including
              slight foam indentations of less than one (1) inch.
            </li>
            <li>
              Any product used in a commercial setting such as a hotel, bed and
              breakfast, motel, hospital, nursing home, group home, etc.
            </li>
            <li>
              Commercial warranty terms apply in such a case and not the terms of
              this Limited Warranty.
            </li>
            <li>
              Any mattress sold as “Final” or “As Is” because it had been a floor
              sample, demonstration model, etc.
            </li>
          </ul>
          <p>
            EARTHFOAM SHALL NOT BE LIABLE FOR INCIDENTAL OR CONSEQUENTIAL
            DAMAGES RESULTING FROM THE USE OF THIS PRODUCT OR ARISING OUT OF ANY
            BREACH OF THIS LIMITED WARRANTY; THE EXCLUSIVE REMEDY FOR BREACH OF
            THIS WARRANTY SHALL BE REPLACEMENT OR CREDIT TOWARDS REPLACEMENT AS
            SET FORTH HEREIN. THERE ARE NO EXPRESS OR IMPLIED WARRANTIES,
            INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
            PARTICULAR PURPOSE, OTHER THAN THE WARRANTY DESCRIBED ON THE FACE OF
            THIS LIMITED WARRANTY.
          </p>
          <p>
            IN ANY CASE, THE EXTENT OF LIABILITY ON THE PART OF EARTHFOAM WILL BE
            LIMITED TO THAT OF THE PURCHASE PRICE OF THE PRODUCT.
          </p>
          <p>
            ALL PARTS OF THIS LIMITED WARRANTY APPLY TO THE MAXIMUM EXTENT
            PERMITTED BY LAW OR UNLESS PROHIBITED BY LAW. THIS LIMITED WARRANTY
            GIVES THE PURCHASER SPECIFIC LEGAL RIGHTS, AND THE PURCHASER MAY ALSO
            HAVE OTHER RIGHTS, WHICH MAY VARY FROM STATE TO STATE. SOME STATES DO
            NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
            DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU
          </p>
        </div>
      </section>

      <section id="how-to-file-a-claim-under-this-limited-warranty">
        <h2>How to file a claim under this Limited Warranty:</h2>
        <div className="richtext">
          <p>
            To file a claim under the terms of this Limited Warranty, please
            contact Earthfoam at{" "}
            <a href="tel:+94114245245" rel="nofollow noreferrer noopener">
              +94 114 245 245
            </a>{" "}
            or by emailing us at{" "}
            <a href="mailto:info@earthfoam.lk" rel="nofollow noreferrer noopener">
              info@earthfoam.lk
            </a>
            . Please have your proof of purchase documentation ready and
            available. In the event that a warranty claim is filed and a product
            replacement is deemed necessary, purchaser must surrender the
            original product to Earthfoam.
          </p>
          <p>
            In the event that you, the purchaser, makes a claim under this Limited
            Warranty, Earthfoam will, within thirty days of its receipt of your
            returned mattress, repair or replace it, if is found to be defective.
            While Earthfoam will pay for shipping costs associated with the
            replacement product to the original purchaser, any shipping costs
            incurred with the return of a mattress from the purchaser to Earthfoam
            will be borne by the purchaser.
          </p>
        </div>
      </section>
    </HelpPageLayout>
  );
}

// ════════════════════════════════════════════════════════════════════════════
// PILLOW WARRANTY PAGE
// ════════════════════════════════════════════════════════════════════════════
export function PillowWarrantyPage() {
  useEffect(() => {
    document.title = "Pillow Warranty | Earthfoam";
    return () => {
      document.title = "Earthfoam";
    };
  }, []);

  const menuItems = [{ href: "#overview", label: "Overview" }];

  return (
    <HelpPageLayout title="Pillow Warranty" menuItems={menuItems}>
      <section className="richtext">
        <p>
          At Earthfoam, we want to provide our customers with high-quality,
          long-lasting products. Because we stand behind our products, we offer a
          5-year warranty on our pillows.
        </p>
        <p>
          In order to file a warranty claim, please email us at{" "}
          <a href="mailto:info@earthfoam.lk" rel="nofollow noreferrer noopener">
            info@earthfoam.lk
          </a>{" "}
          or call{" "}
          <a href="tel:+94114245245" rel="nofollow noreferrer noopener">
            +94 114 245 245
          </a>
          .
        </p>
      </section>
    </HelpPageLayout>
  );
}
