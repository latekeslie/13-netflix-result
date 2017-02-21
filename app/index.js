import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const results = document.querySelector('.main');

searchButton.addEventListener('click', () => {
  fetch(`http://netflixroulette.net/api/api.php?title=${searchBar.value}`)
    .then(response => response.json())
    .then((data) => {
      fillInResult(results, data);
    });
});
