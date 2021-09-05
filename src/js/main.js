// Для первого слайда swiper banner //

const swiper = new Swiper(".container-first", {
  direction: "horizontal",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".front",
    prevEl: ".back",
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
});

// Для второго слайда Catalog //

const modified = new Swiper(".modified", {
  slidesPerView: 5,
  spaceBetween: 24,
  slidesPerGroup: 5,
  slideClass: "card",
  wrapperClass: "wrap",
  direction: "horizontal",
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
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
});

// Адаптивное меню нижней шапки "Еще" //

function ld() {
  const a = window.innerWidth;
  const b = window.innerHeight;
  const c = window.outerWidth;
  const d = window.outerHeight;
  console.log(
    "innerWidth = " +
      a +
      " " +
      "innerHeight = " +
      b +
      " " +
      "outerWidth = " +
      c +
      " " +
      "outerHeight = " +
      d
  );
}
window.addEventListener("load", ld());

// const width =
//   window.innerWidth ||
//   document.documentElement.clientWidth ||
//   document.body.clientWidth;
// const height =
//   window.innerHeight ||
//   document.documentElement.clientHeight ||
//   document.body.clientHeight;

// console.log(width, height);

// const win = window,
//   doc = document,
//   docElem = doc.documentElement,
//   body = doc.getElementsByTagName("body")[0],
//   x = win.innerWidth || docElem.clientWidth || body.clientWidth,
//   y = win.innerHeight || docElem.clientHeight || body.clientHeight;
// console.log(x + " × " + y);
