function positiveSum(arr) {
    let sum = 0;
    for(let item of arr) {
        if(item > 0) sum += item;
    }
    return sum;
}