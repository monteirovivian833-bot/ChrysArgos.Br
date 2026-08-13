/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

  });

}


/* Fechar menu ao clicar */

document.querySelectorAll("#navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

  });

});


/* =========================
   PLAYER
========================= */

const player = document.getElementById("player");
const playerTitle = document.getElementById("playerTitle");
const closePlayer = document.getElementById("closePlayer");

function abrirPlayer(titulo) {

  if (!player) return;

  playerTitle.textContent = titulo;

  player.classList.remove("hidden");

  player.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


document.querySelectorAll("[data-title]").forEach(button => {

  button.addEventListener("click", () => {

    const titulo =
      button.getAttribute("data-title");

    abrirPlayer(titulo);

  });

});


/* Fechar player */

if (closePlayer) {

  closePlayer.addEventListener("click", () => {

    player.classList.add("hidden");

  });

}


/* =========================
   TEMPORADAS
========================= */

const seasonButtons =
  document.querySelectorAll(".season-tab");

seasonButtons.forEach(button => {

  button.addEventListener("click", () => {

    seasonButtons.forEach(item => {

      item.classList.remove("active");

    });

    button.classList.add("active");

  });

});


/* =========================
   ANO DO SITE
========================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const animatedElements =
  document.querySelectorAll(
    ".episode-card, .movie-card, .character-card, .news-grid article, .category-card"
  );

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.08
    }
  );


animatedElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(20px)";

  element.style.transition =
    "opacity .5s ease, transform .5s ease";

  observer.observe(element);

});
