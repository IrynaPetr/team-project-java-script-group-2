//імпортуємо бібліотеки та інші файли
import { fetchTrendMoves } from './js/api';
import { createTrendMovesMarkup } from './js/createMarkup';
import { fetchDataById } from './js/fetch-data-by-id';
import throttle from 'lodash.throttle'; // npm i lodash.throttle
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// refs
const refs = {
  searchFormEl: document.querySelector('.form-search'),
  galleryContainerEl: document.querySelector('.gallery-container'),
  galleryListEl: document.querySelector('.gallery-list'),
  aboutTeamBtn: document.querySelector('.about-team'),
  backdropMovieModal: document.querySelector('.backdrop'),
  modalCloseBtn: document.querySelector('button[data-movie-modal-close]'),
  btnUpEl: document.querySelector('.btn-up'),
  addToWatchedBtn: document.querySelector('button[data-btn-to-watched]'),
  addToQueueBtn: document.querySelector('button[data-btn-to-queue]'),
  movieModalEl: document.querySelector('div[data-movie-modal]'),
};
//
//
//
//

let movieIdForModalMarkup = null; //При натисканні на картку фільму на головній сторінці сюди заисується id
// фільму і за цим id відбувається запит на бекенд
let dataForModalMarkup = null; //Об'єкт із повною інформацією про фільм,
//який ми отримуємо після натискання на картку фільму на головній сторінці.
// Цей об'єкт перезаписується щоразу після натискання на картку

//
//
//
//
//
//
//Аліна присяжнюк дещо сплутала
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олександр Миронець
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ігор
//
//

refs.btnUpEl.addEventListener('click', scrollUp);

function show() {
  refs.btnUpEl.classList.remove('btn-up_hide');
}

function hide() {
  refs.btnUpEl.classList.add('btn-up_hide');
}

window.addEventListener(
  'scroll',
  throttle(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    scrollY > 400 ? show() : hide();
  }, 500)
);

function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ірина Петренко
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Мар'яна Собашевська
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Сергій Трефель
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Денис
fetchTrendMoves()
  .then(data => {
    renderMarkup(data);
  })
  .catch(error => console.log(error));

function renderMarkup(array) {
  const markup = createTrendMovesMarkup(array);
  refs.galleryListEl.insertAdjacentHTML('beforeend', markup);
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Матвій Прищенко
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Ірина
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олена
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Олександр
console.log(refs);
console.log(refs.backdropMovieModal);
console.log(refs.movieModal);
console.log(refs.modalCloseBtn);
console.log(refs.addToWatchedBtn);
console.log(refs.addToQueueBtn);
refs.modalCloseBtn.addEventListener('click', e => {
  console.log('двері зачиняються 😉');
  refs.backdropMovieModal.classList.add("is-hidden");
  refs.movieModal.classList.add("is-hidden");
  console.log(refs.backdropMovieModal);
  console.log(refs.movieModal);
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Москалець

function toggleModal() {
  refs.movieModalEl.classList.toggle('is-hidden');
}

function modalOpener(event) {
  if (
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'DIV' &&
    event.target.nodeName !== 'H3' &&
    event.target.nodeName !== 'SPAN'
  ) {
    return;
  }
  toggleModal();

  if (event.target.nodeName === 'DIV') {
    movieIdForModalMarkup = event.target.dataset.id;
    return;
  }
  movieIdForModalMarkup = event.target.parentElement.dataset.id;
  return;
}

function handleMovieCard(event) {
  modalOpener(event); //ця функція перезаписує значення movieIdForModalMarkup
  dataForModalMarkup = fetchDataById(movieIdForModalMarkup)
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));

  //тут запустити функцію, яка малює розмітку і в неї вкласти dataForModalMarkup

  console.log(dataForModalMarkup);
}

refs.galleryContainerEl.addEventListener('click', handleMovieCard);

refs.modalCloseBtn.addEventListener('click', toggleModal);
