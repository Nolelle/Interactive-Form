/*jshint esversion: 6 */
 //Put first field in the 'focus' state 
 document.getElementById("name").focus();
 
//Select option input field and hide it intially
 const element = document.getElementById("other-title");
 element.style.display = 'none';

//Logic for when other is selected.
 function showOther(val) {
     
     element.style.display = 'none';
     if (val === 'other') {
         element.style.display = "block";
     } else {
         element.style.display = 'none';
     }
 }

 
//T-Shirt Section 
//On first load of form, Color should display Please select a t shirt theme, colors in drop down should be hidden. 
var  color = document.getElementById("color");
var cornflowerblue = color.options[1];
var darkslategrey = color.options[2];
var gold = color.options[3];
var tomato = color.options[4];
var steelblue = color.options[5];
var dimgrey = color.options[6];

cornflowerblue.hidden = true;
darkslategrey.hidden = true;
gold.hidden = true;
tomato.hidden = true;
steelblue.hidden = true;
dimgrey.hidden = true;

// If a theme is chosen enable color choices that are appropriate to the chosen theme.


//Activity Section 