import axios from 'axios';

const API_KEY = '43418044-448fc0127227a847b3808d395';
const url = 'https://pixabay.com/api/';

export async function searchImages(stringSearch, myGallery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: stringSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    /* page: 1, */
  });

  try {
    const { data, status } = await axios.get(`${url}?${params}`);

    if (status !== 200) {
      throw new Error(status);
    }

    return data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
