(function(global) {
  "use strict";

  var csvUtils = global.APP.csvUtils;

  describe('csv_utils', function(){

    beforeEach(function(done){
      done();
    });

    describe('csvStringToArray', function(){

      it('should convert to Array rightly', function() {

        var resultArray = csvUtils.csvStringToArray(csv_string1, {});
        expect(resultArray.length).to.equal(2);
        expect(resultArray[0]).to.include.members(['aaa', 'bbb']);
        expect(resultArray[1]).to.include.members(['ccc', 'ddd']);

        resultArray = csvUtils.csvStringToArray(csv_string2, {});
        expect(resultArray.length).to.equal(2);
        expect(resultArray[0]).to.include.members(['aaa', 'bbb']);
        expect(resultArray[1]).to.include.members(['ccc', 'ddd']);

        resultArray = csvUtils.csvStringToArray(csv_string3, {});
        expect(resultArray.length).to.equal(4);
        expect(resultArray[0]).to.include.members(['01', 'title1', 'name1', 'hobby1']);
        expect(resultArray[3]).to.include.members(['04', 'title4', 'name4', 'hobby4']);

      });
    });

    describe('forEach', function() {
      it ('should use reference to access elements', function() {
        var arr = [1, 2, 3];
        arr.forEach(function(v /*, i*/) {
          v = v + 1;
        });
        expect(arr[0]).to.equal(1);
        expect(arr[1]).to.equal(2);
        expect(arr[2]).to.equal(3);

        arr.forEach(function(v, i) {
          arr[i] = v + 10;
        });
        expect(arr[0]).to.equal(11);
        expect(arr[1]).to.equal(12);
        expect(arr[2]).to.equal(13);

        var arr2 = [[1, 2, 3], [4, 5, 6]];
        arr2.forEach(function(v /*, i*/) {
          v[0] = v[0] + 10;
          v[1] = v[1] + 10;
          v[2] = v[2] + 10;
        });
        expect(arr2[0][0]).to.equal(11);
        expect(arr2[0][1]).to.equal(12);
        expect(arr2[0][2]).to.equal(13);
        expect(arr2[1][0]).to.equal(14);
        expect(arr2[1][1]).to.equal(15);
        expect(arr2[1][2]).to.equal(16);
      });
    });
  });

  var csv_string1 =
    "col1, col2\r\n\
    aaa, bbb \r\n\
    ccc, ddd ";

  var csv_string2 =
    "col1, col2\n\
    aaa, bbb\n\
    ccc, ddd";

  var csv_string3 =
    "id, title, name, hobby,\r\n\
    01, title1,  name1,    hobby1,\r\n\
    02, title2,  name2,    hobby2,\r\n\
    03, title3,  name3,    hobby3,\r\n\
    04, title4,  name4,    hobby4,\r\n";

})((typeof window === 'object' && window) || global);
