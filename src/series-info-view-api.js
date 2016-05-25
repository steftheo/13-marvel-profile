import seriesInfoView from 'series-info-view';

function show(data) {
  console.log(data.data.results[0].thumbnail);
  console.log(data.data.results[0].title);
  console.log(data.data.results[0].startYear);
  console.log(data.data.results[0].endYear);
  console.log(data.data.results[0].creators);

  const sidebar = document.querySelector(`.sidebar`);

  new seriesInfoView(sidebar, data.data.results[0]);
}

fetch(`http://gateway.marvel.com:80/v1/public/series/2004?apikey=47f7e1462f5a6fe78e2896effd39d26e
`)
.then((response) => response.json())
.then(show);
