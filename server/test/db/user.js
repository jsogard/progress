const assert = require('assert');
const connect = require('../../src/db/connect');
const user = require('../../src/db/user');

describe('User', () => {

	before((done) => {
		user.tableExists((err, res) => {
			if(res){
				user.cleanup(() => {
					done();
				});
			}
			else{
				user.setup(() => {
					done();
				})
			}
		})
	})

	after((done) => {
		user.cleanup(() => {
			done();
		});
	})

	describe('#create', () => {

		it('accepts a valid user', () => {
			assert.fail();
		})

		it('rejects an invalid user', () => {
			assert.fail();
		})

		it('returns the new user', () => {
			assert.fail();
		})

		it('rejects a duplicate user', () => {
			assert.fail();
		})
	})

	describe('#get', () => {

		it('gets an existing user', () => {
			assert.fail();
		})

		it('doesn\'t get a nonexistant user', () => {
			assert.fail();
		})
	})

	describe('#delete', () => {

		it('deletes an existing user', () => {
			assert.fail();
		})

		it('doesnt delete a nonexistent user', () => {
			assert.fail();
		})
	})
})