const formvalidation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("input", (e) => {
      if (
        e.target.getAttribute("name") &&
        e.target.getAttribute("name") === "fio"
      ) {
        e.target.value = e.target.value.replace(/[^A-Za-zА-Яа-яЁё]+/g, "");
      }
      if (
        e.target.getAttribute("name") &&
        e.target.getAttribute("name") === "phone"
      ) {
        e.target.value = e.target.value.replace(/[^\d\+\(\)\-]+/g, "");
      }
      if (
        e.target.getAttribute("id") &&
        e.target.getAttribute("id") === "calc-input"
      ) {
        e.target.value = e.target.value.replace(/[^\d]+/g, "");
      }
    });
  });
};
module.exports = formvalidation;
