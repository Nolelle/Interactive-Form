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
//Activity Section 
