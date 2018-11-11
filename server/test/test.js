const assert = require('assert');
const query = require('../src/db/query');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Query', () => {
	it('should query', (done) => {
		query({ text: "SELECT NOW()" }, function(err, res) {
			if(err)
				console.log(err);
			else
				console.log(res);
			done();
		});
	})
})