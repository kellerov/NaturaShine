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

document.addEventListener("DOMContentLoaded", function (event) {
  const changeMenu = function () {
    //Получили ширину области в которой необходимо скрыть кнопки
    const maxWidth = document.getElementById("menu__panel_active").clientWidth;
    //Получили ширину кнопки Еще
    const myMenuOthers = document.getElementById("myMenu-other");
    const moreWidth = myMenuOthers.clientWidth;

    const workingArea = maxWidth - moreWidth;

    //Получаем элементы по имени класса(кнопки меню)
    const menuItems = document.getElementsByClassName("menu__item_lower");
    const moreItems = document.getElementsByClassName("menu__item_more");

    let widthWithButtons = 0;
    myMenuOthers.hidden = true;

    for (let idx = 0; idx < menuItems.length; idx++) {
      menuItems[idx].hidden = false;
      moreItems[idx].hidden = true;
      if (widthWithButtons + menuItems[idx].clientWidth > workingArea) {
        menuItems[idx].hidden = true;
        moreItems[idx].hidden = false;
        myMenuOthers.hidden = false;
      }
      widthWithButtons = widthWithButtons + menuItems[idx].clientWidth;
    }
  };

  changeMenu();

  window.addEventListener("resize", changeMenu);
});
