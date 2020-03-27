'use strict';

let BinarySearchTree = require('./3. Create a BST class');

isBST = (node, min, max) => {

  if (node == null) {
    return true
  }

  if (node.value <= min || node.value > max) {
    return false
  }

  return isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
}  

bST = new BinarySearchTree();
bST.insert(3,3)
bST.insert(1, 1);
bST.insert(4, 4);
bST.insert(6, 6);
bST.insert(9, 9);
bST.insert(2, 2);
bST.insert(5, 5);
bST.insert(7, 7);

console.log(isBST(bST));

