// title: 查找树形结构中符合要求的节点
// input: tree： 上文第11题生成的tree func： data => data.title === "child2_1"
// out: { id: 5, parentId: 2, title: "child2_1" }


/**
* 查找节点
* @param {array} tree - 树
* @param {function} func - 查找条件
* */
function findTreeNode(tree, func) {
    for (const data of tree) {
      // 条件成立 直接返回
      if (func(data)) return data;
      if (data.children) {
        const res = findTreeNode(data.children, func);
        // 结果存在再返回
        if (res) return res;
      }
    }
    return null;
  }
  // 测试
  findTreeNode(tree, data => data.title === "child2_1")