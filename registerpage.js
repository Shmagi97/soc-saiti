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

const sheyvaniliTexti = [];

const registrationSubmitButton = document.getElementById("registrationSubmit1");

// registrationSubmitButton.addEventListener("click", () => {
//   const inputValue = document.getElementById("InputSaxeli");
//   const inputSaxeliSheyvanili = inputValue.value;
//   sheyvaniliTexti.push(inputSaxeliSheyvanili);
//   console.log(sheyvaniliTexti);
// });

// const sheyvaniliNumber = [];

registrationSubmitButton.addEventListener("click", () => {
  const inputNumber = document.getElementById("InputGvari");
  const inputValue = document.getElementById("InputSaxeli");

  const inputNumberValue = parseInt(inputNumber.value);
  const inputSaxeliSheyvanili = inputValue.value;

  // if (!isNaN(inputNumberValue)) {
  //   sheyvaniliTexti.push(inputNumberValue);
  //   console.log(sheyvaniliTexti);
  // } else {
  //   sheyvaniliTexti.push(inputSaxeliSheyvanili);
  //   console.log(sheyvaniliTexti);
  // }

  sheyvaniliTexti.push(inputNumberValue);
  sheyvaniliTexti.push(inputSaxeliSheyvanili);
  console.log(sheyvaniliTexti);
});
