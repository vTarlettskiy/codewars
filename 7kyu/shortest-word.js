// DESCRIPTION:
//     Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let arr = s.split(' ');
    let curentMinValueOfString = arr[0].length;
    for (let item of arr) {
        if (item.length < curentMinValueOfString) {
            curentMinValueOfString = item.length
        }
    }
    return curentMinValueOfString
}