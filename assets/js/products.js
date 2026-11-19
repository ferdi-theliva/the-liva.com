/*
 * Ürün listesi. Yeni ürün eklemek için bu diziye bir nesne ekleyin
 * ve görsellerini assets/img/products/<id>/ klasörüne koyun.
 * Sitede en fazla 5 ürün gösterilir.
 */
window.PRODUCTS = [
  {
    id: "retinal-shot",
    url: "https://www.trendyol.com/the-liva/retinal-shot-tightening-booster-krem-sikilastirici-yuz-kremi-gece-kremi-yenileyici-30-ml-p-1055246066",
    images: [1, 7, 4, 5, 6, 3, 8].map(function (n) { return "assets/img/products/retinal-shot/" + n + ".webp"; }),
    tr: {
      name: "Retinal Shot",
      short: "Sıkılaştırıcı gece kremi · 30 ml",
      tagline: "Daha pürüzsüz, sıkı ve dengeli cilt görünümü için retinal destekli gece bakımı.",
      benefits: [
        "Cilt sıkılığını destekler",
        "Daha pürüzsüz bir görünüm sağlar",
        "İnce çizgi görünümünü azaltmaya yardımcı olur",
        "Ton eşitsizliğinin görünümünü dengelemeye katkı sağlar",
        "Cilt bariyerini destekler"
      ],
      ingredients: [
        "Retinal %0.1: cilt yüzeyinin yenilenmesine ve yaşlanma belirtilerinin görünümünü azaltmaya yardımcı olur",
        "Peptit kompleksi: cilt elastikiyetini destekler",
        "Panthenol (B5) %1: yoğun nem desteği sağlar",
        "E vitamini: cildi korumaya ve ışıltı kazandırmaya yardımcı olur"
      ],
      usage: "Akşamları temiz cilde uygulayın. Başlangıçta haftada 2-3 kez kullanın, cilt toleransına göre artırın. Gündüz güneş koruyucu kullanmanız önerilir. Sonuçlar cilt tipine göre değişebilir."
    },
    en: {
      name: "Retinal Shot",
      short: "Firming night cream · 30 ml",
      tagline: "A retinal night treatment for smoother, firmer and more even-looking skin.",
      benefits: [
        "Supports skin firmness",
        "Gives a smoother-looking complexion",
        "Helps reduce the look of fine lines",
        "Helps even out the look of skin tone",
        "Supports the skin barrier"
      ],
      ingredients: [
        "Retinal 0.1%: helps renew the skin surface and reduce visible signs of ageing",
        "Peptide complex: supports skin elasticity",
        "Panthenol (B5) 1%: provides intense hydration",
        "Vitamin E: helps protect skin and add radiance"
      ],
      usage: "Apply to clean skin in the evening. Start 2–3 times a week and increase as your skin tolerates it. Use sunscreen during the day. Results may vary by skin type."
    }
  },
  {
    id: "pdrn-400",
    url: "https://www.trendyol.com/the-liva/pdrn-aydinlitici-nemlendirici-yuz-leke-kremi-yaslanma-ve-kirisiklik-karsiti-somon-dna-30ml-p-1061004671",
    images: [1, 7, 4, 5, 6, 3, 8].map(function (n) { return "assets/img/products/pdrn-400/" + n + ".webp"; }),
    tr: {
      name: "PDRN 400",
      short: "Nemlendirici yoğun bakım kremi · 30 ml",
      tagline: "Nem, onarım ve canlı görünüm tek adımda. Phyto PDRN Panax 400.000 ppm içerir.",
      benefits: [
        "Cilt bariyerini destekler",
        "Yoğun nem kazandırmaya yardımcı olur",
        "Daha dolgun ve canlı bir görünüm sağlar",
        "Cilt tonunun dengelenmesine yardımcı olur",
        "Cilt dokusunun daha pürüzsüz görünmesine katkı sağlar"
      ],
      ingredients: [
        "PDRN (Sodium DNA): cildin yenilenme sürecini desteklemeye yardımcı olur",
        "Hyaluronik asit kompleksi: cildi yoğun şekilde nemlendirir ve nemin korunmasına katkı sağlar",
        "Panthenol (B5): cilt bariyerini destekler ve rahatlatıcı etki sunar"
      ],
      usage: "Sabah veya akşam, temizlenmiş cilde nazikçe uygulayın, ardından nemlendirici ile rutininizi tamamlayın. Hafif yapısı sayesinde hızlı emilir, yapışkanlık hissi bırakmaz. Tüm cilt tipleri için uygundur."
    },
    en: {
      name: "PDRN 400",
      short: "Intensive moisturizing cream · 30 ml",
      tagline: "Hydration, repair and a radiant look in one step. With Phyto PDRN Panax 400,000 ppm.",
      benefits: [
        "Supports the skin barrier",
        "Helps deliver intense hydration",
        "Gives a plumper, more radiant look",
        "Helps even out skin tone",
        "Helps skin texture look smoother"
      ],
      ingredients: [
        "PDRN (Sodium DNA): helps support the skin's renewal process",
        "Hyaluronic acid complex: deeply hydrates and helps lock in moisture",
        "Panthenol (B5): supports the skin barrier and soothes"
      ],
      usage: "Gently apply to cleansed skin morning or evening, then finish your routine with a moisturizer. The light texture absorbs quickly without feeling sticky. Suitable for all skin types."
    }
  },
  {
    id: "pdrn-ball-serum",
    url: "https://www.trendyol.com/the-liva/pdrn-dual-bounce-ball-serum-cift-fazli-essence-cilt-isiltisini-destekleyen-genclik-serumu-30-ml-p-1127015188",
    images: [2, 6, 8, 4, 1, 5, 7, 3].map(function (n) { return "assets/img/products/pdrn-ball-serum/" + n + ".webp"; }),
    tr: {
      name: "PDRN Dual Bounce Ball Serum",
      short: "Çift fazlı kapsüllü serum · 30 ml",
      tagline: "Nem, esneklik ve ışıltı bir arada. Her damlada daha canlı, daha dolgun bir görünüm.",
      benefits: [
        "Yoğun nem hissi ile daha konforlu bir cilt",
        "Daha pürüzsüz ve yumuşak doku",
        "Daha dolgun ve esnek görünüm",
        "Işıltısını kaybetmiş ciltlerde canlı görünüm",
        "Günlük kullanıma uygun hafif yapı"
      ],
      ingredients: [
        "PDRN (Sodium DNA) ve Salmon Egg Extract: cildin daha bakımlı ve dengeli görünmesine destek olur",
        "Bounce Ball teknolojisi: serumdaki özel kapsül, her kullanımda taze bir deneyim sunar"
      ],
      usage: "Şişeyi nazikçe çalkalayın. Temiz cilde birkaç damla uygulayın ve masaj yaparak yedirin. Sabah ve akşam kullanıma uygundur; makyaj ve güneş kremi altında rahatça kullanılabilir."
    },
    en: {
      name: "PDRN Dual Bounce Ball Serum",
      short: "Dual-phase capsule serum · 30 ml",
      tagline: "Hydration, elasticity and glow in one. A more radiant, plumper look with every drop.",
      benefits: [
        "Comfortable skin with a deep feeling of hydration",
        "Smoother, softer texture",
        "A plumper, more elastic look",
        "Revives dull-looking skin",
        "Lightweight texture for daily use"
      ],
      ingredients: [
        "PDRN (Sodium DNA) and Salmon Egg Extract: help skin look more cared-for and balanced",
        "Bounce Ball technology: the special capsule in the serum gives a fresh experience with every use"
      ],
      usage: "Shake the bottle gently. Apply a few drops to clean skin and massage in. Suitable for morning and evening; wears comfortably under makeup and sunscreen."
    }
  },
  {
    id: "pdrn-glow-mist",
    url: "https://www.trendyol.com/the-liva/pdrn-glow-cift-fazli-yuz-sprey-tonik-nemlendirici-aydinlatici-face-mist-120-ml-p-1138006486",
    images: [1, 7, 4, 5, 6, 3, 8].map(function (n) { return "assets/img/products/pdrn-glow-mist/" + n + ".webp"; }),
    tr: {
      name: "PDRN Glow Face Mist",
      short: "Çift fazlı yüz spreyi · 120 ml",
      tagline: "Tek dokunuşta glow etkisi. Çift fazlı özel yapısıyla cilde yoğun nem, canlı görünüm ve ipeksi bir his kazandırmaya yardımcı olur.",
      benefits: [
        "Yoğun nem desteği sağlar",
        "Daha canlı görünüm sunar",
        "Cilde doğal ışıltı kazandırır",
        "Ferah ve hafif his bırakır",
        "Günlük kullanıma uygundur"
      ],
      ingredients: [
        "PDRN: cildin daha enerjik, canlı ve aydınlık görünmesine destek olur",
        "Çift fazlı (bi-phase) formül: cildin daha yumuşak, dengeli ve konforlu hissetmesine yardımcı olur"
      ],
      usage: "Kullanmadan önce çalkalayın. Temiz cilde 20-30 cm mesafeden püskürtün. Gün içinde ihtiyaç duydukça tekrarlanabilir, makyaj üzerine de uygulanabilir."
    },
    en: {
      name: "PDRN Glow Face Mist",
      short: "Bi-phase face mist · 120 ml",
      tagline: "Instant glow in one spritz. Its bi-phase formula helps give skin deep hydration, a radiant look and a silky feel.",
      benefits: [
        "Provides intense hydration",
        "Gives a more radiant look",
        "Adds a natural glow",
        "Leaves a fresh, light feel",
        "Suitable for daily use"
      ],
      ingredients: [
        "PDRN: helps skin look more energized, radiant and bright",
        "Bi-phase formula: helps skin feel softer, balanced and comfortable"
      ],
      usage: "Shake before use. Spray onto clean skin from 20–30 cm away. Reapply during the day as needed; can be used over makeup."
    }
  },
  {
    id: "pdrn-glow-shot",
    url: "https://www.trendyol.com/the-liva/pdrn-glow-shot-isilti-veren-aydinlatici-ampul-cam-cilt-etkisi-5-li-paket-p-1138226265",
    images: [1, 7, 4, 5, 6, 2, 3, 8].map(function (n) { return "assets/img/products/pdrn-glow-shot/" + n + ".webp"; }),
    tr: {
      name: "PDRN 99% Glow Shot",
      short: "Işıltı veren ampul serum · 5'li kutu · 15 ml",
      tagline: "Yoğun bakım · ışıltı · yenilenmiş görünüm. Tek kullanımlık hijyenik ampullerde yüksek konsantrasyonlu bakım.",
      benefits: [
        "Yoğun nem desteği sağlar",
        "Cildin daha canlı görünmesine yardımcı olur",
        "Pürüzsüz bir cilt hissi sunar",
        "Cilt bariyerini destekler",
        "Günlük bakım rutinine uygundur"
      ],
      ingredients: [
        "PDRN %99: cildin nem dengesini desteklemeye, daha dolgun ve sağlıklı görünen bir cilde katkı sağlamaya yardımcı olur",
        "Tek kullanımlık ampul: hijyenik, hafif ve hızlı emilen yapı, yapışkan his bırakmaz"
      ],
      usage: "Ampulü dikkatlice açın ve tek kullanımda tüm içeriği temiz ve kuru cilde uygulayın. Yüz ve boyun bölgesine nazik hareketlerle yayarak tamamen emilmesini sağlayın. Sabah ve/veya akşam kullanılabilir. Gündüz kullanımında güneş koruyucu ile birlikte kullanılması tavsiye edilir."
    },
    en: {
      name: "PDRN 99% Glow Shot",
      short: "Glow ampoule serum · box of 5 · 15 ml",
      tagline: "Intensive care · glow · a renewed look. Concentrated care in hygienic single-use ampoules.",
      benefits: [
        "Provides intense hydration",
        "Helps skin look more radiant",
        "Leaves skin feeling smooth",
        "Supports the skin barrier",
        "Suitable for your daily routine"
      ],
      ingredients: [
        "PDRN 99%: helps support the skin's moisture balance for a plumper, healthier-looking complexion",
        "Single-use ampoule: hygienic, lightweight and fast-absorbing, never sticky"
      ],
      usage: "Carefully open the ampoule and apply the full contents to clean, dry skin in one use. Spread gently over face and neck until fully absorbed. Use morning and/or evening. Pair with sunscreen during the day."
    }
  }
];
