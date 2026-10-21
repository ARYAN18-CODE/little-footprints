# Little Footprints — Market & Feasibility Research

*Compiled 2026-10-21. A starting map of the opportunity, the competition, and how to calculate product footprints legitimately. Figures are from the cited sources — many are company-commissioned or single studies, so treat them as directional, not gospel.*

---

## 1. The short version

- **There is real demand.** Multiple surveys show shoppers — especially parents — want low-carbon options but feel they lack the information to choose. That gap is exactly what Little Footprints targets.
- **You are not first, but the space is young.** A few consumer carbon apps exist (notably **Reewild** in the UK and **True Label** in the US), and strong B2B players calculate footprints for brands (**CarbonCloud** for food, **Carbonfact** for fashion, **HowGood**, **Planet FWD**). No one clearly owns "carbon footprint for parents & pet owners."
- **The hard part is the data, not the website.** Calculating a *legitimate* footprint means following a recognised standard (**ISO 14067** / **GHG Protocol Product Standard**) and using real life-cycle data. Good data is mostly paid. The credible way to start is **category-level estimates with the sources shown**, not fake per-product precision.
- **Regulation is tightening in your favour.** The EU is cracking down on vague "carbon neutral" claims and will require science-based, life-cycle-backed, independently verified claims. Honest, sourced estimates are the right side of that line.

**Recommended wedge:** start narrow (baby + pet essentials), use transparent category-level estimates, show your sources, and make "swap to a lighter option" the core action. Exactly the shape of the current site.

---

## 2. Is there demand? (Who the people are)

**Parents — the strongest signal:**
- A study of ~1,000 parents across five countries found **64% prefer sustainably sourced products** and **60% said a company's sustainability practices strongly shape what they buy**. Willingness to pay more varied by category: **75% for clothing, 62% for pet supplies**, and more. (CNBC / HP–Morning Consult, 2023)
- A survey of 1,048 US millennial parents (25–41) found **~71% would be more inclined to buy baby gear from an eco-conscious company**. (Researchscape / Bombi, 2023)
- **53% of parents say climate change affects their decision to have more kids** — a sign of how emotionally salient this is for the audience. (CNBC, 2023)

**General shoppers:**
- A UK whitepaper found **73% of consumers think it's important for their food to have a low carbon footprint** but felt they **didn't have proper information**. (AgFunderNews)

**Pets — big impact, under-served:**
- A wet-food diet produces **>7× the CO₂** of a dry diet (study of 618 dogs, 320 cats). (*Scientific Reports*, 2022)
- Pet food globally uses land **~twice the size of the UK** and ~**106 Mt CO₂/yr** (dry food only — an underestimate). (University of Edinburgh, 2020)
- US cats & dogs' meat consumption ≈ **64 Mt CO₂/yr**, ~25–30% of the impact of US meat consumption. (Okin, *PLOS One*, 2017)

> **Caveat:** most of these are company-commissioned or single studies. Stated preference ≠ actual willingness to pay a premium. Before betting big, you'd want a survey that measures a *specific price premium* in your exact categories.

---

## 3. Who else is doing this (competitors)

**Consumer-facing (your closest comparisons):**
- **Reewild (UK)** — carbon-tracking app for consumers; search or scan a product to see estimated emissions. The nearest thing to your idea.
- **True Label (US)** — web tool that estimates a product's footprint and suggests better alternatives; uses climate research + data scientists.
- **"Nutrition label for carbon" pitches** — e.g. MIT Solve entries arguing reliable, comparable product footprints are still essentially missing. Validates the gap.

**B2B platforms that calculate footprints for brands (potential data partners or benchmarks):**
- **CarbonCloud** — food & beverage; builds a product footprint from a bill of materials; adheres to **GHG Protocol + ISO 14067**.
- **Carbonfact** — fashion-specific LCA platform.
- **HowGood, Planet FWD** — sustainability data / product footprint platforms.

**Takeaway:** the B2B side is crowded and well-funded; the *consumer* side is thin and unestablished. Your differentiation is **audience focus (parents + pets)** and **radical transparency**, not calculation horsepower you can't match yet.

---

## 4. How to calculate a footprint *legitimately* (the method)

The recognised standard is **ISO 14067**, an extension of the **ISO 14040/14044** life-cycle assessment framework, narrowed to greenhouse gases. The **GHG Protocol Product Standard** is the close alternative with more reporting guidance. Core steps:

1. **Goal & scope** — define the *functional unit* (e.g. "one pack of 80 wipes") and the *system boundary* (cradle-to-grave = full; cradle-to-gate = partial).
2. **Inventory** — gather activity data across the life cycle: materials, energy, transport, use, end of life.
3. **Allocation** — when a process makes several products, split emissions (ISO hierarchy: avoid allocation → by physical relationship → by economic value). *This is a big source of uncertainty for things like animal by-products in pet food.*
4. **Convert to CO₂e** — multiply activity data by **emission factors**, applying global-warming-potential values (GWP100, IPCC AR5/AR6).
5. **Total & divide** — sum all stages inside the boundary, divide by the functional unit.

