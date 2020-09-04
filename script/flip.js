const card = document.querySelectorAll(".card__container");

card.forEach(function (element) {
  element.addEventListener("click", function () {
    element.classList.toggle("is-flipped");
  });
});
