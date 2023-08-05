// const registerPageBotton = document.getElementById("regiterPageBotton");

// registerPageBotton.addEventListener("click", (event) => {
//   //   window.location = "index.html";
//   event.preventDefault();
//   const targetWindow = window.open("index.html");
//   targetWindow.onload = () => {
//     targetWindow.postMessage("inputFocus");
//   };
// });

// const registrationFocus = document.getElementById("registrationJs");
// registrationFocus.addEventListener("click", () => {
//   document.getElementById("InputSaxeli").focus();
// });

// const sheyvaniliTexti = [];

// const registrationSubmitButton = document.getElementById("registrationSubmit1");

// registrationSubmitButton.addEventListener("click", () => {
//   const inputValue = document.getElementById("InputSaxeli");
//   const inputSaxeliSheyvanili = inputValue.value;
//   sheyvaniliTexti.push(inputSaxeliSheyvanili);
//   console.log(sheyvaniliTexti);
// });

// const sheyvaniliNumber = [];

// registrationSubmitButton.addEventListener("click", () => {
//   const inputNumber = document.getElementById("InputGvari");
//   const inputValue = document.getElementById("InputSaxeli");

//   const inputNumberValue = parseInt(inputNumber.value);
//   const inputSaxeliSheyvanili = inputValue.value;

//   if (!isNaN(inputNumberValue)) {
//     sheyvaniliTexti.push(inputNumberValue);
//     console.log(sheyvaniliTexti);
//   } else {
//     sheyvaniliTexti.push(inputSaxeliSheyvanili);
//     console.log(sheyvaniliTexti);
//   }

//   sheyvaniliTexti.push(inputNumberValue);
//   sheyvaniliTexti.push(inputSaxeliSheyvanili);
//   console.log(sheyvaniliTexti);
// });

function loginPage() {
  window.location = "index.html";
}

const registerPageBotton = document.querySelector("#registrationJs");
const iputName = document.querySelector("#InputSaxeli");
const inputSpanInFocus = document.querySelector(".input-span");

const inputSpans = document.querySelectorAll(".input-span");
const inputSpans2 = document.querySelectorAll(".input-span-2");
const inputSpans3 = document.querySelectorAll(".input-span-3");
const inputsJs = document.querySelectorAll(".inputs");
const formHtml = document.querySelector("#registerForm");

registerPageBotton.addEventListener("click", () => {
  iputName.focus();
  inputSpanInFocus.innerText = "შეავსეთ ველი";
  inputSpans[0].classList.remove("input-span-after-active");
  console.log(iputName);
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
inputsJs.forEach((btn, index) => {
  btn.addEventListener("input", () => {
    const testCarieli = /^\s*$/.test(btn.value);
    const testMaxSimbol = !/^.{0,30}$/.test(btn.value);
    const containsNumber = !/[0-9]/.test(inputsJs[2].value);
    const containsBigLetters = !/[A-Z]/.test(inputsJs[2].value);
    if (testCarieli) {
      inputSpans3[index].innerText = "შეავსეთ, ველი ცარიელია";
      inputSpans[index].classList.remove("input-span-after-active");
      inputSpans2[index].classList.remove("input-span-after-active-2");

      return false;
    } else if (testMaxSimbol) {
      inputSpans3[index].innerText = 'მაქსიმუმ "30" სიმბოლო';
      inputSpans[index].classList.remove("input-span-after-active");
      inputSpans2[index].classList.remove("input-span-after-active-2");

      return false;
    } else if (containsNumber) {
      inputSpans3[2].innerText = "აუცილებელია შეიცავდეს ციფრებს [0-9]";
      // inputSpans[2].classList.remove("input-span-after-active");
      inputSpans2[index].classList.remove("input-span-after-active-2");
      return false;
    } else if (containsBigLetters) {
      inputSpans3[2].innerText = "აუცილებელია დიდი ასოები ";
      inputSpans2[index].classList.remove("input-span-after-active-2");
      return false;
    } else {
      inputSpans3[index].innerText = "";
      inputSpans3[index].innerText = "";
      inputSpans[index].classList.add("input-span-after-active");
      inputSpans2[index].classList.add("input-span-after-active-2");

      return true;
    }
  });
});

function nikName(containsNumber, test2) {
  containsNumber = !/[0-9]/.test(inputsJs[2].value);
  test2 = !/[A-Z]/.test(inputsJs[2].value);

  if (containsNumber) {
    inputSpans3[2].innerText = "აუცილებელია შეიცავდეს ციფრებს [0-9]";
    inputSpans[2].classList.remove("input-span-after-active");
    return false;
  } else if (test2) {
    inputSpans3[2].innerText = "აუცილებელია დიდი ასოები ";
  } else {
    inputSpans2[2].classList.add("input-span-after-active-2");
    return true;
  }
}

// inputsJs[2].addEventListener("input", nikName);

console.log(inputSpans2);

formHtml.addEventListener("submit", (element) => {
  element.preventDefault();
  nikName();
});
