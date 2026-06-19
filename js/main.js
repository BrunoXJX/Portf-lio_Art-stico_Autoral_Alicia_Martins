/* ──────────────────────────────────────────────
   Data — project & category definitions
   (structure unchanged)
   ────────────────────────────────────────────── */

const projects = [
  {
    id: "exposicao-da-alma",
    title: "Exposição da Alma",
    year: "2026",
    category: "pintura",
    categoryLabel: "Pintura",
    technique: "Pintura a óleo sobre tela",
    images: ["assets/img/exposicao-da-alma.jpg"],
    orientation: "portrait",
    previewFit: "contain",
    previewPosition: "center 42%",
    description: "A pintura apresenta um corpo fragmentado rodeado por várias mãos, centradas numa abertura no meio do peito. A composição procura representar a alma como um espaço interior exposto, vulnerável e em tensão. A predominância dos tons vermelhos constrói uma atmosfera intensa e inquietante.",
    skills: "composição, representação do corpo, expressividade cromática, pintura a óleo, construção simbólica"
  },
  {
    id: "overflow",
    title: "Overflow",
    year: "2026",
    category: "pintura",
    categoryLabel: "Pintura",
    technique: "Pintura a óleo sobre tela",
    images: ["assets/img/overflow.jpg"],
    orientation: "portrait",
    previewFit: "contain",
    previewPosition: "center 44%",
    description: "Esta pintura representa uma figura curvada, atravessada por uma explosão de linhas luminosas na zona do tronco. A imagem sugere um momento de rutura, sobrecarga ou libertação interior, funcionando como uma representação intensa e instável da alma.",
    skills: "figura humana, dinamismo compositivo, contraste cromático, expressividade gestual, pintura a óleo"
  },
  {
    id: "coracao-exposto",
    title: "Coração Exposto",
    year: "2026",
    category: "pintura",
    categoryLabel: "Pintura",
    technique: "Pintura a óleo sobre tela",
    images: ["assets/img/coracao-exposto.jpg"],
    orientation: "portrait",
    previewFit: "contain",
    previewPosition: "center 42%",
    description: "A composição articula olhos, formas orgânicas e um coração suspenso para construir uma imagem ligada aos sentimentos e à vulnerabilidade emocional. A obra aproxima-se de uma linguagem simbólica e surreal, criando uma atmosfera psicológica e inquietante.",
    skills: "simbolismo visual, composição, relação entre forma e significado, pintura a óleo, construção de atmosfera"
  },
  {
    id: "mundos-fantasticos",
    title: "Mundos fantásticos",
    year: "2026",
    category: "digital",
    categoryLabel: "Ilustração digital",
    technique: "Ilustração digital",
    images: ["assets/img/mundos-fantasticos.png"],
    orientation: "landscape",
    previewFit: "contain",
    previewPosition: "center",
    description: "Esta ilustração digital desenvolve-se em torno da criação de um universo imaginário, construído através da representação de seres diferenciados inseridos num ambiente fantástico e noturno. Explora a relação entre natureza, ficção e estranheza visual.",
    skills: "composição digital, construção de ambiente, cor, estilização visual, imaginação narrativa"
  },
  {
    id: "veado-em-chamas",
    title: "Veado em chamas",
    year: "2026",
    category: "digital",
    categoryLabel: "Ilustração digital",
    technique: "Ilustração digital",
    images: ["assets/img/veado-em-chamas.png"],
    orientation: "portrait",
    previewFit: "contain",
    previewPosition: "center",
    description: "Esta ilustração digital parte da temática dos incêndios em Portugal, recorrendo à figura do veado como elemento simbólico central. O contraste entre o azul profundo e os tons vermelhos e laranja acentua uma atmosfera de tensão, destruição e vulnerabilidade.",
    skills: "composição, simbolismo visual, contraste cromático, narrativa visual, ilustração digital"
  },
  {
    id: "sardinhas",
    title: "Sardinhas",
    year: "2026",
    category: "digital",
    categoryLabel: "Ilustração digital",
    technique: "Ilustração digital",
    images: ["assets/img/sardinha-estrutura.jpg", "assets/img/sardinha-azulejo.jpg"],
    orientation: "wide",
    previewFit: "contain",
    previewPosition: "center",
    description: "Conjunto de propostas desenvolvido no âmbito de um concurso, tomando a forma da sardinha como suporte para exploração visual, composição e experimentação gráfica. As peças exploram soluções distintas entre tradição, simplificação formal e referência cultural.",
    skills: "composição, adaptação formal, criatividade gráfica, ilustração digital"
  },
  {
    id: "animacao-em-desenvolvimento",
    title: "Animação",
    year: "Em desenvolvimento",
    category: "animacao",
    categoryLabel: "Animação",
    technique: "Animação / composição / experimentação",
    images: ["assets/img/autorretrato-fundo-claro.png"],
    orientation: "portrait",
    previewFit: "blank",
    previewPosition: "center",
    isFuture: true,
    description: "Espaço reservado para acrescentar o projeto de animação quando estiver finalizado. A página já está preparada para receber imagens finais, frames, estudos ou vídeo.",
    skills: "movimento, sequência, narrativa visual, composição temporal"
  }
];

