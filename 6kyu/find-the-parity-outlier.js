function findOutlier(integers) {
    let arr1 = []
    let arr2 = []
    integers.map(item => item % 2 == 0 ? arr1.push(item) : arr2.push(item));
    if (arr1.length == 1) {
        return arr1[0]
    } else return arr2[0]
}