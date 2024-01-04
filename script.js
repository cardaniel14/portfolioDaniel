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