const detailedProjects = projects.filter((project) => !project.isFuture);
const developmentProjects = projects.filter((project) => project.isFuture);

const categories = [
  {
    key: "pintura",
    title: "Pintura",
    image: "assets/img/exposicao-da-alma.jpg",
    orientation: "portrait",
    previewFit: "contain",
    previewPosition: "center 42%",
    description: "Trabalhos em óleo sobre tela, composição e expressão cromática."
  },
  {
    key: "digital",
    title: "Ilustração digital",
    image: "assets/img/mundos-fantasticos.png",
    orientation: "landscape",
    previewFit: "contain",
    previewPosition: "center",
    description: "Construção visual, ambientes imaginários e experimentação gráfica."
  },
  {
    key: "animacao",
    title: "Animação",
    image: "assets/img/autorretrato-fundo-claro.png",
    orientation: "portrait",
    previewFit: "blank",
    previewPosition: "center",
    isFuture: true,
    description: "Movimento, sequência e projetos ainda em desenvolvimento."
  }
];

const categoryColors = {
  pintura: "#8A1F1F",
  digital: "#233B73",
  animacao: "#7B8B5A"
};

const detailedCategories = categories.filter((category) =>
  detailedProjects.some((project) => project.category === category.key)
);

function getPreviewClasses(item) {
  const orientation = item.orientation || "portrait";
  const fit = item.previewFit || "cover";
  return `is-${orientation} fit-${fit}${item.isFuture ? " is-future" : ""}`;
}

function getPreviewStyle(item, accent) {
  const position = item.previewPosition || "center";
  return `--accent:${accent}; --preview-position:${position};`;
}

function renderPreviewMedia(item, altText) {
  if (item.isFuture) {
    return `<span class="future-placeholder" aria-hidden="true">Em desenvolvimento</span>`;
  }

  const image = item.image || (item.images && item.images[0]);
  return `<img src="${image}" alt="${altText}" loading="lazy" />`;
}

/* ──────────────────────────────────────────────
   DOM helpers
   ────────────────────────────────────────────── */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* ──────────────────────────────────────────────
   Cached DOM elements (with safety checks)
   ────────────────────────────────────────────── */

const categoryGallery = $("#categoryGallery");
const gallery = $("#gallery");
const futureProjectsContainer = $("#futureProjects");
const projectDetails = $("#detalhados");
const processSection = $("#processo");
const modal = $("#projectModal");
const modalContent = $("#modalContent");
const modalPanel = modal ? modal.querySelector(".modal-panel") : null;
const navToggle = $("#navToggle");
const mainNav = $("#mainNav");
const header = $(".site-header");
const navLinks = $$("[data-nav]");
const topLinks = $$('a[href="#topo"]');
const scrollProgressBar = $("#scrollProgressBar");
const floatingTop = $("#floatingTop");

/* Track the element that opened the modal so we can restore focus */
let previouslyFocusedElement = null;
/* Track current filter */
let currentFilter = "all";
const validFilters = ["all", ...detailedCategories.map((category) => category.key)];

