// Get background Image from Unsplash


var rdmImg;

async function getImages() {
    const response = await fetch('https://api.unsplash.com/search/photos?client_id=S9WJbyMlMrIOBZ03q-6ndFlmg1BFNO32uVBbJAf8WcA&query=beautiful');
    const myJson = await response.json(); //extract JSON from the http response
    rdmImg = myJson.results[Math.floor(Math.random() * 10)].urls.full;
    document.getElementById("background").style = "background-image: url(" + rdmImg + ");";

    

}

async function getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=munich&appid=0b4380abe154a0cfa624a6178c8f3ac9');
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("temp").innerHTML = Math.round( myJson.main.temp - 273,15 ) + "°";
    skyIcon = "http://openweathermap.org/img/wn/" + myJson.weather[0].icon + "@2x.png";
    document.getElementById("sky").src = skyIcon;
    console.log(myJson);
    
}

function getBackground () {
    
}

function getNews () {
    const URL = ('https://cors-anywhere.herokuapp.com/https://rss.sueddeutsche.de/rss/Topthemen');
    
    var articles = [];
    fetch(URL)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            console.log(data);
            
            var items = data.querySelectorAll('item');
            items.forEach(item => {
                var title = item.children[0].textContent;
                var description = item.children[1].textContent;
                var article = {title: title, description: description};
                articles.push(article);
            });
            
            articles.forEach(article => {
                var divArticle = document.createElement("DIV")
                var divTitle = document.createElement("DIV");
                var divDescr = document.createElement("DIV");
                divDescr.className += " text-sm";
                divTitle.innerHTML = article.title;
                divDescr.innerHTML = article.description;
                divArticle.appendChild(divTitle).appendChild(divDescr);
                document.getElementById("news").appendChild(divArticle);
            })
        
        });


}







getNews();
/* getWeather();
getImages();
getBackground(); */
imgSrc = "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2125&q=80";



