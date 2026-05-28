// Configuração personalizada do Tailwind CSS
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf6f6",
          100: "#fbebeb",
          200: "#f7dcdd",
          300: "#efc1c3",
          400: "#e19da1",
          500: "#cf757a",
          600: "#bc565b",
          700: "#9d4145",
          800: "#82373b",
          900: "#6d3134",
        },
        neutral: {
          primary: "#2D312E",
          secondary: "#606662",
          lightBg: "#F9F8F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
};

// Inicialização de Ícones Lucide
lucide.createIcons();

// Controle do Menu Mobile
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fecha menu ao clicar em qualquer item nele (Mobile)
const links = mobileMenu.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Alternador de Experiências de Música (Efeito sanfona simples)
function toggleExperienciasAlura() {
  const detalhes = document.getElementById("exp-alura-detalhes");
  const icone = document.getElementById("exp-alura-icon");

  detalhes.classList.toggle("hidden");
  if (detalhes.classList.contains("hidden")) {
    icone.style.transform = "rotate(0deg)";
  } else {
    icone.style.transform = "rotate(180deg)";
  }
}

// Alternador de Experiências de Música (Efeito sanfona simples)
function toggleExperienciasMusica() {
  const detalhes = document.getElementById("exp-musica-detalhes");
  const icone = document.getElementById("exp-musica-icon");

  detalhes.classList.toggle("hidden");
  if (detalhes.classList.contains("hidden")) {
    icone.style.transform = "rotate(0deg)";
  } else {
    icone.style.transform = "rotate(180deg)";
  }
}

// Funções para Controle de Modais de Projetos
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Impede o scroll de fundo
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restaura o scroll de fundo
}

// Fechar com a tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modais = ["modal-projeto-1", "modal-projeto-2", "modal-projeto-3"];
    modais.forEach((id) => closeModal(id));
  }
});
