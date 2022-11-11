// title: 对树进行遍历，从第一个节点开始，遍历其子节点，直到它的所有子节点都被遍历完毕，然后再遍历它的兄弟节点
// input:  上文第11题生成的tree
// out: [1, 3, 4, 2, 5]

// 递归版本
function deepTree(tree, arr = []) {
  if (!tree || !tree.length) return arr;
  tree.forEach(data => {
    arr.push(data.id);
    // 遍历子树
    data.children && deepTree(data.children, arr);
  });
  return arr;
}

// 非递归版本
function deepTree(tree) {
  if (!tree || !tree.length) return;
  let arr = [];
  let stack = [];
  //先将第一层节点放入栈
  for (let i = 0, len = tree.length; i < len; i++) {
    stack.push(tree[i]);
  }
  let node;
  while (stack.length) {
    // 获取当前第一个节点
    node = stack.shift();
    arr.push(node.id);
    //如果该节点有子节点，继续添加进入栈顶
    if (node.children && node.children.length) {
      stack = node.children.concat(stack);
    }
  }
  return arr;
}