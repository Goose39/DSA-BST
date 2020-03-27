

let BinarySearchTree = require('./3. Create a BST class');

thirdLargest = (node, k, count) => {
  

  if (node == null || count >= k) {
    return null
  } 
 
  thirdLargest(node.right, k, count);
  
  count += 1

  if (count == k) {
    return node.value;
  }

  thirdLargest(node.left, k, count);

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


console.log(thirdLargest(bST, 2, 0));