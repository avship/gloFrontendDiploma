const sendFormModule = () => {
  let flagSubmit = false;
  const clearAfterDelay = (elem, targetSbmit) => {
    setTimeout(() => {
      elem.textContent = "";
    }, 3000);
    setTimeout(() => {
      if (targetSbmit.closest(".fancybox-skin")) {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
          overlay.style.display = "none";
        }
        const modalTarget = targetSbmit.closest(".fancybox-skin").parentNode;

        let classModalOpen = modalTarget
          .getAttribute("class")
          .replace("--opened", "");
        modalTarget.classList.add(classModalOpen);
      }
    }, 1500);
  };
  const collectForm = (cForm) => {
    const formData = new FormData(cForm);
    const formBody = {};

    formData.forEach((val, key) => {
      if (val.trim() !== "") {
        formBody[key] = val;
      }
    });
    return formBody;
  };
  let pElem;
  const validateForm = (curForm) => {
    flagSubmit = true;
    let flag = true;
    const phoneInp = curForm.querySelector('[name="phone"]');
    const nameInp = curForm.querySelector('[name="fio"]');
    const phoneDigits = phoneInp.value.replace(/[^\d]/g, "");
    if (phoneDigits.length !== 11) {
      phoneInp.style.borderColor = "red";
      phoneInp.classList.add("error");
      flag = false;
    } else {
      phoneInp.style.borderColor = "rgb(223, 223, 223)";
      if (phoneInp.classList.contains("error")) {
        phoneInp.classList.remove("error");
      }
    }
    if (!nameInp.value) {
      nameInp.style.borderColor = "red";
      nameInp.classList.add("error");
      flag = false;
    } else {
      nameInp.style.borderColor = "rgb(223, 223, 223)";
      if (nameInp.classList.contains("error")) {
        nameInp.classList.remove("error");
      }
    }
    return flag;
  };
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
  const sendForm = (cForm, targetElem) => {
    formBody = collectForm(cForm);
    const calcTotal = document.querySelector("#calc-total");
    if (calcTotal && calcTotal.value !== "" && calcTotal.value !== "0") {
      formBody["calc-total"] = calcTotal.value.trim();
    }
    if (sessionStorage.getItem("modal")) {
      formBody["subject"] = sessionStorage.getItem("modal");
    }
    sendData(formBody)
      .then((data) => {
        pElem.textContent = "Спасибо! Мы скоро свяжемся с Вами!";
        clearAfterDelay(pElem, targetElem);
        setTimeout(() => {
          cForm.querySelectorAll("input").forEach((e) => {
            e.value = "";
          });
        }, 2900);
        if (sessionStorage.getItem("modal")) {
          sessionStorage.removeItem("modal");
        }
      })
      .catch((err) => {
        pElem.textContent = "Ошибка отправки данных";
        clearAfterDelay(pElem, targetElem);
      });
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("input", (e) => {
      if (
        e.target.getAttribute("name") &&
        e.target.getAttribute("name") === "phone"
      ) {
        if (flagSubmit) {
          if (e.target.value.replace(/[^\d]/g, "").length === 11) {
            e.target.style.borderColor = "rgb(223, 223, 223)";
            e.target.classList.remove("error");
          } else {
            e.target.classList.add("error");
            e.target.style.borderColor = "red";
          }
        }
      }
      if (
        e.target.getAttribute("name") &&
        e.target.getAttribute("name") === "fio"
      ) {
        if (flagSubmit) {
          if (e.target.value) {
            e.target.style.borderColor = "rgb(223, 223, 223)";
            e.target.classList.remove("error");
          } else {
            e.target.classList.add("error");
            e.target.style.borderColor = "red";
          }
        }
      }
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.closest(".btn") &&
        e.target.closest(".btn").getAttribute("type") === "submit"
      ) {
        e.preventDefault();
        const currentForm = e.target.closest("form");
        if (!currentForm) {
          return;
        }

        pElem = e.target.parentNode.querySelector("p");
        if (!pElem) {
          pElem = document.createElement("p");
          pElem.style.paddingTop = "5px";
          e.target.parentNode.appendChild(pElem);
        }

        if (validateForm(currentForm)) {
          pElem.textContent = "Отправляю";
          sendForm(currentForm, e.target);
        }
      }
    });
  });
};

module.exports = sendFormModule;
