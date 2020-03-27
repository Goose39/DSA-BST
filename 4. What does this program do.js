function tree(t){
  if(!t){
      return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}


// tree() 
// => 0

// tree() returns left side of the tree to the left
// root in the middle and 
// right side of the tree the right

