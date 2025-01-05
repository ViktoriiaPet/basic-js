const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;
  let columnsWithCatIdx = 0;

  let columnCount = matrix[0].length;
  if (matrix.length) {

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === '^^') {
        columnsWithCatIdx++;
      }
    }
  return columnsWithCatIdx;
}
}
}

module.exports = {
  countCats
};
