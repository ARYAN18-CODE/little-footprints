/* Little Footprints — front-end demo logic.
   All footprint numbers here are illustrative sample data. */

(function () {
  "use strict";

  // ---- Sample product data ----
  // grade drives the colour band; breakdown values are % of the bar fill.
  var PRODUCTS = {
    onesie: {
      emoji: "🍼",
      name: "Organic Cotton Onesie",
      sub: "0–3 months · 3-pack",
      grade: "B", kg: "2.1 kg CO₂e", note: "per item, all-in",
      breakdown: [["Materials", 62], ["Making it", 48], ["Shipping", 22], ["Packaging", 14]],
      swap: { emoji: "🌿", name: "Recycled-cotton onesie", savePct: 45, saveKg: "0.9 kg" }
    },
    wipes: {
      emoji: "🧻",
      name: "Scented Baby Wipes",
      sub: "Single-use · 80-pack",
      grade: "D", kg: "4.8 kg CO₂e", note: "per pack",
      breakdown: [["Materials", 55], ["Making it", 40], ["Shipping", 30], ["Packaging", 78]],
      swap: { emoji: "🧺", name: "Reusable cloth wipes", savePct: 85, saveKg: "4.1 kg" }
    },
    dogfood: {
      emoji: "🐾",
      name: "Beef Dog Food",
      sub: "Dry kibble · 12 kg bag",
      grade: "E", kg: "41 kg CO₂e", note: "per bag",
      breakdown: [["Materials", 94], ["Making it", 46], ["Shipping", 34], ["Packaging", 20]],
      swap: { emoji: "🍗", name: "Chicken or insect-protein food", savePct: 60, saveKg: "25 kg" }
    },
    bottle: {
      emoji: "🍶",
      name: "Plastic Baby Bottle",
      sub: "Polypropylene · single",
      grade: "C", kg: "3.3 kg CO₂e", note: "per bottle",
      breakdown: [["Materials", 50], ["Making it", 58], ["Shipping", 26], ["Packaging", 30]],
      swap: { emoji: "🫙", name: "Glass bottle (reused 200×)", savePct: 55, saveKg: "1.8 kg" }
    }
  };

  var gradeClass = { A: "score--a", B: "score--b", C: "score--c", D: "score--d", E: "score--e" };

  var card = document.getElementById("demoCard");
  var swapEl = document.getElementById("demoSwap");

  function render(key) {
    var p = PRODUCTS[key];
    if (!p || !card) return;

    var bars = p.breakdown.map(function (b) {
      return '<div class="bar"><span>' + b[0] + '</span><i style="--w:' + b[1] + '%"></i></div>';
    }).join("");

    card.className = "pcard pcard--lg";
    card.innerHTML =
      '<div class="pcard__top">' +
        '<div class="pcard__emoji">' + p.emoji + '</div>' +
        '<div><div class="pcard__name">' + p.name + '</div>' +
        '<div class="pcard__sub">' + p.sub + '</div></div>' +
      '</div>' +
      '<div class="score ' + gradeClass[p.grade] + '">' +
        '<span class="score__grade">' + p.grade + '</span>' +
        '<div><div class="score__kg">' + p.kg + '</div>' +
        '<div class="score__note">' + p.note + '</div></div>' +
      '</div>' +
      '<div class="bars">' + bars + '</div>';

    swapEl.innerHTML =
      '<div class="swap__label">A lighter swap</div>' +
      '<div class="swap__row">' +
        '<span class="swap__emoji">' + p.swap.emoji + '</span>' +
        '<span class="swap__name">' + p.swap.name + '</span>' +
      '</div>' +
      '<div class="swap__save">Cuts the footprint by about <b>' + p.swap.savePct + '%</b> — roughly ' + p.swap.saveKg + ' CO₂e saved.</div>';
  }

  // Tabs / chips
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      render(chip.getAttribute("data-product"));
    });
  });
  render("onesie");

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var mobile = document.getElementById("navMobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.hidden;
      mobile.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });
    mobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobile.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Waitlist (front-end only — wire to a real service to collect emails)
  var form = document.getElementById("waitForm");
  var msg = document.getElementById("waitMsg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email");
      var val = (email.value || "").trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (!ok) {
        msg.style.color = "#ffd9c9";
        msg.textContent = "Please enter a valid email address.";
        return;
      }
      msg.style.color = "#d8ffe9";
      msg.textContent = "You're on the list 🌱 We'll be in touch.";
      form.reset();
    });
  }

  // Year
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Scroll reveal (subtle fade-up as sections enter view)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".section__head, .step, .card, .note, .method__stage, .cta, .demo, .band .narrow");
  if (!reduce && "IntersectionObserver" in window) {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }
})();
