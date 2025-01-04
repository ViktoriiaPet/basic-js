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
  const array = matrix.split("");
  for(letras of array){
    let index = array.findIndex(s => s === letras);
    if(index >= 0){
      count++;
      s2Arrow.splice(index, 1);
    }
  }
return count;
}

module.exports = {
  countCats
};
