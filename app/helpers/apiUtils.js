export default class GetMovies {
  constructor(url, imagePrefix) {
    this.url = url;
    this.imagePrefix = imagePrefix;
  }

  fetchNewMovies(url, imagePrefix) {
    return fetch(url).then(response => response.json())
                     .then(data => this.fetchImage(this.imagePrefix, data))
                     .then(final => console.log(final));
  }

  fetchImage(imagePrefix, data) {
    const promiseArray = data.results.map((element) => {
      return fetch(imagePrefix + element.poster_path);
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
        };
      });
    });
  }
}
