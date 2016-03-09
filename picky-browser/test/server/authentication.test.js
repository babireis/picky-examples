
/*
 * Module dependencies
 */

var Client = require('../../');
var util = require('../util');

/*
 * Module
 */

describe('Server session', function() {

	beforeEach(function (done) {
		this.getBucket('mock').listen(3000, done);
	});

	afterEach(function () {
		this.getBucket('mock').close();
	});

});