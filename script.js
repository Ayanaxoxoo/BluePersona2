var agree_number = 0
var disagree_number = 0

function eicounter(){
var selected_buttons_a = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agree_number= selected_buttons_a.length 


var selected_buttons_d =document.querySelectorAll('input[type="radio"]:checked[value="disagree"]');
disagree_number= selected_buttons_d.length 

return(disagree_number)
}



var agreeSN_number = 0
function agreeSNcount(){
var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="agreeSN"]');
agreeSN_number = selected_buttonsSN.length 
document.getElementById("agreecountSN").innerHTML = disagree_number

console.log(disagree_number)
}
