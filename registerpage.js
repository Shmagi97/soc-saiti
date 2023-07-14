// const registerPageBotton = document.getElementById("regiterPageBotton");

// registerPageBotton.addEventListener("click", (event) => {
//   //   window.location = "index.html";
//   event.preventDefault();
//   const targetWindow = window.open("index.html");
//   targetWindow.onload = () => {
//     targetWindow.postMessage("inputFocus");
//   };
// });

function getFocusRegitrationHtml() {
  window.location = "index.html";
}

const registrationFocus = document.getElementById("registrationJs");
registrationFocus.addEventListener("click", () => {
  document.getElementById("InputSaxeli").focus();
});
