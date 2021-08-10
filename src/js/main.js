//-- Для первого слайда swiper banner --//

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  disableOnInteraction: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 1,
    },
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

//-- Для второго слайда Catalog --//

const modified = new Swiper(".modified", {
  slidesPerView: 5,
  spaceBetween: 24,
  slidesPerGroup: 5,
  loop: true,
  autoplay: true,
  disableOnInteraction: false,
  slideClass: "card",
  wrapperClass: "wrap",
  direction: "horizontal",
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".nxt",
    prevEl: ".prv",
  },

  pagination: {
    el: ".page",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 5,
    },
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
});

//-- Menu hamburger --//

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu__left"),
    menuItem = document.querySelectorAll(".menu__item_lower"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu__left_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu__left_active");
    });
  });
});
