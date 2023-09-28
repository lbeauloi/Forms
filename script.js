//---EX 1---
//  Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

// on choppe l'input et le span via leur ID
let inputField = document.getElementById("firstname");
let displaySpan = document.getElementById("display-firstname");

// eventlistenner "keyup" sur l'input
inputField.addEventListener("keyup", function () {
  // fonction qui change le contenu du span avec la nouvelle valeur de inputField
  readyToDisplay = inputField.value;
  console.log(readyToDisplay);
});

//---EX2---
// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

// si age <18 --> section reste cachée
// sinon --> montrer la section

let ageField = document.getElementById("age");
let sectionAge = document.getElementById("a-hard-truth");
ageField.addEventListener("keyup", function () {
  if (ageField.value < 18) {
    sectionAge.style.visibility = "hidden";
  } else sectionAge.style.visibility = "visible";
});

//---EX3---
//Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

// si le mdp fait moins de 6 caractère --> border rouge
// si le mdp de confirm ne correspond pas --> border rouge

let mdp = document.querySelector("#pwd");
let mdpConfirm = document.querySelector("#pwdconfirmation");

mdp.addEventListener("keyup", function () {
  let mdpLength = mdp.value.length;
  if (mdpLength < 6) {
    mdp.style.border = "2px solid red";
  } //si le mdp fait + 6 caractères, on remet la bordure en couleur de base
  else mdp.style.border = "";
});

mdpConfirm.addEventListener("keyup", function () {
  let mdpValue = pwd.value;
  let mdpConfirmValue = pwdconfirmation.value;
  if (mdpValue === mdpConfirmValue) {
    mdpConfirm.style.border = ""; //si les mdp sont identiques, on remet la bordure en couleur de base
  } else mdpConfirm.style.border = "2px solid red";
});

//---EX4---
//Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

let darkmodeSelector = document.querySelector("#toggle-darkmode");
darkmodeSelector.addEventListener("change", function () {
  let darkmodeValue = darkmodeSelector.value;

  if (darkmodeValue === "dark") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
