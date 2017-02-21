export default function (element, data) {
  element.querySelector('.show_title').innerHTML = data.show_title;
  element.querySelector('.category').innerHTML = data.category;
  element.querySelector('.summary').innerHTML = data.summary;
  element.querySelector('.rating').innerHTML = data.rating;
  element.querySelector('.show_cast').innerHTML = data.show_cast;
  element.querySelector('.poster').src = data.poster;
}
