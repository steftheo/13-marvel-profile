'use strict';


function show(data) {
  console.log("here's the data", data.data.results[0].title);
}

fetch(`http://gateway.marvel.com:80/v1/public/series/2004?apikey=47f7e1462f5a6fe78e2896effd39d26e
`)
.then((response) => response.json())
.then(show);

console.log("below the fetch");
