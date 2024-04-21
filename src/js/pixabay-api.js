import axios from 'axios';

const API_KEY = '43418044-448fc0127227a847b3808d395';
const url = 'https://pixabay.com/api/';

export async function searchImages(stringSearch, page = 1, myGallery) {

  const params = new URLSearchParams({
    key: API_KEY,
    q: stringSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

   const response = await axios.get(`${url}?${params}`);
   return response;

    
}
