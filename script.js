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

google.addEventListener("click", function() {
    search(google);
});
reddit.addEventListener("click", function() {
    search(reddit);
});
youtube.addEventListener("click", function() {
    search(youtube);
});
wikipedia.addEventListener("click", function() {
    search(wikipedia);
});
stackOverflow.addEventListener("click", function() {
    search(stackOverflow);
});
amazon.addEventListener("click", function() {
    search(amazon);
});





function search(element) {
    console.log("test");
    input = document.getElementById("query").value;
    console.log(input);
    var googleLink = "https://www.google.com/search?q=" + input;
    var redditLink = "https://www.reddit.com/search/?q=" + input;
    var amazonLink = "https://www.amazon.de/s?k=" + input + "&__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2";
    var wikipediaLink = "https://de.wikipedia.org/w/index.php?search=" + input;
    var stackOverflowLink = "https://stackoverflow.com/search?q=" + input;
    var youtubeLink = "https://www.youtube.com/results?search_query=" + input;
    switch (element) {
        case google:
            window.location.href = googleLink;
            break;
        case reddit:
            window.location.href = redditLink;
            break;
        case youtube:
            window.location.href = youtubeLink;
            break;
        case wikipedia:
            window.location.href = wikipediaLink;
            break;
        case stackOverflow:
            window.location.href = stackOverflowLink;
            break;
        case amazon:
            window.location.href = amazonLink;
            break;
        default:
            console.log(element);
    }

}