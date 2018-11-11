const { Client } = require('pg');
const { DB_URI } = require('../../../secrets.js');

module.exports = function(query, callback) {
	const client = new Client({
		connectionString: DB_URI,
		ssl: true
	});
	client.connect((err, res) => {
		if(err){
			console.error(err);
			client.end();
			callback(err, res);
		}
		else{
			client.query(query, (err, res) => {
				client.end();
				callback(err, res);
			});		
		}
	});
};