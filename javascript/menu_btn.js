const ongoingBtn = document.querySelector("#js_ongoing_btn");
const winnerBtn = document.querySelector("#js_winner_btn");
const deliveryBox = document.querySelector(".delivery_container");
const themaBox = document.querySelector(".thema_container");
const weekBtn = document.querySelector(".menu_week_ul");
const themaBtn = document.querySelector(".menu_thema_ul");

function ongoingClick() {
  winnerBtn.classList.remove("button_select");
  ongoingBtn.classList.add("button_select");
  deliveryBox.classList.remove("disnone");
  themaBox.classList.add("disnone");
  weekBtn.classList.remove("disnone");
  themaBtn.classList.add("disnone");
}
function winnerClick() {
  winnerBtn.classList.add("button_select");
  ongoingBtn.classList.remove("button_select");
  deliveryBox.classList.add("disnone");
  themaBox.classList.remove("disnone");
  weekBtn.classList.add("disnone");
  themaBtn.classList.remove("disnone");
}

function init() {
  ongoingBtn.addEventListener("click", ongoingClick);
  winnerBtn.addEventListener("click", winnerClick);
}

init();
