var agree_number = 0

function agreecounter(){
var selected_buttons = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agree_number= selected_buttons.length 
document.getElementById("agreecount").innerHTML = agree_number 
}