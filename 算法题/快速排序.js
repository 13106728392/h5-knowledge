function quickSort(list) {
    // 当list.length <= 1时，退出递归
    if (list.length <= 1) return list;
    // 找到中间节点
    let mid = Math.floor(list.length / 2);
    // 以中间节点为基准点，比该节点大的值放到right数组中，否则放到left数组中
    let base = list.splice(mid, 1)[0];
    let left = [];
    let right = [];
    list.forEach(item => {
      if (item > base) {
        right.push(item);
      } else {
        left.push(item);
      }
    });
    // 重新组合数组
    return quickSort(left).concat(base, quickSort(right));
  }