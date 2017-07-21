const express = require('express');

const router = express.Router();
const db = require('./queries');
const movieApi = require('./movieApi');

router.get('/users', db.getAllUsers);
router.post('/users', db.signIn); // must have a body with email and password
router.post('/users/new', db.createUser);
router.post('/users/favorites/new', db.addFavorite);
router.get('/users/:id/favorites', db.getAllFavorites);
router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite);
router.get('/movies', movieApi.getMovies);

module.exports = router;
