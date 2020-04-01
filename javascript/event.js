const ongoingBtn = document.querySelector("#js_ongoing_btn");
const winnerBtn = document.querySelector("#js_winner_btn");

const ongoingBox = document.querySelector(".ongoing_container");
const winnerBox = document.querySelector(".winner_container");

function showOngoing() {
  ongoingBtn.classList.add("button_select");
  winnerBtn.classList.remove("button_select");
  ongoingBox.classList.remove("disnone");
  winnerBox.classList.add("disnone");
}
function showWinner() {
  winnerBtn.classList.add("button_select");
  ongoingBtn.classList.remove("button_select");
  winnerBox.classList.remove("disnone");
  ongoingBox.classList.add("disnone");
}

function init() {
  ongoingBtn.addEventListener("click", showOngoing);
  winnerBtn.addEventListener("click", showWinner);
}

init();
