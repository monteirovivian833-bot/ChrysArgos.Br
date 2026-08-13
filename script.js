const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

const player = document.getElementById("player");
const playerTitle = document.getElementById("playerTitle");
const closePlayer = document.getElementById("closePlayer");

const videoBox = document.querySelector(".video-box");


/* =========================
   MENU MOBILE
========================= */

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

  });

}


document.querySelectorAll("#navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

  });

});


/* =========================
   EPISÓDIOS
========================= */

/*
  Aqui vamos colocar os vídeos autorizados.

  Exemplo:

  const videos = {
    "Miraculous — T1 EP01": "SEU_LINK_DO_VIDEO"
  };

*/

const videos = {

  // "Miraculous — T1 EP01": "COLOQUE_O_LINK_AQUI",

};


/* =========================
   ABRIR PLAYER
========================= */

function abrirPlayer(titulo) {

  if (!player) return;

  playerTitle.textContent = titulo;

  player.classList.remove("hidden");

  /*
    Se existir um vídeo cadastrado,
    cria o player HTML5.
  */

  const videoURL = videos[titulo];

  if (videoURL) {

    videoBox.innerHTML = `
      
      <video
        controls
        playsinline
        preload="metadata"
        style="
          width:100%;
          height:100%;
          display:block;
          background:#000;
        "
      >

        <source
          src="${videoURL}"
          type="video/mp4"
        >

        Seu navegador não conseguiu reproduzir este vídeo.

      </video>

    `;

  } else {

    videoBox.innerHTML = `

      <div class="video-message">

        <div>▶</div>

        <h3>Player pronto</h3>

        <p>
          O vídeo autorizado ainda não foi conectado.
        </p>

      </div>

    `;

  }

  player.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}


/* =========================
   BOTÕES ASSISTIR
========================= */

document
  .querySelectorAll("[data-title]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const titulo =
        button.getAttribute("data-title");

      abrirPlayer(titulo);

    });

  });


/* =========================
   FECHAR PLAYER
========================= */

if (closePlayer) {

  closePlayer.addEventListener("click", () => {

    player.classList.add("hidden");

    /*
      Limpa o player para parar
      o vídeo quando fechar.
    */

    videoBox.innerHTML = "";

  });

}


/* =========================
   TEMPORADAS
========================= */

const seasons =
  document.querySelectorAll(".season");

seasons.forEach(season => {

  season.addEventListener("click", () => {

    seasons.forEach(item => {

      item.classList.remove("active");

    });

    season.classList.add("active");

  });

});


/* =========================
   ANO
========================= */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

   }
