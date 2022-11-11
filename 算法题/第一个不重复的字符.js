// title:   输入一个字符串，找到第一个不重复字符的下标
// input:'abcabcde'
// out: 6

// 时间复杂度O(n)、 空间复杂度O(n)
function findOneStr(str) {
    if (!str) return -1;
    // 使用map存储每个字符出现的次数
    let map = {};
    let arr = str.split("");
    arr.forEach(item => {
      let val = map[item];
      // val为undefined时，表示未存储，map[item] = 1；否则map[item] = val + 1
      map[item] = val ? val + 1 : 1;
    });
    // 再遍历一遍找到出现1次的下标
    for (let i = 0; i < arr.length; i++) {
      if (map[arr[i]] == 1) {
        return i;
      }
    }
    return -1;
  }
