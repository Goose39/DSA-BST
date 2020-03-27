let BinarySearchTree = require('./3. Create a BST class');

getHeight = (node) => {
  if (node === null) { // Base case
    return 0; 
  }
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

isBalanced = (node) => {
  if (node === null) { // Base case
    return true;
  }
  var heightDifference = Math.abs(getHeight(node.left) - getHeight(node.right));
  if (heightDifference > 1) {
    return false;
  } else {
    return isBalanced(node.left) && isBalanced(node.right);
  }
}

bST1 = new BinarySearchTree();
bST1.insert(3,3);
bST1.insert(1,1);
bST1.insert(4,4);
bST1.insert(6,6);
bST1.insert(9,9);
bST1.insert(2,2);
bST1.insert(5,5);
bST1.insert(7,7);

BST2 = new BinarySearchTree();
BST2.insert(8);
BST2.insert(3);
BST2.insert(10);
BST2.insert(1);
BST2.insert(6);
BST2.insert(14);
BST2.insert(4);
BST2.insert(7);



console.log(isBalanced(BST2))
