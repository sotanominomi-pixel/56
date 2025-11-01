const clockElement = document.getElementById("clock");
const dayLengthSlider = document.getElementById("dayLength");
const dayLengthValue = document.getElementById("dayLengthValue");

// 通常スピード（1日＝24時間）
let dayLength = 24;
let simulatedTime = new Date();

function updateClock() {
  const hours = String(simulatedTime.getHours()).padStart(2, '0');
  const minutes = String(simulatedTime.getMinutes()).padStart(2, '0');
  const seconds = String(simulatedTime.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// スピード調整
function tick() {
  // 1日の長さに応じて経過速度を変更
  const speedFactor = 24 / dayLength;
  simulatedTime = new Date(simulatedTime.getTime() + 1000 * speedFactor);
  updateClock();
}

setInterval(tick, 1000);
updateClock();

// スライダー変更イベント
dayLengthSlider.addEventListener("input", () => {
  dayLength = Number(dayLengthSlider.value);
  dayLengthValue.textContent = `${dayLength}時間`;
});
