
var Picky = require('picky');
var assert = require('assert');

var dictionary = Picky.feature.dictionary('gino');
var library = Picky.feature.library('gino', dictionary);

dictionary.define('NUM', /(\d+)/);

module.exports = (function() {

  var wall;

  library
    .given("a $NUM foot wall", function(height, next) {
        wall = new Wall();
        next();
    })

    .given("$NUM green bottles are standing on the wall", function(number_of_bottles, next) {
        wall.bottles = number_of_bottles;
        next();
    })

    .when("$NUM green bottle accidentally falls", function(number_of_falling_bottles, next) {
        wall.fall(number_of_falling_bottles);
        next();
    })

    .then("there (?:are|are still) $NUM green bottles standing on the wall", function(number_of_bottles, next) {
        assert.equal(number_of_bottles, wall.bottles);
        // expect(number_of_bottles).to.be.equal(wall.bottles);
        (10).should.to.be.deep.eql(10);
        next();
    });

    var Wall = function(bottles) {
        this.bottles = bottles;
        this.fall = function(n) {
            this.bottles -= n;
        };
        this.returned = function() {
            this.bottles++;
        };
    };

  return library;

})();