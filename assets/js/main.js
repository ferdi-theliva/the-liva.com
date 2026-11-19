(function () {
  "use strict";

  var T = {
    tr: {
      "skip": "İçeriğe geç",
      "nav.products": "Ürünler",
      "nav.about": "Hakkımızda",
      "nav.contact": "İletişim",
      "hero.title": "Doğadan ilham alan bakım",
      "hero.text": "Aktif içeriklerle desteklenen formüller ile daha pürüzsüz, sıkı ve dengeli bir cilt görünümü.",
      "hero.cta": "Ürünleri keşfet",
      "products.title": "Ürünlerimiz",
      "about.title": "Hakkımızda",
      "about.text": "The Liva, aktif içerikleri doğru oranlarda bir araya getiren cilt bakım ürünleri geliştirir. Ürünlerimiz hayvanlar üzerinde test edilmez.",
      "contact.title": "İletişim",
      "pd.benefits": "Faydaları",
      "pd.ingredients": "Öne çıkan içerikler",
      "pd.usage": "Kullanım",
      "details": "Detayları gör",
      "buy": "Trendyol'da satın al",
      "close": "Kapat",
      "title": "The Liva | Kozmetik"
    },
    en: {
      "skip": "Skip to content",
      "nav.products": "Products",
      "nav.about": "About",
      "nav.contact": "Contact",
      "hero.title": "Care inspired by nature",
      "hero.text": "Formulas powered by active ingredients for smoother, firmer and more balanced-looking skin.",
      "hero.cta": "Explore products",
      "products.title": "Our products",
      "about.title": "About us",
      "about.text": "The Liva creates skincare that combines active ingredients in the right proportions. Our products are not tested on animals.",
      "contact.title": "Contact",
      "pd.benefits": "Benefits",
      "pd.ingredients": "Key ingredients",
      "pd.usage": "How to use",
      "details": "View details",
      "buy": "Buy on Trendyol",
      "close": "Close",
      "title": "The Liva | Skincare"
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

  function renderGrid() {
    grid.textContent = "";
    products.forEach(function (p, i) {
      var c = p[lang];
      var card = el("article", { "class": "card" });
      card.appendChild(el("img", { src: p.images[0], alt: c.name, loading: "lazy", width: "400", height: "600" }));
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
    current = i;
    fillProduct();
    dialog.showModal();
  }

  dialog.addEventListener("click", function (e) {
    if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
  });

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = T[lang].title;
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (n) {
      var v = T[lang][n.getAttribute("data-i18n")];
      if (v) n.textContent = v;
    });
    document.querySelector("[data-close]").setAttribute("aria-label", T[lang].close);
    Array.prototype.forEach.call(document.querySelectorAll("[data-lang]"), function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    renderGrid();
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
})();
