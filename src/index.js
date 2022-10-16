import './css/style.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import {} from './markup';
import { refs } from './refs';

const handleSubmit = event => {
  event.preventDefault();
  const {
    elements: { query },
  } = event.currentTarget;
  const searchQuery = query.value.trim().toLowerCase();
  if (!searchQuery) {
    Notify.failure('Введіть дані для пошуку!!!');
    return;
  }
};
refs.form.addEventListener('submit', handleSubmit);
