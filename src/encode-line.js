const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(string) {
  let counter = 1;
  let result = ''
  let prevChar = string[0] || ""
    for(let i = 1; i < string.length; i++) {
      if (string[i] === prevChar) {
      counter += 1
        } else {
            if (counter < 2) {
            result += `${prevChar}`
            } else {
            result += `${counter}${prevChar}`
            }
      counter = 1;
      prevChar = string[i]
        }
      } 
      if (counter < 2) {
      result += `${prevChar}`
      } else {
      result += `${counter}${prevChar}`
      counter = 1
      }
  return result;
}

module.exports = {
  encodeLine
};
