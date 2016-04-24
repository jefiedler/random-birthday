var expect = require('chai').expect;

describe('random-birthday: ', function () {

  var randomBirthday = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {

      var ret1 = randomBirthday();
      var ret2 = randomBirthday({ min: 1980, max: 2000 });

      expect(ret1.getFullYear()).to.be.within(1896, 2015);
      expect(ret2.getFullYear()).to.be.within(1980, 2000);
    }
  });
});
