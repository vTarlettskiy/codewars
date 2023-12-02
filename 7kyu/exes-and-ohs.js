// DESCRIPTION:
//     Check to see if a string has the same amount of 'x's and 'o's.
//     The method must return a boolean and be case insensitive.
//     The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let o = 0;
    let x = 0;
    let arr = str.toLowerCase().split('');
    for (let item of arr) {
        if (item == 'x') {
            x++
        } else if (item == 'o') {
            o++
        }
    }
    if (x == o) {
        return true;
    } else {
        return false;
    }
}