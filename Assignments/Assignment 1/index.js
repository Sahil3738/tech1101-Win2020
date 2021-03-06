console.log("running!!");
/*
 REPEAT AFTER ME: I will not change any of the function names!!! Nor will I change any HTML or CSS. ONLY the JavaScript
*/
/*  
  Instructions:
  - You must not change any of the function names!!! Nor change any HTML or CSS. 
  - Comments have been left in the comments to help you.
  - Use the below code to help you get started in a positive direction right away!
*/

/*
  Material to reference!!
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  - https://javascript.info/searching-elements-dom
*/

//These are your buttons!
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");
const input = document.querySelector("#max");

//This is access to where you want to display your random number
const display = document.querySelector(".display");

// Function to generate a random number
// This function needs to take in a single parameter and that would be the highest possible number.

function randomNumber(num) {
  num = input.value;

  return Math.floor(Math.random() * num + 1);
}

// Start function that will call the random number function
function startFn() {
  if (input.value === "") {
    display.textContent = "need add real numbers to your inputs";
  } else {
    display.textContent = randomNumber();
  }
}
// Stop function that will stop the start function above
function clearFn() {
  display.textContent = "";
  input.value = "";
  // Like the video demo you saw you need to clean up your display to show it
  // as though it's freshly reloaded.
}

// Listen for button clicks!!
// Start button
start.addEventListener("click", startFn);
// Clear Button
clear.addEventListener("click", clearFn);
