
var util = require('util');

function inspect (target) {
	console.log(util.inspect(target, {
		colors: true,
		depth: null
	}))
}

exports.inspect = inspect;
