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
let searchWord;

form.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'inline-block';
  loadMoreBtn.style.display = "none";
  searchWord = event.currentTarget.elements.inputElement.value.trim();

  page = 1;
  try {
  await searchImages(searchWord, page, gallery)
    .then(response => {
      console.log(response);
      if (!response || response.data.total === 0) {
        console.log('No data or no images found:', response.data);
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

      gallery.insertAdjacentHTML('beforeend', renderGallery(response.data));
      loadMoreBtn.style.display = 'block';

      lightbox.refresh();
      event.target.reset();
      pageLimit = Math.floor(response.data.totalHits / 15);
    })}
    catch(error){
      console.error('Error fetching images:', error);
    }
    finally {
      loader.style.display = 'none';
    };
}

loadMoreBtn.addEventListener('click', moreLoad);

async function moreLoad(event) {
  event.preventDefault();
  loader.style.display = 'inline-block';

  console.log(searchWord);
  page += 1;
  try {
  await searchImages(searchWord, page, gallery)
    .then(response => {
      if (!response || response.data.total === 0) {
        console.log('No data or no images found:', response.data);
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

      gallery.insertAdjacentHTML('beforeend', renderGallery(response.data));

      const liElement = document.querySelector('li');
      const { height } = liElement.getBoundingClientRect();
      scrollVertical(height * 2, 0);


      loadMoreBtn.style.display = 'block';
      lightbox.refresh();
      if (page === pageLimit) {
        iziToast.show({
          title: 'Ops.',
          titleColor: 'white',
          message: 'This is last page, sorry!',
          messageColor: 'white',
          color: 'red',
          position: 'topRight',
          timeout: 5000,
        });
        loadMoreBtn.style.display = 'none';
      }
    })}
    catch{
      console.error('Error fetching images:', error);
    }
    finally {
      loader.style.display = 'none';
    };
}

function scrollVertical(x = 0, y = 0) {
  window.scrollBy({ top: x, left: y, behavior: 'smooth' });
}
