import 'whatwg-fetch';

import fillInResult from './fill-in-result';

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const results = document.querySelector('.main');

function search(term) {
  fetch(`http://netflixroulette.net/api/api.php?title=${term}`)
    .then(response => response.json())
    .then((data) => {
      fillInResult(results, data);
    });
}

searchButton.addEventListener('click', () => {
  search(searchBar.value);
});

search('Attack on Titan');
