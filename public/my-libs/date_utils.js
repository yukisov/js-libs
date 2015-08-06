(function(global) {
  "use strict";

  global.app.namespace('app.dateUtils');

  //---------------------
  // dateUtils
  //---------------------
  global.app.dateUtils = (function (/*global*/) {

    /**
     * 年月を指定して月末日を求める。
     * @param {number} year - 年
     * @param {number} month - 月
     */
    var getMonthEndDay = function(year, month) {
      var date = new Date(year, month, 0);
      return date.getDate();
    };

    return {
      getMonthEndDay: getMonthEndDay
    };

  })(global);

})((typeof window === 'object' && window) || global);
