const query = require('../../src/db/query');
const assert = require('assert');

describe('Query', () => {

	it('does not throw an error', (done) => {

		query({ text: "SELECT NOW()" }, (err, res) => {
			if(err)
				assert.fail(err);
			done();
		});
	});
})