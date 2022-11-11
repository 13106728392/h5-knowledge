function MergeSort(array) {
    let len = array.length;
  
    // 当每个子序列中仅有1个元素时返回
    if (len <= 1) {
      return array;
    }
    // 将给定的列表分为两半
    let num = Math.floor(len / 2);
    let left = MergeSort(array.slice(0, num));
    let right = MergeSort(array.slice(num, array.length));
    return merge(left, right);
  
    function merge(left, right) {
      let [l, r] = [0, 0];
      let result = [];
      // 从 left 和 right 区域中各个取出第一个元素，比较它们的大小
      while (l < left.length && r < right.length) {
        // 将较小的元素添加到result中，然后从较小元素所在的区域内取出下一个元素，继续进行比较；
        if (left[l] < right[r]) {
          result.push(left[l]);
          l++;
        } else {
          result.push(right[r]);
          r++;
        }
      }
      // 如果 left 或者 right 有一方为空，则直接将另一方的所有元素依次添加到result中
      result = result.concat(left.slice(l, left.length));
      result = result.concat(right.slice(r, right.length));
      return result;
    }
  }