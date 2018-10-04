ArrayUtils = function(){};

// Iterate through the array one value at a time.
// If the value is an array, then recursively call itself to flatten that array.
// If the value is not an array, then add it to the array.
// Return the final flattened array result.
ArrayUtils.prototype.getFlatArray = function(arr) {

  var flatArray = [];

  arr.forEach((value) => {
    if (Array.isArray(value)) {
      flatArray = flatArray.concat(this.getFlatArray(value));
    } else {
    	if (isNaN(value)) {
				throw new TypeError("The array must only contain integers");
			}
      flatArray.push(value);
    }
  });

  return flatArray;
};
