// const registerPageBotton = document.getElementById("regiterPageBotton");

// registerPageBotton.addEventListener("click", (event) => {
//   //   window.location = "index.html";
//   event.preventDefault();
//   const targetWindow = window.open("index.html");
//   targetWindow.onload = () => {
//     targetWindow.postMessage("inputFocus");
//   };
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
// ინდექსით 0 და 1 ფორიჩ მეთოდით სტილების მინიჭება

inputSpans2[0].style.display = "none";
inputSpans2[1].style.display = "none";
inputSpans4[0].style.display = "none";
inputSpans4[1].style.display = "none";
inputSpans4[3].style.display = "none";

const inputsArrayNames = Array.from(inputsJs);
const sliceArrayNames = inputsArrayNames.slice(0, 2);

sliceArrayNames.forEach((btn, index) => {
  const spansArray3 = Array.from(inputSpans3);
  const sliceSpanArray3 = spansArray3.slice(0, 2);
  const spansArray = Array.from(inputSpans);
  const sliceSpanArray = spansArray.slice(0, 2);
  btn.addEventListener("input", (testCarieli, testMaxSimbol) => {
    testCarieli = /^\s*$/.test(btn.value);
    testMaxSimbol = /^.{0,30}$/.test(btn.value);

    if (testCarieli) {
      sliceSpanArray3[index].innerText = "შეავსეთ, ველი ცარიელია";
      sliceSpanArray[index].classList.remove("input-span-after-active");
      return false;
    } else if (!testCarieli) {
      sliceSpanArray3[index].innerText = "";
      sliceSpanArray[index].classList.add("input-span-after-active");
    }

    if (!testMaxSimbol) {
      sliceSpanArray3[index].innerText = 'მაქსიმუმ "30" სიმბოლო';
      return false;
    } else if (testMaxSimbol) {
      sliceSpanArray3[index].innerText = "";
      return true;
    }
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ინდექსით 2. ფუნქციით სტილების მინიჭება

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

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ინდექსით 2 , 4 და 5 ფორიჩ მეთოდით სტილების მინიჭება

const iputsArraySac = Array.from(inputsJs);
const ChangeMasivSlice = iputsArraySac.slice(2, 6);
const ChangeMasivSplice = ChangeMasivSlice.splice(1, 1);

ChangeMasivSlice.forEach((btn, index) => {
  const spansArray2 = Array.from(inputSpans2);
  const spansArray2Slice = spansArray2.slice(2, 6);
  const spansArray2Splice = spansArray2Slice.splice(1, 1);

  const spansArray3 = Array.from(inputSpans3);
  const spansArray3Slice = spansArray3.slice(2, 6);
  const spansArray3Splice = spansArray3Slice.splice(1, 1);

  const spansarray4 = Array.from(inputSpans4);
  const spansArray4Slice = spansarray4.slice(2, 6);
  const spansArray4Splice = spansArray4Slice.splice(1, 1);

  const spansarray = Array.from(inputSpans);
  const spansArraySlice = spansarray.slice(2, 6);
  const spansArraySplice = spansArraySlice.splice(1, 1);

  btn.addEventListener("input", () => {
    const testCarieli = /^\s*$/.test(btn.value);
    const containsNumber = /[0-9]/.test(btn.value);
    const containsBigLetters = /[A-Z]/.test(btn.value);

    if (testCarieli) {
      spansArray3Slice[index].innerText = "შეავსეთ, ველი ცარიელია";
      spansArray2Slice[index].classList.remove("input-span-after-active-2");
      spansArray4Slice[index].classList.remove("input-span-after-active-4");
      spansArraySlice[index].classList.remove("input-span-after-active");

      return false;
    } else if (!testCarieli) {
      spansArray3Slice[index].innerText = "";
      spansArraySlice[index].classList.add("input-span-after-active");
    }

    if (!containsNumber) {
      spansArray3Slice[index].innerText = "არ შეიცავს ციფრებს [0-9]";
      spansArray2Slice[index].classList.remove("input-span-after-active-2");

      return false;
    } else if (containsNumber) {
      spansArray3Slice[index].innerText = "";
      spansArray2Slice[index].classList.add("input-span-after-active-2");
    }

    if (!containsBigLetters) {
      spansArray3Slice[index].innerText = "არ შეიცავს ასოებს [A-Z]";
      spansArray4Slice[index].classList.remove("input-span-after-active-4");

      return false;
    } else if (containsBigLetters) {
      spansArray3Slice[index].innerText = "";
      spansArray4Slice[index].classList.add("input-span-after-active-4");

      return true;
    }
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// საბმით, სერვერზე გასატანი ინფორმაცია

formHtml.addEventListener("submit", (element) => {
  element.preventDefault();
});
