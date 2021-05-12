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

// cart

const cartBtn = document.querySelector('#cart-btn');
const cartModal = document.querySelector(".cart-modal");
const formalizationModalOverlay = document.querySelector(
  "#modal-formalization-overlay"
);
const formalizationModalBtn = document.querySelector("#move-to-cart");

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("active");
});

formalizationModalBtn.addEventListener("click", () => {
  formalizationModalOverlay.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  let target = e.target;
  if (!target.closest('#cart')) {
    cart.classList.remove("active");
  }
})

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target === formalizationModalOverlay) {
    formalizationModalOverlay.classList.remove("active");
  }
})
