function selectSort(arr) {
    // 定义index存储最小值的下标
    let index;
    // 外层循环用控制 排序进行多少轮
    for (let i = 0; i < arr.length - 1; i++) {
      index = i;
      // 内层循环用于每一轮的数据比较
      // 注意j的起始范围是 i + 1
      for (let j = i + 1; j < arr.length; j++) {
        // 寻找最小值
        if (arr[j] < arr[index]) {
          // 保存最小值的下标
          index = j;
        }
      }
      // 如果 index 不是目前的头部元素，则交换两者
      if (index !== i) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }
    return arr;
  }