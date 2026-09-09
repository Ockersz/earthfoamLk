import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def set_cell_background(cell, hex_color):
    """Sets background color for a table cell."""
    tcPr = cell._tc.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{hex_color}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    """Sets cell internal padding."""
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def add_callout(doc, title, text, bg_color="F4F6F4", border_color="2E5A44"):
    """Adds a stylish callout box."""
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    cell = table.cell(0, 0)
    cell.width = Inches(6.5)
    set_cell_background(cell, bg_color)
    set_cell_margins(cell, top=140, bottom=140, left=200, right=200)
    
    # Left border
    tcPr = cell._tc.get_or_add_tcPr()
    borders = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:left w:val="single" w:sz="24" w:space="0" w:color="{border_color}"/><w:top w:val="none"/><w:right w:val="none"/><w:bottom w:val="none"/></w:tcBorders>')
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(4)
    run_t = p.add_run(f"★ {title}\n")
    run_t.font.bold = True
    run_t.font.size = Pt(11)
    run_t.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    run_b = p.add_run(text)
    run_b.font.size = Pt(10)
    run_b.font.color.rgb = RGBColor(0x33, 0x33, 0x33)

def style_table(table, col_widths, headers, data, header_bg="2E5A44"):
    """Styles a standard data table with headers and alternating row colors."""
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    # Header Row
    hdr_cells = table.rows[0].cells
    for i, title in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        set_cell_background(hdr_cells[i], header_bg)
        set_cell_margins(hdr_cells[i], top=120, bottom=120, left=140, right=140)
        p = hdr_cells[i].paragraphs[0]
        p.paragraph_format.space_before = Pt(2)
        p.paragraph_format.space_after = Pt(2)
        run = p.add_run(title)
        run.font.bold = True
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        
    # Data Rows
    for row_idx, row_data in enumerate(data):
        row = table.add_row()
        bg = "FAFAFA" if row_idx % 2 == 1 else "FFFFFF"
        for col_idx, cell_value in enumerate(row_data):
            cell = row.cells[col_idx]
            cell.width = col_widths[col_idx]
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=100, bottom=100, left=140, right=140)
            p = cell.paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            run = p.add_run(str(cell_value))
            run.font.size = Pt(9)
            run.font.color.rgb = RGBColor(0x2D, 0x29, 0x26)

