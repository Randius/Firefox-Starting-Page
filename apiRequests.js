// Get background Image from Unsplash


var rdmImg;

async function getImages() {
    const response = await fetch('https://api.unsplash.com/search/photos?client_id=S9WJbyMlMrIOBZ03q-6ndFlmg1BFNO32uVBbJAf8WcA&query=nature');
    const myJson = await response.json(); //extract JSON from the http response
    rdmImg = myJson.results[Math.floor(Math.random() * 10)].urls.full;
    document.getElementById("background").style = "background-image: url(" + rdmImg + ");";

    

}

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=munich&appid=0b4380abe154a0cfa624a6178c8f3ac9');
    const myJson = await response.json(); //extract JSON from the http response
    document.getElementById("temp").innerHTML = Math.round( myJson.main.temp - 273,15 ) + "°";
    skyIcon = "http://openweathermap.org/img/wn/" + myJson.weather[0].icon + "@4x.png";
    document.getElementById("sky").src = skyIcon;
    console.log(myJson);
    
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
                var link = item.children[2].textContent;
                var article = {title: title, description: description, link: link};
                articles.push(article);
            });
            
            articles.forEach(article => {
                var divTitle = document.createElement("A");
                divTitle.href = article.link;
                var divDescr = document.createElement("DIV");
                divTitle.className += " leading-tight text-center font-bold text-black text-sm mt-8 block bg-white bg-opacity-75 -m-4 shadow p-4 rounded-lg";
                divDescr.className += " text-sm flex items-start mt-2";
                divTitle.innerHTML = article.title;
                divDescr.innerHTML = article.description;
                divDescr.firstChild.className += " w-1/3"
                divDescr.lastChild.className += " w-2/3 text-xs font-normal leading-tight text-left ml-1"
                document.getElementById("news").appendChild(divTitle).appendChild(divDescr);

            })
        
        });


}





const news = document.getElementById("news");
document.getElementById("news-refresh").addEventListener("click", function() {
    while (news.childNodes.length > 4) {
        news.removeChild(news.childNodes[4]);
    }
    getNews();
});

getNews();
getWeather();
getImages();





