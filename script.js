var currentDate = new Date();
var hours = currentDate.getHours().toString();
var mins = currentDate.getMinutes().toString();
document.getElementById("time").innerHTML= hours.padStart(2, "0") + " : " + mins.padStart(2, "0");



// Search Links


var input;

const google = document.getElementById("google");
const reddit = document.getElementById("reddit");
const youtube = document.getElementById("youtube");
const wikipedia = document.getElementById("wikipedia");
const stackOverflow = document.getElementById("stack-overflow");
const amazon = document.getElementById("amazon");

var googleLink = "https://www.google.com/search?q=" + input;
var redditLink = "https://www.reddit.com/search/?q=" + input;
var amazonLink = "https://www.amazon.de/s?k=" + input + "&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2";
var wikipediaLink = "https://de.wikipedia.org/w/index.php?search=" + input;
var stackOverflowLink = "https://stackoverflow.com/search?q=" + input;
var youtube = "https://www.youtube.com/results?search_query=" + input;

