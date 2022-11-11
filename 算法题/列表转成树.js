// title:  输入一组列表如下，转化成树形结构
// input: 
    let data =     [
          { id: 1, title: "child1", parentId: 0 },
          { id: 2, title: "child2", parentId: 0 },
          { id: 3, title: "child1_1", parentId: 1 },
          { id: 4, title: "child1_2", parentId: 1 },
          { id: 5, title: "child2_1", parentId: 2 }
        ]

// out: 
    // tree=[
    //     {
    //     "id": 1,
    //     "title": "child1",
    //     "parentId": 0,
    //     "children": [
    //         {
    //         "id": 3,
    //         "title": "child1_1",
    //         "parentId": 1
    //         },
    //         {
    //         "id": 4,
    //         "title": "child1_2",
    //         "parentId": 1
    //         }
    //     ]
    //     },
    //     {
    //     "id": 2,
    //     "title": "child2",
    //     "parentId": 0,
    //     "children": [
    //         {
    //         "id": 5,
    //         "title": "child2_1",
    //         "parentId": 2
    //         }
    //     ]
    //     }
    // ]

function listToTree(data){
    if(!data)return
    // 使用对象重新存储数据，空间换时间
    let map = {}
    // treeData存储最后结果
    let treeData = []
    // 遍历原始数据data，存到map中，id为kay，值为数据
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        map[element.id] = element
    }

    // 遍历对象
    for (const iterator in map) {
        // 根据parentid 找到的是父节点
        if(map[iterator].parentId){
            if(!map[map[iterator].parentId].children){
               map[map[iterator].parentId].children  = []
            }
            // 将子节点放到父节点的children中
            map[map[iterator].parentId].children.push(map[iterator])
        }else{
            // parentId找不到说明是跟节点，直接插到根数组中
            treeData.push(map[iterator])
        } 
    }
    return treeData
}

listToTree(data)