function spinWords(string) {
    let str;
    if (string.includes(' ')) {
        str = string.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ')
    } else {
        str = string.length > 4 ? string.split('').reverse().join('') : string
    }
    return str
}
