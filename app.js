/* eslint-disable */
(function () {
  "use strict";

  /* =====================================================
     1. LOADING SCREEN
     MELHORIA: dois sinais — tempo mínimo de animação
     (2.8s) E primeiro render da galeria. O loading só
     fecha quando ambos estiverem prontos.
     ===================================================== */

  const loadingScreen = document.getElementById("loading-screen");
  let _minAnimDone    = false;
  let _firstRenderDone = false;

  function tryHideLoading() {
    if (!_minAnimDone || !_firstRenderDone) return;
    loadingScreen.classList.add("hiding");
    loadingScreen.addEventListener("transitionend", () => {
      loadingScreen.remove();
    }, { once: true });
  }

  // Sinal 1: tempo mínimo de animação
  setTimeout(() => { _minAnimDone = true; tryHideLoading(); }, 2800);


  /* =====================================================
     2. DADOS — adicione/edite suas referências aqui.
     Cada item precisa de: id, title, description.
     "image" é opcional; se vazio, um guia SVG é gerado.
     ===================================================== */

  const placeholderTemplates = [
    "cross-guide", "flow-line", "radial-capsule",
    "vanishing-grid", "arc-map", "wave-fold",
  ];

  const artworksData = [
    {
      id: 1,
      title: "CowKit",
      description: "Kit está com roupa de CowGirl pronta para qualquer aventura no deserto!!!",
      image: "./images/Cowkit.jpg",
      audio: "./Description-Speech/Cowgirl.mp3",
    },
    {
      id: 2,
      title: "Kit",
      description: "Roupinha amarela que a deixa fofinha e ao mesmo tempo destemida",
      image: "./images/Kit-base.jpeg",
      audio: "./Description-Speech/Kit.mp3",
    },
    {
      id: 3,
      title: "Greek Kit",
      description: "acho que a kit está na Grécia antiga...",
      image: "./images/Greek-kit.png",
      audio: "./Description-Speech/Greek.mp3",
    },
    {
      id: 4,
      title: "Farm Kit",
      description: "kit com roupa de fazendeira ótima para ocasiões especiais",
      image: "./images/farm-kit.png",
      audio: "./Description-Speech/Farmkit.mp3",
    },
    {
      id: 5,
      title: "Winter Kit",
      description: "Kit está com frio!!!",
      image: "./images/Winter-kit.png",
      audio: "./Description-Speech/Kitdoinverno.mp3",
    },
    {
      id: 6,
      title: "Gobbles",
      description: "Cor de rosa.. não pera ai, errei, a cor certa a se disser era magenta (...)",
      image: "./images/gobbles.jpg",
      audio: "./Description-Speech/Gobbles.mp3",
    },
    {
      id: 7,
      title: "Business Kit",
      description: "agora kit se tornou empresária e está disposta a fechar acordos interessantes para crescer",
      image: "./images/business-kit.png",
      audio: "./Description-Speech/Businesskit.mp3",
    },
    {
      id: 8,
      title: "Winter Kit #2",
      description: "kit do inverno só que em outra versão",
      image: "./images/winterkit2.png",
      audio: "./Description-Speech/Kitinvernooutraversao.mp3",
    },
    {
      id: 9,
      title: "Winter Kit #3",
      description: "kit do inverno (outra versão)",
      image: "./images/winterkit3.png",
      audio: "./Description-Speech/Kitinvernooutraversao.mp3",
    },
    {
      id: 10,
      title: "Namatdi Kit",
      description: "kit vestida de uma fantasia de um dinosauro cósmico chamado Namatdi",
      image: "./images/namadtikit.png",
      audio: "./Description-Speech/Namadtikit.mp3",
    },
    {
      id: 11,
      title: "Doll Kit",
      description: "inspirada em Poppy de Poppy playtime",
      image: "./images/dollkit.jpeg",
      audio: "./Description-Speech/Dollkit.mp3",
    },
    {
      id: 12,
      title: "Princess Kit",
      description: "apenas uma linda princesa",
      image: "./images/princesskit.jpeg",
      audio: "./Description-Speech/Princesskit.mp3",
    },
    {
      id: 13,
      title: "Jester Kit",
      description: "oh não kit foi parar no... incrível Circo Digital",
      image: "./images/jesterkit.jpeg",
      audio: "./Description-Speech/Jesterkit.mp3",
    },
    {
      id: 14,
      title: "Kit Rose",
      description: "kit foi ao mundo do sonic e roubou um vestido da Amy...",
      image: "./images/kitrose.jpeg",
      audio: "./Description-Speech/Kitrose.mp3",
    },
    {
      id: 15,
      title: "Poppy",
      description: "uma boneca de porcelana cheia de segredos",
      image: "./images/poppy.jpeg",
      audio: "./Description-Speech/Poppy.mp3",
    },
    {
      id: 16,
      title: "Caine",
      description: "O Mestre de pista Do Incrível Circo Digital",
      image: "./images/caine.png",
      audio: "./Description-Speech/Caine.mp3",
    },
    {
      id: 17,
      title: "Jax",
      description: "Um cara misterioso, engraçado?...,cheio de problemas e falta de identidade própria",
      image: "./images/jax.jpeg",
      audio: "./Description-Speech/Jax.mp3",
    },
    {
      id: 18,
      title: "Kit Ringmaster",
      description: "ela virou a chefona do incrivel circo digital",
      image: "./images/kitringmaster.png",
      audio: "./Description-Speech/Kitringmaster.mp3",
    },
    {
      id: 19,
      title: "Kit Nave",
      description: "A nave personalizada da kit ",
      image: "./images/kitnave.png",
      audio: "./Description-Speech/Kitnave.mp3",
    },
    {
      id: 20,
      title: "Student Kit",
      description: "kit usando sua roupa de estudante",
      image: "./images/Studentkit.jpeg",
      audio: "./Description-Speech/Student.mp3",
    },
    {
      id: 21,
      title: "Pomni",
      description: "uma boba da côrte... é... só isso...",
      image: "./images/Pomni.jpeg",
      audio: "./Description-Speech/Pomni.mp3",
    },
    {
      id: 22,
      title: "Ragatha",
      description: "uma boneca de pano cheio de entusiasmo!",
      image: "./images/Ragatha.jpeg",
      audio: "./Description-Speech/Ragatha.mp3",
    },
    {
      id: 23,
      title: "Classic Sonic",
      description: "O ouriço mais rápido do planeta",
      image: "./images/Classicsonic.jpeg",
      audio: "./Description-Speech/Classicsonic.mp3",
    },
    {
      id: 24,
      title: "Classic Tails",
      description: "A raposa mais legal que existe de 2 caudas que o sonic mais gosta...",
      image: "./images/Classictails.jpeg",
      audio: "./Description-Speech/Classictails.mp3",
    },
    {
      id: 25,
      title: "Classic Amy Rose",
      description: "A Pessoa que o sonic mais tenta evitar por ela ser muito 'pegajosa'",
      image: "./images/Classicamyrose.jpeg",
      audio: "./Description-Speech/Classicamyrose.mp3",
    },
    {
      id: 26,
      title: "Classic knuckles",
      description: "Foi o primeiro rival de Sonic, mas agora é um velho amigo...",
      image: "./images/Classickunkles.jpeg",
      audio: "./Description-Speech/Ohno.mp3",
    },
  ];


  /* =====================================================
     3. MOTOR DE BUSCA POR PALAVRAS-SEMENTE
     MELHORIAS:
       - buildIndex() limpa índice antes de reconstruir
       - Levenshtein para busca fuzzy (tolerante a erros)
       - scoreItem() para ranqueamento por relevância
     ===================================================== */

  const _wordIdx  = Object.create(null);
  const _titleIdx = [];

  /** Remove acentos e normaliza para lowercase */
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /** Extrai tokens válidos (≥ 2 chars) */
  function tokenize(str) {
    return (normalize(str).match(/[a-z0-9]{2,}/g) || []);
  }

  /** Constrói (ou reconstrói) os índices */
  function buildIndex() {
    // Limpa antes de reconstruir para evitar duplicatas no add()
    Object.keys(_wordIdx).forEach((k) => delete _wordIdx[k]);
    _titleIdx.length = 0;

    artworksData.forEach((item) => {
      _titleIdx.push({
        item,
        norm: normalize(item.title),
      });

      tokenize(item.title + " " + item.description).forEach((tok) => {
        if (!_wordIdx[tok]) _wordIdx[tok] = new Set();
        _wordIdx[tok].add(item);
      });
    });
  }

  /* ------- Levenshtein (distância de edição) ------- */

  /**
   * Calcula a distância de edição entre dois strings.
   * Otimizado com early-exit quando a diferença de tamanho
   * já excede a tolerância máxima (2).
   */
  function levenshtein(a, b) {
    if (Math.abs(a.length - b.length) > 2) return 99;
    const m = a.length, n = b.length;
    let row = Array.from({ length: n + 1 }, (_, j) => j);

    for (let i = 1; i <= m; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = row[j];
        row[j] = a[i - 1] === b[j - 1]
          ? prev
          : 1 + Math.min(prev, row[j], row[j - 1]);
        prev = tmp;
      }
    }
    return row[n];
  }

  /**
   * Verifica se algum token do item tem distância ≤ threshold
   * em relação a algum token do query.
   * Threshold: 1 para palavras curtas (≤4), 2 para longas.
   */
  function fuzzyMatchItem(item, q) {
    const qToks = tokenize(q);
    if (!qToks.length) return false;

    const iToks = tokenize(item.title + " " + item.description);

    return qToks.every((qTok) => {
      const threshold = qTok.length <= 4 ? 1 : 2;
      return (
        iToks.some((iTok) => levenshtein(qTok, iTok) <= threshold)
      );
    });
  }

  /**
   * Pontua a relevância de um item para um dado query.
   * Maior pontuação → aparece primeiro na galeria.
   */
  function scoreItem(item, qNorm) {
    const tN = normalize(item.title);
    const dN = normalize(item.description);

    if (tN === qNorm)           return 100;
    if (tN.startsWith(qNorm))   return 80;
    if (tN.includes(qNorm))     return 60;
    // Palavra que começa o query aparece na descrição
    const firstTok = tokenize(qNorm)[0] || "";
    if (firstTok && dN.split(/\s+/).some((w) => w.startsWith(firstTok))) return 40;
    if (dN.includes(qNorm))     return 20;
    return 5; // fuzzy match
  }

  /**
   * Gera sugestões para o texto atual do input.
   * 1. Sugestões de título: itens cujo título contém o query
   * 2. Palavras-semente: tokens que começam com o último token digitado
   */
  function getSuggestions(rawQuery) {
    const q     = rawQuery.trim();
    const qNorm = normalize(q);
    if (qNorm.length < 1) return [];

    const tokens  = tokenize(q);
    const lastTok = tokens[tokens.length - 1] || "";
    const prevToks = tokens.slice(0, -1).join(" ");

    // Sugestões de título
    const titleSuggs = [];
    for (const entry of _titleIdx) {
      if (entry.norm.includes(qNorm)) {
        titleSuggs.push({
          type:  "title",
          label: entry.item.title,
          badge: entry.item.description.slice(0, 38) +
                 (entry.item.description.length > 38 ? "…" : ""),
          value: entry.item.title,
        });
        if (titleSuggs.length >= 4) break;
      }
    }

    // Palavras-semente (startsWith)
    const seedSuggs = [];
    if (lastTok.length >= 2) {
      const candidates = Object.keys(_wordIdx)
        .filter((w) => w.startsWith(lastTok) && w !== lastTok)
        .sort((a, b) => _wordIdx[b].size - _wordIdx[a].size);

      for (const word of candidates) {
        const rebuilt = prevToks ? prevToks + " " + word : word;
        const alreadyCovered = titleSuggs.some(
          (s) => normalize(s.value) === normalize(rebuilt)
        );
        if (!alreadyCovered) {
          const count = _wordIdx[word].size;
          seedSuggs.push({
            type:  "seed",
            label: rebuilt,
            badge: count + (count === 1 ? " ref." : " refs."),
            value: rebuilt,
          });
        }
        if (seedSuggs.length >= 3) break;
      }
    }

    // Mescla + desduplicar
    const seen    = new Set();
    const results = [];
    for (const s of [...titleSuggs, ...seedSuggs]) {
      const key = normalize(s.value);
      if (!seen.has(key)) {
        seen.add(key);
        results.push(s);
      }
      if (results.length >= 6) break;
    }
    return results;
  }


  /* =====================================================
     4. ESTADO & REFS DO DOM
     ===================================================== */

  const state = { query: "" };
  let filteredList  = [];
  let modalIndex    = -1;
  let _prevFocusEl  = null;   // para restaurar foco após fechar modal
  let _trapCleanup  = null;   // cleanup da focus trap
  let _lastRenderKey = null;  // para memoização do render

  const galleryGrid    = document.getElementById("galleryGrid");
  const emptyState     = document.getElementById("emptyState");
  const emptyMsg       = document.getElementById("emptyMsg");
  const emptyRelated   = document.getElementById("emptyRelated");
  const resultCount    = document.getElementById("resultCount");
  const searchInput    = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const scrollTopBtn   = document.getElementById("scrollTopBtn");

  const modalOverlay    = document.getElementById("modalOverlay");
  const modalArt        = document.getElementById("modalArt");
  const modalTitle      = document.getElementById("modalTitle");
  const modalDesc       = document.getElementById("modalDescription");
  const modalClose      = document.getElementById("modalClose");
  const modalPrev       = document.getElementById("modalPrev");
  const modalNext       = document.getElementById("modalNext");
  const modalPlayBtn    = document.getElementById("modalPlayBtn");
  const modalDownloadBtn = document.getElementById("modalDownloadBtn");
  let audioElement      = null;

  const suggestionsDropdown = document.getElementById("suggestionsDropdown");


  /* =====================================================
     5. HELPERS
     ===================================================== */

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /**
   * Destaca a substring `query` dentro de `text`.
   * Usa escapeHtml para evitar XSS.
   */
  function highlightMatch(text, query) {
    const safe = escapeHtml(text);
    if (!query || !query.trim()) return safe;
    const re = new RegExp(`(${escapeRegex(escapeHtml(query.trim()))})`, "gi");
    return safe.replace(re, '<span class="sug-match">$1</span>');
  }


  /* =====================================================
     6. GUIAS SVG (placeholders)
     ===================================================== */

  function svgWrap(inner) {
    return (
      '<svg viewBox="0 0 240 300" fill="none" stroke="currentColor" stroke-width="2.4"' +
      ' stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent)">' +
      inner +
      "</svg>"
    );
  }

  function templateMarkup(tpl) {
    switch (tpl) {
      case "cross-guide":
        return (
          '<circle cx="120" cy="112" r="64" opacity="0.9"/>' +
          '<path d="M56 112h128" opacity="0.6"/>' +
          '<path d="M120 48v0"/>' +
          '<path d="M68 156c10 40 32 64 52 64s42-24 52-64" opacity="0.9"/>' +
          '<path d="M96 92l-6 14M144 92l6 14" opacity="0.5"/>'
        );
      case "flow-line":
        return (
          '<path d="M120 40c-30 36 28 64 0 104c-26 36 22 60-4 96" opacity="0.85"/>' +
          '<circle cx="120" cy="46" r="20"/>' +
          '<ellipse cx="128" cy="118" rx="26" ry="20" opacity="0.85"/>' +
          '<ellipse cx="104" cy="206" rx="24" ry="18" opacity="0.85"/>' +
          '<path d="M104 224l-22 56M128 226l28 54" opacity="0.6"/>'
        );
      case "radial-capsule":
        return (
          '<circle cx="120" cy="176" r="42" opacity="0.9"/>' +
          '<path d="M120 134v-58M94 142l-34-46M150 138l30-50M84 168l-50-18M156 172l52-10" opacity="0.85"/>' +
          '<circle cx="120" cy="76" r="9"/><circle cx="60" cy="96" r="8"/><circle cx="180" cy="88" r="8"/>' +
          '<circle cx="34" cy="150" r="7"/><circle cx="208" cy="162" r="7"/>'
        );
      case "vanishing-grid":
        return (
          '<path d="M14 150h212" opacity="0.7"/>' +
          '<circle cx="120" cy="150" r="3.5" fill="currentColor" stroke="none"/>' +
          '<path d="M120 150L20 50M120 150L220 50M120 150L20 250M120 150L220 250" opacity="0.55"/>' +
          '<rect x="84" y="104" width="72" height="60" opacity="0.9"/>' +
          '<path d="M84 104L60 86M156 104l24-18M84 164l-24 18M156 164l24 18" opacity="0.5"/>'
        );
      case "arc-map":
        return (
          '<circle cx="120" cy="132" r="68" opacity="0.85"/>' +
          '<path d="M84 108c8-10 22-10 30-2M126 106c8-8 22-8 30 2" opacity="0.9"/>' +
          '<path d="M96 130a6 6 0 0 0 12 0M132 130a6 6 0 0 0 12 0" opacity="0.6"/>' +
          '<path d="M96 178c10 14 38 14 48 0" opacity="0.9"/>'
        );
      case "wave-fold":
        return (
          '<path d="M40 90c20 18 40-18 60 0s40-18 60 0s40-18 60 0" opacity="0.85"/>' +
          '<path d="M40 140c20 18 40-18 60 0s40-18 60 0s40-18 60 0" opacity="0.65"/>' +
          '<path d="M40 190c20 18 40-18 60 0s40-18 60 0s40-18 60 0" opacity="0.45"/>' +
          '<circle cx="40" cy="64" r="6"/>'
        );
      default:
        return '<circle cx="120" cy="150" r="60" opacity="0.7"/>';
    }
  }

  function artMarkup(item, index) {
    if (item.image) {
      return (
        '<img src="' + item.image + '" alt="' + escapeHtml(item.title) + '" loading="lazy">'
      );
    }
    const tpl = placeholderTemplates[index % placeholderTemplates.length];
    return svgWrap(templateMarkup(tpl));
  }


  /* =====================================================
     7. RENDER — GRID
     MELHORIAS:
       - Memoização: só redesenha quando a lista muda
       - setupCardImages: skeleton + fallback de imagem quebrada
       - Sinal 2 do loading: primeiro render pronto
     ===================================================== */

  function cardMarkup(item, index) {
    return (
      '<button class="card" type="button" data-index="' + index + '" aria-label="Ver detalhes de ' + escapeHtml(item.title) + '">' +
        '<div class="card-art">' + artMarkup(item, index) + "</div>" +
        '<div class="card-body">' +
          '<h3 class="card-title">' + escapeHtml(item.title) + "</h3>" +
          '<p class="card-desc">' + escapeHtml(item.description) + "</p>" +
        "</div>" +
      "</button>"
    );
  }

  /**
   * MELHORIA — Busca com ranqueamento por relevância + fuzzy fallback.
   * Ordem: título exato > começa com > contém > descrição > fuzzy
   */
  function applyFilters() {
    const raw  = state.query.trim();
    const qNorm = normalize(raw);

    if (!raw) {
      filteredList = [...artworksData];
    } else {
      // Primeiro: match exato (contém no texto normalizado)
      let matched = artworksData.filter((item) => {
        const hay = normalize(item.title + " " + item.description);
        return hay.includes(qNorm);
      });

      // Fallback fuzzy se não houver resultados exatos e query ≥ 3 chars
      if (matched.length === 0 && raw.length >= 3) {
        matched = artworksData.filter((item) => fuzzyMatchItem(item, raw));
      }

      // Ordenar por relevância (decrescente)
      filteredList = matched
        .map((item) => ({ item, score: scoreItem(item, qNorm) }))
        .sort((a, b) => b.score - a.score)
        .map(({ item }) => item);
    }

    renderGrid();
  }

  function renderGrid() {
    const key = filteredList.map((i) => i.id).join(",");

    resultCount.textContent =
      filteredList.length + (filteredList.length === 1 ? " referência" : " referências");

    if (filteredList.length === 0) {
      // Só limpa o DOM se era diferente antes
      if (_lastRenderKey !== "__empty__") {
        galleryGrid.innerHTML = "";
        _lastRenderKey = "__empty__";
      }
      emptyState.hidden = false;
      showEmptyRelated();
      signalFirstRender();
      return;
    }

    emptyState.hidden = true;

    // Memoização: sai sem redesenhar se lista não mudou
    if (key === _lastRenderKey) {
      signalFirstRender();
      return;
    }
    _lastRenderKey = key;

    galleryGrid.innerHTML = filteredList.map((item, i) => cardMarkup(item, i)).join("");

    galleryGrid.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => openModal(parseInt(card.dataset.index, 10)));
      cardObserver.observe(card);
    });

    setupCardImages();
    signalFirstRender();
  }

  /** Sinal 2 do loading: galeria renderizou pela primeira vez */
  function signalFirstRender() {
    if (_firstRenderDone) return;
    _firstRenderDone = true;
    tryHideLoading();
  }

  /**
   * MELHORIA — Skeleton enquanto imagens carregam + fallback se quebrar.
   * Chamado após cada rebuild do grid.
   */
  function setupCardImages() {
    galleryGrid.querySelectorAll(".card").forEach((card) => {
      const art = card.querySelector(".card-art");
      const img = art && art.querySelector("img");
      if (!img) return;

      const idx = parseInt(card.dataset.index, 10);
      const tpl = placeholderTemplates[idx % placeholderTemplates.length];
      const placeholder = svgWrap(templateMarkup(tpl));

      // Inicia skeleton (só se a imagem ainda não carregou do cache)
      if (!img.complete || img.naturalWidth === 0) {
        art.classList.add("img-loading");
      }

      img.addEventListener("load", () => {
        art.classList.remove("img-loading");
      }, { once: true });

      img.addEventListener("error", () => {
        art.classList.remove("img-loading");
        art.innerHTML = placeholder; // troca pela guia SVG
      }, { once: true });
    });
  }

  /**
   * MELHORIA — Empty state com sugestões relacionadas.
   * Tenta encontrar termos próximos ao que foi digitado.
   */
  function showEmptyRelated() {
    const q = state.query.trim();

    if (!q) {
      emptyMsg.textContent = "Nenhuma referência encontrada.";
      emptyRelated.hidden = true;
      return;
    }

    emptyMsg.textContent = `Nenhum resultado para "${q}".`;

    // Tenta sugestões com query encurtado progressivamente
    const firstTok = tokenize(q)[0] || "";
    let related = [];

    for (let len = firstTok.length - 1; len >= 2 && related.length === 0; len--) {
      const partial = firstTok.slice(0, len);
      const suggs = getSuggestions(partial);
      related = suggs.slice(0, 3).map((s) => s.value);
    }

    if (related.length === 0) {
      emptyRelated.hidden = true;
      return;
    }

    emptyRelated.hidden = false;
    emptyRelated.innerHTML =
      '<span class="empty-related-label">Talvez você quis dizer:</span>' +
      related
        .map((r) => `<button class="empty-chip" type="button">${escapeHtml(r)}</button>`)
        .join("");

    emptyRelated.querySelectorAll(".empty-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        searchInput.value = chip.textContent;
        state.query = chip.textContent;
        searchClearBtn.classList.add("show");
        hideSuggestions(true);
        applyFilters();
        searchInput.focus();
      });
    });
  }


  /* =====================================================
     8. INTERSECTIONOBSERVER — reveal de cards
     ===================================================== */

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );


  /* =====================================================
     9. MODAL
     MELHORIA: focus trap — foco fica preso dentro do modal
     durante a navegação por teclado (Tab / Shift+Tab).
     Foco é restaurado ao elemento que estava ativo antes.
     ===================================================== */

  /**
   * Prende o foco dentro de `el`.
   * Retorna função de cleanup que remove o listener.
   */
  function trapFocus(el) {
    const sel =
      "button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])";
    const focusable = Array.from(el.querySelectorAll(sel)).filter(
      (node) => !node.closest("[hidden]")
    );

    if (!focusable.length) return () => {};

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    // Foca o primeiro elemento (botão ×)
    requestAnimationFrame(() => first.focus());

    function onKeydown(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    el.addEventListener("keydown", onKeydown);
    return () => el.removeEventListener("keydown", onKeydown);
  }

  function stopAudio() {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement = null;
    }
    // Reset play button icon
    modalPlayBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z"/>
      </svg>
    `;
  }

  function openModal(index) {
    if (index < 0 || index >= filteredList.length) return;
    modalIndex   = index;
    _prevFocusEl = document.activeElement; // guarda para restaurar depois

    stopAudio();

    const item = filteredList[index];
    modalArt.innerHTML         = artMarkup(item, index);
    modalArt.style.background  = item.image ? "transparent" : "";
    modalTitle.textContent     = item.title;
    modalDesc.textContent      = item.description;

    // Show/hide play button based on audio availability
    modalPlayBtn.style.display = item.audio ? "flex" : "none";
    // Show/hide download button based on image availability
    modalDownloadBtn.style.display = item.image ? "flex" : "none";

    // Skeleton/fallback na imagem do modal também
    const modalImg = modalArt.querySelector("img");
    if (modalImg) {
      const tpl = placeholderTemplates[index % placeholderTemplates.length];
      modalImg.addEventListener("error", () => {
        modalArt.innerHTML = svgWrap(templateMarkup(tpl));
      }, { once: true });
    }

    modalOverlay.hidden = false;
    requestAnimationFrame(() => {
      modalOverlay.classList.add("open");
      // Inicia focus trap após a transição CSS começar
      const modal = modalOverlay.querySelector(".modal");
      _trapCleanup = trapFocus(modal);
    });
    document.body.style.overflow = "hidden";
  }

  // Download functionality
  function downloadImage() {
    const item = filteredList[modalIndex];
    if (!item.image) return;

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = item.image;
    // Use the item's title as the filename, or a default
    const filename = item.title.replace(/[^a-z0-9áéíóúñçãõâêîôûàèìòùäëïöü]/gi, '_').toLowerCase() || 'image';
    // Get the file extension from the image URL
    const extension = item.image.split('.').pop().split('?')[0];
    link.download = `${filename}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function closeModal() {
    // Libera focus trap
    if (_trapCleanup) { _trapCleanup(); _trapCleanup = null; }

    stopAudio();

    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";

    setTimeout(() => {
      modalOverlay.hidden = true;
      // Restaura foco ao elemento anterior
      if (_prevFocusEl && typeof _prevFocusEl.focus === "function") {
        _prevFocusEl.focus();
      }
    }, 250);
  }

  function stepModal(delta) {
    if (filteredList.length === 0) return;
    openModal((modalIndex + delta + filteredList.length) % filteredList.length);
  }

  modalClose.addEventListener("click", closeModal);
  modalPrev .addEventListener("click", () => stepModal(-1));
  modalNext .addEventListener("click", () => stepModal(+1));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalPlayBtn.addEventListener("click", () => {
    const item = filteredList[modalIndex];
    if (!item.audio) return;

    if (!audioElement) {
      // Start playing
      audioElement = new Audio(item.audio);
      audioElement.play();
      // Change icon to pause
      modalPlayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
        </svg>
      `;
      // When audio ends, reset
      audioElement.addEventListener("ended", stopAudio, { once: true });
    } else {
      // Toggle play/pause
      if (audioElement.paused) {
        audioElement.play();
        modalPlayBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
          </svg>
        `;
      } else {
        audioElement.pause();
        modalPlayBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z"/>
          </svg>
        `;
      }
    }
  });

  modalDownloadBtn.addEventListener("click", downloadImage);

  document.addEventListener("keydown", (e) => {
    if (modalOverlay.hidden) return;
    if (e.key === "Escape")     closeModal();
    if (e.key === "ArrowLeft")  stepModal(-1);
    if (e.key === "ArrowRight") stepModal(+1);
  });


  /* =====================================================
     10. BUSCA + SUGESTÕES
     MELHORIAS:
       - hideSuggestions() com animação de saída
       - highlightMatch usa o valor atual do input (bug fix:
         antes usava state.query, que é debounced/defasado)
     ===================================================== */

  let _searchTimer  = null;
  let _activeSugIdx = -1;
  let _currentSuggs = [];

  const ICON_PENCIL =
    '<svg class="sug-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><line x1="15" y1="5" x2="19" y2="9"/>' +
    "</svg>";

  const ICON_SEARCH =
    '<svg class="sug-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>' +
    "</svg>";

  /** Renderiza o dropdown de sugestões */
  function renderSuggestions(suggs) {
    // Cancela animação de saída pendente (se estava escondendo e novo char foi digitado)
    suggestionsDropdown.classList.remove("hiding");

    _currentSuggs = suggs;
    _activeSugIdx = -1;

    if (!suggs.length) {
      suggestionsDropdown.hidden = true;
      return;
    }

    // BUG FIX: usa searchInput.value (atual) e não state.query (defasado pelo debounce)
    const currentVal = searchInput.value;
    const parts = [];

    const titleGroup = suggs.filter((s) => s.type === "title");
    const seedGroup  = suggs.filter((s) => s.type === "seed");

    if (titleGroup.length) {
      parts.push('<div class="sug-header">Referências</div>');
      titleGroup.forEach((s) => {
        parts.push(sugItemMarkup(s, suggs.indexOf(s), currentVal));
      });
    }

    if (seedGroup.length) {
      parts.push('<div class="sug-header">Palavras-chave</div>');
      seedGroup.forEach((s) => {
        parts.push(sugItemMarkup(s, suggs.indexOf(s), currentVal));
      });
    }

    suggestionsDropdown.innerHTML = parts.join("");
    suggestionsDropdown.hidden = false;

    suggestionsDropdown.querySelectorAll(".sug-item").forEach((btn) => {
      btn.addEventListener("mousedown", (e) => {
        e.preventDefault(); // evita blur no input
        applySuggestion(_currentSuggs[parseInt(btn.dataset.idx, 10)]);
      });
    });
  }

  function sugItemMarkup(s, idx, currentVal) {
    const icon = s.type === "title" ? ICON_PENCIL : ICON_SEARCH;
    const labelHtml = highlightMatch(s.label, currentVal);
    return (
      '<button class="sug-item" type="button" data-idx="' + idx + '" role="option" aria-selected="false">' +
        icon +
        '<span class="sug-label">' + labelHtml + "</span>" +
        (s.badge ? '<span class="sug-badge">' + escapeHtml(s.badge) + "</span>" : "") +
      "</button>"
    );
  }

  function applySuggestion(sug) {
    searchInput.value = sug.value;
    state.query = sug.value;
    searchClearBtn.classList.add("show");
    hideSuggestions(true); // fecha imediatamente ao selecionar
    applyFilters();
  }

  /**
   * MELHORIA — animação de saída antes de esconder.
   * @param {boolean} immediate  true = esconde sem animação
   */
  function hideSuggestions(immediate = false) {
    if (suggestionsDropdown.hidden) return;

    // Cancela animação anterior caso haja sobreposição
    suggestionsDropdown.classList.remove("hiding");

    _activeSugIdx = -1;
    _currentSuggs = [];

    if (immediate) {
      suggestionsDropdown.hidden = true;
      return;
    }

    suggestionsDropdown.classList.add("hiding");
    suggestionsDropdown.addEventListener(
      "animationend",
      () => {
        suggestionsDropdown.classList.remove("hiding");
        suggestionsDropdown.hidden = true;
      },
      { once: true }
    );
  }

  function setActiveSuggestion(idx) {
    const items = suggestionsDropdown.querySelectorAll(".sug-item");
    if (!items.length) return;

    _activeSugIdx = Math.max(-1, Math.min(idx, items.length - 1));
    items.forEach((el, i) => {
      el.classList.toggle("active", i === _activeSugIdx);
      el.setAttribute("aria-selected", i === _activeSugIdx ? "true" : "false");
    });
  }

  // Input: sugestões imediatas + filtro com debounce
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    searchClearBtn.classList.toggle("show", val.length > 0);

    // Sugestões: sem debounce para UX fluida
    renderSuggestions(getSuggestions(val));

    // Filtro da galeria: debounce para não travar
    clearTimeout(_searchTimer);
    _searchTimer = setTimeout(() => {
      state.query = val;
      applyFilters();
    }, 120);
  });

  // Navegação por teclado no dropdown
  searchInput.addEventListener("keydown", (e) => {
    if (suggestionsDropdown.hidden) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveSuggestion(_activeSugIdx + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveSuggestion(_activeSugIdx - 1);
        break;
      case "Enter":
        if (_activeSugIdx >= 0 && _currentSuggs[_activeSugIdx]) {
          e.preventDefault();
          applySuggestion(_currentSuggs[_activeSugIdx]);
        }
        break;
      case "Escape":
        e.preventDefault();
        hideSuggestions();
        break;
      case "Tab":
        hideSuggestions(true);
        break;
    }
  });

  // Fecha dropdown ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) {
      hideSuggestions();
    }
  });

  // Reabre sugestões ao focar de volta no input
  searchInput.addEventListener("focus", () => {
    const val = searchInput.value;
    if (val.trim().length >= 1) {
      renderSuggestions(getSuggestions(val));
    }
  });

  // Limpar busca
  function clearSearch() {
    state.query = "";
    searchInput.value = "";
    searchClearBtn.classList.remove("show");
    hideSuggestions(true);
    applyFilters();
    searchInput.focus();
  }

  searchClearBtn.addEventListener("click", clearSearch);
  clearSearchBtn.addEventListener("click", clearSearch);

  // Scroll ao topo
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  /* =====================================================
     11. API PÚBLICA
     ===================================================== */

  window.MasterSketch = {
    data: artworksData,

    add(item) {
      if (!item || !item.title || !item.description) {
        console.warn("MasterSketch.add: forneça pelo menos { title, description }.");
        return;
      }
      const id = item.id || (Math.max(0, ...artworksData.map((a) => a.id)) + 1);
      artworksData.push({
        id,
        title:       item.title,
        description: item.description,
        image:       item.image || "",
      });
      // Reconstrói índice limpo e re-renderiza
      buildIndex();
      _lastRenderKey = null; // força re-render mesmo que IDs coincidam
      applyFilters();
    },
  };


  /* =====================================================
     12. INICIALIZAÇÃO
     ===================================================== */

  buildIndex();
  applyFilters();

})();
