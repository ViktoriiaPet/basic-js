const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  let number = 0;
  let nStr = String(n)
  let numAR = nStr.split('');
  for (let i = 0; i < nStr.length; i++) {
    numAR.splice([i], 1).join('');
    let numRes = numAR.join('');
    numAR = nStr.split('');
    numbers.push (numRes);
  }
  const maxValue = Math.max.apply(null, numbers);
  return maxValue;
  }


module.exports = {
  deleteDigit
};
