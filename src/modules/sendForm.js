const sendFormModule = () => {
  const clearAfterDelay = (elem) => {
    setTimeout(() => {
      elem.textContent = "";
    }, 3000);
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
    let flag = true;
    const phoneInp = curForm.querySelector('[name="phone"]');
    const nameInp = curForm.querySelector('[name="fio"]');
    const phoneDigits = phoneInp.value.replace(/[^\d]/, "");
    if (phoneDigits.length !== 11) {
      phoneInp.style.borderColor = "red";
      phoneInp.classList.add("error");
      flag = false;
      phoneInp.addEventListener("input", (e) => {
        if (e.target.value.replace(/[^\d]/, "").length === 11) {
          phoneInp.style.borderColor = "rgb(223, 223, 223)";
          phoneInp.classList.remove("error");
        }
      });
    } else {
      phoneInp.style.borderColor = "rgb(223, 223, 223)";
      if (phoneInp.classList.contains("error")) {
        phoneInp.classList.remove("error");
      }
    }
    if (!nameInp.value) {
      nameInp.style.borderColor = "red";
      nameInp.classList.add("error");

      nameInp.addEventListener("input", (e) => {
        if (e.target.value) {
          nameInp.style.borderColor = "rgb(223, 223, 223)";
          nameInp.classList.remove("error");
        }
      });
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
  const sendForm = (cForm) => {
    formBody = collectForm(cForm);

    sendData(formBody)
      .then((data) => {
        pElem.textContent = "Спасибо! Мы скоро свяжемся с Вами!";
        clearAfterDelay(pElem);
      })
      .catch((err) => {
        pElem.textContent = "Ошибка отправки данных";
        clearAfterDelay(pElem);
      });
  };
  document.addEventListener("DOMContentLoaded", () => {
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
          sendForm(currentForm);
        }
      }
    });
  });
};

module.exports = sendFormModule;
