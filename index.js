'use strict';

var isObject      = require('is-object');
var randomAge     = require('random-age');
var randomNatural = require('random-natural');

module.exports = function (options) {

  var now = new Date();
  var year;

  if (isObject(options)) {
    year = randomNatural(options.min, options.max);
  } else {
    year = now.getFullYear() - randomAge(options);
  }

  return new Date(year, now.getMonth(), now.getDate());
};
