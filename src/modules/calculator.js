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
  const styleAdd = document.createElement("style");
  styleAdd.textContent = `
  
  .rub:after {
    content: '₽';
    position: absolute;
    top: 42%;
    right: 4%;
    font-weight: bold;
    display: inline-block;
    font-size: 18px;
  }
  @media(max-width: 992px) {
    .rub:after {
      top: 50%;
      right: 4%;
      font-weight: bold;
      display: inline-block
    }
  }
`;
  document.body.append(styleAdd);
  calcTotal.closest(".form-group").classList.add("rub");

  calcBlock.addEventListener("input", (e) => {
    if (
      calcType.selectedIndex === 0 ||
      calcTypeMaterial.selectedIndex === 0 ||
      calcInput.value === ""
    ) {
      calcTotal.value = "";
      return;
    }
    let prevValue = isNaN(parseInt(calcTotal.value))
      ? 0
      : parseInt(calcTotal.value);
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
          calcTotal.value =
            1000 * Math.round(prevValue + progress * (curValue - prevValue));
        },
      });
      // calcTotal.setAttribute("type", "text");
    }
  });
};

module.exports = calc;
