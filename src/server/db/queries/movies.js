const knex = require('../connection');

function getAllMovies() {
	return knex('movies').select('*');
}

function getSingleMovie(id) {
	return knex('movies')
		.select('*')
		.where({ id: parseInt(id) });
}

module.exports = {
	getAllMovies,
	getSingleMovie,
};
