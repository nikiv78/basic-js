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
  let result = 0
  for (let c = 0; c < matrix.length; c++) {
    for (let c1 = 0; c1 < matrix[c].length; c1++) {
      if (matrix[c][c1] === '^^') {
        result +=1
      }
    }
  }
  return result
  
}

module.exports = {
  countCats
};
