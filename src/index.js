import './css/style.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPictures, page, query } from './pixabayAPI';
import { createMarkup } from './markup';
import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a');

const onSubmit = async event => {
  event.preventDefault();
  lightbox.refresh();
  const searchQuery = event.currentTarget.elements.searchQuery.value
    .trim()
    .toLowerCase();
  if (!searchQuery) {
    Notiflix.Notify.failure('Enter a search query!');
    return;
  }
  try {
    const searchData = await getPictures(searchQuery);
    const { hits, totalHits } = searchData;
    if (hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images!`);
    const markup = hits.map(item => createMarkup(item)).join('');
    refs.gallery.innerHTML = markup;
    if (totalHits > 40) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      lightbox.refresh();
    }
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong! Please retry');
    console.log(error);
  }
};

const onLoadClick = async () => {
  const response = await getPictures(query);
  const { hits, totalHits } = response;
  const markup = hits.map(item => createMarkup(item)).join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  const amountOfPages = totalHits / 40 - page;
  if (amountOfPages < 1) {
    refs.loadMoreBtn.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
  console.log('amountOfPages', amountOfPages);
  console.log('page', page);
  console.log('totalHits', totalHits);
};
refs.form.addEventListener('submit', onSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadClick);
