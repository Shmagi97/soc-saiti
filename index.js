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
