const certificateShower = () => {
  const certificateSection = document.querySelector("#documents");
  if (!certificateSection) {
    return;
  }
  const overlay = document.querySelector(".overlay");
  certificateSection.addEventListener("click", (e) => {
    if (e.target.closest(".sertificate-document")) {
      e.preventDefault();
      overlay.innerHTML = "";
      overlay.style.display = "block";

      const imgDiv = document.createElement("div");
      imgDiv.classList.add("certificateDiv");
      imgDiv.style.position = "absolute";
      imgDiv.style.top = "50%";
      imgDiv.style.left = "50%";
      imgDiv.style.transform = "translate(-50%, -50%)";
      imgDiv.innerHTML = `<img src="${e.target
        .closest(".sertificate-document")
        .getAttribute("href")}" alt='Сертификат' style="height: ${
        document.documentElement.clientHeight - 30
      }px;"><div class="certCloser" style="position: absolute; top: 5px; right: 3px; cursor: pointer; font-size: 20px; padding: 7px; line-height: 1.2; text-align: center; background-color: #000; border-radius: 20px; color: #FFF;">X</div>`;

      overlay.appendChild(imgDiv);
    }
  });

  const closeCert = () => {
    overlay.innerHTML = "";
    overlay.style.display = "none";
  };
  overlay.addEventListener("click", (e) => {
    if (e.target.closest(".certCloser")) {
      closeCert();
    }
    if (!e.target.closest(".certificateDiv")) {
      if (document.querySelector(".certificateDiv")) {
        closeCert();
      }
    }
  });
};

module.exports = certificateShower;
