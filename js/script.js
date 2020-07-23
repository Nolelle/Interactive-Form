/*jshint esversion: 6 */
//Put first field in the 'focus' state
document.getElementById("name").focus();

//Select option input field and hide it intially
const element = document.getElementById("other-title");
element.style.display = "none";

//Logic for when other is selected.
function showOther(val) {
  element.style.display = "none";
  if (val === "other") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

//T-Shirt Section
//On first load of form, Color should display Please select a t shirt theme, colors in drop down should be hidden.
const color = document.getElementById("color");
//const plsSelect = document.querySelector('option');
const selectTheme = color.options[0];
console.log(selectTheme);
const cornflowerblue = color.options[1];
const darkslategrey = color.options[2];
const gold = color.options[3];
const tomato = color.options[4];
const steelblue = color.options[5];
const dimgrey = color.options[6];

cornflowerblue.hidden = true;
darkslategrey.hidden = true;
gold.hidden = true;
tomato.hidden = true;
steelblue.hidden = true;
dimgrey.hidden = true;

// when a theme is chosen, color field should update to the first available color for that theme.

//const shirtSelectElement = document.querySelector('#shirt-select-element');
//const shirtOptionElements = document.querySelectorAll('#shirt-select-element option');

const design = document.getElementById("design");
const jsPuns = design.options[1];
const heartJs = design.options[2];

design.addEventListener("change", (event) => {
  //if jspuns is selected display only the three colors for jspuns
  console.log(selectTheme.innerHTMl);
  if (event.target.value === jsPuns.value) {
    selectTheme.innerHTML = cornflowerblue.innerHTML;
    //cornflowerblue.hidden = false;
    darkslategrey.hidden = false;
    gold.hidden = false;
    tomato.hidden = true;
    steelblue.hidden = true;
    dimgrey.hidden = true;
    // if heartJs selected display only the three colors for heartJS
  } else if (event.target.value === heartJs.value) {
    selectTheme.innerHTML = tomato.innerHTML;
    //tomato.hidden = false;
    steelblue.hidden = false;
    dimgrey.hidden = false;
    cornflowerblue.hidden = true;
    darkslategrey.hidden = true;
    gold.hidden = true;
    //If select theme is selected after selecting one of the above options display please pick a theme.
  } else {
    selectTheme.innerHTML = "Please select a T-shirt theme";
    cornflowerblue.hidden = true;
    darkslategrey.hidden = true;
    gold.hidden = true;
    tomato.hidden = true;
    steelblue.hidden = true;
    dimgrey.hidden = true;
  }
});
//Activity Section
//Create an element to display the total activity cost
const  newDiv = document.createElement("div");
const cost = document. 
//Listen for changes with Acitvity Section
const checkboxes = document.querySelectorAll(".activities input ");
checkboxes.addEventListener("change", (event) => {});
