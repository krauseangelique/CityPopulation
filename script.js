// API connexion
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// 
const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((datas) => cities.push(...datas));

console.log(cities);

async function filterCities(array) {
  await array.forEach((el) => {
    console.log(el);
  });

}

filterCities(cities);