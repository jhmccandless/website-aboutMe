"use strict";
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/secong-image.jpeg") {
    myImage.setAttribute("src", "images/first-webpage-image.jpeg");
  } else {
    myImage.setAttribute("src", "images/secong-image.jpeg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// function setUserName() {
//   let myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = "Come Climbing, " + myName;
// }
// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem("name");
//   myHeading.textContent = "Come Climbing, " + storedName;
// }
// myButton.onclick = function () {
//   setUserName();
// };
// function setUserName() {
//   let myName = prompt("Please enter your name.");
//   if (!myName) {
//     setUserName();
//   } else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent = `Climbing is cool, ${myName}`;
//   }
// }

const openBio = function () {
  document.querySelector(".bio").classList.remove("hidden");
  // console.log("This button was pressed.");
};
const closeBio = function () {
  document.querySelector(".bio").classList.add("hidden");
};

document.querySelector(".open-bio").addEventListener("click", openBio);
document.querySelector(".exit").addEventListener("click", closeBio);
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (
    e.key === "Escape" &&
    !document.querySelector(".bio").classList.contains("hidden")
  ) {
    closeBio();
  }
});
