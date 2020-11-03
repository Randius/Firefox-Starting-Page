var currentDate = new Date();
var hours = currentDate.getHours().toString();
var mins = currentDate.getMinutes().toString();
document.getElementById("time").innerHTML= hours.padStart(2, "0") + " : " + mins.padStart(2, "0");