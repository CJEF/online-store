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


const body = document.querySelector("body");

const cartBtn = document.querySelector('#cart-btn');
const cartModal = document.querySelector(".cart-modal");
const formalizationModalOverlay = document.querySelector(
  "#modal-formalization-overlay"
);
const formalizationModalBtn = document.querySelector("#move-to-cart");
const modalProductOverlay = document.querySelector("#modal-product-overlay");
const productCardBtn = document.querySelectorAll(".move-to-product-card");
const burgerMenu = document.querySelector("#burger-menu");

/* ======================================== */

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("active");
  // body.classList.toggle("overflow-hidden");
});

document.addEventListener("click", (e) => {
  let target = e.target;
  if (!target.closest("#cart")) {
    cart.classList.remove("active");
    // body.classList.remove("overflow-hidden");
  }
});

/* ========================================= */

/* ======================================== */

formalizationModalBtn.addEventListener("click", () => {
  formalizationModalOverlay.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target === formalizationModalOverlay) {
    formalizationModalOverlay.classList.remove("active");
    body.classList.remove("overflow-hidden");
  }
});

/* ======================================== */

/* ======================================== */
productCardBtn.forEach((el) => {
  el.addEventListener("click", () => {
    modalProductOverlay.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });
})

document.addEventListener("click", (e) => {
  let target = e.target;
  if (target === modalProductOverlay) {
    modalProductOverlay.classList.remove("active");
    body.classList.remove("overflow-hidden");
  }
});

/* ======================================== */

/* ======================================== */

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");
})
