(function(global) {
  "use strict";

  if (typeof global.APP === 'undefined') {
    global.APP = {};
  }

  //-------------------
  // csvUtils
  //-------------------
  global.APP.csvUtils = (function (/*global*/) {

    /**
     * Convert CSV string into Array
     * @param {string} csv_string
     * @param {Object} options
     * @returns {Array}
     */
    var csvStringToArray = function(csv_string, options) {

      var ignore_1st_line = options.ignore_1st_line || true;

      var data = [],
        idx = 0,
        arr_lines = csv_string.replace(/\r\n/g , "\n")
          .replace(/^(\n+)|(\n+)$/g , "")
          .split( /\n/g ); //改行で分割

      arr_lines.forEach(function(arr_values, i) {
        if (i === 0 && ignore_1st_line) return;
        data[idx] = [];
        arr_values.split(/,/g).forEach(function(value) {
          data[idx].push(value.trim()); // trim
        });
        idx++;
      });

      return data;
    };

    return {
      csvStringToArray: csvStringToArray
    };

  })(global);

})((typeof window === 'object' && window) || global);
