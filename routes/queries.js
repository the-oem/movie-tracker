const promise = require('bluebird');

const options = { promiseLib: promise };
const pgp = require('pg-promise')(options);

// TODO conditional this stuff so that locally in dev we aren't using SSL
pgp.pg.defaults.poolSize = 20;
pgp.pg.defaults.ssl = true;
const connectionString = `${process.env.DATABASE_URL}?ssl=true`;
const db = pgp(connectionString);

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data,
        message: 'Retrieved All Users',
      });
    }).catch((err) => {
      return next(err);
    });
}

function signIn(req, res, next) {
  db.one('select * from users where email=${email} and password=${password}', req.body)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data,
      message: 'Retrieved ONE User',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function createUser(req, res, next) {
  req.body.email = req.body.email.toLowerCase();
  db.one('insert into users(name, password, email)' + 'values(${name}, ${password}, ${email}) returning id', req.body).then((data) => {
    res.status(200).json({ status: 'success', message: 'New user created', id: data.id });
  }).catch((err) => {
    res.status(500).json({ error: err.detail });
  });
}

function addFavorite(req, res, next) {
  db.one('insert into favorites(movie_id, user_id, title, poster_path, release_date, vote_average, overview)' +
  'values(${movie_id}, ${user_id}, ${title}, ${poster_path}, ${release_date}, ${vote_average}, ${overview}) returning id', req.body)
  .then((data) => {
    res.status(200).json({ status: 'success', message: 'Movie was added to favorites', id: data.id });
  }).catch((err) => {
    next(err);
  });
}

function getAllFavorites(req, res, next) {
  const userId = parseInt(req.params.id, 10);
  db.any('select * from favorites where user_id=$1', userId)
  .then((data) => {
    res.status(200).json({
      status: 'success',
      data,
      message: 'Retrieved All favorites',
    });
  })
  .catch((err) => {
    return next(err);
  });
}

function deleteFavorite(req, res, next) {
  const movieId = parseInt(req.params.movie_id, 10);
  const userId = parseInt(req.params.id, 10);
  db.result('delete from favorites where user_id = $1 and movie_id = $2', [userId, movieId]).then((result) => {
    res.status(200)
    .json({ status: 'success', message: `${result.rowCount} row was deleted.` });
  })
  .catch((err) => {
    return next(err);
  });
}

module.exports = {
  getAllUsers,
  signIn,
  createUser,
  getAllFavorites,
  addFavorite,
  deleteFavorite,
};
