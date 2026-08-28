/* ============================================================
   TAMASURF: behaviour only (no animation library)
   ============================================================ */

/* ---------- NAV: shadow on scroll ---------- */
(function navScroll() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* ---------- NAV: language switcher ---------- */
(function langSwitcher() {
  const switcher = document.getElementById("langSwitcher");
  if (!switcher) return;
  const btn = switcher.querySelector(".lang-btn");
  const flagImg = document.getElementById("activeFlagImg");
  const codeEl = document.getElementById("activeLangCode");
  const options = switcher.querySelectorAll(".lang-option");

  const applyLang = (lang) => {
    document.querySelectorAll(`[data-${lang}]`).forEach((el) => {
      el.textContent = el.dataset[lang];
    });
    document.documentElement.lang = lang;
    options.forEach((o) => o.classList.toggle("active", o.dataset.lang === lang));
    const active = switcher.querySelector(`.lang-option[data-lang="${lang}"]`);
    if (active) {
      flagImg.src = `https://flagcdn.com/w40/${active.dataset.flag}.png`;
      codeEl.textContent = active.dataset.code;
    }
    try { localStorage.setItem("tamasurf-lang", lang); } catch (e) {}
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = switcher.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      applyLang(opt.dataset.lang);
      switcher.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("click", () => {
    switcher.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });

  let saved = null;
  try { saved = localStorage.getItem("tamasurf-lang"); } catch (e) {}
  if (saved && saved !== "en") applyLang(saved);
})();

/* ---------- NAV: mobile menu ---------- */
(function mobileMenu() {
  const burger = document.getElementById("hamburgerBtn");
  const overlay = document.getElementById("mobileMenuOverlay");
  const menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;

  const setOpen = (open) => {
    document.body.classList.toggle("menu-open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  };

  burger.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  overlay.addEventListener("click", () => setOpen(false));
  document.getElementById("mobileMenuClose").addEventListener("click", () => setOpen(false));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
})();

/* ---------- PACKAGES / ACTIVITIES: carousels ---------- */
(function carousels() {
  document.querySelectorAll(".pkg__carousel").forEach((root) => {
    const track = root.querySelector("[data-pkg-track]");
    const prev = root.querySelector("[data-pkg-prev]");
    const next = root.querySelector("[data-pkg-next]");
    if (!track || !prev || !next) return;

    // one card + the flex gap, so a click advances exactly one card
    const step = () => {
      const card = track.querySelector(".pkg");
      if (!card) return track.clientWidth;
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const sync = () => {
      const max = track.scrollWidth - track.clientWidth;
      prev.disabled = track.scrollLeft <= 1;
      next.disabled = track.scrollLeft >= max - 1;
    };

    prev.addEventListener("click", () => track.scrollBy({ left: -step() }));
    next.addEventListener("click", () => track.scrollBy({ left: step() }));
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    sync();
  });
})();

/* ---------- TESTIMONIALS: render the review grid ---------- */
(function testimonials() {
  const grid = document.querySelector("[data-tst-grid]");
  if (!grid) return;

  const reviews = [
    {
      img: "assets/t-1.jpg", name: "Lena", country: "Germany 🇩🇪",
      text: "Youness is the best teacher I've had so far. Patient, well structured, and above all, full of fun. I'd love to come back again.",
    },
    {
      img: "assets/t-4.jpg", name: "Tom", country: "Netherlands 🇳🇱",
      text: "A very good surf instructor who takes great care of his students. You feel super secure in the water and improve fast. Totally recommend!",
    },
    {
      img: "assets/t-2.jpg", name: "Emma", country: "Germany 🇩🇪",
      text: "I had 10 days of advanced surf lessons with Youness and can absolutely recommend him. He caters to each student, and there's always something to laugh about!",
    },
    {
      img: "assets/t-5.jpg", name: "Sofia", country: "Spain 🇪🇸",
      text: "3 days surfing with Youness and it was incredible! A great instructor for all levels. The tagine on the beach by his sister was the best of my life!",
    },
    {
      img: "assets/t-3.jpg", name: "Karim", country: "Morocco 🇲🇦",
      text: "I felt safe, supported, and inspired throughout my entire learning journey with this passionate crew.",
    },
    {
      img: "assets/t-6.jpg", name: "James", country: "Ireland 🇮🇪",
      text: "We'd definitely recommend Tama Surf around Tamraght / Taghazout! Youness teaches with knowledge and a smile. Already our 4th time with him!!",
    },
  ];

  const star = `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 17.27 5.18 3.13-1.37-5.9 4.58-3.97-6.03-.52L12 4.5 9.64 10.1l-6.03.52 4.58 3.97-1.37 5.9z"/></svg>`;
  const stars = star.repeat(5);

  grid.innerHTML = reviews.map((r) => `
    <article class="tcard">
      <div class="tcard__head">
        <img class="tcard__avatar" src="${r.img}" alt="" loading="lazy">
        <div class="tcard__id">
          <span class="tcard__name">${r.name}</span>
          <span class="tcard__handle">${r.country}</span>
        </div>
      </div>
      <p class="tcard__text">${r.text}</p>
      <div class="tcard__foot">
        <span class="tcard__stars">${stars}</span>
        <span class="tcard__source">Google review</span>
      </div>
    </article>`).join("");
})();

/* ---------- FAQ: accordion, one open at a time ---------- */
(function faq() {
  const items = Array.from(document.querySelectorAll(".faq__item"));
  if (!items.length) return;

  items.forEach((item) => {
    item.querySelector(".faq__q").addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      items.forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq__q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        item.querySelector(".faq__q").setAttribute("aria-expanded", "true");
      }
    });
  });
})();
