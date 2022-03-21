const timerBlock = document.querySelector(".timer__time");
const deadLine = "28 march 2022";
let interval;

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadLine = new Date(deadLine).getTime();

  const timeRemaining = (dateDeadLine - date) / 1000;
  const days = Math.floor(timeRemaining / 60 / 60 / 24); //УСЛОЖНЕННОЕ ЗАДАНИЕ ДЕНЬ 3
  const hours = Math.floor((timeRemaining / 60 / 60) % 24); //УСЛОЖНЕННОЕ ЗАДАНИЕ ДЕНЬ 3
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const fHours = hours < 10 ? "0" + hours : hours;
  const fMinutes = minutes < 10 ? "0" + minutes : minutes;
  const fSeconds = seconds < 10 ? "0" + seconds : seconds;

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) {
      return text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }
    if (n1 == 1) {
      return text_forms[0];
    }
    return text_forms[2];
  }

  timerBlock.textContent = `${days} ${declOfNum(days, [
    "день",
    "дня",
    "дней",
  ])} ${fHours}:${fMinutes}:${fSeconds}`;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};

updateClock();

interval = setInterval(updateClock, 500);
