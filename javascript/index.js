// window.addEventListener("DOMContentLoaded", () => {
//   window.addEventListener("message", (event) => {
//     if (event.data == "inputFocus") {
//       getFocus();
//       console.log("gamovida");
//     }
//   });
// });

const loginVersion2Section = document.getElementById("loginVersion2Section.js");
const shesvlaArticleSistemLine = document.getElementById(
  "shesvlaArticleSistemLine.js"
);
function getFocus() {
  document.getElementById("version2Input.js").focus();
  loginVersion2Section.style.display = "block";
  shesvlaArticleSistemLine.style.display = "none";
}

// var x = 30;
// var y = x < 25 ? x - 5 : x + 5;
// console.log(y);
