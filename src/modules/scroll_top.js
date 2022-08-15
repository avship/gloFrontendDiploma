const { animate } = require("./helpers");
const scrollToTop = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const upBtn = document.querySelector(".smooth-scroll");
    upBtn.style.display = "none";
    document.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop <= 50) {
        upBtn.style.display = "none";
      } else {
        upBtn.style.display = "block";
      }
    });
    upBtn.addEventListener("click", (e) => {
      const fromPos = document.documentElement.scrollTop;

      animate({
        duration: 600,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          document.documentElement.scrollTop = fromPos - progress * fromPos;
        },
      });
    });
  });
};
module.exports = scrollToTop;
