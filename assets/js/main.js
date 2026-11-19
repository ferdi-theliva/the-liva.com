(function () {
  "use strict";

  var T = {
    tr: {
      "title": "The Liva | Kozmetik",
      "skip": "İçeriğe geç",
      "topbar": "Hayvanlar üzerinde test edilmez · Aktif içerikli cilt bakımı",
      "nav.products": "Ürünler",
      "nav.about": "Hakkımızda",
      "nav.contact": "İletişim",
      "f1.t": "Hayvan deneyi yok",
      "f1.d": "Ürünlerimiz hayvanlar üzerinde test edilmez.",
      "f2.t": "Aktif içerikler",
      "f2.d": "Retinal, PDRN, peptit ve panthenol.",
      "f3.t": "Güvenli alışveriş",
      "f3.d": "Tüm ürünlerimiz Trendyol'da.",
      "products.eyebrow": "Koleksiyon",
      "products.title": "Ürünlerimiz",
      "products.lead": "Her biri belirli bir cilt ihtiyacı için geliştirilen beş bakım ürünü.",
      "about.eyebrow": "Hakkımızda",
      "about.title": "Bilimle buluşan bakım",
      "about.text": "The Liva, aktif içerikleri doğru oranlarda bir araya getiren cilt bakım ürünleri geliştirir. Her formül; nem, sıkılık ve ışıltı gibi belirli bir cilt ihtiyacına odaklanır.",
      "about.l1": "Hayvanlar üzerinde test edilmez",
      "about.l2": "Retinal, PDRN ve peptit gibi aktif içerikler",
      "about.l3": "Günlük rutine kolayca uyum sağlayan hafif dokular",
      "contact.eyebrow": "İletişim",
      "contact.title": "Bize ulaşın",
      "contact.lead": "Ürünlerimiz, iş birlikleri veya siparişleriniz hakkında sorularınız için bize yazın.",
      "contact.email": "E-posta",
      "footer.text": "Aktif içerikli cilt bakım ürünleri.",
      "footer.rights": "Tüm hakları saklıdır.",
      "pd.benefits": "Faydaları",
      "pd.ingredients": "Öne çıkan içerikler",
      "pd.usage": "Kullanım",
      "details": "Detayları gör",
      "buy": "Trendyol'da satın al",
      "close": "Kapat",
      "prev": "Önceki",
      "next": "Sonraki",
      "slide": "Slayt"
    },
    en: {
      "title": "The Liva | Skincare",
      "skip": "Skip to content",
      "topbar": "Cruelty-free · Skincare powered by active ingredients",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.contact": "Contact",
      "f1.t": "Cruelty-free",
      "f1.d": "Our products are not tested on animals.",
      "f2.t": "Active ingredients",
      "f2.d": "Retinal, PDRN, peptides and panthenol.",
      "f3.t": "Secure shopping",
      "f3.d": "All our products are available on Trendyol.",
      "products.eyebrow": "Collection",
      "products.title": "Our products",
      "products.lead": "Five treatments, each developed for a specific skin need.",
      "about.eyebrow": "About us",
      "about.title": "Care that meets science",
      "about.text": "The Liva creates skincare that combines active ingredients in the right proportions. Each formula focuses on a specific skin need, such as hydration, firmness or radiance.",
      "about.l1": "Not tested on animals",
      "about.l2": "Active ingredients such as retinal, PDRN and peptides",
      "about.l3": "Lightweight textures that fit easily into your daily routine",
      "contact.eyebrow": "Contact",
      "contact.title": "Get in touch",
      "contact.lead": "Write to us with any questions about our products, partnerships or your orders.",
      "contact.email": "Email",
      "footer.text": "Skincare powered by active ingredients.",
      "footer.rights": "All rights reserved.",
      "pd.benefits": "Benefits",
      "pd.ingredients": "Key ingredients",
      "pd.usage": "How to use",
      "details": "View details",
      "buy": "Buy on Trendyol",
      "close": "Close",
      "prev": "Previous",
      "next": "Next",
      "slide": "Slide"
    }
  };

  var products = (window.PRODUCTS || []).slice(0, 5);
  var lang = "tr";
  try {
    var saved = localStorage.getItem("liva-lang");
    if (saved === "tr" || saved === "en") lang = saved;
    else if ((navigator.language || "").toLowerCase().indexOf("tr") !== 0) lang = "en";
  } catch (e) { /* storage unavailable */ }

  var grid = document.getElementById("product-grid");
  var dialog = document.getElementById("product-dialog");
  var current = null;

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }

  function indexOfProduct(id) {
    for (var i = 0; i < products.length; i++) if (products[i].id === id) return i;
    return -1;
  }

  /* ---------- Product grid ---------- */
  function renderGrid() {
    grid.textContent = "";
    products.forEach(function (p, i) {
      var c = p[lang];
      var card = el("article", { "class": "card" });
      var media = el("button", { type: "button", "class": "card-media", "aria-label": c.name + ": " + T[lang].details });
      media.appendChild(el("img", { src: p.images[0], alt: "", loading: "lazy", width: "400", height: "600" }));
      media.addEventListener("click", function () { openProduct(i); });
      card.appendChild(media);
      card.appendChild(el("h3", null, c.name));
      card.appendChild(el("p", null, c.short));
      var actions = el("div", { "class": "actions" });
      var more = el("button", { type: "button", "class": "btn" }, T[lang].details);
      more.addEventListener("click", function () { openProduct(i); });
      actions.appendChild(more);
      actions.appendChild(el("a", { "class": "btn btn-outline", href: p.url, target: "_blank", rel: "noopener" }, T[lang].buy));
      card.appendChild(actions);
      grid.appendChild(card);
    });
  }

  /* ---------- Product dialog ---------- */
  function fillList(id, items) {
    var ul = document.getElementById(id);
    ul.textContent = "";
    items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
  }

  function showImage(i) {
    var p = products[current];
    var main = document.getElementById("pd-main");
    main.src = p.images[i];
    main.alt = p[lang].name;
    Array.prototype.forEach.call(document.querySelectorAll("#pd-thumbs button"), function (b, j) {
      b.setAttribute("aria-current", j === i ? "true" : "false");
    });
  }

  function fillProduct() {
    var p = products[current];
    var c = p[lang];
    document.getElementById("pd-short").textContent = c.short;
    document.getElementById("pd-title").textContent = c.name;
    document.getElementById("pd-tagline").textContent = c.tagline;
    document.getElementById("pd-usage").textContent = c.usage;
    document.getElementById("pd-buy").href = p.url;
    fillList("pd-benefits", c.benefits);
    fillList("pd-ingredients", c.ingredients);
    var thumbs = document.getElementById("pd-thumbs");
    thumbs.textContent = "";
    p.images.forEach(function (src, i) {
      var b = el("button", { type: "button", "aria-label": c.name + " " + (i + 1) });
      b.appendChild(el("img", { src: src, alt: "", loading: "lazy" }));
      b.addEventListener("click", function () { showImage(i); });
      thumbs.appendChild(b);
    });
    showImage(0);
  }

  function openProduct(i) {
    if (i < 0) return;
    current = i;
    fillProduct();
    dialog.showModal();
  }

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
  });

  /* ---------- Banner slider ---------- */
  var slider = document.getElementById("slider");
  var track = document.getElementById("slides");
  var slides = track.querySelectorAll(".slide");
  var dotsBox = document.getElementById("dots");
  var active = 0;
  var timer = null;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function goTo(i) {
    active = (i + slides.length) % slides.length;
    track.scrollTo({ left: track.clientWidth * active, behavior: reduceMotion ? "auto" : "smooth" });
    updateDots();
  }

  function updateDots() {
    Array.prototype.forEach.call(dotsBox.children, function (d, j) {
      d.setAttribute("aria-current", j === active ? "true" : "false");
    });
  }

  function buildDots() {
    dotsBox.textContent = "";
    Array.prototype.forEach.call(slides, function (s, i) {
      var d = el("button", { type: "button", "aria-label": T[lang].slide + " " + (i + 1) });
      d.addEventListener("click", function () { goTo(i); restart(); });
      dotsBox.appendChild(d);
    });
    updateDots();
  }

  function restart() {
    if (timer) clearInterval(timer);
    if (reduceMotion) return;
    timer = setInterval(function () { goTo(active + 1); }, 5000);
  }

  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  Array.prototype.forEach.call(slider.querySelectorAll(".arrow"), function (b) {
    b.addEventListener("click", function () { goTo(active + Number(b.getAttribute("data-dir"))); restart(); });
  });

  var scrollEnd;
  track.addEventListener("scroll", function () {
    clearTimeout(scrollEnd);
    scrollEnd = setTimeout(function () {
      var i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== active) { active = i; updateDots(); }
    }, 80);
  });

  Array.prototype.forEach.call(slides, function (s) {
    s.addEventListener("click", function (e) {
      e.preventDefault();
      openProduct(indexOfProduct(s.getAttribute("data-product")));
    });
  });

  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", restart);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", restart);
  window.addEventListener("resize", function () { track.scrollLeft = track.clientWidth * active; });

  /* ---------- Language ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.title = T[lang].title;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (n) {
      var v = T[lang][n.getAttribute("data-i18n")];
      if (v) n.textContent = v;
    });
    document.querySelector("[data-close]").setAttribute("aria-label", T[lang].close);
    document.querySelector(".arrow.prev").setAttribute("aria-label", T[lang].prev);
    document.querySelector(".arrow.next").setAttribute("aria-label", T[lang].next);
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    renderGrid();
    buildDots();
    if (current !== null && dialog.open) fillProduct();
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("liva-lang", lang); } catch (e) { /* ignore */ }
      applyLang();
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
  restart();
})();
