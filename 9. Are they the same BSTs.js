let BinarySearchTree = require('./3. Create a BST class');

isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

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

console.log(isSameTree(BST2, BST2));