**Where the emission-factor / LCA data comes from:**
- **ecoinvent** — the largest LCI database (26,000+ datasets) but **paid** (free only for schools in low-income countries).
- **Free/public:** USLCI (US), Global LCA Data Access (GLAD), EPA Supply Chain Emission Factors, Swedish Life Cycle Center, some ESU-services datasets.
- **Free-to-view / paid-to-use:** Carbon Footprint Ltd (4,500+ products), **Climatiq** (ecoinvent-based factors via API/Excel/Sheets — good for a lean MVP).

> Every credible source stresses the same thing: **a footprint is an estimate, not a measurement.** BSI explicitly calls footprints "estimations based on available data at a specific time." Your honesty about ranges is a feature, not a weakness.

---

## 5. The hard problems (be clear-eyed)

- **Data access & cost** — good per-product data is expensive; brands often won't share their bill of materials.
- **Comparability** — different studies use different scopes, so numbers aren't directly comparable. A single, consistent method matters more than precision.
- **Allocation uncertainty** — especially for meat/animal by-products (pet food).
- **Greenwashing regulation** — the **EU Green Claims Directive** will require claims to be science-based, life-cycle-backed, and **independently verified**, and is expected to **restrict "carbon neutral"/offset-based labels**. Implementation targeted ~2026; microenterprises (<10 staff, <€2M) exempt. *Design for this now:* show method + sources, avoid offset-based "neutral" claims.

---

## 6. A realistic way to start (recommendation)

1. **Pick a narrow niche first** — e.g. baby wipes, diapers, formula, onesies + dog/cat food. Fewer categories = manageable data.
2. **Use category-level / archetype estimates** (e.g. "typical dry dog food, 12 kg") sourced from free databases + Climatiq, rather than claiming exact per-SKU numbers you can't defend.
3. **Lead with transparency** — show the method, the stages, and the source for every score. This is both trust and legal protection.
4. **Make the action a "swap," not a guilt trip** — the lighter-alternative card is the most useful part; it gives people something to *do*.
5. **Collect demand proof** — the waitlist is your cheapest experiment. Add a one-question survey on willingness to pay.
6. **Later:** partner with eco brands (who *want* a good score shown) as both a data source and a revenue line.

---

## 7. Open questions worth a follow-up

- Actual **willingness to pay a premium** in *your* exact categories (no good public number found).
- Reewild's current status, funding, and app-store traction (not found).
- A head-to-head of **free vs. Climatiq** data coverage for baby & pet categories.
- Current legal status of the **EU Green Claims Directive** final text (was provisional as of research date).

---

## Sources

- [CNBC — parents & sustainable products (HP/Morning Consult)](https://www.cnbc.com/2023/06/20/climate-change-affects-53percent-of-parents-decision-to-have-more-kids.html)
- [Researchscape — millennial parents want sustainable baby gear (Bombi)](https://researchscape.com/inthenews/survey-shows-millennial-parents-want-sustainable-baby-gear)
- [AgFunderNews — Reewild consumer carbon app & 73% stat](https://agfundernews.com/reewild-is-bringing-carbon-tracking-to-consumers-via-a-mobile-app)
- [WMAR — True Label consumer tool](https://www.wmar2news.com/money/consumer/new-web-based-tool-helps-shoppers-choose-ethical-environmentally-friendly-options)
- [MIT Solve — The Carbon Platform ("nutrition label" pitch)](https://solve.mit.edu/solutions/82315)
- [CarbonCloud — product carbon footprint solution](https://carboncloud.com/solutions/product-carbon-footprint/)
- [CB Insights — HowGood alternatives/competitors](https://www.cbinsights.com/company/howgood/alternatives-competitors)
- [University of Edinburgh — pet food land & emissions](https://www.ed.ac.uk/news/2020/area-twice-size-of-uk-needed-to-feed-worlds-pets)
- [EcoWatch — cat & dog food footprint overview](https://www.ecowatch.com/pet-food-carbon-footprint-2474397299.html)
- [Malay Mail — wet vs dry pet food (7× CO₂)](https://www.malaymail.com/news/life/2022/11/19/doggone-wet-pet-food-seven-times-worse-for-climate-than-dry/40593)
- [Sylvera — how to calculate product carbon footprint (LCA guide)](https://www.sylvera.com/blog/how-to-calculate-product-carbon-footprint)
- [Vaayu — how to calculate the carbon footprint of a product](https://www.vaayu.tech/insights/how-to-calculate-the-carbon-footprint-of-a-product)
- [GreenSutra — product carbon footprint under ISO 14067](https://greensutra.in/question/how-to-calculate-product-carbon-footprint/)
- [Climatiq — ecoinvent data source docs](https://www.climatiq.io/docs/guides/emission-factor-database/data-sources/ecoinvent)
- [Carbon Footprint Ltd — product life cycle factors](https://www.carbonfootprint.com/productlifecyclefactors.html)
- [edie — EU Green Claims Directive explainer](https://www.edie.net/everything-you-need-to-know-about-the-eus-green-claims-directive/)
- [Osborne Clarke — Green Claims Directive proposal](https://osborneclarke.com/insights/next-step-against-greenwashing-eu-commissions-proposal-green-claims-directive)
