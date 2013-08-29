goog.require('goog.array');
goog.require('goog.math.Long');
goog.require('math.addition.AddOptions');

goog.provide('math.addition');


/**
 * Add any number of numbers.
 * @param {math.addition.AddOptions} options Options for the add function.
 * @return {number} The sum of all provided numbers.
 * @export
 */
math.addition.add = function(options) {
  var numbers = options.numbers;
  var zero = goog.math.Long.fromNumber(0);
  var sum = goog.array.reduce(numbers, function(sum, number) {
    return sum.add(goog.math.Long.fromNumber(number));
  }, zero);
  return sum.toNumber();
};
