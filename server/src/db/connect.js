const { Client } = require('pg');
const { DB_URI } = require('../../../secrets.js');

module.exports = function(callback) {
	const client = new Client({
		connectionString: DB_URI,
		ssl: true
	});
	client.connect((err, res) => {
		if(err)
			client.end();
		callback(err, client);
	});
};