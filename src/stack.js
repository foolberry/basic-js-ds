const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr = [];
  push(element) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr[this.arr.length] = element;
    // return this.arr;
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.arr.length === 0) return undefined;
    else return Number(this.arr.splice(-1, 1));
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.arr.length === 0) return undefined;
    else return this.arr[this.arr.length - 1];
  }
}

module.exports = {
  Stack
};
