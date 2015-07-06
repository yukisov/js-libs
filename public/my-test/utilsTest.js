(function(global) {
  "use strict";

  var app = global.APP,
      utils = app.utils;

  describe('Utils', function(){

    beforeEach(function(done){
      done();
    });

    describe('add', function() {
      it ('should add two value rightly', function() {

        expect(utils.add(176.33, 0.06)).to.equal(176.39);
        expect(utils.add(1.0, 1.0)).to.equal(2.0);
        expect(utils.add(1.0, 1.0)).to.equal(2);
        expect(utils.add(140.86, 0.03)).to.equal(140.89);

        expect(utils.add(16.74, 28.08)).to.equal(44.82);
        expect(utils.add(73.1, 0.65)).to.equal(73.75);

      });
    });

    describe('multiply', function(){

      it('should multiply rightly', function() {

        expect(utils.multiply(1, 1, 1)).to.equal(1);
        expect(utils.multiply(1.0, 1, 1)).to.equal(1);
        expect(utils.multiply(1.0, 1.0, 1)).to.equal(1);
        expect(utils.multiply(10, 100, 1)).to.equal(1000);
        expect(utils.multiply(0.3, 0.3, 1)).to.equal(0);

        expect(utils.multiply(0.12, 32, 1)).to.equal(3);
        expect(utils.multiply(0.12, 31, 1)).to.equal(3);
        expect(utils.multiply(3072.41, 0.001, 1)).to.equal(3);
      });
    });

    describe('addDigitGroupingSeparator', function(){

      it('should add digit grouping separator correctly rightly', function() {

        expect(utils.addDigitGroupingSeparator(0.1)).to.equal('0.1');
        expect(utils.addDigitGroupingSeparator(0.10)).to.equal('0.1');
        expect(utils.addDigitGroupingSeparator(1)).to.equal('1');
        expect(utils.addDigitGroupingSeparator(1.0)).to.equal('1'); // notice
        expect(utils.addDigitGroupingSeparator(1.01)).to.equal('1.01');
        expect(utils.addDigitGroupingSeparator(1000)).to.equal('1,000');
        expect(utils.addDigitGroupingSeparator(1000.01)).to.equal('1,000.01');
        expect(utils.addDigitGroupingSeparator(111102665)).to.equal('111,102,665');
        expect(utils.addDigitGroupingSeparator(111102665.12345670)).to.equal('111,102,665.1234567');
      });
    });

    describe('getUrlParams', function() {
      it ('should return right object', function() {
        expect(utils.getUrlParams('name=foo&hobby=guitar')).to.deep.equal({name:'foo', hobby:'guitar'});
        expect(utils.getUrlParams('name=f:o')).to.deep.equal({'name':'f:o'});
        expect(utils.getUrlParams('name=f%3Ao')).to.deep.equal({name:'f:o'});
        expect(utils.getUrlParams('na:e=f:o')).to.deep.equal({'na:e':'f:o'});
        expect(utils.getUrlParams('')).to.deep.equal({});
        expect(utils.getUrlParams('n')).to.deep.equal({});
        expect(utils.getUrlParams('name')).to.deep.equal({});
      });
    });

    describe('isArray', function() {
      it ('should check if an argument is Array or not rightly', function() {

        expect(utils.isArray([])).to.equal(true);
        expect(utils.isArray([1, 2])).to.equal(true);
        expect(utils.isArray(['a', 'b'])).to.equal(true);
        expect(utils.isArray({})).to.equal(false);
        expect(utils.isArray(1)).to.equal(false);
        expect(utils.isArray(1.1)).to.equal(false);
        expect(utils.isArray("Hello")).to.equal(false);
        expect(utils.isArray(function(){})).to.equal(false);
        expect(utils.isArray(/foo/)).to.equal(false);

      });
    });

  });

})((typeof window === 'object' && window) || global);
