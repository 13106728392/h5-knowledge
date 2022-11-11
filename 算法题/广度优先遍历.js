// title: 以横向的维度对树进行遍历，从第一个节点开始，依次遍历其所有的兄弟节点，再遍历第一个节点的子节点，一层层向下遍历
// input: 上文第11题生成的tree
// out: [1, 2, 3, 4, 5]

function rangeTree(tree) {
    if (!tree || !tree.length) return;
    let arr = [];
    let node, list = [...tree];
    // 取出当前节点
    while ((node = list.shift())) {
      arr.push(node.id);
      node.children && list.push(...node.children);
    }
    return arr;
  }