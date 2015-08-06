(function(global) {
  "use strict";

  var app = global.app,
      dateUtils = app.dateUtils;

  describe('Utils', function(){

    beforeEach(function(done){
      done();
    });

    describe('getMonthEndDay', function() {
      it ('should get right day', function() {

        expect(dateUtils.getMonthEndDay(2015, 2)).to.equal(28);
        expect(dateUtils.getMonthEndDay(2015, 6)).to.equal(30);
        expect(dateUtils.getMonthEndDay(2015, 8)).to.equal(31);
        expect(dateUtils.getMonthEndDay(2016, 2)).to.equal(29); // うるう年

      });
    });

  });

})((typeof window === 'object' && window) || global);
