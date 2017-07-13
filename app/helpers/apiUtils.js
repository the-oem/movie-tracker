import { NEW_MOVIES_URL, IMAGE_URL, GET_USER_URL } from './constants';

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

  stripNonAlpha(input) {
    if (typeof input === 'string') {
      return input.replace(/\W+/g, '_');
    }
    return null;
  }
}
