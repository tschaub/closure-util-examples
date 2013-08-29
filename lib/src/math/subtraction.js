goog.require('goog.array');
goog.require('math.addition');
goog.require('math.addition.AddOptions');
goog.require('math.subtraction.SubtractOptions');

goog.provide('math.subtraction');


/**
 * Subtract numbers.
 * @param {math.subtraction.SubtractOptions} options Options for the subtract
 *     function.
 * @return {number} Cumulative difference.
 * @export
 */
math.subtraction.subtract = function(options) {
  var first = options.first;
  return goog.array.reduce(options.rest, function(diff, number) {
    return math.addition.add({numbers: [diff, -number]});
  }, first);
};
