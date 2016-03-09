
/*
 * Module dependencies
 */

var Client = require('../../');

/*
 * Module
 */

describe('example feature name', function() { // this is your feature name

	beforeEach(function (done) { // start the server this happens before every test. we could use this in the future for example to create a bso and the GET it.
		this.getBucket('mock').listen(3000, done);
	});

	afterEach(function () { // stops the server this happens after every test. we could use this in the future to delete test data afterwards
		this.getBucket('mock').close();
	});

});