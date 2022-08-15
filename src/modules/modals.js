const modals = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".header-modal");
    const modalServices = document.querySelector(".services-modal--opened");

    const openModal = (modalWindow, classModal) => {
      // console.log("overlay", overlay, overlay.style.display);
      // console.log("modalWindow", modalWindow, modalWindow.style.display);
      if (modalWindow.classList.contains(classModal)) {
        modalWindow.classList.remove(classModal);
        overlay.style.display = "block";
      }
    };
    const closeModal = (modalWindow, classModal) => {
      overlay.style.display = "none";
      modalWindow.classList.add(classModal);
    };

    document.addEventListener("click", (e) => {
      if (
        !e.target.closest(".header-modal--opened") &&
        !modal.classList.contains("header-modal")
      ) {
        closeModal(modal, "header-modal");
      }
      if (e.target.closest(".header-modal__close")) {
        closeModal(modal, "header-modal");
      }
      if (
        !e.target.closest(".header-modal--opened") &&
        !modal.classList.contains("header-modal")
      ) {
        closeModal(modal, "header-modal");
      }
      if (
        e.target.closest(".btn") &&
        e.target.closest(".btn").getAttribute("href") === "#callback"
      ) {
        e.preventDefault();
        // console.log("тут");
        openModal(modal, "header-modal");
      }
      if (
        !e.target.closest(".services-modal--opened") &&
        !modalServices.classList.contains("services-modal")
      ) {
        closeModal(modalServices, "services-modal");
      }
      if (
        e.target.closest(".btn") &&
        e.target.closest(".btn").getAttribute("href") === "#application"
      ) {
        e.preventDefault();
        openModal(modalServices, "services-modal");
      }
      if (e.target.closest(".services-modal__close")) {
        closeModal(modalServices, "services-modal");
      }
    });
  });
};

module.exports = modals;
