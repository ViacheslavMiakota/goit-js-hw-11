import axios from 'axios';

export const perPage = 40;
export let page = null;
export let query = '';
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30621074-d48d19c4627e2c21ed80bf0c7';
const params = `?key=${KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}`;

export async function getPictures(searchQuery) {
  if (searchQuery !== query) {
    query = searchQuery;
  }
  page += 1;
  console.log('page', page);
  try {
    const response = await axios.get(
      `${BASE_URL}${params}&q=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong! Please retry');
    console.log(error);
  }
}
