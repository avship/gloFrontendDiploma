const { animate } = require("./helpers");

const calc = () => {
  const calcBlock = document.querySelector("#calc");

  if (!calcBlock) {
    return;
  }
  const calcType = calcBlock.querySelector("#calc-type");
  const calcTypeMaterial = calcBlock.querySelector("#calc-type-material");
  const calcInput = calcBlock.querySelector("#calc-input");
  const calcTotal = calcBlock.querySelector("#calc-total");

  if (!calcType || !calcTypeMaterial || !calcInput || !calcTotal) {
    return;
  }

  calcBlock.addEventListener("input", (e) => {
    if (
      calcType.selectedIndex === 0 ||
      calcTypeMaterial.selectedIndex === 0 ||
      calcInput.value === ""
    ) {
      return;
    }
    const prevValue = +calcTotal.value;
    const curValue =
      +calcInput.value *
      +calcTypeMaterial.options[+calcTypeMaterial.selectedIndex].value *
      +calcType.options[+calcType.selectedIndex].value;
    if (prevValue !== curValue) {
      animate({
        duration: 600,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          calcTotal.value = Math.round(
            prevValue + progress * (curValue - prevValue)
          );
        },
      });
    }
  });
};

module.exports = calc;
