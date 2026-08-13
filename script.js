const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  const aberto = nav.classList.contains("open");

  menuBtn.setAttribute("aria-expanded", aberto);
});


/* Fechar menu ao clicar em um link */

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


/* Pesquisa */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");

function pesquisar() {

  const texto = searchInput.value.trim();

  if (!texto) {

    searchResult.textContent =
      "Digite algo para pesquisar no ChrysArgos.Br.";

    return;
  }

  searchResult.textContent =
    `🔎 Você pesquisou por: "${texto}"`;

}


searchBtn.addEventListener("click", pesquisar);


searchInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    pesquisar();

  }

});


/* Botões das teorias */

document.querySelectorAll(".theory-grid button").forEach(botao => {

  botao.addEventListener("click", () => {

    botao.textContent = "Em breve ✦";

  });

});


/* Ano automático no rodapé */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

                         }
