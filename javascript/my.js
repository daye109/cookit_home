const memberBtn = document.querySelector("#js_member_btn");
const nonMemberBtn = document.querySelector("#js_nonmember_btn");

const memberBox = document.querySelector(".member_container");
const nonMemberBox = document.querySelector(".nonmember_container");

function showMember() {
  memberBtn.classList.add("button_select");
  nonMemberBtn.classList.remove("button_select");
  memberBox.classList.remove("disnone");
  nonMemberBox.classList.add("disnone");
}
function showNonMember() {
  nonMemberBtn.classList.add("button_select");
  memberBtn.classList.remove("button_select");
  nonMemberBox.classList.remove("disnone");
  memberBox.classList.add("disnone");
}
function init() {
  memberBtn.addEventListener("click", showMember);
  nonMemberBtn.addEventListener("click", showNonMember);
}

init();
