// DESCRIPTION:
//     Take 2 strings s1 and s2 including only letters from a to z.
//     Return a new sorted string, the longest possible,
//     containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let s3 = s1 + s2;
    let arr = s3.split('');
    arr.sort()
    let s4 = '';
    let set = new Set(arr);
    for (let item of set) {
        s4 += item;
    }
    return s4
}