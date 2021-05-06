/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
// let accordionHeader = document.querySelectorAll(".accordion-header");
// let accordion = document.querySelector(".accordion-js");
// let accordionRes = document.querySelector(".accordion__res");
// accordion.addEventListener("click", function() {
//   accordion.classList.toggle("accordion--active");
// });
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