def build_document():
    doc = docx.Document()
    
    # Page setup - 0.75 in margins
    for section in doc.sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)
        
    # Base Normal Style
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Segoe UI'
    normal_style.font.size = Pt(10)
    normal_style.font.color.rgb = RGBColor(0x2D, 0x29, 0x26)
    
    # ─────────────────────────────────────────────────────────────────────────
    # DOCUMENT COVER / HEADER
    # ─────────────────────────────────────────────────────────────────────────
    p_title = doc.add_paragraph()
    p_title.paragraph_format.space_before = Pt(10)
    p_title.paragraph_format.space_after = Pt(4)
    run_title = p_title.add_run("Earthfoam Sri Lanka (Earthfoam.lk)")
    run_title.font.size = Pt(24)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    p_sub = doc.add_paragraph()
    p_sub.paragraph_format.space_before = Pt(0)
    p_sub.paragraph_format.space_after = Pt(16)
    run_sub = p_sub.add_run("Complete Website Architecture, Content & Media Specification Document")
    run_sub.font.size = Pt(14)
    run_sub.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    
    # Metadata Box
    add_callout(
        doc,
        "Site Overview & Core Information",
        "• Brand: Earthfoam Sri Lanka | Website: Earthfoam.lk\n"
        "• Company Entity: Earthfoam (Pvt) Ltd (HEPZ BOI, Poruwadanda, Horana)\n"
        "• Flagship Showroom: No 45, Dharmapala Mawatha, Colombo 03, Sri Lanka (Open 7 Days, 10 AM – 6 PM)\n"
        "• Contact: Phone: +94 114 245 245 | Email: info@earthfoam.lk / info@earthfoam.lk\n"
        "• Product Range: Organic Latex Mattress, Spring Hybrid Mattress, Latex Topper, Natural Pillow\n"
        "• Certifications: GOLS (Organic Latex), GOTS (Organic Cotton/Wool), Oeko-Tex® 100, Fair for Life",
        bg_color="F5F9F6",
        border_color="2E5A44"
    )
    
    doc.add_paragraph().paragraph_format.space_after = Pt(12)
    
    # ─────────────────────────────────────────────────────────────────────────
    # TABLE OF CONTENTS SUMMARY
    # ─────────────────────────────────────────────────────────────────────────
    p_toc_head = doc.add_heading(level=1)
    r = p_toc_head.add_run("Table of Pages & Architecture")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    toc_data = [
        ["1. Home Page", "/", "Homepage with brand hero slideshow, product catalog, press quotes, story teaser, 2-up media, customer trust accordion, and video reviews."],
        ["2. Story Page", "/about", "In-depth brand narrative, Sri Lankan rubber forest origins, 323 smallholder farmers network, interactive 'Why latex' stacked reveal, and production video."],
        ["3. Journal (Blog Index)", "/blog", "Curated editorial stories, journal grid, and featured articles covering foam sourcing, sustainable manufacturing, and hybrid mattress craftsmanship."],
        ["4. Journal Article 1", "/blog/sourcing-our-foam-the-story-of-sri-lanka", "Story of tracing rubber sap to Sri Lanka, building a 323-farmer Fair For Life network, and Horana factory operations."],
        ["5. Journal Article 2", "/blog/introducing-the-spring-mattress", "Launch of the handcrafted Earthfoam Spring Hybrid Mattress with pocket coil unit, hemp insulators, and natural latex layers."],
        ["6. Journal Article 3", "/blog/behind-the-dreams-our-new-collaboration", "Artistic creative collaboration with Beefs World featuring surreal miniature sets and handcrafted sleep dreamscapes."],
        ["7. Journal Article 4", "/blog/making-our-beds-inside-our-chicago-factory", "Master craftsmanship, 12,000 precision stitches, living-wage factory production, and meticulous cover tailoring."],
        ["8. Journal Article 5", "/blog/sheep-to-sleep-working-with-wools-of-new-zealand", "Ethical organic wool sourcing, certified farmer collectives, sustainable land management, and cruelty-free shearing."],
        ["9. Certifications Page", "/help/certifications", "Verified third-party health, environmental, and ethical standards: GOTS, Oeko-Tex Standard 100, GOLS, and Fair for Life."],
        ["10. Shipping & Returns", "/help/shipping-and-returns", "Sri Lanka nationwide free delivery policies, Colombo 4-day delivery timeline, satisfaction trial periods, and return procedures."],
        ["11. Common Questions", "/help/common-questions", "Full interactive FAQ accordion across 5 key categories: Shipping, Returns, Payment, Earthfoam (the foam), and Products."],
        ["12. Contact Us Page", "/contact", "Flagship showroom hours (7 days, 10 AM - 6 PM), customer phone line (+94 114 245 245), support email, factory and showroom addresses."],
        ["13. Global Navigation & Footer", "Global Component", "Persistent side menu drawer with brand mark, footer marquee, Sinhala cultural tagline, newsletter subscription, and copyright metadata."]
    ]
    
    toc_table = doc.add_table(rows=1, cols=3)
    style_table(toc_table, [Inches(1.8), Inches(1.4), Inches(3.3)], ["Page Name", "Route / URL", "Summary & Scope"], toc_data)
    
    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 1: HOME PAGE
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("1. Home Page")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /\n• Page Title: Earthfoam\n• Purpose: Brand introduction, product catalog display, social proof, story teasers, and purchase orientation.")
    
    doc.add_heading(level=2).add_run("1.1 Images & Media Assets Used on Home Page")
    home_images = [
        ["Hero Slide 1", "Home_hero_full_01_1280x800_q93.webp", "1280x800, 2560x1600", "Top Hero Slideshow", "Full-bleed lifestyle image of organic Earthfoam mattress"],
        ["Hero Slide 2", "Home_hero_full_02_1280x800_q93.webp", "1280x800, 2560x1600", "Top Hero Slideshow", "Cozy bedroom interior with Earthfoam bed and natural lighting"],
        ["Hero Slide 3", "Home_hero_34_1280x800_q93.webp", "1280x800, 2560x1600", "Top Hero Slideshow", "Detailed perspective of mattress corner and organic cotton cover"],
        ["Mattress Card (Default)", "Home_ProdTile_Mattress_Default_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Front view of Earthfoam Organic Latex Mattress"],
        ["Mattress Card (Hover)", "Home_ProdTile_Mattress_Hover_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Stylized hover angle of mattress with bedding"],
        ["Topper Card (Default)", "Home_ProdTile_Topper_Default_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Organic latex topper flat layout"],
        ["Topper Card (Hover)", "Home_ProdTile_Topper_Hover_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Topper layered on mattress showcasing softness"],
        ["Pillow Card (Default)", "Home_ProdTile_Pillow_Default_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Natural rubber molded pillow with organic cover"],
        ["Pillow Card (Hover)", "Home_ProdTile_Pillow_Hover_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Pillow in relaxed bedtime setting"],
        ["Spring Mattress (Default)", "Home_ProdTile_Hybrid_Default_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Hybrid Spring Mattress full profile"],
        ["Spring Mattress (Hover)", "Home_ProdTile_Hybrid_Hover_1280x1280_q93.webp", "1280x1280", "Product Catalog Grid", "Close-up corner detailing hand-tufted hybrid structure"],
        ["Press: Apt Therapy", "Press-Logo_AptTherapy_320x97_q93.webp", "320x97", "Press Quote Carousel", "Apartment Therapy publication logo"],
        ["Press: Oprah Daily", "Press-Logo_OprahDaily_320x116_q93.webp", "320x116", "Press Quote Carousel", "Oprah Daily publication logo"],
        ["Press: The Good Trade", "Press-Logo_GoodTrade_320x59_q93.webp", "320x59", "Press Quote Carousel", "The Good Trade publication logo"],
        ["Press: Hunker", "Press-Logo_Hunker_320x142_q93.webp", "320x142", "Press Quote Carousel", "Hunker publication logo"],
        ["Press: Inhabitat", "Press-Logo_Inhabitat_320x39_q93.webp", "320x39", "Press Quote Carousel", "Inhabitat publication logo"],
        ["Story 2-Up (Left Image)", "Home_2up_left_1280x1719_q93.webp", "1280x1719", "Two-Up Media Section", "Rubber tapper at work in Sri Lankan forest"],
        ["Story 2-Up (Right Video)", "EF_Hero_horiz_512x288_crf18.mp4", "512x288 MP4 Video", "Two-Up Media Section", "Video: From tree tapping to foam baking in Horana factory"],
        ["Feature Carousel 1", "prodzoom-matt02_1280x828_q93.webp", "1280x828", "Zoom Carousel", "Close-up zoom of organic cotton quilt stitching"],
        ["Feature Carousel 2", "Home_hero_13_1280x800_q93.webp", "1280x800", "Zoom Carousel", "Natural rubber core cross-section view"],
        ["Feature Carousel 3", "Home_zoom_full_01_1280x800_q93.webp", "1280x800", "Zoom Carousel", "Full mattress edge tufting & corner construction"],
        ["Review Video 1", "EFTV_SNAILWORLD_PRAIRIE01_250x444_crf18.mp4", "250x444 Video", "Social Review Rail", "Beef's World artistic dreamscape video"],
        ["Review Video 2", "EF_2026_FEB_THEKLA_1080x1920.mp4", "250x444 Video", "Social Review Rail", "Thekla Hutyrova falling onto plush Earthfoam mattress"],
        ["Review Video 3", "Video Aug 21 2023, 11 02 41 AM.mp4", "250x444 Video", "Social Review Rail", "Cecily Hennigan acoustic performance on bed"]
    ]
    
    tbl = doc.add_table(rows=1, cols=5)
    style_table(tbl, [Inches(1.2), Inches(1.8), Inches(1.0), Inches(1.2), Inches(1.3)], ["Section", "File Asset Name", "Resolution", "Location", "Description"], home_images)
    
    doc.add_heading(level=2).add_run("1.2 Page Content & Copy Structure")
    
    doc.add_heading(level=3).add_run("A. Hero Section")
    doc.add_paragraph(
        "• Eyebrow: A story to read before bed\n"
        "• Headline: The sleep dreams are made of. (with wave animated text)\n"
        "• Mobile Action CTA: [Shop Now] (links to /products)"
    )
    
    doc.add_heading(level=3).add_run("B. Brand Quality Marquee Band")
    doc.add_paragraph("Repeating Infinite Ticker: It comes from a tree • It's oh so springy • It's comfortable • It's durable • It's sustainable • It's safe")
    
    doc.add_heading(level=3).add_run("C. Introduction Header")
    doc.add_paragraph(
        "• Heading: Climb into a comfy, bouncy, supportive, organic, sustainable mattress made to last.\n"
        "• Sub-link: Yawn, stretch, shop all. (links to /products)"
    )
    
    doc.add_heading(level=3).add_run("D. Product Catalog Grid")
    prod_data = [
        ["Organic Mattress", "Naturally cool with cushiony support.", "From Rs. 240,000", "/products/mattress"],
        ["Topper", "A squishy layer of natural rubber to make a firm mattress softer", "From Rs. 105,000", "/products/topper"],
        ["Pillow", "A smaller bed for your head", "From Rs. 30,000", "/products/pillow"],
        ["Spring Mattress", "A spring mattress done right.", "From Rs. 420,000", "/products/spring-mattress"]
    ]
    p_tbl = doc.add_table(rows=1, cols=4)
    style_table(p_tbl, [Inches(1.5), Inches(2.5), Inches(1.2), Inches(1.3)], ["Product Name", "Description Tagline", "Sri Lanka Pricing", "Link"], prod_data)
    
    doc.add_heading(level=3).add_run("E. Press & Editorial Quotes Carousel")
    doc.add_paragraph(
        "1. Apartment Therapy: \"If you're looking for a firm-but-not-too-firm, built-to-last, not-overly-thick organic mattress topper that can make any bed feel brand new, night after night, this is the one.\"\n"
        "2. Oprah Daily: \"I move around a lot during the night, so no matter what position I end up in—side, back, or stomach—it keeps me comfy.\"\n"
        "3. The Good Trade: \"It’s a dream for those of us who need extra head support — no more folding floppy pillows in half!\"\n"
        "4. Hunker: \"I genuinely didn't think it was possible for a pillow to dethrone my go-to pillow, but it turns out I was just missing out on Earthfoam.\"\n"
        "5. Inhabitat: \"Earthfoam conforms to your body but without that ‘sinking’ feeling you get with other foam mattresses.\""
    )
    
    doc.add_heading(level=3).add_run("F. Story Teaser & Media")
    doc.add_paragraph(
        "• Eyebrow: What is Earthfoam\n"
        "• Heading: Good sleep grows on trees.\n"
        "• Body: Earthfoam starts as the milky sap of organic rubber trees in Sri Lanka. When shaped and baked, it's delightfully springy, comfortable, durable, safe, and sustainable.\n"
        "• CTA Button: [Our Story] (links to /about)\n"
        "• Video Feature: \"From tree to sleep. Watch how Earthfoam is made from the tapping of the rubber trees, to the vulcanization process, finally cut into foam blocks.\""
    )
    
    doc.add_heading(level=3).add_run("G. Customer Trust Accordion")
    doc.add_paragraph(
        "• Heading: We want shopping for an Earthfoam mattress to be as nice as sleeping on one.\n"
        "1. Free Delivery: We deliver islandwide across Sri Lanka for free.\n"
        "2. 100 Night Trial: Our mattresses and toppers can be returned for free within 100 days of delivery. No questions asked.\n"
        "3. 10 Year Warranty: Our mattresses and toppers are backed by a comprehensive 10-year warranty."
    )
    
    doc.add_heading(level=3).add_run("H. Social Video Reviews & Footer")
    doc.add_paragraph(
        "• Heading: Meet the bed your mind, body, and soul have been dreaming about. (@earthfoam)\n"
        "• Video 1: Dreamscapes created by Beef's World\n"
        "• Video 2: Fall onto a mattress with Thekla Hutyrova\n"
        "• Video 3: Song by Cecily Hennigan\n"
        "• Footer Trust Marquee: Free Shipping • 100-Day Trial • Free Returns • 10-Year Warranty\n"
        "• Sinhala Tagline: Harvested in Sri Lanka. / ශ්‍රී ලංකාවේ අස්වනු නෙලනු ලැබේ.\n"
        "• Copyright: Copyright © 2025 Earthfoam (Pvt) Ltd. All Rights Reserved."
    )

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 2: STORY / ABOUT US
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("2. Story Page (About Us)")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /about\n• Page Title: About | Earthfoam\n• Purpose: Comprehensive brand storytelling, ethical fair-trade supply chain transparency, organic rubber forestry, and production ethics.")
    
    doc.add_heading(level=2).add_run("2.1 Images & Media Assets on Story Page")
    about_images = [
        ["Hero Image 1", "PDP_MATTRESS_HERO04_1280x800_q93.webp", "1280x800, 2560x1600", "Top Hero Showcase", "Lifestyle presentation of Earthfoam organic mattress"],
        ["Hero Image 2", "PDP_MATTRESS_SUBHERO_1280x800_q93.webp", "1280x800, 2560x1600", "Mid-Page Feature", "Close up of pure latex foam and cotton quilting"],
        ["Sri Lanka Forest Image", "EF-Blog-October-Website-01_1280x1678_q93.webp", "1280x1678, 2560x3357", "Forest Origin Section", "Rich biodiversity of certified organic rubber tree forest in Sri Lanka"],
        ["Story Video", "EFTV_03_JoshKalu_SheistySolo_250x444_crf18.mp4", "250x444 Video", "Bottom Story Reel", "Feature video by Josh Kalu / @shi333sty with subtitles"],
        ["Video Poster", "Sheisty-Thumb02_500x888_q93.webp", "500x888", "Video Placeholder", "Poster frame thumbnail for video player"]
    ]
    tbl_a = doc.add_table(rows=1, cols=5)
    style_table(tbl_a, [Inches(1.2), Inches(2.0), Inches(1.0), Inches(1.1), Inches(1.2)], ["Asset Name", "File Asset Name", "Resolution", "Location", "Description"], about_images)
    
    doc.add_heading(level=2).add_run("2.2 Page Content & Copy Structure")
    
    doc.add_heading(level=3).add_run("A. Header & Intro")
    doc.add_paragraph(
        "• Title: Hello, Sleepyhead.\n"
        "• Subtitle: We’re the people of Earthfoam: an independent, family-owned company making mattresses delightful from tree and sheep to shop and sleep.\n"
        "• Focal Callout: We make a mattress, a topper, and a pillow out of our dream material: Natural latex."
    )
    
    doc.add_heading(level=3).add_run("B. Interactive 'Why Latex?' Stacked Reveal")
    doc.add_paragraph(
        "Progressive opacity reveal on scroll:\n"
        "1. It comes from a tree.\n"
        "2. It's oh so springy.\n"
        "3. It's comfortable.\n"
        "4. It's durable.\n"
        "5. It's sustainable.\n"
        "6. It's safe.\n"
        "• Concluding Note: No wonder it used to be the standard in mattresses until cheaper synthetic alternatives all but replaced it."
    )
    
    doc.add_heading(level=3).add_run("C. Sri Lanka Forest & Farmer Network Narrative")
    doc.add_paragraph(
        "• Heading: Deep in the forests of Sri Lanka, shading the dappled forest floor, are the rubber trees that give our mattresses their comfy bounce.\n"
        "• Paragraph 1: In our quest to create the perfect latex foam, we traced the highest quality raw materials to their source. Sri Lanka has one of the oldest rubber tree industries in the world, but we weren’t satisfied with the lack of transparency of existing latex suppliers.\n"
        "• Paragraph 2: We have a true relationship with the people who work on our products. We built our own fair trade network of 323 individual small farmers employing more than 1,200 workers (and counting). Every one of these farms is GOLS certified organic, which reduces water and energy use and boosts the biodiversity of the forests. (An endangered purple faced monkey was recently spotted on one of our rubber tree farms!)\n"
        "• Paragraph 3: We process the latex at our own factory in Sri Lanka, so we know it doesn’t contain fillers or fire retardants and all of our workers earn a living wage.\n"
        "• CTA Button: [Our Fair Trade Network] (links to /blog/sourcing-our-foam-the-story-of-sri-lanka)"
    )
    
    doc.add_heading(level=3).add_run("D. Story Video Feature")
    doc.add_paragraph(
        "• Heading: This is the story of Earthfoam. A story to read before bed. Before choosing a bed.\n"
        "• Social Link: @earthfoam (https://instagram.com/earthfoam)\n"
        "• Video Credit: Video featuring @shi333sty"
    )

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 3: JOURNAL (BLOG INDEX)
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("3. Journal Page (Blog Index)")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /blog\n• Page Title: Our Journal | Earthfoam\n• Purpose: Editorial hub highlighting organic agriculture, factory craftsmanship, and product innovation stories.")
    
    doc.add_heading(level=2).add_run("3.1 Journal Articles & Media Overview")
    blog_images = [
        ["Featured Post Hero", "EF-Blog-October-Website-01_640x839_q93.webp", "640x839, 1280x1678", "Featured Header", "Rubber plantation forest in Sri Lanka (4 min read)"],
        ["Card: Spring Mattress", "EF-HybridSprings2025_640x822_q93.webp", "640x822, 1280x1645", "Article Grid Card 1", "Pocket springs unit with natural latex layers"],
        ["Card: Beefs World", "EF-Prairie2024_640x822_q93.webp", "640x822, 1280x1645", "Article Grid Card 2", "Miniature surreal floating bed prairie scene"],
        ["Card: Sri Lanka Factory", "EF-Blog-October-Website-04_640x822_q93.webp", "640x822, 1280x1645", "Article Grid Card 3", "Factory technician assembling organic mattress covers"],
        ["Card: Organic Wool", "EF-Blog-October-Website-03_640x822_q93.webp", "640x822, 1280x1645", "Article Grid Card 4", "Sheep grazing on certified biodiverse organic pasture"]
    ]
    tbl_b = doc.add_table(rows=1, cols=5)
    style_table(tbl_b, [Inches(1.5), Inches(1.8), Inches(1.0), Inches(1.1), Inches(1.1)], ["Article Link", "Thumbnail File", "Resolution", "Position", "Visual Subject"], blog_images)
    
    doc.add_heading(level=2).add_run("3.2 Header Copy & Article Directory")
    doc.add_paragraph(
        "• Eyebrow: Light Reading\n"
        "• Heading: Our Journal\n"
        "• Subtitle: We love a good story. From falling in love with latex to tapping trees to founding fair trade networks, we have a lot of them to tell.\n"
        "\n"
        "• Featured Post: Sourcing Our Foam: The Story of Sri Lanka (4 minute read)\n"
        "• Grid Article 1: Introducing the Spring Mattress (2 minute read)\n"
        "• Grid Article 2: Behind the Dreams: Our New Collaboration (2 minute read)\n"
        "• Grid Article 3: Making Our Beds: Inside Our Sri Lankan Factory (3 minute read)\n"
        "• Grid Article 4: Sheep to Sleep: Working with Wools of certified farmers around the world (3 minute read)"
    )

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGES 4 - 8: INDIVIDUAL JOURNAL ARTICLES
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("4. Individual Journal Articles")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    articles_detail = [
        {
            "num": "4.1",
            "title": "Sourcing Our Foam: The Story of Sri Lanka",
            "slug": "/blog/sourcing-our-foam-the-story-of-sri-lanka",
            "readTime": "4 minute read",
            "subtitle": "We went straight to the source and partnered with local experts to build our own fair trade network and foam rubber factory.",
            "hero_img": "EF-Blog-October-Website-01_640x839_q93.webp (640x839, 1280x1678)",
            "images": [
                ["DSC_2521_1024x683_q65.webp", "A tree tapper collects rubber sap by making a small cut into the rubber tree."],
                ["Mattress Remove_1024x683_q65.webp", "Earthfoam factory workers remove Earthfoam from a mold."],
                ["DSC_2559_1024x684_q65.webp", "Biodiversity thrives around organic rubber trees in Sri Lanka."],
                ["WhatsApp Image 2020-12-01 at 11.43.14 AM_1024x665_q65.webp", "Centrifuge machine operator separating water/non-rubber content from rubber sap."]
            ],
            "sections": [
                ("The Process", "Natural foam rubber is pretty amazing, really. Take milky sap from a rubber tree, spin it really fast to get the water out, mix it with small amounts of compounds to help the molecules bind together, pour it into a mold, bake it at 212 degrees for an hour, and ta-da: you have a squishy white square you can sleep on.\n\nWhen we first got into bedding, we traced the highest-quality natural rubber in the world to its source: Sri Lanka. We partnered with a local rubber supplier and specialist, Januka Karunasena, and cut out the middlemen to source our foam from him directly."),
                ("Our Fair Trade Network", "Rubber tree forests are beautiful and highly sustainable. One tree can supply sap (liquid latex) for over 20 years and rubber trees have one of the highest carbon dioxide absorption rates. When we first started sourcing it, the rubber industry in Sri Lanka was dying. It was hard for farmers to compete with cheaper crops.\n\nWith Januka spearheading the project, we built a Fair For Life certified fair trade network of 323 small organic rubber farmers. It's the largest in Sri Lanka, employing more than 1,700 workers. And we've been able to ensure fair wages and working conditions for all of them.\n\n\"I led a team to turn a declining natural foam rubber business into one that is sustainable and grows.\" – Januka Karunasena, CEO"),
                ("The Earthfoam Factory", "After we collect rubber tree sap from our fair trade network of farmers, it's processed at our factory in Horana, Sri Lanka. It's the only place in the world that makes Earthfoam.\n\nMaking foam rubber in the same place it's harvested has reduced energy and transportation costs and allowed us to have a greater impact on our workers. We have 200 people working at our factory, ranging from highly experienced foam rubber experts to construction workers who helped build the factory and wanted to stick around and learn how to make mattresses instead.\n\n\"I am very happy to be a part of this factory. We make a good product not only for us but for the rest of the world. And we're in beautiful surroundings.\" – Manjula Kumara, Executive: Foam Production"),
                ("Putting it All to Bed", "Because rubber is a natural material, it has natural variance. Compounding specialists add binding ingredients, and the foam is aerated to create a unique bubble structure. Then the rubber is vulcanized, changing from frothy liquid into a bouncy block of foam. The steam used to vulcanize our rubber is maintained by a boiler fed with rubber tree wood from routine uprooting during replantation.\n\nEarthfoam isn't just any natural foam rubber. We think it's the best in the world.")
            ]
        },
        {
            "num": "4.2",
            "title": "Introducing the Spring Mattress",
            "slug": "/blog/introducing-the-spring-mattress",
            "readTime": "2 minute read",
            "subtitle": "Combining the best elements of latex foam and spring mattresses",
            "hero_img": "EF-HybridSprings2025_640x822_q93.webp (640x822, 1280x1645)",
            "images": [
                ["EF_HybridPhotos_Retouch_Step03-01_1024x682_q65.webp", "Hand-tufted finish on the new hybrid spring mattress"],
                ["EF-SpringsCrossSection-Draft2_1024x575_q65.webp", "Internal architectural cross section of coils, hemp insulators, and latex"],
                ["Hybrid-Carousel-02_1024x640_q65.webp", "Side profile of double-sided flippable spring mattress"]
            ],
            "sections": [
                ("The Design Philosophy", "For years, we said no. Every time someone asked if we'd ever make a hybrid mattress, the answer was the same: We already made a simple, great mattress. Why complicate it?\n\nEventually, the idea shifted from 'why would we' to 'what if we did it right'. A high-quality spring mattress isn't simple. It's layered, mechanical, sewn, assembled, tufted, and tuned by hand.\n\nWe launched the Earthfoam Hybrid Mattress. Built to be supportive, breathable, and genuinely durable."),
                ("The Specifications", "• GOTS Certified Organic Fibers\n• GOLS Certified Natural Latex Foam\n• Fair For Life Certified Fair Trade Latex Foam\n• Greenguard Gold Certified for low chemical emissions\n• Double-sided (flippable) with zero-glue construction\n• 8\" pocket coil unit with ~1,000 individually wrapped coils\n• 2\" natural latex foam on each side (4\" total)\n• Organic hemp insulator on both sides\n• Organic wool cushioning layer\n• 100% organic cotton brushed twill cover\n• Not roll-packed — delivered in full form with free in-home delivery & setup\n• Optional tufted toppers available"),
                ("Honest Value", "This is not the cheapest mattress we could have made. On purpose. Doing a hybrid right means respecting the craft, the components, and the people assembling it.")
            ]
        },
        {
            "num": "4.3",
            "title": "Behind the Dreams: Our New Collaboration",
            "slug": "/blog/behind-the-dreams-our-new-collaboration",
            "readTime": "2 minute read",
            "subtitle": "Miniature worlds created by Aleia Murawski and Sam Copeland from Beefs World.",
            "hero_img": "EF-Prairie2024_640x822_q93.webp (640x822, 1280x1645)",
            "images": [
                ["final-stills_1024x576_q65.webp", "The finished artistic diorama featuring floating Earthfoam bed"],
                ["BF_02_1024x831_q65.webp", "Behind the scenes: building miniature river channels and acrylic currents"],
                ["BF_03_1024x831_q65.webp", "Lighting and puppeteering the floating mattress over translucent waters"],
                ["BF_04_1024x831_q65.webp", "Rotating cloud wheel suspending the miniature bed above dreamscape landscapes"]
            ],
            "sections": [
                ("Creative Concept", "When we wanted to launch a new collaboration, we wanted to do something surrealist and abstract… embracing the sleep dreams are made of. That is when we found Beefs World — a creative duo that specializes in making miniature alternative universes."),
                ("Drifting Along the River", "\"We wanted to build a backrooms-inspired set, something that feels like you're in the middle of a dream, with a lazy river moving through the interior space. It was so much fun for us to create soothing, atmospheric worlds for the Earthfoam mattress to inhabit.\" – Aleia Murawski"),
                ("Float On", "\"We wanted to build a miniature Earthfoam mattress hovering over a wheel of miniature clouds or grass and trees. We thought the bed being suspended above the world felt dreamlike and strange.\" – Aleia Murawski")
            ]
        },
        {
            "num": "4.4",
            "title": "Making Our Beds: Inside Our Sri Lankan Factory",
            "slug": "/blog/making-our-beds-inside-our-chicago-factory",
            "readTime": "3 minute read",
            "subtitle": "Before your Earthfoam mattress makes its way to you, it is expertly assembled in our factory.",
            "hero_img": "EF-Blog-October-Website-04_640x822_q93.webp (640x822, 1280x1645)",
            "images": [
                ["220715_sleeponlatex-F-1_1024x683_q65.webp", "Warehouse worker carefully preparing Earthfoam mattress for packaging."],
                ["220715_sleeponlatex-F-2_1024x683_q65.webp", "Two sewing team employees give the mattress cover one last quality check."]
            ],
            "sections": [
                ("The Backstory", "Our founder, Karl, didn't know he was destined to make mattresses. First, he made umbrellas. Then custom RV upholstery. Then bean bags! But one day a supplier introduced Karl to natural rubber foam. Karl was mesmerized by this natural, sustainable, durable material.\n\nHe called his brother, Ezra, and traced the highest quality rubber foam in the world to its source: Sri Lanka. Karl, Ezra and their partner in Sri Lanka, Januka, dismantled the entire opaque supply chain and built their own vertically integrated facility."),
                ("2,000 Stitches You Can See, 10,000 You Can't", "We have 12 talented, full-time sewers at our factory. They're responsible for turning our organic wool and cotton into complex covers. Because rubber foam is so incredibly durable, we needed a cover that could match its longevity. That's why every Earthfoam mattress has thousands of overlocking stitches, even on interior edges you'll never see."),
                ("Handled With Care & Dignity", "When the covers are ready, our warehouse team swoops in. Every mattress that leaves our factory is traceable back to its source; down to the exact rubber tree forest and sheep farm.\n\nEveryone at our factory is given competitive pay, paid time off, health insurance… the works. They're made into mattresses, one at a time, in our factory filled with pride.")
            ]
        },
        {
            "num": "4.5",
            "title": "Sheep to Sleep: Working with Wools of certified farmers around the world",
            "slug": "/blog/sheep-to-sleep-working-with-wools-of-new-zealand",
            "readTime": "3 minute read",
            "subtitle": "We're proud to be partnered with certified farmer collectives putting the power directly in the hands of those shearing the sheep.",
            "hero_img": "EF-Blog-October-Website-03_640x822_q93.webp (640x822, 1280x1645)",
            "images": [
                ["Wools_004_1024x682_q65.webp", "Sheep herded before a fresh haircut (shearing)."],
                ["Wools_070_1024x682_q65.webp", "Farmers show Earthfoam representatives the rich, nutrient-dense organic soil."],
                ["Wools_222_1024x682_q65.webp", "Sheep grazing peacefully on pasture."]
            ],
            "sections": [
                ("Getting to Know Farmer Collectives", "Wool is an important part of every Earthfoam mattress. It creates a cool, soft layer between the natural foam rubber and the cotton cover. We source 100% of our organic wool from farmer-owned collectives.\n\nRather than having to auction wool on volatile open markets for pennies on the dollar, direct relationships provide fixed, fair prices, guaranteed income, and complete supply chain transparency."),
                ("Going Out to Pasture", "Becoming certified organic in sheep farming is about animal treatment and pasture biodiversity. Farmers rotate animals to new pastures and plant diverse clover and grasses, keeping sheep healthy without excessive medication or chemical fertilizers."),
                ("Helping Farmers Go Organic", "Farmer collectives provide dedicated agronomy support to help rebuild soil health and meet strict GOTS organic standards. Sourcing high-quality wool from passionate people makes Earthfoam feel so good.")
            ]
        }
    ]
    
    for art in articles_detail:
        doc.add_heading(level=2).add_run(f"{art['num']} {art['title']}")
        doc.add_paragraph(f"• URL: {art['slug']}\n• Reading Time: {art['readTime']}\n• Subtitle: {art['subtitle']}\n• Hero Image: {art['hero_img']}")
        
        # Image table
        art_tbl = doc.add_table(rows=1, cols=2)
        style_table(art_tbl, [Inches(2.5), Inches(4.0)], ["Image Asset Name", "Caption & Description"], art["images"])
        doc.add_paragraph().paragraph_format.space_after = Pt(4)
        
        # Article Body Sections
        for s_title, s_content in art["sections"]:
            doc.add_heading(level=3).add_run(s_title)
            doc.add_paragraph(s_content)
        doc.add_paragraph().paragraph_format.space_after = Pt(8)

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 9: CERTIFICATIONS PAGE
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("5. Certifications Page")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /help/certifications\n• Page Title: Certifications | Earthfoam\n• Purpose: Transparency and verification of third-party ecological, organic, fair trade, and health certifications.")
    
    doc.add_heading(level=2).add_run("5.1 Page Content & Certified Standards")
    doc.add_paragraph(
        "• Overview Intro:\n"
        "With so many certifications floating around, it can be confusing to figure out what they all mean, and if they’re even real.\n"
        "For Earthfoam, we sought only the strictest certifications concerning fair trade, organic, emissions, and health. And we are proud to have received them all. Our certifications are under our name, up to date, and administered by an unbiased third party. We hope this brings you some comfort."
    )
    
    certs_data = [
        ["Global Organic Textile Standard (GOTS)", "Verifies that we are using only organically grown and processed fibers. Having the GOTS certification is important for our mattress, topper, and pillow covers, which are all made using organic cotton, as well as organic wool (in topper and mattress covers only).", "https://earthfoam.com/assets/2026-EF-Cert-GOTS.jpg"],
        ["Oeko-Tex® Standard 100", "Sets the standard for textile safety, from yarn to finished product. Every product carrying the label has passed laboratory tests for harmful substances. Each component has been tested against a list of over 1,000 harmful substances.", "https://earthfoam.com/assets/17.HUS.25845 -en.jpg"],
        ["Global Organic Latex Standard (GOLS)", "GOLS is the only certification that can verify that we’re using only organically grown and processed rubber foam.", "https://earthfoam.com/assets/2026-EF-Cert-GOLS.pdf"],
        ["Fair for Life", "Fair for Life is fair trade certification. It focuses on the working conditions of our employees, and the overall security of the most vulnerable people in our supply chain; the agricultural farmers and workers. As the most stringent fair trade certification, Fair for Life is the most impactful certification we have.", "https://earthfoam.com/assets/FFL_Certificate_Shevick Sales Corp. DBA  Sleep On Latex DBA Earthfoam_20231019.jpg"]
    ]
    
    cert_tbl = doc.add_table(rows=1, cols=3)
    style_table(cert_tbl, [Inches(1.8), Inches(3.2), Inches(1.5)], ["Certification Standard", "Verification Scope & Consumer Protection", "Certificate Asset Link"], certs_data)

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 10: SHIPPING & RETURNS PAGE
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("6. Shipping & Returns Page")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /help/shipping-and-returns\n• Page Title: Shipping & Returns | Earthfoam\n• Purpose: Complete guide to delivery logistics in Sri Lanka, satisfaction trial terms, exchange policies, and warranty specifications.")
    
    doc.add_heading(level=2).add_run("6.1 Complete Policy Content")
    
    doc.add_heading(level=3).add_run("A. Overview")
    doc.add_paragraph(
        "Every Earthfoam order is packaged and shipped from our factory outside Colombo 03.\n"
        "Below are our shipping and return policies, designed to make it as easy as possible for you to receive your order and send it back if needed. You can always contact us if you have questions or run into any issues."
    )
    
    doc.add_heading(level=3).add_run("B. Shipping Policy")
    doc.add_paragraph(
        "• We deliver free of charge to most parts of the country. Certain products and locations may be exempted. Please speak to us.\n"
        "• Earthfoam may use our in-house delivery team or 3rd party logistics for delivery options. We will discuss with you to make the delivery process as smooth as buying one of our mattresses.\n"
        "• We offer worldwide shipping. Please let us know your address so we can calculate the delivery cost for you.\n"
        "• Orders within the Colombo area will be delivered within 4 working days."
    )
    
    doc.add_heading(level=3).add_run("C. Returns & Exchange Policy")
    doc.add_paragraph(
        "• We make sure you are fully satisfied with our products and services. All our products will carry warranty backed by satisfaction trial period. Please speak to us.\n"
        "• Mattresses: For mattresses, we partner with a removal service that will pick up your returned mattress at no extra cost. The Sleep Trial for the Earthfoam Organic Mattress is 100 days, beginning when your mattress is delivered.\n"
        "• Toppers: If you return your Earthfoam Organic Topper, we’ll send you a larger box and a prepaid return label to make the process as easy as possible for you. The sleep trial on our toppers is 100 days, starting when your topper is delivered.\n"
        "• Pillows: Our pillow can easily fit back into its original packaging, so we’ll just send you a prepaid return label for pillow returns. The sleep trial on our pillows is 30 days, starting when your pillow is delivered.\n"
        "• Refunds: Refunds are processed once we receive returns, or pick them up in the case of our mattresses. If you’d like to exchange your product for a different size or firmness, we will apply your return credit toward the new product.\n"
        "• Policy Limit: Customers are allowed one return/exchange per product category each year.\n"
        "• Initiating Returns: To initiate a return, please contact our customer service at info@earthfoam.lk or talk to one of our representatives on +94 114 245 245."
    )
    
    doc.add_heading(level=3).add_run("D. Warranty Coverage")
    doc.add_paragraph(
        "Foam rubber is well known for its durability, often outlasting customer expectations by a long shot. Still, we want you to feel protected in your purchase.\n"
        "• Earthfoam Organic Mattress Warranty: 10 Years\n"
        "• Earthfoam Organic Topper Warranty: 10 Years\n"
        "• Earthfoam Organic Pillow Warranty: 5 Years"
    )

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 11: COMMON QUESTIONS (FAQ)
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("7. Common Questions (FAQ Page)")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /help/common-questions\n• Page Title: Common Questions | Earthfoam\n• Purpose: Comprehensive FAQ resource resolving customer queries regarding logistics, payment, materials, and product care.")
    
    faq_sections = [
        {
            "category": "7.1 Shipping FAQ",
            "items": [
                ("How long will it take for my order to be delivered?", "All of our products will be ready to deliver in 2 working days. Free delivery will be scheduled in consultation with the buyers."),
                ("Where do you ship from?", "Our products are shipped directly from our factory in Horana, Sri Lanka."),
                ("Is shipping free?", "Yes. Shipping is free (*Conditions apply)."),
                ("Which service do you use for shipping?", "We deliver directly to you using our own fleet of vehicles. Occasionally through 3rd party logistic providers."),
                ("Do you require a signature upon delivery?", "Upon delivery, we provide the warranty card and obtain the customer’s signature as confirmation of receipt."),
                ("How are mattresses delivered?", "Every mattress is delivered directly to your doorstep using our own delivery vehicles. A signature is required upon delivery to confirm receipt. We deliver your products directly to your doorstep.")
            ]
        },
        {
            "category": "7.2 Returns FAQ",
            "items": [
                ("What is your return policy?", "You may return your mattresses or toppers within 100 days of delivery for a full refund, no questions asked. Our pillow can be returned within 30 days of delivery for a full refund, no questions asked."),
                ("Do you accept exchanges?", "Yes! If you choose to exchange your item within the return period, we will apply the credit from your return towards a new item."),
                ("How will I fit the expanded topper or mattress back into its packaging?", "If you can’t fit the topper back in its box, we will send out a larger return box at no charge. We do not require that mattresses are placed back in their packaging. If you choose to return a mattress, we will have it removed from your home at no extra cost."),
                ("What do you do with returned items?", "Our returned items are never resold. All pillow and topper returns are kept in a segregated area of our warehouse. They are regularly picked up by a local mattress refurbisher that uses them in their own refurbished mattresses (not sold by us or under our brand name). We offer our customers the option to donate any mattress returns to any non-profit for a full refund.")
            ]
        },
        {
            "category": "7.3 Payment FAQ",
            "items": [
                ("What credit cards and payment methods do you accept?", "We accept cash payment, debit and credit cards and scan & go and also bank transfers."),
                ("Does Earthfoam offer financing?", "We do! We offer our customers the option to pay in installments at checkout."),
                ("Can I place my order over the phone?", "Yes. You can order over the phone all the 7 days from 9am to 5pm at +94 114 245 245."),
                ("Does Earthfoam ever have any sales, discounts or promotions?", "Enjoy exclusive offers and discounts at our showroom.")
            ]
        },
        {
            "category": "7.4 Earthfoam (The Foam) FAQ",
            "items": [
                ("What is Earthfoam?", "Earthfoam is the material at the core of our products. It is foam rubber (also known as latex foam) made in our own Sri Lankan factory from organic, fair trade Sri Lankan rubber. Natural rubber has a long history among native Central and South American cultures. Foam Rubber was first produced in 1929 by the Dunlop Rubber Company and widely utilized in mattresses prior to the introduction of Polyurethane Foam (used in most mattresses sold today). A vertically integrated supply chain enables us to produce the purest and highest-quality foam rubber in a sustainable and responsible manner."),
                ("Where is Earthfoam made?", "Our foam, mattress and pillow are made in The Earthfoam factory in Sri Lanka."),
                ("How is Earthfoam made?", "Rubber tree sap (natural latex) is provided to us by our network of small farmers in Sri Lanka. Our collection facility removes water from the sap and sends it to the foam factory. To bond liquid rubber molecules into plush foam, we mix it with a small amount of sulfur, zinc oxide, accelerators, and antioxidants. This mixture is placed in a mould and baked to form foam. After being produced, blocks of foam are washed thoroughly to remove impurities."),
                ("Can you explain how a mattress can be considered organic?", "In order for a product to be considered organic, the agricultural inputs must be farmed without the use of herbicides, pesticides, GMO’s, or synthetic fertilizer. Since Earthfoam, as well as our wool and cotton, are all certified organic, our entire final mattress is organic, too."),
                ("Do you sell Earthfoam to other businesses?", "Yes. If your business is interested in purchasing from Earthfoam, please reach out to info@earthfoam.lk.")
            ]
        },
        {
            "category": "7.5 Products FAQ",
            "items": [
                ("Where are Earthfoam products made?", "Our mattresses, toppers and pillows are quilted, sewn, assembled and packaged in our Sri Lankan factory."),
                ("Do you have a showroom?", "Yes! You can visit our flagship showroom located at No 45, Dharmapala Mawatha, Colombo 03, Sri Lanka (open 7 days a week, 10 AM - 6 PM)."),
                ("Can I buy Earthfoam products in any stores?", "You can purchase directly online on Earthfoam.lk or by visiting our Colombo 03 flagship store."),
                ("Are your products different than Sleep On Latex products?", "We make Sleep On Latex and Earthfoam products with the same purest foam made in our Sri Lankan Foam factory. The Earthfoam Mattress and Pillow have specialized branding, certified organic covers, and refined configurations.")
            ]
        }
    ]
    
    for sect in faq_sections:
        doc.add_heading(level=2).add_run(sect["category"])
        tbl_faq = doc.add_table(rows=1, cols=2)
        style_table(tbl_faq, [Inches(2.5), Inches(4.0)], ["Frequently Asked Question", "Official Answer & Guidance"], sect["items"])
        doc.add_paragraph().paragraph_format.space_after = Pt(4)

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 12: CONTACT US PAGE
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("8. Contact Us Page")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_paragraph("• Route / Path: /contact\n• Page Title: Contact | Earthfoam\n• Purpose: Official customer support, showroom visiting hours, direct phone ordering, and factory headquarters contacts.")
    
    doc.add_heading(level=2).add_run("8.1 Complete Contact Details & Layout")
    
    contact_table_data = [
        ["Page Title", "Say hi", "Main h1 heading"],
        ["Customer Operating Hours", "Our flagship store is open on all 7 days from 10AM - 6PM. Please call us or leave a message any time round the clock.", "Top introductory heading"],
        ["Direct Email Action", "info@earthfoam.lk (mailto:info@earthfoam.lk)", "Primary button CTA"],
        ["Direct Phone Action", "+94 114 245 245 (tel:+94114245245)", "Secondary inverted button CTA"],
        ["Sri Lanka Flagship Store", "No 45, Dharmapala Mawatha,\nColombo 03, Sri Lanka", "Physical retail showroom & customer experience center"],
        ["Manufacturing Factory", "Earthfoam PVT Ltd,\nDiv. S4, HEPZ BOI,\nPoruwadanda, Horana, Sri Lanka", "BOI industrial latex manufacturing & assembly plant"]
    ]
    
    c_tbl = doc.add_table(rows=1, cols=3)
    style_table(c_tbl, [Inches(1.8), Inches(3.2), Inches(1.5)], ["Contact Field", "Information & Value", "Channel Description"], contact_table_data)

    doc.add_page_break()

    # ─────────────────────────────────────────────────────────────────────────
    # PAGE 13: GLOBAL NAVIGATION, FOOTER & DESIGN SYSTEM
    # ─────────────────────────────────────────────────────────────────────────
    p = doc.add_heading(level=1)
    r = p.add_run("9. Navigation, Global Footer & Design System")
    r.font.color.rgb = RGBColor(0x2E, 0x5A, 0x44)
    
    doc.add_heading(level=2).add_run("9.1 Persistent Side Navigation Menu")
    doc.add_paragraph(
        "• Primary Menu Links:\n"
        "  - Shop (/products)\n"
        "  - Story (/about)\n"
        "  - Journal (/blog)\n\n"
        "• Secondary Menu Links:\n"
        "  - Certifications (/help/certifications)\n"
        "  - Shipping & Returns (/help/shipping-and-returns)\n"
        "  - Common Questions (/help/common-questions)\n"
        "  - Made With Earthfoam (https://madewith.earthfoam.com/)\n"
        "  - Contact Us (/contact)\n\n"
        "• Mobile Wordmark Asset: https://earthfoam.com/graphics/logo_menu.svg\n"
        "• Social Links: Instagram (@earthfoam), X (@earthfoam)\n"
        "• Footer Copyright: Copyright © 2025 Earthfoam (Pvt) Ltd. All rights reserved."
    )
    
    doc.add_heading(level=2).add_run("9.2 Global Site Footer")
    doc.add_paragraph(
        "• Footer Trust Marquee: Free Shipping • 100-Day Trial • Free Returns • 10-Year Warranty\n"
        "• Newsletter Signup: \"Sign up for very occasional bedtime reading, updates, and offers.\"\n"
        "• Footer Nav Items: Shop, Story, Journal, Certifications, Shipping & Returns, Common Questions, Made With Earthfoam, Contact Us, Privacy Policy, Terms of Service\n"
        "• Cultural Sinhala Tagline: Harvested in Sri Lanka. / ශ්‍රී ලංකාවේ අස්වනු නෙලනු ලැබේ.\n"
        "• Legal Entity: Copyright © 2025 Earthfoam (Pvt) Ltd. All Rights Reserved."
    )
    
    doc.add_heading(level=2).add_run("9.3 Design System & UI Specifications")
    design_data = [
        ["Primary Typography", "Messina Sans (Font weights: Light 300, Regular 400, Medium 500, Bold 700)", "Modern editorial sans-serif hierarchy"],
        ["Primary Background", "#FFFFFF (Pure White) & #FAF8F5 (Warm Natural Oatmeal)", "Clean, calming, organic feel"],
        ["Text Color Palette", "#2D2926 (Soft Charcoal / Off-black)", "High legibility, soft contrast"],
        ["Inverted Background", "#1B2A1E (Deep Earth Evergreen)", "Used for hero buttons, footer & mobile drawer"],
        ["Accent Color", "#2E5A44 (Forest Green) & #E5D5C5 (Natural Latex Foam tint)", "Subtle indicators, badges, highlights"],
        ["Corner Radius", "var(--radius-s): 6px, var(--radius-m): 12px, var(--radius-l): 24px", "Soft, organic, rounded pill buttons & cards"],
        ["Interactions", "IntersectionObserver scroll triggers, marquee CSS animations, fluid swipe carousels", "Smooth 60fps micro-interactions"]
    ]
    des_tbl = doc.add_table(rows=1, cols=3)
    style_table(des_tbl, [Inches(1.8), Inches(3.0), Inches(1.7)], ["Design Token", "Specification & Values", "Implementation Context"], design_data)
    
    # Save outputs
    output_path1 = "/home/ubuntu/earthfoamLk/Earthfoam_LK_Website_Complete_Specification.docx"
    output_path2 = "/home/ubuntu/Downloads/Earthfoam_LK_Website_Complete_Specification.docx"
    
    doc.save(output_path1)
    doc.save(output_path2)
    print(f"Saved successfully to:\n1. {output_path1}\n2. {output_path2}")

if __name__ == "__main__":
    build_document()
