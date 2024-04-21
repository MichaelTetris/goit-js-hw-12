import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-function.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');


const gallery = document.querySelector('.list_gallery');
const lightbox = new SimpleLightbox('.card .place-for-image a', {
  captionsData: 'alt',
  captionDelay: 250,
});


let page = 1;
let pageLimit;

form.addEventListener('submit', handleSearch);


let searchWord ;

function handleSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'inline-block';
  searchWord = event.currentTarget.elements.inputElement.value.trim(); 

  console.log(searchWord);

  searchImages(searchWord, loader, gallery)
    .then(data => {
      if (!data || data.total === 0) {
        // Проверка на наличие данных и их корректность
        console.log('No data or no images found:', data);
        iziToast.show({
          title: 'Ops.',
          titleColor: 'white',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          color: 'red',
          position: 'topRight',
          timeout: 5000,
        });
        event.target.reset();
        return;
      }

      // Если данные корректны, обновляем галерею и показываем кнопку "Load More"
      gallery.insertAdjacentHTML('beforeend', renderGallery(data));
      loadMoreBtn.style.display = 'block';
      /* page = 1; */
      lightbox.refresh();
      event.target.reset();
      /* lastPage(data); */
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}

loadMoreBtn.addEventListener('click', moreLoad);

function moreLoad(){
  /* loader.style.display ="block"; */
  console.log("ok")
}


