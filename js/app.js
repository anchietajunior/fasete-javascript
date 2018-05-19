//Define Variables
//Fetch
//Create function
//Show data
//Select Elements in the DOM
//Edit elements
//Create elements
//Show data inside created elements
var listGroup = document.getElementById("listGroup");
var inputText = document.getElementById("inputText");
var searchButton = document.getElementById("searchButton");

function searchByValue(value) {
  listGroup.innerHTML = "";
  url = "https://newsapi.org/v2/everything?q=" + value + "&apiKey=e005866aae6e44678ecb5ab983887a4e";
  articles = fetch(url);
  articles
    .then(data => data.json())
    .then(data => data.articles.map(article => {
      var a = document.createElement("a");
      a.textContent = article.title;
      a.setAttribute("target", "blank");
      a.setAttribute("class", "list-group-item list-group-item-action");
      a.setAttribute("href", article.url);
      listGroup.appendChild(a);
      //console.log(article);
    }));
}

searchButton.addEventListener("click", function(e) {
  e.preventDefault();
  //console.log(inputText.value);
  //searchByValue();
  searchByValue(inputText.value);
});