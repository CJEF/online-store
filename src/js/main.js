/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
let accordionHeader = document.querySelectorAll(".accordion-header");
let accordion = document.querySelector(".accordion-js");
let accordionRes = document.querySelector(".accordion__res");
accordion.addEventListener("click", function() {
  accordion.classList.toggle("accordion--active");
});
