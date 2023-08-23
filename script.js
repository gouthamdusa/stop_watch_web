let startTime = 0;
let intervalId = null;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");

function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

startStopButton.addEventListener("click", function () {
  if (!intervalId) {
    startStopButton.textContent = "Stop";
    intervalId = setInterval(updateDisplay, 1000);
    startTime = new Date().getTime() - startTime;
  } else {
    startStopButton.textContent = "Start";
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetButton.addEventListener("click", function () {
  startStopButton.textContent = "Start";
  clearInterval(intervalId);
  intervalId = null;
  display.textContent = "00:00:00";
  startTime = 0;
});

updateDisplay();
