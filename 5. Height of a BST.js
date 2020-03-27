'use strict';

let BinarySearchTree = require('./3. Create a BST class');

height = (node) => {
  if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
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

console.log(height(bST));