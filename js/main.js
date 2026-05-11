const projects = [
  {
    id: "exposicao-da-alma",
    title: "Exposição da Alma",
    year: "2026",
    category: "pintura",
    categoryLabel: "Pintura",
    technique: "Pintura a óleo sobre tela",
    images: ["assets/img/exposicao-da-alma.jpg"],
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
    description: "Espaço reservado para acrescentar o projeto de animação quando estiver finalizado. A página já está preparada para receber imagens finais, frames, estudos ou vídeo.",
    skills: "movimento, sequência, narrativa visual, composição temporal"
  }
];

const categories = [
  {
    key: "pintura",
    title: "Pintura",
    image: "assets/img/exposicao-da-alma.jpg",
    description: "Trabalhos em óleo sobre tela, composição e expressão cromática."
  },
  {
    key: "digital",
    title: "Ilustração digital",
    image: "assets/img/mundos-fantasticos.png",
    description: "Construção visual, ambientes imaginários e experimentação gráfica."
  },
  {
    key: "animacao",
    title: "Animação",
    image: "assets/img/autorretrato-fundo-claro.png",
    description: "Movimento, sequência e projetos ainda em desenvolvimento."
  }
];

const categoryColors = {
  pintura: "#8A1F1F",
  digital: "#233B73",
  animacao: "#7B8B5A"
};

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const categoryGallery = $("#categoryGallery");
const gallery = $("#gallery");
const modal = $("#projectModal");
const modalContent = $("#modalContent");
const navToggle = $("#navToggle");
const mainNav = $("#mainNav");
const header = $(".site-header");
const navLinks = $$("[data-nav]");
const sections = $$("section[id]");

function renderCategories() {
  categoryGallery.innerHTML = categories.map((category, index) => `
    <button class="category-card ${category.key}" type="button" data-filter="${category.key}" aria-label="Ver categoria ${category.title}">
      <div class="category-thumb">
        <img src="${category.image}" alt="${category.title}" loading="lazy" />
      </div>
      <div class="category-body">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${category.title}</h3>
        <p>${category.description}</p>
      </div>
    </button>
  `).join("");
}

function renderProjects(filter = "all") {
  const visibleProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);

  gallery.innerHTML = visibleProjects.map(project => `
    <button class="card ${project.category}" type="button" data-id="${project.id}" aria-label="Abrir projeto ${project.title}">
      <div class="card-thumb">
        <img src="${project.images[0]}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${project.categoryLabel}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.technique}</p>
      </div>
    </button>
  `).join("");
}

function setActiveFilter(filter) {
  $$(".filter").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal-hero" style="--accent:${categoryColors[project.category]}">
      <div class="modal-gallery">
        ${project.images.map(image => `<img src="${image}" alt="${project.title}" />`).join("")}
      </div>
      <div class="modal-info">
        <span class="cat-badge">${project.categoryLabel}</span>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="info-grid">
          <div><strong>Ano</strong><span>${project.year}</span></div>
          <div><strong>Técnica / Software</strong><span>${project.technique}</span></div>
          <div><strong>Competências</strong><span>${project.skills}</span></div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateActiveNav() {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 40);

  let current = "home";
  sections.forEach(section => {
    if (y >= section.offsetTop - 180) current = section.id;
  });

  const navTarget = current === "processo" ? "home" : current;
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${navTarget}`);
  });
}

$$(".filter").forEach(button => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter);
    renderProjects(button.dataset.filter);
  });
});

categoryGallery.addEventListener("click", event => {
  const card = event.target.closest(".category-card");
  if (!card) return;

  setActiveFilter(card.dataset.filter);
  renderProjects(card.dataset.filter);
  gallery.scrollIntoView({ behavior: "smooth", block: "start" });
});

gallery.addEventListener("click", event => {
  const card = event.target.closest(".card");
  if (card) openProject(card.dataset.id);
});

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

$$("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

window.addEventListener("scroll", updateActiveNav, { passive: true });

$("#year").textContent = new Date().getFullYear();
renderCategories();
renderProjects();
updateActiveNav();
