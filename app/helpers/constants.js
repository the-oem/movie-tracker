import key from './apiKey';

export const USE_CACHE = false;
export const NEW_MOVIES_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const GET_USER_URL = '/api/users';
export const CREATE_USER_URL = '/api/users/new';
export const ADD_FAVORITE_URL = '/api/users/favorites/new';
export const GET_FAVORITES_URL = 'http://localhost:3000/users/{user_id}/favorites';
export const DELETE_FAVORITE_URL = 'http://localhost:3000/users/{user_id}/favorites/{favorite_id}';
