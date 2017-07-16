import { USE_CACHE } from './constants';

export const saveToCache = (key, data) => {
  if (USE_CACHE) localStorage.setItem(key, JSON.stringify(data));
};

export const getFromCache = (key) => {
  return USE_CACHE ? JSON.parse(localStorage.getItem(key)) : null;
};

export const removeFromCache = ((key) => {
  if (USE_CACHE) localStorage.removeItem(key);
});
