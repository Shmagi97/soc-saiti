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
const inputSpanInFocus = document.querySelector(".input-span-3");

const inputSpans = document.querySelectorAll(".input-span");
const inputSpans2 = document.querySelectorAll(".input-span-2");
const inputSpans3 = document.querySelectorAll(".input-span-3");
const inputSpans4 = document.querySelectorAll(".input-span-4");
const inputsJs = document.querySelectorAll(".inputs");
const formHtml = document.querySelector("#registerForm");

registerPageBotton.addEventListener("click", () => {
  iputName.focus();
  inputSpanInFocus.innerText = "შეავსეთ ველი";
  inputSpans[0].classList.remove("input-span-after-active");
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const spansarray3 = Array.from(inputSpans3);
const filterSpan3 = spansarray3.filter((span3, index) => {
  return index !== 3 && index !== 1 && index !== 0;
});

// chaanacvle forichi am sintaqsit

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// inputsJs.forEach((btn, index) => {
//   btn.addEventListener("input", () => {
//     const testCarieli = /^\s*$/.test(btn.value);
//     const testMaxSimbol = !/^.{0,30}$/.test(btn.value);

//     if (testCarieli) {
//       inputSpans3[index].innerText = "შეავსეთ, ველი ცარიელია";
//       inputSpans[index].classList.remove("input-span-after-active");
//       // inputSpans2[index].classList.remove("input-span-after-active-2");

//       return false;
//     } else if (testMaxSimbol) {
//       inputSpans3[index].innerText = 'მაქსიმუმ "30" სიმბოლო';
//       inputSpans[index].classList.remove("input-span-after-active");
//       // inputSpans2[index].classList.remove("input-span-after-active-2");

//       return false;
//     } else {
//       inputSpans3[index].innerText = "";
//       inputSpans3[index].innerText = "";
//       inputSpans[index].classList.add("input-span-after-active");
//       // inputSpans2[index].classList.add("input-span-after-active-2");

//       return true;
//     }
//   });
// });

function inputMailFn() {
  const conteinMail = !/@gmail\.com/.test(inputsJs[3].value);
  const testCarieli = /^\s*$/.test(inputsJs[3].value);

  if (testCarieli) {
    inputSpans3[3].innerText = "შეავსეთ, ველი ცარიელია";
    inputSpans[3].classList.remove("input-span-after-active");
    return false;
  } else if (!testCarieli) {
    inputSpans[3].classList.add("input-span-after-active");
    inputSpans3[3].innerText = "";
  }

  if (conteinMail) {
    inputSpans3[3].innerText = "სავალდებულოა /@gmail.com/";
    inputSpans2[3].classList.remove("input-span-after-active-2");
    return false;
  } else if (!conteinMail) {
    inputSpans2[3].classList.add("input-span-after-active-2");
    return true;
  }
}
inputsJs[3].addEventListener("input", inputMailFn);

const iputsArray = Array.from(inputsJs);
const filteredInputs = iputsArray.filter((input, index) => {
  return index !== 3 && index !== 1 && index !== 0;
});

filteredInputs.forEach((btn, index) => {
  const spansarray3 = Array.from(inputSpans3);
  const filterSpan3 = spansarray3.filter((span3, index) => {
    return index !== 3 && index !== 1 && index !== 0;
  });
  const spansarray2 = Array.from(inputSpans2);
  const filterSpan2 = spansarray2.filter((span2, index) => {
    return index !== 3 && index !== 1 && index !== 0;
  });
  const spansarray4 = Array.from(inputSpans4);
  const filterSpan4 = spansarray4.filter((span4, index) => {
    return index !== 3 && index !== 1 && index !== 0;
  });
  const spansarray = Array.from(inputSpans);
  const filterSpan = spansarray.filter((span2, index) => {
    return index !== 3 && index !== 1 && index !== 0;
  });
  btn.addEventListener("input", () => {
    const testCarieli = /^\s*$/.test(btn.value);
    const containsNumber = /[0-9]/.test(btn.value);
    const containsBigLetters = /[A-Z]/.test(btn.value);

    if (testCarieli) {
      filterSpan3[index].innerText = "შეავსეთ, ველი ცარიელია";
      filterSpan2[index].classList.remove("input-span-after-active-2");
      filterSpan4[index].classList.remove("input-span-after-active-4");
      filterSpan[index].classList.remove("input-span-after-active");

      return false;
    } else if (!testCarieli) {
      filterSpan[index].classList.add("input-span-after-active");
    }
    if (!containsNumber) {
      filterSpan3[index].innerText = "არ შეიცავს ციფრებს [0-9]";
      filterSpan2[index].classList.remove("input-span-after-active-2");

      return false;
    } else if (containsNumber) {
      filterSpan3[index].innerText = "";
      filterSpan2[index].classList.add("input-span-after-active-2");
    }

    if (!containsBigLetters) {
      filterSpan3[index].innerText = "არ შეიცავს ასოებს [A-Z]";
      filterSpan4[index].classList.remove("input-span-after-active-4");
      console.log(!containsBigLetters, "didi asoebi !");
      return false;
    } else if (containsBigLetters) {
      filterSpan3[index].innerText = "";
      filterSpan4[index].classList.add("input-span-after-active-4");

      return true;
    }
  });
});
// console.log(filteredInputs);

// function nikName(
//   containsNumberNikName,
//   containsNumberPassword,
//   containsNumberAgainPassword,
//   test2
// ) {
//   containsNumberNikName = !/[0-9]/.test(inputsJs[2].value);
//   test2 = !/[A-Z]/.test(inputsJs[2].value);

//   if (containsNumber) {
//     inputSpans3[2].innerText = "აუცილებელია შეიცავდეს ციფრებს [0-9]";
//     inputSpans[2].classList.remove("input-span-after-active");
//     return false;
//   } else if (test2) {
//     inputSpans3[2].innerText = "აუცილებელია დიდი ასოები ";
//   } else {
//     inputSpans2[2].classList.add("input-span-after-active-2");
//     return true;
//   }
// }

// inputsJs[2].addEventListener("input", nikName);

// console.log(inputSpans2);

formHtml.addEventListener("submit", (element) => {
  element.preventDefault();
});

// } else if (containsNumber) {
//   inputSpans3[2].innerText = "აუცილებელია შეიცავდეს ციფრებს [0-9]";
//   // inputSpans[2].classList.remove("input-span-after-active");
//   inputSpans2[index].classList.remove("input-span-after-active-2");
//   return false;
// } else if (containsBigLetters) {
//   inputSpans3[2].innerText = "აუცილებელია დიდი ასოები ";
//   inputSpans2[index].classList.remove("input-span-after-active-2");
//   return false;
