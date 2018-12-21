const path = require('path');
require('dotenv').config();
const pg = require('pg');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
	test: {
		client: 'pg',
		connection: `postgres://localhost:5432/${process.env.DB_TEST_NAME}`,
		migrations: {
			directory: path.join(BASE_PATH, 'migrations'),
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds'),
		},
	},
	development: {
		client: 'pg',
		connection: `postgres://localhost:5432/${process.env.DB_NAME}`,
		migrations: {
			directory: path.join(BASE_PATH, 'migrations'),
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds'),
		},
	},
};
