const myslider = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const arrowsBlock = document.querySelector(".benefits-arrows");
    const benefitsWrap = document.querySelector(".benefits-wrap");

    let errors = [];
    if (!arrowsBlock) {
      errors.push(
        'ВЕРСТАЛЬЩИК, ВЕРНИ, ПОЖАЛУЙСТА КОНТЕЙНЕР СО СТРЕЛКАМИ КЛАСС ".benefits-arrows"'
      );
    }
    if (!benefitsWrap) {
      errors.push(
        'ВЕРСТАЛЬЩИК, ВЕРНИ, ПОЖАЛУЙСТА КОНТЕЙНЕР СО ПРЕИМУЩЕСТВАМИ КЛАСС ".benefits-wrap"'
      );
    }

    if (errors.length) {
      return;
    }
    //ТУТ НАЧИНАЕТСЯ РАБОТА СО СЛАЙДЕРОМ
    const benefitItems = benefitsWrap.querySelectorAll(".benefits__item");
    if (!benefitItems.length) {
      return;
    }
    let sliderId = 0;

    let showElems;

    const initSlider = () => {
      benefitsWrap.innerHTML = "";
      showElems = 3; // сколько показывать элементов
      if (document.documentElement.clientWidth < 576) {
        showElems = 1;
        benefitsWrap.style.justifyContent = "center";
      }
      if (sliderId >= benefitItems.length) {
        sliderId = 0;
      }
      if (sliderId < 0) {
        sliderId = benefitItems.length - 1;
      }
      let nLeft = showElems;
      let fromZero = 0;
      for (let i = sliderId; i < sliderId + showElems; i++) {
        if (i < benefitItems.length) {
          benefitsWrap.appendChild(benefitItems[i]);
        } else {
          benefitsWrap.appendChild(benefitItems[fromZero]);
          fromZero += 1;
        }
        nLeft -= 1;
      }
    };
    initSlider();

    arrowsBlock.addEventListener("click", (e) => {
      if (e.target.closest(".benefits__arrow--left")) {
        sliderId -= 1;
        initSlider();
      }
      if (e.target.closest(".benefits__arrow--right")) {
        sliderId += 1;
        initSlider();
      }
    });
  });
};

module.exports = myslider;
