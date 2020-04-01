const footerBtnUp = document.querySelector(".footer_btn_up");
const footerBtnDown = document.querySelector(".footer_btn_down");
const footerBox = document.querySelector(".footer_link_box");

function footerPageDown() {
  footerBox.classList.toggle("disnone");
  footerBtnUp.classList.remove("disnone");
  footerBtnDown.classList.add("disnone");
}

function footerPageUp() {
  footerBox.classList.toggle("disnone");
  footerBtnUp.classList.add("disnone");
  footerBtnDown.classList.remove("disnone");
}

function init() {
  footerBtnDown.addEventListener("click", footerPageDown);
  footerBtnUp.addEventListener("click", footerPageUp);
}

init();
