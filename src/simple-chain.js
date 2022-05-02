const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  ourChain: [],
  
  getLength() {
    return this.ourChain.length;
  },
  addLink(value = ' ') {
    this.ourChain.push(`( ${String(value)} )`)
    return this;
  },
  removeLink(pos) {
    if (!Number.isInteger(pos) || pos > this.getLength() || pos < 1) {
      this.ourChain.length = 0;
      throw new Error("You can't remove incorrect link!")
    } else {
      this.ourChain = this.ourChain.filter((element, index) => index + 1 !==pos)

      return this;
    }
  },

  reverseChain() {
    this.ourChain.reverse()
  return this;
  },
  
   finishChain() {
  const finishChain = this.ourChain.join('~~')
  this.ourChain.length = 0;
  return finishChain;
  }
};

module.exports = {
  chainMaker
};
