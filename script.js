// API connexion
const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const searchInput = document.querySelector(".search");
const outputSuggestions = document.querySelector(".suggestions");
const cities = [];

fetch(url)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

console.log(cities);

function findMatchWord(wordToMatch, cities) {
  cities.filter((word) => {
    const regex = new RegExp(wordToMatch, "gi");
    word.city.match(regex) || word.state.match(regex);
  });
}

// Write into the input
function displayMatchWordHandler() {
  const matchArray = findMatchWord(this.value, cities);

  // create li span etc.
  const htmlElement = matchArray
    .map((place) => {

      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
      );
      const stateName = place.city.replace(
        regex,
        `<span class='hl'>${this.value}</span>`
          `<li>
        <p></p>
        </li>`
      );

    })
}

searchInput.addEventListener("change", displayMatchWordHandler);