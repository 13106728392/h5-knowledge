function insertSort(arr) {
    // 从第 2 个元素开始遍历序列
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      //记录要插入的目标元素
      let target = arr[j];
      //从 target 所在位置向前遍历，直至找到一个比目标元素小的元素，目标元素插入到该元素之后的位置
      while (j > 0 && arr[j - 1] > target) {
        //移动前一个元素的位置，将其向后移动一个位置
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = target;
    }
    return arr;
  }