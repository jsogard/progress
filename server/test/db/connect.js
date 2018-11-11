const connect = require('../../src/db/connect');
const assert = require('assert');

describe('Connect', () => {

	it('does not throw an error',  (done) => {

		connect((err, client) => {
			if(err)
				assert.fail();
			client.end();
			done();
		})
	});
})