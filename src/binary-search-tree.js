const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}



class BinarySearchTree {

  constructor() {
    this.base = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.base;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function addWithin(node, value) {

      if (!node) return new Node(value);

      if (node.data === value) {return node}

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value)
      }

      return node;
    }

    this.base = addWithin(this.base, data);

  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function searchWithin(node,value) {

      if (!node) return false;

      if (node.data === value) return true;

      if (value < node.data) return searchWithin(node.left, value);

      return searchWithin(node.right, value)
    }

    return searchWithin(this.base, data)

  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    function removeNode(node, value) {

      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right,value)
        return node;
      } else {

          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          let minFromRight = node.right;
            while (minFromRight.left) {
              minFromRight = minFromRight.left;
            }

          node.data = minFromRight.data;

          node.right = removeNode(node.right, minFromRight.data);

          return node;
        }
    }

    this.base = removeNode(this.base, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.base) return;

    let node = this.base;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!this.base) return;

    let node = this.base;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};