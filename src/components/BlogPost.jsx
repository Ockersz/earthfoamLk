import { useEffect } from "react";
import "./BlogPost.css";

const a = (f) => `/assets/${f}`;
const srcset = (files) =>
  files.map(({ f, w }) => `${a(f)} ${w}w`).join(", ");

// ── Shared arrow-down SVG ──────────────────────────────────────────────────
function ArrowDown() {
  return (
    <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
      <path
        d="M4.55806 12.4419C4.80214 12.686 5.19786 12.686 5.44194 12.4419L9.41942 8.46447C9.6635 8.22039 9.6635 7.82466 9.41942 7.58058C9.17534 7.33651 8.77961 7.33651 8.53553 7.58058L5 11.1161L1.46447 7.58058C1.22039 7.33651 0.82466 7.33651 0.580583 7.58058C0.336505 7.82466 0.336505 8.22039 0.580583 8.46447L4.55806 12.4419ZM4.375 0L4.375 12H5.625L5.625 0L4.375 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

// ── All 5 blog posts data ──────────────────────────────────────────────────
export const BLOG_POSTS = {
  "sourcing-our-foam-the-story-of-sri-lanka": {
    slug: "sourcing-our-foam-the-story-of-sri-lanka",
    title: "Sourcing Our Foam: The Story of Sri Lanka",
    subtitle: "We went straight to the source and partnered with local experts to build our own fair trade network and foam rubber factory.",
    readTime: "4 minute read",
    heroImg: {
      src: a("EF-Blog-October-Website-01_640x839_q93.webp"),
      srcSet: srcset([
        { f: "EF-Blog-October-Website-01_640x839_q93.webp", w: 640 },
        { f: "EF-Blog-October-Website-01_1280x1678_q93.webp", w: 1280 },
      ]),
      width: 640,
      height: 839,
    },
    related: [
      { href: "/blog/making-our-beds-inside-our-sri-lankan-factory", img: a("EF-Blog-October-Website-04_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-04_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-04_1280x1645_q93.webp", w: 1280 }]), title: "Making Our Beds: Inside Our Sri Lankan Factory" },
      { href: "/blog/behind-the-dreams-our-new-collaboration", img: a("EF-Prairie2024_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Prairie2024_640x822_q93.webp", w: 640 }, { f: "EF-Prairie2024_1280x1645_q93.webp", w: 1280 }]), title: "Behind the Dreams: Our New Collaboration" },
      { href: "/blog/introducing-the-spring-mattress", img: a("EF-HybridSprings2025_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-HybridSprings2025_640x822_q93.webp", w: 640 }, { f: "EF-HybridSprings2025_1280x1645_q93.webp", w: 1280 }]), title: "Introducing the Spring Mattress" },
    ],
    Content: () => (
      <>
        <p>Natural foam rubber is pretty amazing, really. Take milky sap from a rubber tree, spin it really fast to get the water out, mix it with small amounts of compounds to help the molecules bind together, pour it into a mold, bake it at 212 degrees for an hour, and ta-da: you have a squishy white square you can sleep on.</p>
        <p>When we first got into bedding, we traced the highest-quality natural rubber in the world to its source: Sri Lanka. We partnered with a local rubber supplier and specialist, Januka Karunasena, and cut out the middlemen to source our foam from him directly.</p>
        <p>But that wasn't enough. The more we learned about the rubber industry, and the more people we met in Sri Lanka, the more room for improvement we found. To make the mattresses of our dreams, we needed to control every part of the supply chain, from the rubber tree to the factory, so we could ensure quality control and fair treatment of workers every step of the way.</p>
        <figure><img src={a("DSC_2521_1024x683_q65.webp")} alt="" loading="lazy" /><figcaption>A tree tapper collects rubber sap by making a small cut into the rubber tree.</figcaption></figure>
        <h2>Our Fair Trade Network</h2>
        <p>Rubber tree forests are beautiful and highly sustainable. One tree can supply sap (liquid latex) for over 20 years and rubber trees have one of the highest carbon dioxide absorption rates. When we first started sourcing it, the rubber industry in Sri Lanka was dying. It was hard for farmers to compete with cheaper crops, even if they weren't good for the land or the local economy.</p>
        <p>With Januka spearheading the project, we built a Fair For Life certified fair trade network of 323 small organic rubber farmers. It's the largest in Sri Lanka, employing more than 1,700 workers. And we've been able to ensure fair wages and working conditions for all of them.</p>
        <p>Our farms are also certified organic, which reduces water and energy use and boosts the biodiversity of the forests. Other brands pay a surcharge on organic that often only goes to the processing facilities. We are the processing facility, so our premiums benefit the tappers and farmers directly.</p>
        <blockquote><p>I led a team to turn a declining natural foam rubber business into one that is sustainable and grows.</p></blockquote>
        <p>– Januka Karunasena, CEO</p>
        <figure><img src={a("Mattress Remove_1024x683_q65.webp")} alt="" loading="lazy" /><figcaption>Earthfoam factory workers remove Earthfoam from a mold.</figcaption></figure>
        <h2>The Earthfoam Factory</h2>
        <p>After we collect rubber tree sap from our fair trade network of farmers, it's processed at our shiny new factory in Colombo, Sri Lanka. It's the only place in the world that makes Earthfoam.</p>
        <p>Before we opened our own factory, we sent the sap to be processed in Malaysia. Making foam rubber in the same place it's harvested has reduced energy and transportation costs and allowed us to have a greater impact on our workers.</p>
        <p>We have 200 people working at our factory, ranging from highly experienced foam rubber experts to construction workers who helped build the factory and wanted to stick around and learn how to make mattresses instead.</p>
        <p>We're also able to attend meetings with our tappers, we hear directly from our farmers, and we're part of the local community and economy.</p>
        <figure><img src={a("DSC_2559_1024x684_q65.webp")} alt="" loading="lazy" /><figcaption>Biodiversity thrives around organic rubber trees in Sri Lanka.</figcaption></figure>
        <blockquote><p>I am very happy to be a part of this factory. We make a good product not only for us but for the rest of the world. And we're in beautiful surroundings.</p></blockquote>
        <p>– Manjula Kumara, Executive: Foam Production</p>
        <figure><img src={a("WhatsApp Image 2020-12-01 at 11.43.14 AM_1024x665_q65.webp")} alt="" loading="lazy" /><figcaption>Centrifuge machine operator separating water/non-rubber content from rubber sap.</figcaption></figure>
        <h2>Putting it All to Bed</h2>
        <p>Because rubber is a natural material, it has natural variance. Where factories making synthetic foam can use the exact same formula and process with every batch, there's a lot of nuance and chemistry that goes into processing our foam. We use our own recipe — one that was created specifically based on our high quality standards and the knowledge of Januka and his team.</p>
        <p>First, the centrifuge machine operators separate non-rubber content from the sap and monitor the rubber as it matures. Compounding specialists add binding ingredients, and the foam is aerated to create a unique bubble structure. Then the rubber is vulcanized, changing from a frothy liquid into a bouncy block of foam. The steam used to vulcanize our rubber is maintained by a boiler fed with rubber tree wood. This wood is harvested as part of routine uprooting during the re-plantation process.</p>
        <p>The last step before our foam is shipped to our <a href="/blog/making-our-beds-inside-our-sri-lankan-factory">Sri Lankan factory</a> is quality control. Every slab is tested for firmness, durability, and any defects. (People like this job because our foam feels so nice.)</p>
        <p><strong>Earthfoam isn't just any natural foam rubber. We think it's the best in the world. It's a material that is ethically sourced and thoughtfully made with the wellbeing of all of our workers and our world in mind.</strong></p>
      </>
    ),
  },

  "introducing-the-spring-mattress": {
    slug: "introducing-the-spring-mattress",
    title: "Introducing the Spring Mattress",
    subtitle: "Combining the best elements of latex foam and spring mattresses",
    readTime: "2 minute read",
    heroImg: {
      src: a("EF-HybridSprings2025_640x822_q93.webp"),
      srcSet: srcset([{ f: "EF-HybridSprings2025_640x822_q93.webp", w: 640 }, { f: "EF-HybridSprings2025_1280x1645_q93.webp", w: 1280 }]),
      width: 640,
      height: 822,
    },
    related: [
      { href: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand", img: a("EF-Blog-October-Website-03_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-03_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-03_1280x1645_q93.webp", w: 1280 }]), title: "Sheep to Sleep: Working with Wools of certified farmers around the world" },
      { href: "/blog/making-our-beds-inside-our-sri-lankan-factory", img: a("EF-Blog-October-Website-04_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-04_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-04_1280x1645_q93.webp", w: 1280 }]), title: "Making Our Beds: Inside Our Sri Lankan Factory" },
      { href: "/blog/behind-the-dreams-our-new-collaboration", img: a("EF-Prairie2024_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Prairie2024_640x822_q93.webp", w: 640 }, { f: "EF-Prairie2024_1280x1645_q93.webp", w: 1280 }]), title: "Behind the Dreams: Our New Collaboration" },
    ],
    Content: () => (
      <>
        <figure><img src={a("EF_HybridPhotos_Retouch_Step03-01_1024x682_q65.webp")} alt="" loading="lazy" /></figure>
        <p><strong>For years, we said no.</strong></p>
        <p>Every time someone asked if we'd ever make a hybrid mattress, the answer was the same. We already made a simple, great mattress. Why complicate it?</p>
        <p>But good questions have a way of lingering. And over time, we started to understand why some people love the feel of a traditional spring mattress. More than that, we came to respect the craft behind making one properly. A high-quality spring mattress isn't simple. It's layered. It's mechanical. It's sewn, assembled, tufted, and tuned by hand. It's real work.</p>
        <p>Eventually, the idea shifted from "why would we" to "what if we did it right".</p>
        <p>So we designed a hybrid that fills a gap in the market without compromising what we believe in: honest materials, real craftsmanship, and long-term durability. No shortcuts. No gimmicks.</p>
        <p>We launched the Earthfoam Hybrid Mattress. It's our take on a traditional mattress — assembled, sewn, and tufted by hand in our factory in Sri Lanka. Built to be supportive, breathable, and genuinely durable. The kind of mattress that feels substantial the moment you see it.</p>
        <figure><img src={a("EF-SpringsCrossSection-Draft2_1024x575_q65.webp")} alt="" loading="lazy" /></figure>
        <figure><img src={a("Hybrid-Carousel-02_1024x640_q65.webp")} alt="" loading="lazy" /></figure>
        <p><strong>The Specs</strong></p>
        <ul>
          <li><p>GOTS Certified</p></li>
          <li><p>GOLS Certified Latex Foam</p></li>
          <li><p>Fair For Life Certified Fair Trade Latex Foam</p></li>
          <li><p>Greenguard Gold Certified</p></li>
          <li><p>Double-sided (flippable) with zero-glue construction</p></li>
          <li><p>8" pocket coil unit with ~1,000 coils</p></li>
          <li><p>2" natural latex foam on each side (4" total)</p></li>
          <li><p>Organic hemp insulator on both sides</p></li>
          <li><p>Organic wool (Wools of New Zealand)</p></li>
          <li><p>100% organic cotton brushed twill cover</p></li>
          <li><p>Not roll-packed</p></li>
          <li><p>Free in-home delivery &amp; setup</p></li>
          <li><p>Optional tufted toppers available</p></li>
        </ul>
        <p><strong>This is not the cheapest mattress we could have made. On purpose.</strong></p>
        <p>It's very different from what we've sold before — both in construction and price. We didn't chase the lowest number. We chased the most value. The materials, the labor, and the build demanded it.</p>
        <p>Yes, it costs more than our all-foam mattress. And yes, that was intentional. Doing a hybrid right means respecting the craft, the components, and the people assembling it. We've earned a lot of trust from our customers over the years. This mattress exists because we wanted to be worthy of that trust.</p>
      </>
    ),
  },

  "behind-the-dreams-our-new-collaboration": {
    slug: "behind-the-dreams-our-new-collaboration",
    title: "Behind the Dreams: Our New Collaboration",
    subtitle: <>You might have seen our recent collaboration on Instagram — miniature worlds created by Aleia Murawski and Sam Copeland from <a href="https://beefsworld.com/" rel="nofollow noreferrer noopener">Beefs World</a>. We're proud of these small, imaginative spaces and want to share the creative effort behind them.</>,
    readTime: "2 minute read",
    heroImg: {
      src: a("EF-Prairie2024_640x822_q93.webp"),
      srcSet: srcset([{ f: "EF-Prairie2024_640x822_q93.webp", w: 640 }, { f: "EF-Prairie2024_1280x1645_q93.webp", w: 1280 }]),
      width: 640,
      height: 822,
    },
    related: [
      { href: "/blog/introducing-the-spring-mattress", img: a("EF-HybridSprings2025_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-HybridSprings2025_640x822_q93.webp", w: 640 }, { f: "EF-HybridSprings2025_1280x1645_q93.webp", w: 1280 }]), title: "Introducing the Spring Mattress" },
      { href: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand", img: a("EF-Blog-October-Website-03_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-03_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-03_1280x1645_q93.webp", w: 1280 }]), title: "Sheep to Sleep: Working with Wools of certified farmers around the world" },
      { href: "/blog/making-our-beds-inside-our-sri-lankan-factory", img: a("EF-Blog-October-Website-04_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-04_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-04_1280x1645_q93.webp", w: 1280 }]), title: "Making Our Beds: Inside Our Sri Lankan Factory" },
    ],
    Content: () => (
      <>
        <p>When we wanted to launch a new collaboration for 2024, we knew we wanted to do something a bit surrealist and abstract… really embracing the sleep dreams are made of. That is when we found Beefs World. A creative duo that specializes in making these miniature alternative universes, who in their own words "In Beef's World, anything is possible, and nothing is ever the same."</p>
        <figure><img src={a("final-stills_1024x576_q65.webp")} alt="" loading="lazy" /><figcaption>The finished work. View it on our Instagram page.</figcaption></figure>
        <p>Seeing their work, we anticipated a great fit, but the fascinating creation process was unexpected. We feel like we owe it to the work to share how it was made.</p>
        <figure><img src={a("BF_02_1024x831_q65.webp")} alt="" loading="lazy" /></figure>
        <h2>Drifting along the river.</h2>
        <p>Since the first two sets covered land and sky, we wanted to do something that involved water… and what better way to connect an Earthfoam mattress than a lazy river.</p>
        <p><strong>"We also wanted to build a backrooms-inspired set, something that feels like you're in the middle of a dream, with a lazy river moving through the interior space. This one was unexpectedly hard to film. As the "water" is clear plastic, it was hard to disguise any of the motion elements, which ultimately ended up being a clear string pulling a magnet from below the "river" to puppeteer the bed. It was so much fun for us to create soothing, atmospheric worlds for the Earthfoam mattress to inhabit."</strong></p>
        <p>– Aleia Murawski</p>
        <figure><img src={a("BF_03_1024x831_q65.webp")} alt="" loading="lazy" /></figure>
        <h2>Float on.</h2>
        <p>Two of sets were built to feature the mattress floating above a prairie and mountaintop. While this might sound straight-forward, it was incredibly intricate and took a lot of work to make happen.</p>
        <p>"We wanted to build a miniature Earthfoam mattress and create strange, earthly, cozy sets around the bed. We have always wanted to build a rotating set, and we were thrilled to finally have the perfect project to create this. The mattress is hovering over a wheel of either miniature clouds or miniature grass and trees. We thought the bed being suspended above the world, hovering slightly, felt dreamlike and strange."</p>
        <p>– Aleia Murawski</p>
        <figure><img src={a("BF_04_1024x831_q65.webp")} alt="" loading="lazy" /></figure>
        <p>We could not have been happier with how these turned out. To see the finished products as well as more behind-the-scenes content and video, please visit our <a href="https://www.instagram.com/earthfoam/" rel="nofollow noreferrer noopener">Instagram page</a>.</p>
      </>
    ),
  },

  "making-our-beds-inside-our-sri-lankan-factory": {
    slug: "making-our-beds-inside-our-sri-lankan-factory",
    title: "Making Our Beds: Inside Our Sri Lankan Factory",
    subtitle: "Before your Earthfoam mattress makes its way to you, it is expertly assembled in our factory.",
    readTime: "3 minute read",
    heroImg: {
      src: a("EF-Blog-October-Website-04_640x822_q93.webp"),
      srcSet: srcset([{ f: "EF-Blog-October-Website-04_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-04_1280x1645_q93.webp", w: 1280 }]),
      width: 640,
      height: 822,
    },
    related: [
      { href: "/blog/sheep-to-sleep-working-with-wools-of-new-zealand", img: a("EF-Blog-October-Website-03_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-03_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-03_1280x1645_q93.webp", w: 1280 }]), title: "Sheep to Sleep: Working with Wools of certified farmers around the world" },
      { href: "/blog/behind-the-dreams-our-new-collaboration", img: a("EF-Prairie2024_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Prairie2024_640x822_q93.webp", w: 640 }, { f: "EF-Prairie2024_1280x1645_q93.webp", w: 1280 }]), title: "Behind the Dreams: Our New Collaboration" },
      { href: "/blog/sourcing-our-foam-the-story-of-sri-lanka", img: a("EF-Blog-October-Website-01_640x839_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-01_640x839_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-01_1280x1678_q93.webp", w: 1280 }]), title: "Sourcing Our Foam: The Story of Sri Lanka" },
    ],
    Content: () => (
      <>
        <h2>Earthfoam is the result of stubbornly doing things better.</h2>
        <h2>The Backstory.</h2>
        <p>Our founder, Karl, didn't know he was destined to make mattresses. First, he made umbrellas. Then custom RV upholstery. Then bean bags! But one day a supplier introduced Karl to natural rubber foam. And Karl was mesmerized. Here was an incredible material — natural, sustainable, durable — and no one seemed to know about it.</p>
        <p>He left the bean bag business, called his brother, Ezra, and traced the highest quality rubber foam in the world to its source: Sri Lanka.</p>
        <p>Karl, Ezra and their partner in Sri Lanka, Januka, were uninspired by the lack of transparency and quality in existing supply chains. They decided they could do better, and now they can't stop.</p>
        <p>Their first mattress company launched in 2013. It grew quickly and won some really nice mattress awards. Since then, piece by piece, they've dismantled the entire supply chain and built their own.</p>
        <figure><img src={a("220715_sleeponlatex-F-1_1024x683_q65.webp")} alt="man handling compressed mattress in a warehouse" loading="lazy" /><figcaption>Warehouse worker loads Earthfoam Mattress into shipping box.</figcaption></figure>
        <h2>2,000 stitches you can see, 10,000 you can't.</h2>
        <p>We have 12 talented, full-time sewers at our factory. They're responsible for turning our organic wool and cotton into the complex covers we designed for our mattresses and toppers.</p>
        <p>Our covers are meticulously sewn to stay cleanly in place without restricting the flexibility of the foam inside. And because rubber foam is so incredibly durable, we needed a cover that could match its longevity. That's why every Earthfoam mattress has thousands of overlocking stitches, even on interior edges you'll never see. It's also why our warehouse manager chose "the most expensive quilting machine we could have bought." Nice.</p>
        <figure><img src={a("220715_sleeponlatex-F-2_1024x683_q65.webp")} alt="two women handling a mattress" loading="lazy" /><figcaption>Two sewing team employees give the mattress cover one last quality check.</figcaption></figure>
        <h2>Handled with care.</h2>
        <p>When the covers are ready, our warehouse team swoops in. We have 12 full-time warehouse workers who run quality tests, package, and ship each product to its new home. We're working toward plastic-free packaging, and currently our mattresses are compression-wrapped in paper and our pillows are packed in biodegradable bags. (Our toppers are still packaged in plastic, but hopefully not for long.)</p>
        <p>One of the benefits of controlling our own supply chain is that every mattress that leaves our warehouse is traceable back to its source; down to the exact rubber tree forest and sheep farm.</p>
        <h2>By people who care a lot.</h2>
        <p>Making natural rubber mattresses is a labor intensive process involving a lot of people. But by building our own supply chain, working <em>directly with farmers</em>, using <em>our own factories</em>, and selling directly to our customers, we've created a higher-quality product made by highly-paid workers with a much lower price tag.</p>
        <p>Everyone at our factory is given competitive pay, paid time off, health insurance… the works.</p>
        <p><strong>Our organic materials are chosen for their comfort, durability, and safety.</strong></p>
        <p><strong>They're collected and processed with reverence to the people, places, and animals that make it possible.</strong></p>
        <p><strong>And they're made into mattresses, one at a time, in our factory filled with pride.</strong></p>
        <p><a href="/products">Want us to make something comfy for you? Start shopping</a>.</p>
      </>
    ),
  },

  "sheep-to-sleep-working-with-wools-of-new-zealand": {
    slug: "sheep-to-sleep-working-with-wools-of-new-zealand",
    title: "Sheep to Sleep: Working with Wools of certified farmers around the world",
    subtitle: "We're proud to be partnered with certified farmer collectives putting the power directly in the hands of those shearing the sheep.",
    readTime: "3 minute read",
    heroImg: {
      src: a("EF-Blog-October-Website-03_640x822_q93.webp"),
      srcSet: srcset([{ f: "EF-Blog-October-Website-03_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-03_1280x1645_q93.webp", w: 1280 }]),
      width: 640,
      height: 822,
    },
    related: [
      { href: "/blog/making-our-beds-inside-our-sri-lankan-factory", img: a("EF-Blog-October-Website-04_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-04_640x822_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-04_1280x1645_q93.webp", w: 1280 }]), title: "Making Our Beds: Inside Our Sri Lankan Factory" },
      { href: "/blog/behind-the-dreams-our-new-collaboration", img: a("EF-Prairie2024_640x822_q93.webp"), imgSrcSet: srcset([{ f: "EF-Prairie2024_640x822_q93.webp", w: 640 }, { f: "EF-Prairie2024_1280x1645_q93.webp", w: 1280 }]), title: "Behind the Dreams: Our New Collaboration" },
      { href: "/blog/sourcing-our-foam-the-story-of-sri-lanka", img: a("EF-Blog-October-Website-01_640x839_q93.webp"), imgSrcSet: srcset([{ f: "EF-Blog-October-Website-01_640x839_q93.webp", w: 640 }, { f: "EF-Blog-October-Website-01_1280x1678_q93.webp", w: 1280 }]), title: "Sourcing Our Foam: The Story of Sri Lanka" },
    ],
    Content: () => (
      <>
        <p>Wool is an important part of every Earthfoam mattress. It creates a cool, soft layer between the natural foam rubber and the cotton cover. We like to think people sleep better on wool made from happy sheep. So it's always been really important to us to know exactly where our wool comes from.</p>
        <p>We source 100% of our organic wool from a farmer-owned collective called Wools of New Zealand.</p>
        <h2>Getting to know Wools of New Zealand</h2>
        <p>Created in response to plummeting wool prices and greedy middlemen, the founders of Wools of New Zealand saw an opportunity. Rather than having to auction wool on an open market (often for pennies on the dollar) they wanted to create direct relationships between farmers and manufacturing partners, like us.</p>
        <p>We commit to buying a consistent amount of wool each year at a fixed, fair price, which means the farmers get guaranteed income and avoid being undercut by volatile wool markets. They also get to know exactly where their wool is going and how it's being used. (And they really like knowing it's being used in mattresses.)</p>
        <figure><img src={a("Wools_004_1024x682_q65.webp")} alt="" loading="lazy" /><figcaption>Sheep herded before a fresh hair cut (shearing).</figcaption></figure>
        <h2>Going out to pasture</h2>
        <p>After we partnered with Wools of New Zealand, we had the idyllic opportunity to visit the organic farmers producing our wool and learn about the process.</p>
        <p>Becoming certified organic in any industry takes time. For sheep farmers, it's not just about how they treat their animals but also the land that provides their food.</p>
        <p>We toured the organic farm of Allan and Sonia Richardson, and saw firsthand how important it is to build healthy biodiversity in the soil. Allan explained that he regularly rotates his animals to new pastures and plants a wide variety of grass and clover to keep the soil healthy. On non-organic farms, it's not uncommon to find soil completely depleted of nutrients and reliant on synthetic fertilizers.</p>
        <p>The health of the sheep is also maintained differently on an organic farm. They don't over-medicate, but instead use tactics to prevent their animals from getting parasites or infections in the first place, like keeping grass and clover taller so the sheep's faces are further from the ground.</p>
        <figure><img src={a("Wools_070_1024x682_q65.webp")} alt="" loading="lazy" /><figcaption>Allan and Sonia Richardson show Earthfoam employees how rich their organic soil is.</figcaption></figure>
        <h2>Helping farmers go organic</h2>
        <p>Despite it being labor-intensive and expensive to convert a farm to organic, the number of certified organic farms in New Zealand continues to grow.</p>
        <p>We like to think partnerships like the one we have with Wools of New Zealand have something to do with it. More farmers are understanding how much better organic practices are for their animals and land. They also get paid more for organic wool, and as part of a collective, those premiums are put straight in their pockets.</p>
        <p>Wools of New Zealand also provides exceptional support for farmers making the switch. They have dedicated resources to help rebuild soil health, meet organic standards, complete the dizzying amount of compliance paperwork, and get connected with other organic farmers.</p>
        <figure><img src={a("Wools_222_1024x682_q65.webp")} alt="" loading="lazy" /><figcaption>Sheep on Allan and Sonia Richardson's farm.</figcaption></figure>
        <p><strong>Being able to source such high-quality wool from such a hardworking and passionate group of people is an important part of what makes Earthfoam feel so good.</strong></p>
      </>
    ),
  },
};