/* ──────────────────────────────────────────────
   1. Scroll-based reveal animations
      (IntersectionObserver)
   ────────────────────────────────────────────── */

function initScrollReveal() {
  /* Respect prefers-reduced-motion */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const revealTargets = [
    ".hero-copy",
    ".hero-projects",
    ".process .section-shell > h2",
    ".process .section-lead",
    ".process-card",
    ".about .section-kicker",
    ".about-grid",
    ".about-cta",
    ".projects-intro",
    ".filter-bar",
    ".category-gallery",
    ".project-detail-head",
    ".gallery",
    ".contact-heading",
    ".contact-grid"
  ];

  if (!("IntersectionObserver" in window) || prefersReduced) {
    revealTargets.forEach((selector) => {
      $$(selector).forEach((el) => {
        el.classList.add("reveal-ready", "revealed");
      });
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((selector) => {
    $$(selector).forEach((el, i) => {
      el.classList.add("reveal-ready");
      el.style.transitionDelay = `${i * 0.07}s`;
      revealObserver.observe(el);
    });
  });
}

/* ──────────────────────────────────────────────
   2. Image loading states
   ────────────────────────────────────────────── */

function attachImageLoadHandlers(container) {
  if (!container) return;
  const images = container.querySelectorAll("img[loading='lazy'], img:not(.loaded)");
  images.forEach((img) => {
    /* Don't re-process already-handled images */
    if (img.dataset.loadHandled) return;
    img.dataset.loadHandled = "true";

    const wrapper = img.closest(".card-thumb, .category-thumb, .hero-card");
    if (wrapper) wrapper.classList.add("img-loading");

    function onLoaded() {
      img.classList.add("loaded");
      if (wrapper) wrapper.classList.remove("img-loading");
    }

    if (img.complete && img.naturalWidth > 0) {
      onLoaded();
    } else {
      img.addEventListener("load", onLoaded, { once: true });
      img.addEventListener("error", () => {
        img.classList.add("load-error");
        if (wrapper) wrapper.classList.remove("img-loading");
      }, { once: true });
    }
  });
}

/* ──────────────────────────────────────────────
   3. Render categories
   ────────────────────────────────────────────── */

function renderCategories() {
  if (!categoryGallery) return;
  categoryGallery.innerHTML = categories
    .map((category, index) => {
      const target = category.isFuture ? "processo" : "detalhados";
      const href = category.isFuture ? "projetos.html#processo" : `projetos.html?categoria=${category.key}#detalhados`;

      return `
    <a class="category-card ${category.key} ${getPreviewClasses(category)}"
            href="${href}"
            data-filter="${category.key}"
            data-target="${target}"
            style="${getPreviewStyle(category, categoryColors[category.key])}"
            aria-label="Ver categoria ${category.title}">
      <div class="category-thumb">
        ${renderPreviewMedia(category, category.title)}
      </div>
      <div class="category-body">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      </div>
    </a>
  `;
    })
    .join("");

  attachImageLoadHandlers(categoryGallery);
}

/* ──────────────────────────────────────────────
   4. Render projects with animated transitions
   ────────────────────────────────────────────── */

function renderProjects(filter = "all") {
  if (!gallery) return;
  currentFilter = filter;

  const visibleProjects =
    filter === "all"
      ? detailedProjects
      : detailedProjects.filter((project) => project.category === filter);

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Fade out existing cards before replacing */
  const existingCards = gallery.querySelectorAll(".card");
  if (existingCards.length > 0 && !prefersReduced) {
    existingCards.forEach((card) => card.classList.add("card-exit"));

    /* Wait for exit animation, then render new cards */
    const onTransitionDone = () => {
      insertProjectCards(visibleProjects, prefersReduced, filter);
    };
    /* Use a short timeout matching the CSS exit transition */
    setTimeout(onTransitionDone, 220);
  } else {
    insertProjectCards(visibleProjects, prefersReduced, filter);
  }
}

function getProjectGroups(visibleProjects, filter) {
  const visibleCategories =
    filter === "all"
      ? detailedCategories
      : detailedCategories.filter((category) => category.key === filter);

  return visibleCategories
    .map((category) => ({
      category,
      projects: visibleProjects.filter((project) => project.category === category.key)
    }))
    .filter((group) => group.projects.length > 0);
}

function renderProjectCard(project, index, prefersReduced) {
  return `
    <a class="card ${project.category} ${getPreviewClasses(project)} ${prefersReduced ? "" : "card-enter"}"
            id="${project.id}"
            href="projetos.html#${project.id}"
            data-id="${project.id}"
            aria-label="Abrir projeto ${project.title}"
            style="${getPreviewStyle(project, categoryColors[project.category])} --stagger: ${index}">
      <div class="card-thumb">
        ${renderPreviewMedia(project, project.title)}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${project.categoryLabel}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.technique}</p>
      </div>
    </a>
  `;
}

function renderDevelopmentProjectCard(project, index) {
  return `
    <a class="development-project-card ${project.category}"
            id="${project.id}"
            href="projetos.html#${project.id}"
            data-id="${project.id}"
            aria-label="Abrir projeto em desenvolvimento ${project.title}"
            style="${getPreviewStyle(project, categoryColors[project.category])} --stagger: ${index}">
      <div class="development-project-preview">
        ${renderPreviewMedia(project, project.title)}
      </div>
      <div class="development-project-info">
        <div class="development-project-meta">
          <span>${project.categoryLabel}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.technique}</p>
      </div>
    </a>
  `;
}

function renderDevelopmentProjects() {
  if (!futureProjectsContainer) return;

  futureProjectsContainer.innerHTML = developmentProjects
    .map((project, index) => renderDevelopmentProjectCard(project, index))
    .join("");
}

function insertProjectCards(visibleProjects, prefersReduced, filter = "all") {
  const groups = getProjectGroups(visibleProjects, filter);
  let cardIndex = 0;

  gallery.innerHTML = groups
    .map(
      ({ category, projects: groupProjects }) => `
    <section class="project-group ${category.key}" style="--accent:${categoryColors[category.key]}">
      <header class="project-group-head">
        <div>
          <span>Categoria</span>
          <h3>${category.title}</h3>
        </div>
        <p>${category.description}</p>
      </header>
      <div class="project-group-grid">
        ${groupProjects.map((project) => renderProjectCard(project, cardIndex++, prefersReduced)).join("")}
      </div>
    </section>
  `
    )
    .join("");

  attachImageLoadHandlers(gallery);

  /* Trigger staggered entrance */
  if (!prefersReduced) {
    requestAnimationFrame(() => {
      gallery.querySelectorAll(".card-enter").forEach((card) => {
        card.classList.add("card-entered");
      });
    });
  }
}

/* ──────────────────────────────────────────────
   5. Filter buttons
   ────────────────────────────────────────────── */

function setActiveFilter(filter) {
  $$(".filter").forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getProjectFromHash() {
  if (!window.location.hash) return null;

  const id = decodeURIComponent(window.location.hash.slice(1));
  return projects.find((project) => project.id === id) || null;
}

function getInitialProjectFilter() {
  const hashProject = getProjectFromHash();
  if (hashProject) return hashProject.category;

  const params = new URLSearchParams(window.location.search);
  const requestedFilter = params.get("categoria");
  return validFilters.includes(requestedFilter) ? requestedFilter : "all";
}

function updateProjectUrl(filter, options = {}) {
  const { hash = "" } = options;
  if (document.body.dataset.page !== "projetos" || !window.history.replaceState) return;

  const nextUrl = new URL(window.location.href);
  if (filter === "all") {
    nextUrl.searchParams.delete("categoria");
  } else {
    nextUrl.searchParams.set("categoria", filter);
  }
  nextUrl.hash = hash;
  window.history.replaceState({}, "", nextUrl);
}

function updateProjectHash(id) {
  if (document.body.dataset.page !== "projetos" || !window.history.pushState) return;
  if (window.location.hash === `#${id}`) return;

  const nextUrl = new URL(window.location.href);
  nextUrl.hash = id;
  window.history.pushState({}, "", nextUrl);
}

function clearProjectHash() {
  if (!window.location.hash || !window.history.replaceState) return;
  const hashProject = getProjectFromHash();
  if (!hashProject) return;

  const nextUrl = new URL(window.location.href);
  nextUrl.hash = "";
  window.history.replaceState({}, "", nextUrl);
}

function scrollToProjectDetailsIfRequested() {
  if (document.body.dataset.page !== "projetos") return;
  if (window.location.hash !== "#detalhados" || !projectDetails) return;

  const scrollToDetails = () => {
    projectDetails.scrollIntoView({ behavior: "auto", block: "start" });
  };

  requestAnimationFrame(scrollToDetails);
  setTimeout(scrollToDetails, 150);

  if (document.readyState !== "complete") {
    window.addEventListener("load", () => {
      setTimeout(scrollToDetails, 50);
    }, { once: true });
  }
}

/* ──────────────────────────────────────────────
   6. Modal — open / close with animation,
      focus trap & accessibility
   ────────────────────────────────────────────── */

function openProject(id, options = {}) {
  const { updateHash = true } = options;
  const project = projects.find((item) => item.id === id);
  if (!project || !modal || !modalContent) return;

  if (updateHash) updateProjectHash(id);

  /* Save focus origin */
  previouslyFocusedElement = document.activeElement;

  modalContent.innerHTML = `
    <div class="modal-hero" style="--accent:${categoryColors[project.category]}">
      <div class="modal-gallery ${project.isFuture ? "is-future" : ""}">
        ${
          project.isFuture
            ? `<span class="future-placeholder" aria-hidden="true">Em desenvolvimento</span>`
            : project.images.map((image) => `<img src="${image}" alt="${project.title}" />`).join("")
        }
      </div>
      <div class="modal-info">
        <span class="cat-badge">${project.categoryLabel}</span>
        <h2 id="projectModalTitle">${project.title}</h2>
        <p>${project.description}</p>
        <div class="info-grid">
          <div><strong>Ano</strong><span>${project.year}</span></div>
          <div><strong>Técnica / Software</strong><span>${project.technique}</span></div>
          <div><strong>Competências</strong><span>${project.skills}</span></div>
        </div>
      </div>
    </div>
  `;

  attachImageLoadHandlers(modalContent);

  /* Show modal with animation */
  modal.hidden = false;
  modal.removeAttribute("inert");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  /* Trigger enter animation on next frame */
  requestAnimationFrame(() => {
    modal.classList.add("modal-visible");
  });

  /* Move focus into the modal */
  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  if (!modal) return;
  if (!modal.classList.contains("open")) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  modal.classList.remove("modal-visible");

  const finishClose = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("inert", "");
    modal.hidden = true;
    document.body.style.overflow = "";
    clearProjectHash();

    /* Restore focus to the element that opened the modal */
    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
      previouslyFocusedElement.focus();
      previouslyFocusedElement = null;
    }
  };

  if (prefersReduced) {
    finishClose();
  } else {
    /* Wait for CSS exit transition */
    setTimeout(finishClose, 320);
  }
}

function openProjectFromHash() {
  if (document.body.dataset.page !== "projetos") return;

  if (window.location.hash === "#detalhados") {
    scrollToProjectDetailsIfRequested();
    return;
  }

  const hashProject = getProjectFromHash();
  if (!hashProject) {
    closeModal();
    return;
  }

  const filter = hashProject.isFuture ? "all" : hashProject.category;
  setActiveFilter(filter);
  renderProjects(filter);
  openProject(hashProject.id, { updateHash: false });
}

/* Focus trap within the modal */
function trapFocus(event) {
  if (!modal || !modal.classList.contains("open")) return;

  const focusable = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/* ──────────────────────────────────────────────
   7. Active navigation highlight
   ────────────────────────────────────────────── */

let scrollTicking = false;

function getCurrentPage() {
  if (document.body.dataset.page) return document.body.dataset.page;

  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const pageByFile = {
    "index.html": "home",
    "sobre.html": "sobre",
    "projetos.html": "projetos",
    "contacto.html": "contacto"
  };

  return pageByFile[fileName] || "home";
}

function setActivePageNav() {
  const currentPage = getCurrentPage();
  navLinks.forEach((link) => {
    const isActive = link.dataset.nav === currentPage;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function updateActiveNav() {
  if (scrollTicking) return;
  scrollTicking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (header) header.classList.toggle("scrolled", y > 40);
    if (scrollProgressBar) {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(y / scrollableHeight, 1) : 0;
      scrollProgressBar.style.transform = `scaleX(${progress})`;
    }
    if (floatingTop) floatingTop.classList.toggle("visible", y > 420);
    setActivePageNav();
    scrollTicking = false;
  });
}

/* ──────────────────────────────────────────────
   8. Hero heading reveal / typing effect
   ────────────────────────────────────────────── */

function initHeroReveal() {
  const heading = $(".hero-copy h1");
  if (!heading) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const text = heading.textContent;
  heading.innerHTML = "";
  heading.classList.add("hero-reveal");
  heading.setAttribute("aria-label", text);

  /* Split into words and wrap each in a span */
  const words = text.split(/\s+/);
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.classList.add("hero-word");
    span.style.setProperty("--word-i", String(i));
    span.textContent = word;
    /* Role presentation so screen readers read aria-label instead */
    span.setAttribute("aria-hidden", "true");
    heading.appendChild(span);

    /* Add a space between words */
    if (i < words.length - 1) {
      heading.appendChild(document.createTextNode(" "));
    }
  });

  /* Trigger animation */
  requestAnimationFrame(() => {
    heading.classList.add("hero-reveal--active");
  });
}

/* ──────────────────────────────────────────────
   9. Event listeners
   ────────────────────────────────────────────── */

function initEventListeners() {
  /* Filter buttons */
  $$(".filter").forEach((button) => {
    button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.filter);
      renderProjects(button.dataset.filter);
      updateProjectUrl(button.dataset.filter);
    });
  });

  /* Category gallery click */
  if (categoryGallery) {
    categoryGallery.addEventListener("click", (event) => {
      const card = event.target.closest(".category-card");
      if (!card) return;
      event.preventDefault();

      if (card.dataset.target === "processo") {
        setActiveFilter("all");
        renderProjects("all");
        updateProjectUrl("all", { hash: "processo" });
        if (processSection) processSection.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      setActiveFilter(card.dataset.filter);
      renderProjects(card.dataset.filter);
      updateProjectUrl(card.dataset.filter, { hash: "detalhados" });
      if (projectDetails) projectDetails.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (futureProjectsContainer) {
    futureProjectsContainer.addEventListener("click", (event) => {
      const card = event.target.closest(".development-project-card");
      if (!card) return;
      event.preventDefault();
      openProject(card.dataset.id);
    });
  }

  /* Project gallery click (event delegation) */
  if (gallery) {
    gallery.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      if (!card) return;
      event.preventDefault();
      openProject(card.dataset.id);
    });
  }

  /* Navigation toggle (mobile) */
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  /* Close mobile nav on link click */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav) mainNav.classList.remove("open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    });
  });

  topLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (mainNav) mainNav.classList.remove("open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
    });
  });

  /* Close modal buttons */
  $$("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  /* Keyboard: Escape to close modal, Tab for focus trap */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      /* Also close mobile nav */
      if (mainNav && mainNav.classList.contains("open")) {
        mainNav.classList.remove("open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      }
    }
    if (event.key === "Tab") {
      trapFocus(event);
    }
  });

  /* Scroll listener — throttled via rAF */
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("hashchange", openProjectFromHash);
}

/* ──────────────────────────────────────────────
   10. Initialise
   ────────────────────────────────────────────── */

function init() {
  /* Year in footer */
  const yearEl = $("#year");
  if (yearEl) $("#year").textContent = new Date().getFullYear();
  const initialFilter = getInitialProjectFilter();
  renderCategories();
  renderDevelopmentProjects();
  setActiveFilter(initialFilter);
  renderProjects(initialFilter);
  updateActiveNav();

  /* Set up interactions */
  initEventListeners();

  /* Animations */
  initHeroReveal();
  initScrollReveal();

  /* Handle initial image loads (hero section etc.) */
  attachImageLoadHandlers(document.body);
  scrollToProjectDetailsIfRequested();
  openProjectFromHash();
}

/* Run when DOM is ready (script is at end of body, so this is essentially immediate) */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
