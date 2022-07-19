const modal = document.querySelector("#modal");

document.onclick = function (x) {
  if (x.target.closest(".game-card, .sign-up__container")) {
    return;
  } else {
    modal.classList.toggle("visible");
  }
};
