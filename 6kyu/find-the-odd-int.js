function findOdd(A) {
    let objj = {};
    let odd;

    for (var i = 0; i < A.length; ++i) {
        var a = A[i];
        if (objj[a] != undefined)
            ++objj[a];
        else
            objj[a] = 1;
    }

    for (let [key, value] of Object.entries(objj)) {
        if (value % 2 !== 0) {
            return odd = +key
        }
    }
    return odd
}