# Earthfoam (.com) Complete Website Scraping & Architecture Documentation

This document contains a complete inventory, page structure analysis, component mapping, and full HTML references for all **25 pages** scraped from [earthfoam.com](https://earthfoam.com).

---

## 1. Executive Summary & Page Inventory

| # | Page Name | Category | Route Path | Live URL | Raw Scraped HTML File | Custom Components (`ef-*`) |
|---|---|---|---|---|---|---|
| 1 | **Home Page** | `Core` | `/` | [Link](https://earthfoam.com/) | [home.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/home.html) | 12 components |
| 2 | **Products Overview** | `Core` | `/products` | [Link](https://earthfoam.com/products) | [products.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products.html) | 4 components |
| 3 | **About Us** | `Core` | `/about` | [Link](https://earthfoam.com/about) | [about.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/about.html) | 5 components |
| 4 | **Contact** | `Core` | `/contact` | [Link](https://earthfoam.com/contact) | [contact.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/contact.html) | 3 components |
| 5 | **Cart / Checkout** | `Core` | `/cart` | [Link](https://earthfoam.com/cart) | [cart.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/cart.html) | 5 components |
| 6 | **The Mattress (Foam)** | `Product Detail` | `/products/mattress` | [Link](https://earthfoam.com/products/mattress) | [products__mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__mattress.html) | 21 components |
| 7 | **The Topper** | `Product Detail` | `/products/topper` | [Link](https://earthfoam.com/products/topper) | [products__topper.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__topper.html) | 21 components |
| 8 | **The Spring Mattress** | `Product Detail` | `/products/spring-mattress` | [Link](https://earthfoam.com/products/spring-mattress) | [products__spring-mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__spring-mattress.html) | 22 components |
| 9 | **The Pillow** | `Product Detail` | `/products/pillow` | [Link](https://earthfoam.com/products/pillow) | [products__pillow.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__pillow.html) | 21 components |
| 10 | **Mattress Reviews** | `Landing / Feature` | `/products/landing/mattress-reviews` | [Link](https://earthfoam.com/products/landing/mattress-reviews) | [products__landing__mattress-reviews.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-reviews.html) | 21 components |
| 11 | **Mattress Materials** | `Landing / Feature` | `/products/landing/mattress-materials` | [Link](https://earthfoam.com/products/landing/mattress-materials) | [products__landing__mattress-materials.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-materials.html) | 21 components |
| 12 | **Mattress Organic** | `Landing / Feature` | `/products/landing/mattress-organic` | [Link](https://earthfoam.com/products/landing/mattress-organic) | [products__landing__mattress-organic.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-organic.html) | 22 components |
| 13 | **Mattress Experience** | `Landing / Feature` | `/products/landing/mattress-experience` | [Link](https://earthfoam.com/products/landing/mattress-experience) | [products__landing__mattress-experience.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-experience.html) | 21 components |
| 14 | **Common Questions (FAQ)** | `Help & Support` | `/help/common-questions` | [Link](https://earthfoam.com/help/common-questions) | [help__common-questions.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__common-questions.html) | 5 components |
| 15 | **Shipping and Returns** | `Help & Support` | `/help/shipping-and-returns` | [Link](https://earthfoam.com/help/shipping-and-returns) | [help__shipping-and-returns.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__shipping-and-returns.html) | 3 components |
| 16 | **Certifications** | `Help & Support` | `/help/certifications` | [Link](https://earthfoam.com/help/certifications) | [help__certifications.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__certifications.html) | 3 components |
| 17 | **Mattress Warranty (10 Year)** | `Help & Support` | `/help/mattress-warranty` | [Link](https://earthfoam.com/help/mattress-warranty) | [help__mattress-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__mattress-warranty.html) | 3 components |
| 18 | **Mattress Topper Warranty** | `Help & Support` | `/help/mattress-topper-warranty` | [Link](https://earthfoam.com/help/mattress-topper-warranty) | [help__mattress-topper-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__mattress-topper-warranty.html) | 3 components |
| 19 | **Pillow Warranty** | `Help & Support` | `/help/pillow-warranty` | [Link](https://earthfoam.com/help/pillow-warranty) | [help__pillow-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__pillow-warranty.html) | 3 components |
| 20 | **Blog Index** | `Blog & Stories` | `/blog` | [Link](https://earthfoam.com/blog) | [blog.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog.html) | 3 components |
| 21 | **Sourcing Our Foam: Sri Lanka** | `Blog & Stories` | `/blog/sourcing-our-foam-the-story-of-sri-lanka` | [Link](https://earthfoam.com/blog/sourcing-our-foam-the-story-of-sri-lanka) | [blog__sourcing-our-foam-the-story-of-sri-lanka.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__sourcing-our-foam-the-story-of-sri-lanka.html) | 3 components |
| 22 | **Behind the Dreams: Collaboration** | `Blog & Stories` | `/blog/behind-the-dreams-our-new-collaboration` | [Link](https://earthfoam.com/blog/behind-the-dreams-our-new-collaboration) | [blog__behind-the-dreams-our-new-collaboration.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__behind-the-dreams-our-new-collaboration.html) | 3 components |
| 23 | **Introducing the Spring Mattress** | `Blog & Stories` | `/blog/introducing-the-spring-mattress` | [Link](https://earthfoam.com/blog/introducing-the-spring-mattress) | [blog__introducing-the-spring-mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__introducing-the-spring-mattress.html) | 3 components |
| 24 | **Sheep to Sleep: Wools of NZ** | `Blog & Stories` | `/blog/sheep-to-sleep-working-with-wools-of-new-zealand` | [Link](https://earthfoam.com/blog/sheep-to-sleep-working-with-wools-of-new-zealand) | [blog__sheep-to-sleep-working-with-wools-of-new-zealand.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__sheep-to-sleep-working-with-wools-of-new-zealand.html) | 3 components |
| 25 | **Inside Chicago Factory** | `Blog & Stories` | `/blog/making-our-beds-inside-our-chicago-factory` | [Link](https://earthfoam.com/blog/making-our-beds-inside-our-chicago-factory) | [blog__making-our-beds-inside-our-chicago-factory.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__making-our-beds-inside-our-chicago-factory.html) | 3 components |

---

## 2. Core Reusable Web Components (`ef-*`)

From our scrape of all 25 pages, Earthfoam uses a modular Web Component architecture. Below are the primary custom elements used across the site:

### `<ef-accordion>`
- **Used on (10 pages)**: Home Page, The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience, Common Questions (FAQ)

### `<ef-accordion-fold>`
- **Used on (10 pages)**: Home Page, The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience, Common Questions (FAQ)

### `<ef-captioned-image>`
- **Used on (1 pages)**: The Spring Mattress

### `<ef-cart>`
- **Used on (1 pages)**: Cart / Checkout

### `<ef-cart-line-item>`
- **Used on (1 pages)**: Cart / Checkout

### `<ef-home-hero>`
- **Used on (1 pages)**: Home Page

### `<ef-map-description-list>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-map-hotspot>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-marquee>`
- **Used on (25 pages)**: Home Page, Products Overview, About Us, Contact, Cart / Checkout, The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience, Common Questions (FAQ), Shipping and Returns, Certifications, Mattress Warranty (10 Year), Mattress Topper Warranty, Pillow Warranty, Blog Index, Sourcing Our Foam: Sri Lanka, Behind the Dreams: Collaboration, Introducing the Spring Mattress, Sheep to Sleep: Wools of NZ, Inside Chicago Factory

### `<ef-menu>`
- **Used on (25 pages)**: Home Page, Products Overview, About Us, Contact, Cart / Checkout, The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience, Common Questions (FAQ), Shipping and Returns, Certifications, Mattress Warranty (10 Year), Mattress Topper Warranty, Pillow Warranty, Blog Index, Sourcing Our Foam: Sri Lanka, Behind the Dreams: Collaboration, Introducing the Spring Mattress, Sheep to Sleep: Wools of NZ, Inside Chicago Factory

### `<ef-newsletter-signup>`
- **Used on (25 pages)**: Home Page, Products Overview, About Us, Contact, Cart / Checkout, The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience, Common Questions (FAQ), Shipping and Returns, Certifications, Mattress Warranty (10 Year), Mattress Topper Warranty, Pillow Warranty, Blog Index, Sourcing Our Foam: Sri Lanka, Behind the Dreams: Collaboration, Introducing the Spring Mattress, Sheep to Sleep: Wools of NZ, Inside Chicago Factory

### `<ef-notification>`
- **Used on (2 pages)**: The Topper, The Pillow

### `<ef-press-quotes>`
- **Used on (1 pages)**: Home Page

### `<ef-product-carousel>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-hero>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-image-copy>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-image-grid-2x4>`
- **Used on (1 pages)**: The Spring Mattress

### `<ef-product-image-map>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-image-zoomer>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-intro>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-reviews>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-specs-container>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-specs-tabs>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-variant-bar>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-variant-option>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-product-videos-strip>`
- **Used on (1 pages)**: Mattress Organic

### `<ef-products-overview-grid>`
- **Used on (2 pages)**: Home Page, Products Overview

### `<ef-review-video-carousel>`
- **Used on (1 pages)**: Home Page

### `<ef-stacked-reveal>`
- **Used on (1 pages)**: About Us

### `<ef-stars-rating>`
- **Used on (8 pages)**: The Mattress (Foam), The Topper, The Spring Mattress, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-two-up-media>`
- **Used on (1 pages)**: Home Page

### `<ef-video>`
- **Used on (9 pages)**: Home Page, About Us, The Mattress (Foam), The Topper, The Pillow, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

### `<ef-video-notification>`
- **Used on (7 pages)**: Home Page, The Mattress (Foam), The Spring Mattress, Mattress Reviews, Mattress Materials, Mattress Organic, Mattress Experience

---

## 3. Deep-Dive Page-by-Page Specifications & HTML Content

### 1. Home Page (`/`)

- **Category**: `Core`
- **Live URL**: [https://earthfoam.com/](https://earthfoam.com/)
- **Page Title**: `Earthfoam`
- **Meta Description**: *"Good sleep grows on trees. Climb into a comfy, bouncy, supportive, organic mattress made to last."*
- **Scraped HTML File**: [home.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/home.html) (69.9 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-home-hero>`, `<ef-video-notification>`, `<ef-marquee>`, `<ef-products-overview-grid>`, `<ef-press-quotes>`, `<ef-two-up-media>`, `<ef-video>`, `<ef-accordion>`, `<ef-accordion-fold>`, `<ef-review-video-carousel>`, `<ef-newsletter-signup>`
- **H1 Headings**: "The sleep dreams are made&nbsp;of.", "From tree to sleep."
- **Key H2 Sections**: "Climb into a comfy, bouncy, supportive, organic, sustainable mattress made to last." | "What is Earthfoam" | "We want shopping for an Earthfoam mattress to be as nice as sleeping on one." | "The Foam Mattress." | "Looking for some light reading about the benefits of Earthfoam? Start here." | "Meet the bed your mind, body, and soul have been dreaming about." | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<script type="module" src="/js/components/home-hero.js?v=2363892987"></script>
<style>@import url("/stylesheets/components/home-hero.css?v=1043087764") layer(components);</style>

<ef-home-hero class="block container-full scroll-snap">
	<div class="homeHero__imagesContainer">
		
		<div style="position: absolute; inset: 0; height: 100%; pointer-events: none;">
			<div class="notification-container">
				<script type="module" src="/js/components/notification.js?v=2912444233"></script>
<style>@import url("/stylesheets/components/notification.css?v=143624758") layer(components);</style>

<ef-video-notification class="notification">
	<div class="notification__body">
		<div class="notification__previewContents">
			<div class="notification__preview">
				<div class="flex-x items-center body-s" style="color: var(--gray2); gap: var(--space-3xs); margin-bottom: var(--space-2xs);">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><g clip-path="url(#a)"><rect width="13" height="13" x=".5" y=".5" stroke="currentColor" rx="6.5"/><path fill="currentColor" d="M10 7 5.5 9.598V4.402z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></svg>
					<span>Our Story</span>
				</div>
				<div class="flex-x body-s items-center" style="gap: var(--space-2xs);">
					
					
					<img class="icon" src="/assets/EF_Hero_vert-preview_120x120_q93.webp" width="120" height="120" srcset="/assets/EF_Hero_vert-preview_120x120_q93.webp 120w" alt="">
					<div>
						<p class="font-medium">From tree to sleep</p>
						<p style="color: var(--gray2);">See the process and materials of how an Earthfoam mattress is made.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="notification__content">
			
			
			
			<video src="/assets/EF_Hero_vert_400x711_crf18.mp4" width="400" height="711" playsinline preload="none"><track label="English" kind="subtitles" srclang="en" src="/assets/EF_Hero_vert.wav.vtt" default /></video>
		</div>
	</div>
</ef-video-notification>
			</div>
		</div>
		

		<div class="homeHero__images" style="width: 100%; height: 100%; position: relative; overflow: hidden;">
			
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 2. Products Overview (`/products`)

- **Category**: `Core`
- **Live URL**: [https://earthfoam.com/products](https://earthfoam.com/products)
- **Page Title**: `Sleep Well. | Earthfoam`
- **Meta Description**: *"Your bed should make you feel really, really good. Not just when you fall asleep, but when you wake up. Earthfoam Mattresses are made of natural rubber, wool, and cotton: chosen for their quality, collected ethically, and assembled with care in our own Chicago factory."*
- **Scraped HTML File**: [products.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products.html) (19.5 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-products-overview-grid>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Sleep Well."
- **Key H2 Sections**: "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<header data-animation-waypoint>
		<h1 class="h2" data-animate="slide-up">Sleep Well.</h1>
		<div class="richtext body-s" style="max-width: clamp(375px, 50vw, 500px); font-weight: 300; color: var(--gray1);" data-animate="slide-up" data-delay="1"><p>Your bed should make you feel really, really good. Not just when you fall asleep, but when you wake up. Earthfoam Mattresses are made of natural rubber, wool, and cotton: chosen for their quality, collected ethically, and assembled with care in our own Chicago factory.</p>
</div>
	</header>
	
	<ef-products-overview-grid>
	
		
		
		

		<div data-animation-waypoint>
			<a href="/products/mattress" data-animate="slide-up" data-offset="4" data-duration="3">
				<div class="image">
					
					
					<img src="/assets/Home_ProdCarousel_Mattress02_640x400_q93.webp" width="640" height="400" srcset="/assets/Home_ProdCarousel_Mattress02_640x400_q93.webp 640w, /assets/Home_ProdCarousel_Mattress02_1280x800_q93.webp 1280w, /assets/Home_ProdCarousel_Mattress02_2560x1600_q93.webp 2560w" alt="">

					
					
					<img src="/assets/Home_ProdCarousel_Mattress10_640x400_q93.webp" width="640" height="400" srcset="/assets/Home_ProdCarousel_Mattress10_640x400_q93.webp 640w, /assets/Home_ProdCarousel_Mattress10_1280x800_q93.webp 1280w, /assets/Home_ProdCarousel_Mattress10_2560x1600_q93.webp 2560w" alt="">
				</div>
				<div class="description">
					<h3 class="body-l" style="grid-area: title;">Mattress</h3>
					<p class="body-m" style="grid-area: description;">Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton.</p>
					<small class="eyebrow" style="grid-area: price; white-space: nowrap;">From $799.00</small>
				</div>
			</a>
		</div>
	
		
		
		

		<div data-animation-waypoint>
			<a href="/products/spring-mattress" data-animate="slide-up" data-offset="4" data-duration="3">
				<div class="image">
					
					
					<img src="/assets/Hybrid-Carousel-01_640x400_q93.webp" width="640" height="400" srcset="/assets/Hybrid-Carousel-01_640x400_q93.webp 640w, /assets/Hybrid-Carousel-01_1280x800_q93.webp 1280w, /assets/Hybrid-Carousel-01_2560x1600_q93.webp 2560w" alt="">

					
					
					<img src="/assets/Hybrid-Carousel-02_640x400_q93.webp" width="640" height="400" srcset="/assets/Hybrid-Carousel-02_640x400_q93.webp 640w, /assets/Hybrid-Carousel-02_1280x800_q93.webp 1280w, /assets/Hybrid-Carousel-02_2560x1600_q93.webp 2560w" alt="">
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 3. About Us (`/about`)

- **Category**: `Core`
- **Live URL**: [https://earthfoam.com/about](https://earthfoam.com/about)
- **Page Title**: `About | Earthfoam`
- **Meta Description**: *"We’re the people of Earthfoam: an independent, family-owned company making mattresses delightful from tree and sheep to shop and sleep."*
- **Scraped HTML File**: [about.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/about.html) (21.0 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-stacked-reveal>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Hello,Sleepyhead."
- **Key H2 Sections**: "Why latex?" | "Deep in the forests of Sri Lanka, shading the dappled forest floor, are the rubber trees that give our mattresses their comfy bounce." | "This is the story of Earthfoam.A story to read before bed. Before choosing a bed." | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Stacked Sticky Story Scroller (`ef-stacked-reveal`)**: Scroll-triggered sticky photo reveals showing Sri Lankan rubber farms and Chicago factory.
2. **Mission Statements & Ethical Sourcing**: Direct-from-farmers story.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<section>
	<hgroup class="container flex-y lg:flex-x lg:items-end" style="gap: var(--space-m); padding-inline: var(--space-xs-l); margin-top: var(--space-3xl); margin-bottom: var(--space-xl);" data-animation-waypoint>
		<h1 class="h5" style="min-width: 50%;" data-animate="slide-up">Hello,<br>Sleepyhead.</h1>
		<p class="body-m font-light" style="max-width: 415px;" data-animate="slide-up" data-delay="1">We’re the people of Earthfoam: an independent, family-owned company making mattresses delightful from tree and sheep to shop and sleep.</p>
	</hgroup>

	<div data-animation-waypoint class="container-full">
		
		
		<img src="/assets/PDP_MATTRESS_HERO04_640x400_q93.webp" width="640" height="400" srcset="/assets/PDP_MATTRESS_HERO04_640x400_q93.webp 640w, /assets/PDP_MATTRESS_HERO04_1280x800_q93.webp 1280w, /assets/PDP_MATTRESS_HERO04_2560x1600_q93.webp 2560w" sizes="100vw" alt="" style="width: 100%; height: auto; object-fit: cover; max-height: 100vh;" data-animate="fade-in">
	</div>

	<div data-animation-waypoint class="container">
		<div class="h3 container" style="max-width: 600px; margin-top: var(--space-3xl); margin-bottom: var(--space-2xl); margin-left: auto; margin-right: var(--space-m);" data-animate="slide-up">
			We make a mattress, a topper, and a pillow out of our dream material:<br><br>Natural latex.
		</div>
	</div>

	<div data-animation-waypoint class="container-full">
		
		
		<img src="/assets/PDP_MATTRESS_SUBHERO_640x400_q93.webp" width="640" height="400" srcset="/assets/PDP_MATTRESS_SUBHERO_640x400_q93.webp 640w, /assets/PDP_MATTRESS_SUBHERO_1280x800_q93.webp 1280w, /assets/PDP_MATTRESS_SUBHERO_2560x1600_q93.webp 2560w" sizes="100vw" alt="" style="width: 100%; height: auto; object-fit: cover; max-height: 100vh;" data-animate="fade-in">
	</div>
</section>
	
		<script type="module" src="/js/components/stacked-reveal.js?v=401006070"></script>

<section class="container" style="margin-block: var(--space-3xl);">
	<div style="position: sticky; top: var(--menu-height); padding-block: var(--space-s);">
		<h2 class="eyebrow" style="text-align: center;">Why latex?</h2>

		<ef-stacked-reveal reveal-target="section" style="text-align: center; display: block; margin-top: var(--space-l);">
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It comes from a tree.</p>
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It&#39;s oh so springy.</p>
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It&#39;s comfortable.</p>
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It&#39;s durable.</p>
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It&#39;s sustainable.</p>
			
			<p class="h5" style="margin-bottom: var(--space-3xs-2xs);">It&#39;s safe.</p>
			
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 4. Contact (`/contact`)

- **Category**: `Core`
- **Live URL**: [https://earthfoam.com/contact](https://earthfoam.com/contact)
- **Page Title**: `Contact | Earthfoam`
- **Meta Description**: *"We are available Monday - Saturday from 9am - 5pm Central Time (Closed July 3rd &amp; 4th in Observance of Independence Day)"*
- **Scraped HTML File**: [contact.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/contact.html) (15.7 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Say hi"
- **Key H2 Sections**: "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Support Channels**: Email support, phone hours, Chicago factory address.
2. **Direct Inquiry Form**: Responsive contact form.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1">Say hi</h1>
	</div>

	<div class="help__contentColumn" style="gap: var(--space-2xs);">
		<p class="h3 wrap-pretty" style="margin-bottom: var(--space-m);">We are available Monday - Saturday from 9am - 5pm Central Time (Closed July 3rd &amp; 4th in Observance of Independence Day)</p>
		<div><a href="mailto:info@earthfoam.com" class="button" style="width: 100%; max-width: 320px; display: flex; gap: var(--space-2xs); justify-content: center;">
			<span>Email</span>
			<span>/</span>
			<span>info@earthfoam.com</span>
		</a></div>
		<div><a href="tel:312.626.9680" class="button button--inverse" style="width: 100%; max-width: 320px; display: flex; gap: var(--space-2xs); justify-content: center;">
			<span>Call</span>
			<span>/</span>
			<span>312.626.9680</span>
		</a></div>

		<div class="richtext" style="margin-top: var(--space-m);"><p>Our address is:</p>

<p><a href="https://www.google.com/maps/place/5620+W+Jarvis+Ave,+Niles,+IL+60714/@42.0159548,-87.770796,17z/data=!3m1!4b1!4m5!3m4!1s0x880fced7ce7c63b9:0xf3277b7942583998!8m2!3d42.0159548!4d-87.7686073" rel="nofollow noreferrer noopener">5620 W. Jarvis Ave.<br>Niles, IL 60714</a></p>
</div>
	</div>
```

---

### 5. Cart / Checkout (`/cart`)

- **Category**: `Core`
- **Live URL**: [https://earthfoam.com/cart](https://earthfoam.com/cart)
- **Page Title**: `Cart | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [cart.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/cart.html) (17.0 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-cart>`, `<ef-cart-line-item>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Cart"
- **Key H2 Sections**: "JavaScript required" | "Title" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Cart Line Items**: Quantity selectors, variant descriptions, thumbnail previews, price calculation.
2. **Free Shipping Indicator**: Threshold progress bar.
3. **Checkout Buttons**: Express Checkout (Shop Pay, Apple Pay, Google Pay) and Standard Checkout.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<ef-cart>
		<h1 class="h1" style="position: sticky; top: 0;">Cart</h1>
		<noscript>
			<hgroup class="flex-y" style="margin-block: var(--space-l); gap: var(--space-s);">
				<h2 class="h2">JavaScript required</h2>
				<p class="body-l">Please enable JavaScript to use the cart.</p>
			</hgroup>
		</noscript>

		<div class="cart-body flex-y" style="gap: var(--space-s);"></div>

		<template class="line-item">
			<ef-cart-line-item style="display: block; border-top: 1px solid var(--color-fg);">
				<div class="flex-x justify-between" style="padding-top: var(--space-s);">
					<h2 class="title" style="font-size: var(--type-menu-s);">Title</h2>
					<p class="subtotal" style="font-size: var(--type-menu-s);">$100.00</p>
				</div>
				<p class="attributes" style="font-size: var(--type-menu-s); margin-bottom: var(--space-s);">attrs</p>
				<p class="extra" style="font-size: var(--type-menu-s); margin-bottom: var(--space-s);">extra</p>
				<div class="flex-x">
					<div class="flex-x justify-center items-center quantity-toggle-container" style="margin-right: var(--space-xs); border: 1px solid var(--color-fg); border-radius: 100px; padding: var(--space-2xs);">
						<span class="quantity body-m" style="margin-left: var(--space-3xs); margin-right: var(--space-2xs);">1</span>
						<button class="quantityInc" style="cursor: pointer; padding-inline: var(--space-3xs);">&#9650;</button>
						<button class="quantityDec" style="cursor: pointer; padding-inline: var(--space-3xs);">&#9660;</button>
					</div>
					<button class="remove" style="cursor: pointer;"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.75" x2="19.9854" y2="-0.75" transform="matrix(-0.689164 0.724606 -0.689163 -0.724606 14.7605 -0.0133057)" stroke="currentColor" stroke-width="1.5"/>
<line y1="-0.75" x2="19.9854" y2="-0.75" transform="matrix(-0.689163 -0.724606 0.689163 -0.724606 15.1909 14.9208)" stroke="currentColor" stroke-width="1.5"/>
</svg>
</button>
				</div>
			</ef-cart-line-item>
		</template>
		
		<div class="cart-checkout" hidden>
			<div class="lg:hidden bt1--white mb3"></div>
			<h3 class="h3 text-right lg:text-left" style="margin-bottom: var(--space-s);">Subtotal: <span class="cart-subtotal"></span></h3>
			<button class="button" style="cursor: pointer;">Checkout</button>
		</div>

		<div class="cart-empty">
			<div class="lg:hidden" style="margin-bottom: var(--space-s); border-top: 1px solid var(--color-fg);"></div>
			<h3 class="h3 text-right lg:text-left" style="margin-bottom: var(--space-s);">Your cart is empty.</h3>
			<a href="/products" class="button" style="width: 100%; max-width: 768px;">Shop</a>
		</div>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 6. The Mattress (Foam) (`/products/mattress`)

- **Category**: `Product Detail`
- **Live URL**: [https://earthfoam.com/products/mattress](https://earthfoam.com/products/mattress)
- **Page Title**: `Mattress | Earthfoam`
- **Meta Description**: *"Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton."*
- **Scraped HTML File**: [products__mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__mattress.html) (97.0 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-accordion-fold>`, `<ef-accordion>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress", "Earthfoam Organic Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Materials" | "Certifications" | "What a dream." | "Comfort" | "Materials" | "Design" *(+8 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$799.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6489363" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.65 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 188 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 7. The Topper (`/products/topper`)

- **Category**: `Product Detail`
- **Live URL**: [https://earthfoam.com/products/topper](https://earthfoam.com/products/topper)
- **Page Title**: `Topper | Earthfoam`
- **Meta Description**: *"A squishy layer of natural rubber to make a firm mattress softer."*
- **Scraped HTML File**: [products__topper.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__topper.html) (77.7 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-notification>`, `<ef-product-variant-option>`, `<ef-accordion-fold>`, `<ef-accordion>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress Topper", "Earthfoam Organic Mattress Topper"
- **Key H2 Sections**: "Certifications" | "Materials" | "What gives Earthfoam its Earthfoaminess?" | "Materials" | "Design" | "Durability" | "Peace of Mind" | "We want shopping for an Earthfoam topper to be as nice as sleeping on one." *(+5 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress Topper</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$349.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6666665" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.67 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 48 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
	</header>

	<ef-product-hero class="flex-x" style="position: relative;">
		<div class="notifications-noclose container-full lg:scroll-snap" style="position: relative;">
			<ef-product-carousel data-id="6219839303822375096">
				<swiper-container loop="true" autoplay="true" grab-cursor="true" navigation-next-el="[data-id='6219839303822375096'] .button-next" navigation-prev-el="[data-id='6219839303822375096'] .button-prev" style="height: 100%;">
					
					<swiper-slide>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 8. The Spring Mattress (`/products/spring-mattress`)

- **Category**: `Product Detail`
- **Live URL**: [https://earthfoam.com/products/spring-mattress](https://earthfoam.com/products/spring-mattress)
- **Page Title**: `Spring Mattress | Earthfoam`
- **Meta Description**: *"A spring mattress done right."*
- **Scraped HTML File**: [products__spring-mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__spring-mattress.html) (100.8 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-accordion-fold>`, `<ef-captioned-image>`, `<ef-accordion>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-image-grid-2x4>`, `<ef-product-reviews>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Spring Mattress", "Earthfoam Spring Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Add a tufted topper for an even more luxurious experience." | "Materials" | "Certifications" | "A spring mattress done right." | "Our Coil System" | "DESIGN" *(+8 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Spring Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$1399.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="3" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="3.00 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 1 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Pillow Topper">Pillow Topper</label>
					<select class="body-m font-regular variant-option" data-option="Pillow Topper" id="option-A-Pillow Topper">
						<option value="None">None</option><option value="2-Inch Comfort">2-Inch Comfort</option><option value="3-Inch Luxury">3-Inch Luxury</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 9. The Pillow (`/products/pillow`)

- **Category**: `Product Detail`
- **Live URL**: [https://earthfoam.com/products/pillow](https://earthfoam.com/products/pillow)
- **Page Title**: `Pillow | Earthfoam`
- **Meta Description**: *"A smaller bed for your head."*
- **Scraped HTML File**: [products__pillow.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__pillow.html) (56.2 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-notification>`, `<ef-product-variant-option>`, `<ef-accordion-fold>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-accordion>`, `<ef-product-reviews>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Pillow", "Earthfoam Organic Pillow"
- **Key H2 Sections**: "Materials" | "Certifications" | "A bed for your head." | "Comfort" | "Design" | "Peace of Mind" | "We want shopping for an Earthfoam pillow to be as nice as sleeping on one." | "Customer Reviews & Ratings" *(+4 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Pillow</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$99.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6666665" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.67 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 84 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Quantity">Quantity</label>
					<select class="body-m font-regular variant-option" data-option="Quantity" id="option-A-Quantity">
						<option value="One Pillow">One Pillow</option><option value="Two Pillows">Two Pillows</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
	</header>

	<ef-product-hero class="flex-x" style="position: relative;">
		<div class="notifications-noclose container-full lg:scroll-snap" style="position: relative;">
			<ef-product-carousel data-id="2884965994632412674">
				<swiper-container loop="true" autoplay="true" grab-cursor="true" navigation-next-el="[data-id='2884965994632412674'] .button-next" navigation-prev-el="[data-id='2884965994632412674'] .button-prev" style="height: 100%;">
					
					<swiper-slide>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 10. Mattress Reviews (`/products/landing/mattress-reviews`)

- **Category**: `Landing / Feature`
- **Live URL**: [https://earthfoam.com/products/landing/mattress-reviews](https://earthfoam.com/products/landing/mattress-reviews)
- **Page Title**: `Mattress | Earthfoam`
- **Meta Description**: *"Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton."*
- **Scraped HTML File**: [products__landing__mattress-reviews.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-reviews.html) (97.2 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-accordion-fold>`, `<ef-accordion>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress", "Earthfoam Organic Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Materials" | "Certifications" | "What a dream." | "Comfort" | "Materials" | "Design" *(+8 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$799.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6489363" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.65 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 188 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 11. Mattress Materials (`/products/landing/mattress-materials`)

- **Category**: `Landing / Feature`
- **Live URL**: [https://earthfoam.com/products/landing/mattress-materials](https://earthfoam.com/products/landing/mattress-materials)
- **Page Title**: `Mattress | Earthfoam`
- **Meta Description**: *"Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton."*
- **Scraped HTML File**: [products__landing__mattress-materials.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-materials.html) (99.9 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-video>`, `<ef-accordion-fold>`, `<ef-accordion>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress", "Earthfoam Organic Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Materials" | "Our Foam" | "Certifications" | "What a dream." | "Comfort" | "Materials" *(+9 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$799.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6489363" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.65 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 188 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 12. Mattress Organic (`/products/landing/mattress-organic`)

- **Category**: `Landing / Feature`
- **Live URL**: [https://earthfoam.com/products/landing/mattress-organic](https://earthfoam.com/products/landing/mattress-organic)
- **Page Title**: `Mattress | Earthfoam`
- **Meta Description**: *"Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton."*
- **Scraped HTML File**: [products__landing__mattress-organic.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-organic.html) (103.2 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-video>`, `<ef-accordion-fold>`, `<ef-accordion>`, `<ef-product-videos-strip>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress", "Earthfoam Organic Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Our Certifications" | "About Our Certifications" | "Curious about how Earthfoam is made?Watch the videos below to to see the process." | "What a dream." | "Comfort" | "Materials" *(+9 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$799.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6489363" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.65 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 188 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 13. Mattress Experience (`/products/landing/mattress-experience`)

- **Category**: `Landing / Feature`
- **Live URL**: [https://earthfoam.com/products/landing/mattress-experience](https://earthfoam.com/products/landing/mattress-experience)
- **Page Title**: `Mattress | Earthfoam`
- **Meta Description**: *"Springy, supportive natural latex sandwiched between wool &amp; soft quilted cotton."*
- **Scraped HTML File**: [products__landing__mattress-experience.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/products__landing__mattress-experience.html) (99.8 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-product-variant-bar>`, `<ef-stars-rating>`, `<ef-product-hero>`, `<ef-product-carousel>`, `<ef-video-notification>`, `<ef-product-variant-option>`, `<ef-accordion>`, `<ef-accordion-fold>`, `<ef-product-intro>`, `<ef-product-image-zoomer>`, `<ef-product-image-copy>`, `<ef-product-image-map>`, `<ef-map-hotspot>`, `<ef-map-description-list>`, `<ef-product-reviews>`, `<ef-video>`, `<ef-marquee>`, `<ef-newsletter-signup>`, `<ef-product-specs-container>`, `<ef-product-specs-tabs>`
- **H1 Headings**: "Earthfoam Organic Mattress", "Earthfoam Organic Mattress"
- **Key H2 Sections**: "Medium" | "Firm" | "Customer Experience" | "Certifications" | "What a dream." | "Comfort" | "Materials" | "Design" *(+8 more)*

#### Key Sections & Features:
1. **Product Configurator / Hero**: Size selector (Twin, Twin XL, Full, Queen, King, Cal King), Firmness/Variant selector, Price display, Add to Cart & Buy Now CTAs, Affirm/Klarna finance notice.
2. **Value Props & Badges**: 100-Night Trial, 10-Year Warranty, Free Shipping & Free Returns, 100% Organic certified.
3. **Product Gallery / Swiper**: Interactive multi-angle product photography with thumbnails.
4. **Layer-by-Layer Cutaway**: Visual breakdowns of rubber foam, wool batting, and organic cotton cover.
5. **Dimensions & Weight Table**: Detailed spec table for all sizes.
6. **Customer Reviews Section**: Star ratings, verified badges, filterable reviews.
7. **FAQ Accordions**: Expandable questions specific to this product.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div class="overlay"></div>

	
	<header class="header-mobile container flex-y lg:hidden" style="padding-block: var(--space-l);">
		<h1 class="h1 wrap-pretty" style="text-align: center; padding-inline: var(--space-s); margin-bottom: var(--space-m);">Earthfoam Organic Mattress</h1>
		
		<ef-product-variant-bar class="block lg:hidden">
			<p class="price-indicator" style="text-align: center; margin-bottom: var(--space-m);">$799.00</p>
			<div class="flex-x items-center justify-center" style="margin-bottom: var(--space-l); text-align: center; gap: var(--space-m);">
				<script src="/js/components/stars.js?v=3404786124" type="module"></script>
<ef-stars-rating data-rating="4.6489363" style="position: relative; white-space: nowrap; width: 7ch; height: 1em; line-height: 1em;" title="4.65 / 5">
	<span style="color: var(--gray3); position: absolute; top: 0; left: 0;">★★★★★</span>
	<span style="color: var(--sunset); position: absolute; top: 0; left: 0;"></span>
</ef-stars-rating>

				<a href="#reviews" class="body-s" style="text-decoration: underline;">See all 188 reviews</a>
			</div>
			
			<div style="display: flex; flex-direction: column; gap: var(--space-2xs);">
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Size">Size</label>
					<select class="body-m font-regular variant-option" data-option="Size" id="option-A-Size">
						<option value="Twin">Twin</option><option value="Twin XL">Twin XL</option><option value="Full">Full</option><option value="Queen">Queen</option><option value="King">King</option><option value="California King">California King</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div class="option">
					<label class="body-m font-light" for="option-A-Firmness">Firmness</label>
					<select class="body-m font-regular variant-option" data-option="Firmness" id="option-A-Firmness">
						<option value="Medium">Medium</option><option value="Firm">Firm</option>
					</select>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" fill="none"><path fill="currentColor" d="M4.2 6 .043 0h8.314z"/></svg>
				</div>
				
				<div>
					<button class="button add-to-cart" style="cursor: pointer; width: 100%;">Add to Cart</button>
				</div>
				<div class="body-s flex-y" style="color: var(--gray2); gap: 3px; text-align: center;">
					<p data-element="shipping_indicator" data-default="Ships same business day until 3PM CST">Ships same business day until 3PM CST</p>
					
				</div>
			</div>
		</ef-product-variant-bar>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 14. Common Questions (FAQ) (`/help/common-questions`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/common-questions](https://earthfoam.com/help/common-questions)
- **Page Title**: `Common Questions | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__common-questions.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__common-questions.html) (29.9 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-accordion>`, `<ef-accordion-fold>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Common Questions"
- **Key H2 Sections**: "Shipping" | "Returns" | "Payment" | "Earthfoam (the foam)" | "Products" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Common Questions</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
		<li><a href="#shipping">Shipping</a></li>
		
		<li><a href="#returns">Returns</a></li>
		
		<li><a href="#payment">Payment</a></li>
		
		<li><a href="#earthfoam-the-foam">Earthfoam (the foam)</a></li>
		
		<li><a href="#products">Products</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>We know buying a mattress is a big deal, and we would love to help answer any questions you have. If you don&rsquo;t see your question here, please <a href="/contact">contact us</a>. We have real, well-trained humans ready to help you.</p>
</section>
		
		
		<section id="shipping">
	<h2>Shipping</h2>
	<script type="module" src="/js/components/accordion.js?v=2060132655"></script>

<ef-accordion style="border-top: 2px solid var(--color-border-major); display: block;">
	
	<ef-accordion-fold style="border-bottom: 1px solid var(--color-border-minor); display: block;" id="how-long-will-it-take-for-my-order-to-be-delivered">
		<details >
			<summary class="body-m wrap-pretty">How long will it take for my order to be delivered?</summary>
			<div class="richtext body-s"><p>All of our products ship within five business days and are typically delivered within ten business days of ordering.</p>
</div>
		</details>
	</ef-accordion-fold>
	
	<ef-accordion-fold style="border-bottom: 1px solid var(--color-border-minor); display: block;" id="where-do-you-ship-from">
		<details >
			<summary class="body-m wrap-pretty">Where do you ship from?</summary>
			<div class="richtext body-s"><p>Our products all ship from our warehouse in Niles, IL, just outside of Chicago.</p>
</div>
		</details>
	</ef-accordion-fold>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 15. Shipping and Returns (`/help/shipping-and-returns`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/shipping-and-returns](https://earthfoam.com/help/shipping-and-returns)
- **Page Title**: `Shipping &amp; Returns | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__shipping-and-returns.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__shipping-and-returns.html) (18.2 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Shipping &amp; Returns"
- **Key H2 Sections**: "Shipping" | "Returns" | "Warranty" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Shipping &amp; Returns</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
		<li><a href="#shipping">Shipping</a></li>
		
		<li><a href="#returns">Returns</a></li>
		
		<li><a href="#warranty">Warranty</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>Every Earthfoam order is packaged and shipped from our factory outside Chicago.</p>

<p>Below are our shipping and return policies, designed to make it as easy as possible for you to receive your order and send it back if needed. You can always <a href="/contact">contact us</a> if you have questions or run into any issues.</p>
</section>
		
		
		<section id="shipping">
	<h2>Shipping</h2>
	<div class="richtext"><p>All of our products ship within the contiguous United States for free. In certain cases, you may have the option to purchase faster shipping.</p>

<p>Earthfoam mainly uses FedEx for shipping. We’ve found they take the best care of our packages. Occasionally, we ship through UPS, USPS, or Freight (king mattresses). When you order a king size mattress, the freight service we use will call you to schedule a time for a drop-off.</p>

<p>Earthfoam gladly ships to Alaska, Hawaii, Canada, and just about any other place in the world. You’ll just have to take responsibility for the cost of shipping, taxes, duties, customs charges, etc. if ordering outside of the contiguous United States.</p>

<p>All orders will ship within 1-5 business days.</p>
</div>
</section>

		
		<section id="returns">
	<h2>Returns</h2>
	<div class="richtext"><p>Every item we sell comes with a sleep trial. With any of our products, you can return them within the sleep trial for a full refund (or exchange credit), no questions asked.</p>

<p><strong>Mattresses</strong><br>
For mattresses, we partner with a removal service that will pick up your returned mattress at no extra cost. The Sleep Trial for the Earthfoam Organic Mattress is 100 days, beginning when your mattress is delivered.</p>

<p><strong>Toppers</strong><br>
If you return your Earthfoam Organic Topper, we’ll send you a larger box and a prepaid return label to make the process as easy as possible for you. The sleep trial on our toppers is 100 days, starting when your topper is delivered.</p>

<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 16. Certifications (`/help/certifications`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/certifications](https://earthfoam.com/help/certifications)
- **Page Title**: `Certifications | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__certifications.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__certifications.html) (17.3 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Certifications"
- **Key H2 Sections**: "Global Organic Textile Standard (GOTS)" | "Oeko-Tex® Standard 100" | "Global Organic Latex Standard (GOLS)" | "Fair for Life" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Certifications</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
		<li><a href="#global-organic-textile-standard-gots">Global Organic Textile Standard (GOTS)</a></li>
		
		<li><a href="#oeko-tex-standard-100">Oeko-Tex® Standard 100</a></li>
		
		<li><a href="#global-organic-latex-standard-gols">Global Organic Latex Standard (GOLS)</a></li>
		
		<li><a href="#fair-for-life">Fair for Life</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>With so many certifications floating around, it can be confusing to figure out what they all mean, and if they’re even real.</p>

<p>For Earthfoam, we sought only the strictest certifications concerning fair trade, organic, emissions, and health. And we are proud to have received them all.</p>

<p>Our certifications are under our name, up to date, and administered by an unbiased third party.</p>

<p>We hope this brings you some comfort.</p>
</section>
		
		
		<section id="global-organic-textile-standard-gots">
	<h2>Global Organic Textile Standard (GOTS)</h2>
	<div class="richtext"><p><a target="_blank" href="/assets/2026-EF-Cert-GOTS.jpg">View the certificate</a></p>

<p>GOTS verifies that we are using only organically grown and processed fibers. Having the GOTS certification is important for our mattress, topper, and pillow covers, which are all made using organic cotton, as well as organic wool (in topper and mattress covers only).</p>
</div>
</section>

		
		<section id="oeko-tex-standard-100">
	<h2>Oeko-Tex® Standard 100</h2>
	<div class="richtext"><p><a target="_blank" href="/assets/17.HUS.25845 -en.jpg">View the certificate</a></p>

<p>Oeko-Tex® Standard 100 sets the standard for textile safety, from yarn to finished product. Every product carrying the label has passed laboratory tests for harmful substances. Each component of an Oeko-Tex® Standard 100 certified product has been tested against a list of over 1,000 harmful substances.</p>
</div>
</section>

<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 17. Mattress Warranty (10 Year) (`/help/mattress-warranty`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/mattress-warranty](https://earthfoam.com/help/mattress-warranty)
- **Page Title**: `Mattress Warranty | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__mattress-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__mattress-warranty.html) (20.0 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Mattress Warranty"
- **Key H2 Sections**: "Who this Limited Warranty is Extended to:" | "What this Limited Warranty Covers:" | "What this Limited Warranty Does Not Cover:" | "How to file a claim under this Limited Warranty:" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Mattress Warranty</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
		<li><a href="#who-this-limited-warranty-is-extended-to">Who this Limited Warranty is Extended to:</a></li>
		
		<li><a href="#what-this-limited-warranty-covers">What this Limited Warranty Covers:</a></li>
		
		<li><a href="#what-this-limited-warranty-does-not-cover">What this Limited Warranty Does Not Cover:</a></li>
		
		<li><a href="#how-to-file-a-claim-under-this-limited-warranty">How to file a claim under this Limited Warranty:</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>Earthfoam warrants that it will, at its option, and at its expense, repair or replace this mattress should it be determined to contain a defect which is covered by the terms of this Limited Warranty.</p>

<p>This Limited Warranty lasts for a period of ten (10) years, with such time dating from the date of the product purchase as noted as your sales slip or as may be otherwise evidenced by appropriate documentation. Proof of direct, authorized purchase is required with all warranty claims.</p>

<p>This warranty applies only to Earthfoam Orgranic Mattress and is not extended to other products in the Earthfoam product line.</p>
</section>
		
		
		<section id="who-this-limited-warranty-is-extended-to">
	<h2>Who this Limited Warranty is Extended to:</h2>
	<div class="richtext"><p>This Limited Warranty extends to the initial, “original” purchaser of this product only and not to any possible future owner(s) of the product. For purposes of this Limited Warranty an “original” purchaser is the individual or entity who purchased this mattress from Earthfoam directly or, as the case may be, from an authorized retailer, distributor or dealer.</p>
</div>
</section>

		
		<section id="what-this-limited-warranty-covers">
	<h2>What this Limited Warranty Covers:</h2>
	<div class="richtext"><p>For purposes of this Limited Warranty, a defect includes the following:</p>

<ul>
<li>“Sinkage” or “indentations” in the mattresses foam measuring one inch or more deep.<br>
</li>
<li>Any cracks or splits of the foam of the mattress which significantly impact the performance of the mattress as long as such damage is not due to any abuse or misuse by the users, including the lack of proper support of the mattress or improper handling of the mattress.</li>
</ul>
</div>
</section>

<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 18. Mattress Topper Warranty (`/help/mattress-topper-warranty`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/mattress-topper-warranty](https://earthfoam.com/help/mattress-topper-warranty)
- **Page Title**: `Mattress Topper Warranty | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__mattress-topper-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__mattress-topper-warranty.html) (20.0 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Mattress Topper Warranty"
- **Key H2 Sections**: "Who this Limited Warranty is Extended to:" | "What this Limited Warranty Covers:" | "What this Limited Warranty Does Not Cover:" | "How to file a claim under this Limited Warranty:" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Mattress Topper Warranty</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
		<li><a href="#who-this-limited-warranty-is-extended-to">Who this Limited Warranty is Extended to:</a></li>
		
		<li><a href="#what-this-limited-warranty-covers">What this Limited Warranty Covers:</a></li>
		
		<li><a href="#what-this-limited-warranty-does-not-cover">What this Limited Warranty Does Not Cover:</a></li>
		
		<li><a href="#how-to-file-a-claim-under-this-limited-warranty">How to file a claim under this Limited Warranty:</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>Earthfoam warrants that it will, at its option, and at its expense, repair or replace this mattress should it be determined to contain a defect which is covered by the terms of this Limited Warranty. This Limited Warranty lasts for a period of five (5) years, with such time dating from the date of the product purchase as noted as your sales slip or as may be otherwise evidenced by appropriate documentation. Proof of direct, authorized purchase is required with all warranty claims. This warranty applies only to Earthfoam Organic Mattress Topper &amp; is not extended to other products in the Earthfoam product line.</p>
</section>
		
		
		<section id="who-this-limited-warranty-is-extended-to">
	<h2>Who this Limited Warranty is Extended to:</h2>
	<div class="richtext"><p>This Limited Warranty extends to the initial, “original” purchaser of this product only and not to any possible future owner(s) of the product. For purposes of this Limited Warranty an “original” purchaser is the individual or entity who purchased this mattress from Earthfoam directly or, as the case may be, from an authorized retailer, distributor or dealer.</p>
</div>
</section>

		
		<section id="what-this-limited-warranty-covers">
	<h2>What this Limited Warranty Covers:</h2>
	<div class="richtext"><p>Earthfoam warrants that this mattress to be free of defects. For purposes of this Limited Warranty, a defect includes the following:</p>

<ul>
<li>“Sinkage” or “indentations” in the mattresses foam measuring one inch or more deep.<br>
</li>
<li>Any cracks or splits of the foam of the mattress which significantly impact the performance of the mattress as long as such damage is not due to any abuse or misuse by the users, including the lack of proper support of the mattress or improper handling of the mattress.</li>
</ul>
</div>
</section>

		
		<section id="what-this-limited-warranty-does-not-cover">
	<h2>What this Limited Warranty Does Not Cover:</h2>
	<div class="richtext"><p>This Limited Warranty does NOT cover the following:</p>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 19. Pillow Warranty (`/help/pillow-warranty`)

- **Category**: `Help & Support`
- **Live URL**: [https://earthfoam.com/help/pillow-warranty](https://earthfoam.com/help/pillow-warranty)
- **Page Title**: `Pillow Warranty | Earthfoam`
- **Meta Description**: *""*
- **Scraped HTML File**: [help__pillow-warranty.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/help__pillow-warranty.html) (15.1 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Pillow Warranty"
- **Key H2 Sections**: "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Help Navigation Sidebar / Tabs**: Fast switching between FAQs, Warranty, Shipping & Returns, Certifications.
2. **Search / Accordion Answers**: Clean, readable policy breakdowns with clear terms.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<div>
		<h1 class="h1" id="overview">Pillow Warranty</h1>
	</div>

	<menu>
		<li><a href="#overview">Overview</a></li>
		
	</menu>

	<div class="help__contentColumn">
		<section class="richtext"><p>At Earthfoam, we want to provide our customers with high-quality, long-lasting products. Because we stand behind our products, we offer a 5-year warranty on our pillows.</p>

<p>In order to file a warranty claim, please email us at <a href="mailto:info@earthfoam.com" rel="nofollow noreferrer noopener">info@earthfoam.com</a> or call <a href="tel:312.626.9680" rel="nofollow noreferrer noopener">312.626.9680</a>.</p>
</section>
		
		
	</div>
```

---

### 20. Blog Index (`/blog`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog](https://earthfoam.com/blog)
- **Page Title**: `Our Journal | Earthfoam`
- **Meta Description**: *"We love a good story. From falling in love with latex to tapping trees to founding fair trade networks, we have a lot of them to tell."*
- **Scraped HTML File**: [blog.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog.html) (19.9 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Our Journal"
- **Key H2 Sections**: "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<header class="container">
		<hgroup style="text-align: center;" data-animation-waypoint>
			<p class="eyebrow" data-animate="slide-up">Light Reading</p>
			<h1 class="h2" data-animate="slide-up" data-delay="1">Our Journal</h1>
			<div class="richtext" style="max-width: 375px; margin-inline: auto;" data-animate="slide-up" data-delay="2"><p>We love a good story. From falling in love with latex to tapping trees to founding fair trade networks, we have a lot of them to tell.</p>
</div>
			<span style="margin-inline: auto;" data-animate="slide-up" data-delay="3"><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.55806 12.4419C4.80214 12.686 5.19786 12.686 5.44194 12.4419L9.41942 8.46447C9.6635 8.22039 9.6635 7.82466 9.41942 7.58058C9.17534 7.33651 8.77961 7.33651 8.53553 7.58058L5 11.1161L1.46447 7.58058C1.22039 7.33651 0.82466 7.33651 0.580583 7.58058C0.336505 7.82466 0.336505 8.22039 0.580583 8.46447L4.55806 12.4419ZM4.375 0L4.375 12H5.625L5.625 0L4.375 0Z" fill="currentColor"/>
</svg>
</span>
		</hgroup>

		
		<a href="/blog/sourcing-our-foam-the-story-of-sri-lanka" style="display: flex; flex-direction: column; gap: var(--space-xs); text-align: center;" data-animation-waypoint="">
			<div style="position: relative; margin-inline: auto;" data-animate="slide-up">
				
				
				<img src="/assets/EF-Blog-October-Website-01_640x839_q93.webp" width="640" height="839" srcset="/assets/EF-Blog-October-Website-01_640x839_q93.webp 640w, /assets/EF-Blog-October-Website-01_1280x1678_q93.webp 1280w" alt="" style="border-radius: var(--radius-s); aspect-ratio: 320 / 420;"
				sizes="(min-width: 1024px) 33vw, 100vw">
				<small class="eyebrow" style="position: absolute; top: var(--space-xs); left: var(--space-xs); color: var(--cotton);">4 minute read</small>
			</div>
			<p style="padding-inline: var(--space-2xs);" class="font-medium" data-animate="slide-up" data-delay="1">Sourcing Our Foam: The Story of Sri Lanka</p>
		</a>
	</header>
	
	<section class="container">
		<ul>
		
		<li data-animation-waypoint><a href="/blog/introducing-the-spring-mattress" style="display: flex; flex-direction: column; gap: var(--space-xs); text-align: center;" data-animate="slide-up">
			
			
			<img src="/assets/EF-HybridSprings2025_640x822_q93.webp" width="640" height="822" srcset="/assets/EF-HybridSprings2025_640x822_q93.webp 640w, /assets/EF-HybridSprings2025_1280x1645_q93.webp 1280w" alt="" style="object-fit: cover; width: 100%; height: auto; border-radius: var(--radius-s); aspect-ratio: 320 / 420;"
			sizes="(min-width: 1024px) 33vw, 100vw">
			<p style="padding-inline: var(--space-2xs);" class="font-medium">Introducing the Spring Mattress</p>
		</a></li>
		
		<li data-animation-waypoint><a href="/blog/behind-the-dreams-our-new-collaboration" style="display: flex; flex-direction: column; gap: var(--space-xs); text-align: center;" data-animate="slide-up">
			
			
			<img src="/assets/EF-Prairie2024_640x822_q93.webp" width="640" height="822" srcset="/assets/EF-Prairie2024_640x822_q93.webp 640w, /assets/EF-Prairie2024_1280x1645_q93.webp 1280w" alt="" style="object-fit: cover; width: 100%; height: auto; border-radius: var(--radius-s); aspect-ratio: 320 / 420;"
			sizes="(min-width: 1024px) 33vw, 100vw">
			<p style="padding-inline: var(--space-2xs);" class="font-medium"> Behind the Dreams: Our New Collaboration</p>
		</a></li>
		
		<li data-animation-waypoint><a href="/blog/making-our-beds-inside-our-chicago-factory" style="display: flex; flex-direction: column; gap: var(--space-xs); text-align: center;" data-animate="slide-up">
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 21. Sourcing Our Foam: Sri Lanka (`/blog/sourcing-our-foam-the-story-of-sri-lanka`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog/sourcing-our-foam-the-story-of-sri-lanka](https://earthfoam.com/blog/sourcing-our-foam-the-story-of-sri-lanka)
- **Page Title**: `Sourcing Our Foam: The Story of Sri Lanka | Earthfoam`
- **Meta Description**: *"We went straight to the source and partnered with local experts to build our own fair trade network and foam rubber factory."*
- **Scraped HTML File**: [blog__sourcing-our-foam-the-story-of-sri-lanka.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__sourcing-our-foam-the-story-of-sri-lanka.html) (23.5 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Sourcing Our Foam: The Story of Sri Lanka"
- **Key H2 Sections**: "Our Fair Trade Network" | "The Earthfoam Factory" | "Putting it All to Bed" | "Related Articles" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<p>Natural foam rubber is pretty amazing, really. Take milky sap from a rubber tree, spin it really fast to get the water out, mix it with small amounts of compounds to help the molecules bind together, pour it into a mold, bake it at 212 degrees for an hour, and ta-da: you have a squishy white square you can sleep on.</p>

<p>When we first got into bedding, we traced the highest-quality natural rubber in the world to its source: Sri Lanka. We partnered with a local rubber supplier and specialist, Januka Karunasena, and cut out the middlemen to source our foam from him directly.</p>

<p>But that wasn’t enough. The more we learned about the rubber industry, and the more people we met in Sri Lanka, the more room for improvement we found. To make the mattresses of our dreams, we needed to control every part of the supply chain, from the rubber tree to the factory, so we could ensure quality control and fair treatment of workers every step of the way.</p>
<figure><img src="/assets/DSC_2521_1024x683_q65.webp" alt="" loading="lazy"><figcaption>A tree tapper collects rubber sap by making a small cut into the rubber tree.</figcaption></figure>
<h2 id="our-fair-trade-network">Our Fair Trade Network</h2>

<p>Rubber tree forests are beautiful and highly sustainable. One tree can supply sap (liquid latex) for over 20 years and rubber trees have one of the highest carbon dioxide absorption rates. When we first started sourcing it, the rubber industry in Sri Lanka was dying. It was hard for farmers to compete with cheaper crops, even if they weren’t good for the land or the local economy.</p>

<p>With Januka spearheading the project, we built a Fair For Life certified fair trade network of 323 small organic rubber farmers. It’s the largest in Sri Lanka, employing more than 1,700 workers. And we’ve been able to ensure fair wages and working conditions for all of them.</p>

<p>Our farms are also certified organic, which reduces water and energy use and boosts the biodiversity of the forests. Other brands pay a surcharge on organic that often only goes to the processing facilities. We are the processing facility, so our premiums benefit the tappers and farmers directly.</p>

<blockquote>
<p>I led a team to turn a declining natural foam rubber business into one that is sustainable and grows.</p>
</blockquote>

<p>– Januka Karunasena, CEO</p>
<figure><img src="/assets/Mattress Remove_1024x683_q65.webp" alt="" loading="lazy"><figcaption>Earthfoam factory workers remove Earthfoam from a mold.</figcaption></figure>
<h2 id="the-earthfoam-factory">The Earthfoam Factory</h2>

<p>After we collect rubber tree sap from our fair trade network of farmers, it’s processed at our shiny new factory in Colombo, Sri Lanka. It’s the only place in the world that makes Earthfoam.</p>

<p>Before we opened our own factory, we sent the sap to be processed in Malaysia. Making foam rubber in the same place it’s harvested has reduced energy and transportation costs and allowed us to have a greater impact on our workers.</p>

<p>We have 200 people working at our factory, ranging from highly experienced foam rubber experts to construction workers who helped build the factory and wanted to stick around and learn how to make mattresses instead.</p>

<p>We’re also able to attend meetings with our tappers, we hear directly from our farmers, and we’re part of the local community and economy.</p>
<figure><img src="/assets/DSC_2559_1024x684_q65.webp" alt="" loading="lazy"><figcaption>Biodiversity thrives around organic rubber trees in Sri Lanka.</figcaption></figure>
<blockquote>
<p>I am very happy to be a part of this factory. We make a good product not only for us but for the rest of the world. And we’re in beautiful surroundings.</p>
</blockquote>

<p>– Manjula Kumara, Executive: Foam Production</p>
<figure><img src="/assets/WhatsApp Image 2020-12-01 at 11.43.14 AM_1024x665_q65.webp" alt="" loading="lazy"><figcaption>Centrifuge machine operator separating water/non-rubber content from rubber sap.</figcaption></figure>
<h2 id="putting-it-all-to-bed">Putting it All to Bed</h2>

<p>Because rubber is a natural material, it has natural variance. Where factories making synthetic foam can use the exact same formula and process with every batch, there’s a lot of nuance and chemistry that goes into processing our foam. We use our own recipe - one that was created specifically based on our high quality standards and the knowledge of Januka and his team.</p>

<p>First, the centrifuge machine operators separate non-rubber content from the sap and monitor the rubber as it matures. Compounding specialists add binding ingredients, and the foam is aerated to create a unique bubble structure. Then the rubber is vulcanized, changing from a frothy liquid into a bouncy block of foam. The steam used to vulcanize our rubber is maintained by a boiler fed with rubber tree wood. This wood is harvested as part of routine uprooting during the re-plantation process.</p>

<p>The last step before our foam is shipped to our <a href="/blog/making-our-beds-inside-our-chicago-factory">Chicago factory</a> is quality control. Every slab is tested for firmness, durability, and any defects. (People like this job because our foam feels so nice.)</p>

<p><strong>Earthfoam isn’t just any natural foam rubber. We think it’s the best in the world. It’s a material that is ethically sourced and thoughtfully made with the wellbeing of all of our workers and our world in mind.</strong></p>
```

---

### 22. Behind the Dreams: Collaboration (`/blog/behind-the-dreams-our-new-collaboration`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog/behind-the-dreams-our-new-collaboration](https://earthfoam.com/blog/behind-the-dreams-our-new-collaboration)
- **Page Title**: `Behind the Dreams: Our New Collaboration | Earthfoam`
- **Meta Description**: *"You might have seen our recent collaboration on Instagram—miniature worlds created by Aleia Murawski and Sam Copeland from [Beefs World](https://beefsworld.com/). We&#39;re proud of these small, imaginative spaces and want to share the creative effort behind them. Take a look behind the scenes and see the magic that brought these tiny worlds to life."*
- **Scraped HTML File**: [blog__behind-the-dreams-our-new-collaboration.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__behind-the-dreams-our-new-collaboration.html) (21.3 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Behind the Dreams: Our New Collaboration"
- **Key H2 Sections**: "Drifting along the river." | "Float on." | "Related Articles" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<p>When we wanted to launch a new collaboration for 2024, we knew we wanted to do something a bit surrealist and abstract&hellip; really embracing the sleep dreams are made of. That is when we found Beefs World. A creative duo that specializes in making these miniature alternative universes, who in their own words &ldquo;In Beef’s World, anything is possible, and nothing is ever the same.&rdquo;</p>
<figure><img src="/assets/final-stills_1024x576_q65.webp" alt="" loading="lazy"><figcaption>The finished work. View it on our Instagram page.</figcaption></figure>
<p>Seeing their work, we anticipated a great fit, but the fascinating creation process was unexpected. We feel like we owe it to the work to share how it was made.</p>
<figure><img src="/assets/BF_02_1024x831_q65.webp" alt="" loading="lazy"></figure>
<h2 id="drifting-along-the-river">Drifting along the river.</h2>

<p>Since the first two sets covered land and sky, we wanted to do something that involved water&hellip; and what better way to connect an Earthfoam mattress than a lazy river.</p>

<p><strong>&ldquo;We also wanted to build a backrooms-inspired set, something that feels like you&rsquo;re in the middle of a dream, with a lazy river moving through the interior space. This one was unexpectedly hard to film. As the &ldquo;water&rdquo; is clear plastic, it was hard to disguise any of the motion elements, which ultimately ended up being a clear string pulling a magnet from below the &ldquo;river&rdquo; to puppeteer the bed.  It was so much fun for us to create soothing, atmospheric worlds for the Earthfoam mattress to inhabit.&rdquo;</strong></p>

<p>– Aleia Murawski</p>
<figure><img src="/assets/BF_03_1024x831_q65.webp" alt="" loading="lazy"></figure>
<h2 id="float-on">Float on.</h2>

<p>Two of sets were built to feature the mattress floating above a prairie and mountaintop. While this might sound straight-forward, it was incredibly intricate and took a lot of work to make happen.</p>

<p>&ldquo;We wanted to build a miniature Earthfoam mattress and create strange, earthly, cozy sets around the bed. We have always wanted to build a rotating set, and we were thrilled to finally have the perfect project to create this. The mattress is hovering over a wheel of either miniature clouds or miniature grass and trees. We thought the bed being suspended above the world, hovering slightly, felt dreamlike and strange.&rdquo;</p>

<p>– Aleia Murawski</p>
<figure><img src="/assets/BF_04_1024x831_q65.webp" alt="" loading="lazy"></figure>
<p>We could not have been happier with how these turned out. To see the finished products as well as more behind-the-scenes content and video, please visit our <a href="https://www.instagram.com/earthfoam/" rel="nofollow noreferrer noopener">Instagram page</a>.</p>
```

---

### 23. Introducing the Spring Mattress (`/blog/introducing-the-spring-mattress`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog/introducing-the-spring-mattress](https://earthfoam.com/blog/introducing-the-spring-mattress)
- **Page Title**: `Introducing the Spring Mattress | Earthfoam`
- **Meta Description**: *"Combining the best elements of latex foam and spring mattresses"*
- **Scraped HTML File**: [blog__introducing-the-spring-mattress.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__introducing-the-spring-mattress.html) (20.7 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Introducing the Spring Mattress"
- **Key H2 Sections**: "Related Articles" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<figure><img src="/assets/EF_HybridPhotos_Retouch_Step03-01_1024x682_q65.webp" alt="" loading="lazy"></figure><p><strong>For years, we said no.</strong></p>

<p>Every time someone asked if we’d ever make a hybrid mattress, the answer was the same. We already made a simple, great mattress. Why complicate it?</p>

<p>But good questions have a way of lingering. And over time, we started to understand why some people love the feel of a traditional spring mattress. More than that, we came to respect the craft behind making one properly. A high-quality spring mattress isn’t simple. It’s layered. It’s mechanical. It’s sewn, assembled, tufted, and tuned by hand. It’s real work.</p>

<p>Eventually, the idea shifted from &ldquo;why would we&rdquo; to &ldquo;what if we did it right&rdquo;.</p>

<p>So we designed a hybrid that fills a gap in the market without compromising what we believe in: honest materials, real craftsmanship, and long-term durability. No shortcuts. No gimmicks.</p>

<p>We launched the Earthfoam Hybrid Mattress. It’s our take on a traditional mattress—assembled, sewn, and tufted by hand in our factory in Sri Lanka. Built to be supportive, breathable, and genuinely durable. The kind of mattress that feels substantial the moment you see it.</p>
<figure><img src="/assets/EF-SpringsCrossSection-Draft2_1024x575_q65.webp" alt="" loading="lazy"></figure><figure><img src="/assets/Hybrid-Carousel-02_1024x640_q65.webp" alt="" loading="lazy"></figure>
<p><strong>The Specs</strong></p>

<ul>
<li><p>GOTS Certified</p></li>

<li><p>GOLS Certified Latex Foam</p></li>

<li><p>Fair For Life Certified Fair Trade Latex Foam</p></li>

<li><p>Greenguard Gold Certified</p></li>

<li><p>Double-sided (flippable) with zero-glue construction</p></li>

<li><p>8&rdquo; pocket coil unit with ~1,000 coils</p></li>

<li><p>2&rdquo; natural latex foam on each side (4&rdquo; total)</p></li>

<li><p>Organic hemp insulator on both sides</p></li>

<li><p>Organic wool (Wools of New Zealand)</p></li>

<li><p>100% organic cotton brushed twill cover</p></li>

<li><p>Not roll-packed</p></li>

<li><p>Free in-home delivery &amp; setup</p></li>

<li><p>Optional tufted toppers available</p></li>
</ul>

<p><strong>This is not the cheapest mattress we could have made. On purpose.</strong></p>

<p>It’s very different from what we’ve sold before—both in construction and price. We didn’t chase the lowest number. We chased the most value. The materials, the labor, and the build demanded it.</p>
<!-- ... truncated, see full HTML file in docs/scraped_pages/ ... -->
```

---

### 24. Sheep to Sleep: Wools of NZ (`/blog/sheep-to-sleep-working-with-wools-of-new-zealand`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog/sheep-to-sleep-working-with-wools-of-new-zealand](https://earthfoam.com/blog/sheep-to-sleep-working-with-wools-of-new-zealand)
- **Page Title**: `Sheep to Sleep: Working with Wools of New Zealand | Earthfoam`
- **Meta Description**: *"We’re proud to be partnered with a farmer-owned organization putting the power directly in the hands of those shearing the sheep."*
- **Scraped HTML File**: [blog__sheep-to-sleep-working-with-wools-of-new-zealand.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__sheep-to-sleep-working-with-wools-of-new-zealand.html) (21.9 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Sheep to Sleep: Working with Wools of New Zealand"
- **Key H2 Sections**: "Getting to know Wools of New Zealand" | "Going out to pasture" | "Helping farmers go organic" | "Related Articles" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<p>Wool is an important part of every Earthfoam mattress. It creates a cool, soft layer between the natural foam rubber and the cotton cover. We like to think people sleep better on wool made from happy sheep. So it’s always been really important to us to know exactly where our wool comes from.</p>

<p>We source 100% of our organic wool from a farmer-owned collective called Wools of New Zealand.</p>

<h2 id="getting-to-know-wools-of-new-zealand">Getting to know Wools of New Zealand</h2>

<p>Created in response to plummeting wool prices and greedy middlemen, the founders of Wools of New Zealand saw an opportunity. Rather than having to auction wool on an open market (often for pennies on the dollar) they wanted to create direct relationships between farmers and manufacturing partners, like us.</p>

<p>We commit to buying a consistent amount of wool each year at a fixed, fair price, which means the farmers get guaranteed income and avoid being undercut by volatile wool markets. They also get to know exactly where their wool is going and how it’s being used. (And they really like knowing it’s being used in mattresses.)</p>
<figure><img src="/assets/Wools_004_1024x682_q65.webp" alt="" loading="lazy"><figcaption>Sheep herded before a fresh hair cut (shearing).</figcaption></figure>
<h2 id="going-out-to-pasture">Going out to pasture</h2>

<p>After we partnered with Wools of New Zealand, we had the idyllic opportunity to visit the organic farmers producing our wool and learn about the process.</p>

<p>Becoming certified organic in any industry takes time. For sheep farmers, it’s not just about how they treat their animals but also the land that provides their food.</p>

<p>We toured the organic farm of Allan and Sonia Richardson, and saw firsthand how important it is to build healthy biodiversity in the soil. Allan explained that he regularly rotates his animals to new pastures and plants a wide variety of grass and clover to keep the soil healthy. On non-organic farms, it’s not uncommon to find soil completely depleted of nutrients and reliant on synthetic fertilizers.</p>

<p>The health of the sheep is also maintained differently on an organic farm. They don’t over-medicate, but instead use tactics to prevent their animals from getting parasites or infections in the first place, like keeping grass and clover taller so the sheep’s faces are further from the ground.</p>
<figure><img src="/assets/Wools_070_1024x682_q65.webp" alt="" loading="lazy"><figcaption>Allan and Sonia Richardson show Earthfoam employees how rich their organic soil is.</figcaption></figure>
<h2 id="helping-farmers-go-organic">Helping farmers go organic</h2>

<p>Despite it being labor-intensive and expensive to convert a farm to organic, the number of certified organic farms in New Zealand continues to grow.</p>

<p>We like to think partnerships like the one we have with Wools of New Zealand have something to do with it. More farmers are understanding how much better organic practices are for their animals and land. They also get paid more for organic wool, and as part of a collective, those premiums are put straight in their pockets.</p>

<p>Wools of New Zealand also provides exceptional support for farmers making the switch. They have dedicated resources to help rebuild soil health, meet organic standards, complete the dizzying amount of compliance paperwork, and get connected with other organic farmers.</p>
<figure><img src="/assets/Wools_222_1024x682_q65.webp" alt="" loading="lazy"><figcaption>Sheep on Allan and Sonia Richardson's farm.</figcaption></figure>
<p><strong>Being able to source such high-quality wool from such a hardworking and passionate group of people is an important part of what makes Earthfoam feel so good.</strong></p>
```

---

### 25. Inside Chicago Factory (`/blog/making-our-beds-inside-our-chicago-factory`)

- **Category**: `Blog & Stories`
- **Live URL**: [https://earthfoam.com/blog/making-our-beds-inside-our-chicago-factory](https://earthfoam.com/blog/making-our-beds-inside-our-chicago-factory)
- **Page Title**: `Making Our Beds: Inside Our Chicago Factory | Earthfoam`
- **Meta Description**: *"Before your Earthfoam mattress makes its way to you, it is expertly assembled in what is perhaps the Windy City’s coziest warehouse."*
- **Scraped HTML File**: [blog__making-our-beds-inside-our-chicago-factory.html](file:///C:/Users/shahein/Desktop/earthfoamLk/docs/scraped_pages/blog__making-our-beds-inside-our-chicago-factory.html) (22.1 KB)
- **Custom Elements**: `<ef-menu>`, `<ef-marquee>`, `<ef-newsletter-signup>`
- **H1 Headings**: "Making Our Beds: Inside Our Chicago Factory"
- **Key H2 Sections**: "Earthfoam is the result of stubbornly doing things better." | "The Backstory." | "2,000 stitches you can see, 10,000 you can’t." | "Handled with care." | "By people who care a lot." | "Related Articles" | "Sign up for very occasional bedtime reading, updates, and offers."

#### Key Sections & Features:
1. **Editorial Hero**: Large title, published date, author, hero cover photography.
2. **Longform Storytelling Content**: Rich typography, interspersed high-res lifestyle imagery, pull quotes.
3. **Related Articles & Product Teaser**: Cards linking to related stories and relevant products.

#### HTML Structure Preview (First 80 lines of `<main>`):

```html
<h2 id="earthfoam-is-the-result-of-stubbornly-doing-things-better">Earthfoam is the result of stubbornly doing things better.</h2>

<h2 id="the-backstory">The Backstory.</h2>

<p>Our founder, Karl, didn’t know he was destined to make mattresses. First, he made umbrellas. Then custom RV upholstery. Then bean bags! But one day a supplier introduced Karl to natural rubber foam. And Karl was mesmerized. Here was an incredible material - natural, sustainable, durable - and no one seemed to know about it.</p>

<p>He left the bean bag business, called his brother, Ezra, got his own warehouse space in Chicago, and traced the highest quality rubber foam in the world to its source: Sri Lanka.</p>

<p>Karl, Ezra and their partner in Sri Lanka, Januka, were uninspired by the lack of transparency and quality in existing supply chains. They decided they could do better, and now they can’t stop.</p>

<p>Their first mattress company launched in 2013. It grew quickly and won some really nice mattress awards. Since then, piece by piece, they’ve dismantled the entire supply chain and built their own.</p>
<figure><img src="/assets/220715_sleeponlatex-F-1_1024x683_q65.webp" alt="man handling compressed mattress in a warehouse" loading="lazy"><figcaption>Warehouse worker loads Earthfoam Mattress into shipping box.</figcaption></figure>
<h2 id="2-000-stitches-you-can-see-10-000-you-can-t">2,000 stitches you can see, 10,000 you can’t.</h2>

<p>We have 12 talented, full-time sewers at our Chicago factory. They’re responsible for turning our organic wool and cotton into the complex covers we designed for our mattresses and toppers.</p>

<p>Our covers are meticulously sewn to stay cleanly in place without restricting the flexibility of the foam inside. And because rubber foam is so incredibly durable, we needed a cover that could match its longevity. That’s why every Earthfoam mattress has thousands of overlocking stitches, even on interior edges you’ll never see. It’s also why our warehouse manager chose “the most expensive quilting machine we could have bought.” Nice.</p>
<figure><img src="/assets/220715_sleeponlatex-F-2_1024x683_q65.webp" alt="two women handling a mattress" loading="lazy"><figcaption>Two sewing team employees give the mattress cover one last quality check.</figcaption></figure>
<h2 id="handled-with-care">Handled with care.</h2>

<p>When the covers are ready, our warehouse team swoops in. We have 12 full-time warehouse workers who run quality tests, package, and ship each product to its new home. We’re working toward plastic-free packaging, and currently our mattresses are compression-wrapped in paper and our pillows are packed in biodegradable bags. (Our toppers are still packaged in plastic, but hopefully not for long.)</p>

<p>One of the benefits of controlling our own supply chain is that every mattress that leaves our warehouse is traceable back to its source; down to the exact rubber tree forest and sheep farm.</p>

<h2 id="by-people-who-care-a-lot">By people who care a lot.</h2>

<p>Making natural rubber mattresses is a labor intensive process involving a lot of people. But by building our own supply chain, working <em>directly with farmers</em>, using <em>our own factories</em>, and selling directly to our customers, we’ve created a higher-quality product made by highly-paid workers with a much lower price tag.</p>

<p>Everyone at our Chicago factory is given competitive pay, 401k matching, paid time off, health insurance, dental insurance… the works.</p>

<p><strong>Our organic materials are chosen for their comfort, durability, and safety.</strong></p>

<p><strong>They’re collected and processed with reverence to the people, places, and animals that make it possible.</strong></p>

<p><strong>And they’re made into mattresses, one at a time, in this small Midwest factory filled with pride.</strong></p>

<p><a href="/products">Want us to make something comfy for you? Start shopping</a>.</p>
```

---

## 4. Implementation Strategy & Roadmap for Sri Lanka Website (`earthfoamLk`)

### Phase 1: Core E-Commerce Foundation & Product Catalog (PDPs)
- **Routes to implement**:
  - `/products` (Catalog overview grid)
  - `/products/mattress` (The Foam Mattress PDP)
  - `/products/topper` (The Mattress Topper PDP)
  - `/products/spring-mattress` (The Spring Mattress PDP)
  - `/products/pillow` (The Pillow PDP)
- **Key Deliverables**:
  - Product configurator (Size: Single, Double, Queen, King in Sri Lankan sizing + US standards)
  - Sri Lankan Rupees pricing (`Rs.`)
  - Image gallery / lightbox
  - Interactive layer cutaway diagrams
  - Review ratings and spec tables

### Phase 2: Brand Story & Company Pages
- **Routes to implement**:
  - `/about` (The Story of Earthfoam & Sri Lankan Rubber Heritage)
  - `/contact` (Local Sri Lankan customer care, showroom address, email)
  - `/cart` (Shopping cart drawer & checkout funnel)

### Phase 3: Help, Certifications & Trust Pages
- **Routes to implement**:
  - `/help/common-questions`
  - `/help/shipping-and-returns` (Island-wide Sri Lanka delivery info)
  - `/help/certifications` (GOLS organic latex, GOTS organic cotton, OEKO-TEX, Eco-Institut)
  - `/help/mattress-warranty` (10-Year Local & Global Warranty)
  - `/help/mattress-topper-warranty` & `/help/pillow-warranty`

### Phase 4: Journal / Blog & Sourcing Stories
- **Routes to implement**:
  - `/blog` (Journal Index)
  - `/blog/sourcing-our-foam-the-story-of-sri-lanka` (Featuring local rubber tappers & estate farmers in Sri Lanka)
  - `/blog/behind-the-dreams-our-new-collaboration`
  - `/blog/introducing-the-spring-mattress`
  - `/blog/sheep-to-sleep-working-with-wools-of-new-zealand`
  - `/blog/making-our-beds-inside-our-chicago-factory`

---
*Documentation generated automatically from live scrape of earthfoam.com.*
