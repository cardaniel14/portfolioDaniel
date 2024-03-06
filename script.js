//Uso de typed framework para hacer la letra animada

const typed = new Typed(".typed", {
  strings: ["Front-End Developer"],
  typeSpeed: 100,
  cursorBlinking: false,
  loop: false,
});

typed.cursor.innerText = "";

function showScroll() {
  let animation = document.querySelectorAll(".animation");
  //   let offsetTop = document.querySelector(".animation").offsetTop;
  let scroll = document.documentElement.scrollTop;

  for (let i = 0; i < animation.length; i++) {
    let offsetTop = animation[i].offsetTop;
    if (scroll > offsetTop - 500) {
      animation[i].style.opacity = 1;
      animation[i].classList.add("show");
    }
  }
}

window.addEventListener("scroll", showScroll);

const albums = [
  {
    name: "Born to Run by Bruce Springsteen",
    cover: "./imagenes/bornToRun.jpg",
  },
  {
    name: "Kiss Symphony by Kiss",
    cover: "./imagenes/kissSymphony.jpg",
  },
  {
    name: "The E Street Shuffle by The E Street Band",
    cover: "./imagenes/theEStreetShuffle.jpg",
  },
  {
    name: "Greatest Hits By Queen",
    cover: "./imagenes/queen.jpg",
  },
  {
    name: "Thriller By Michael Jackson",
    cover: "./imagenes/thriller.jpg",
  },
  {
    name: "Antologia by Los Prisioneros",
    cover: "./imagenes/antologiaPrisioneros.jpg",
  },
  {
    name: "Greatest Hits By Bruce Springsteen",
    cover: "./imagenes/greatestHitsBruce.jpg",
  },
  {
    name: "Kiss Alive By Kiss",
    cover: "./imagenes/KissAlive.jpg",
  },
  {
    name: "Past To Present By Toto",
    cover: "./imagenes/pastToPresent.jpg",
  },
  {
    name: "Vault By Def Leppard",
    cover: "./imagenes/vaultDefLeppard.jpg",
  },
];

const coverAlbum = () => {
  let divgral = document.querySelector(".divprueba");
  divgral.setAttribute("class", "divgral");
  let sliderMusic = document.querySelector(".sliderMusic");
  albums.forEach((item) => {
    let divAlbums = document.createElement("div");
    divAlbums.setAttribute("class", "divAlbums");
    // let divParagraph = document.createElement("div");
    // divParagraph.setAttribute("class", "divParagraph");

    let paragraphAlbumName = document.createElement("p");
    // paragraphAlbumName.setAttribute("class", "divParagraph");
    paragraphAlbumName.setAttribute("class", "paragraphAlbumName");
    let imgAlbumCover = document.createElement("img");
    imgAlbumCover.setAttribute("class", "img-coverAlbum");
    let { name, cover } = item;

    paragraphAlbumName.textContent = name;
    imgAlbumCover.src = cover;

    divAlbums.appendChild(imgAlbumCover);
    divAlbums.appendChild(paragraphAlbumName);
    // divParagraph.appendChild(paragraphAlbumName);

    // divAlbums.appendChild(divParagraph);
    sliderMusic.appendChild(divAlbums);
  });
  divgral.appendChild(sliderMusic);
};

coverAlbum();

window.addEventListener("load", function () {
  const sliderMusic = document.querySelector(".sliderMusic");
  const divAlbums = sliderMusic.querySelectorAll(".divAlbums");
  const slideWidth = divAlbums[0].offsetWidth;
  const slideCount = divAlbums.length;
  const totalWidth = slideWidth * slideCount;
  let currentPosition = 0;

  // Establecer el ancho del contenedor sliderMusic
  sliderMusic.style.width = `${totalWidth}px`;

  // Clonar los divs y agregarlos al final del carrusel
  divAlbums.forEach(function (div) {
    const clonedDiv = div.cloneNode(true);
    sliderMusic.appendChild(clonedDiv);
  });

  // Mover el carrusel
  function moveCarousel() {
    currentPosition -= 1;
    sliderMusic.style.transform = `translateX(${currentPosition}px)`;

    // Si el carrusel se ha movido completamente hacia la izquierda, reiniciar la posición
    if (currentPosition <= -slideWidth) {
      currentPosition = 0;
      sliderMusic.style.transform = `translateX(${currentPosition}px)`;
    }
  }

  // Iniciar el movimiento del carrusel con una velocidad más lenta
  setInterval(moveCarousel, 20); // Ajusta la velocidad según tus necesidades
});

const fetchingAPIPrueba = async () => {
  const apiKey = "fc29a85dd2ce4c4f907a8844a70b4bfe";
  const clientSecret = "57ccd93bc8f3487f8adaf3243cbec1e8";
  const fetching = await fetch("https://api.spotify.com");
};
