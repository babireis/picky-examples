
/*
 * Module dependencies
 */

var http = require('http');
var server = http.createServer();

/*
 * Module
 */

beforeEach(function() {
  this.setBucket('mock', server);
});
