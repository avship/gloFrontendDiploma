const tempTimer = (deadline, sectionToTimer) => {
  if (!deadline) {
    return;
  }
  const orderSection = document.querySelector(sectionToTimer);
  if (!orderSection) {
    return;
  }
  const daysLeftSpan = orderSection.querySelector(".count_1 span");
  const hoursLeftSpan = orderSection.querySelector(".count_2 span");
  const minutesLeftSpan = orderSection.querySelector(".count_3 span");
  const secondsLeftSpan = orderSection.querySelector(".count_4 span");

  const getTimeRemaining = (deadline) => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();

    let timeRemaining = Math.floor((dateStop - dateNow) / 1000);
    const days = Math.floor(timeRemaining / (24 * 60 * 60));
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    return { days, hours, minutes, seconds };
  };
  const updateTimer = () => {
    const { days, hours, minutes, seconds } = getTimeRemaining(deadline);
    daysLeftSpan.textContent = String(days).padStart(2, "0");
    hoursLeftSpan.textContent = String(hours).padStart(2, "0");
    minutesLeftSpan.textContent = String(minutes).padStart(2, "0");
    secondsLeftSpan.textContent = String(seconds).padStart(2, "0");
  };

  setInterval(updateTimer, 1000, deadline);
};

module.exports = tempTimer;
