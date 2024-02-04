let xhr = require("xhr2");
let hr = new xhr();
hr.open('GET', 'https://restcountries.com/v3.1/all');
hr.send();
hr.onload = function () {
  let country = JSON.parse(hr.responseText);
  for(let key in country){
  console.log(country[key].name);
  console.log(country[key].region);
  console.log(country[key].subregion);
  console.log(country[key].population);
}
}