// ── BlogPost Page Component ──────────────────────────────────────────────────
export default function BlogPost({ slug }) {
  const post = BLOG_POSTS[slug];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Earthfoam`;
    }

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
    };
  }, [post, slug]);

  if (!post) {
    return (
      <div className="blogPost" style={{ padding: "var(--space-3xl) var(--space-xs)" }}>
        <h1 className="h2">Article not found.</h1>
        <a href="/blog" className="button" style={{ marginTop: "var(--space-m)", display: "inline-block" }}>← Back to Journal</a>
      </div>
    );
  }

  const { title, subtitle, readTime, heroImg, related, Content } = post;

  return (
    <div className="blogPost">
      <article itemScope itemType="http://schema.org/Article">

        {/* ── Header: hgroup (left on desktop order:2=right) + image div (60% left) ── */}
        <header>
          <hgroup data-animation-waypoint>
            <h1
              className="h2 wrap-pretty font-medium"
              data-animate="slide-up"
              itemProp="name"
            >
              {title}
            </h1>

            <div className="richtext" data-animate="slide-up" data-delay="1">
              <p>{subtitle}</p>
            </div>

            <p
              className="eyebrow blogPost__readTime"
              style={{ display: "flex", gap: "var(--space-2xs)", alignItems: "center" }}
              data-animate="slide-up"
              data-delay="2"
            >
              <ArrowDown />
              {readTime}
            </p>
          </hgroup>

          {/* Image wrapper — this becomes the 60% left column on desktop */}
          <div data-animation-waypoint>
            <img
              src={heroImg.src}
              srcSet={heroImg.srcSet}
              width={heroImg.width}
              height={heroImg.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt=""
              data-animate="slide-up"
            />
          </div>
        </header>

        {/* ── Main body richtext ── */}
        <main className="container richtext">
          <Content />
        </main>

        {/* ── Related articles ── */}
        <footer className="container">
          <h2 className="blogPost__related-heading">Related Articles</h2>
          <ul>
            {related.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  className="blogPost__relatedCard"
                  style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)", textAlign: "center" }}
                >
                  <img
                    src={r.img}
                    srcSet={r.imgSrcSet}
                    width={640}
                    height={822}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    alt=""
                    style={{ objectFit: "cover", width: "100%", height: "auto", borderRadius: "var(--radius-s)", aspectRatio: "320 / 420" }}
                  />
                  <p style={{ paddingInline: "var(--space-2xs)" }}>{r.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </footer>

      </article>
    </div>
  );
}
