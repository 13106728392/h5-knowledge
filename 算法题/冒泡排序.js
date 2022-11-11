function bubbleSort(arr) {
    let length = arr.length;
    // 外层循环用控制 排序进行多少轮
    for (let i = 0; i < length; i++) {
      // 内层循环用于每一轮的数据比较
      // 注意j的长度范围 length - i - 1
      for (let j = 0; j < length - i - 1; j++) {
        // 相邻元素，大的放到后面
        if (arr[j] > arr[j + 1]) {
          // 交换位置
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }