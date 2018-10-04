describe('ArrayUtils Tests', () => {

  var arrayUtils;
  var defaultArray = [[57, 78, 98, 4, 3],1, 2,[3, 5, 7, 9,],89, 7, 0, 3, 5,[3, 5, 6, 7, 9,[45, 6, 7, 9],4, 6, 7],5, 7, 9];

  beforeEach(function(){
    arrayUtils = new ArrayUtils();
  });

  describe('When getFlatArray is called with the default input array', () => {

    it('should return the default flattened array', () => {
      let result = arrayUtils.getFlatArray(defaultArray);
      let expectedResult = [57, 78, 98, 4, 3, 1, 2, 3, 5, 7, 9, 89, 7, 0, 3, 5, 3, 5, 6, 7, 9, 45, 6, 7, 9, 4, 6, 7, 5, 7, 9];
      expect(result).toEqual(expectedResult);
    });

  });

  describe('When getFlatArray is called with an empty array', () => {

    it('should return an empty array', () => {
      var data = [];
      let result = arrayUtils.getFlatArray(data);
      let expectedResult = [];
      expect(result).toEqual(expectedResult);
    });

  });


  describe('When getFlatArray is called with an array that contains non-integers', () => {

    it('should return an empty array', () => {
      var data = ['a'];
      expect(function() {
        arrayUtils.getFlatArray(data)
      }).toThrowError(TypeError);
    });
    
  });

  // TODO: add more tests for upper bounds, upper bounds - 1

});
