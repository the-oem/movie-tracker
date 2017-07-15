import { NEW_MOVIES_URL, IMAGE_URL, GET_USER_URL, CREATE_USER_URL, ADD_FAVORITE_URL } from './constants';

export default class ApiUtils {
  constructor(url = NEW_MOVIES_URL) {
    this.url = url;
  }

  fetchMovies(url = this.url) {
    return fetch(url).then(response => response.json())
                     .then(data => this.fetchImage(IMAGE_URL, data));
  }

  fetchImage(imageUrl, data) {
    const promiseArray = data.results.map((element) => {
      return fetch(imageUrl + element.poster_path);
    });
    return Promise.all(promiseArray).then((imageData) => {
      return data.results.map((movie, index) => {
        return {
          popularity: movie.popularity,
          title: movie.title,
          releaseDate: movie.release_date,
          overview: movie.overview,
          voteAverage: movie.vote_average,
          poster: imageData[index].url,
          id: movie.id,
          alpha_id: this.stripNonAlpha(movie.title),
        };
      });
    });
  }

  fetchUser(email, password) {
    return fetch(GET_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(error => error);
  }

  createUser(component, { name, email, password }) {
    return fetch(CREATE_USER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => component.setState({ message: data.message, status: data.status }))
    .catch(error => component.setState({ message: error.message }));
  }

/*
alpha_id
:
"Wonder_Woman"
id
:
297762
overview
:
"An Amazon princess comes to the world of Man to become the greatest of the female superheroes."
popularity
:
57.363659
poster
:
"https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
releaseDate
:
"2017-05-30"
title
:
"Wonder Woman"
voteAverage
:
7.1
*/

  addFavorite(userId, movie) {
    console.log('Add favorite fetch call...', userId, movie);
    return fetch(ADD_FAVORITE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie_id: movie.id,
        user_id: userId,
        title: movie.title,
        poster_path: movie.poster,
        release_date: movie.releaseDate,
        vote_average: movie.voteAverage,
        overview: movie.overview,
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).catch(error => error);
  }

  deleteFavorite() {
    return { status: 'success', message: 'Some row was deleted.' };
  }

  getFavorites() {
    return {
      status: 'success',
      data: [
        { title: 'title' },
      ],
      message: 'Retrieved All favorites',
    };
  }

  stripNonAlpha(input) {
    if (typeof input === 'string') {
      return input.replace(/\W+/g, '_');
    }
    return null;
  }
}
