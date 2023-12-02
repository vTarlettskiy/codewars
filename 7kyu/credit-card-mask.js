// DESCRIPTION:
//     Usually when you buy something, you're asked whether your credit card number,
//     phone number or answer to your most secret question is still correct.
//     However, since someone could look over your shoulder,
//     you don't want that shown on your screen. Instead, we mask it.
//
//     Your task is to write a function maskify, which changes all but the last four characters into '#'.
//
// Examples (input --> output):
// "4556364607935616" --> "############5616"
// "64607935616" -->      "#######5616"
// "1" -->                "1"
// "" -->                 ""

function maskify(cc) {
    if (cc.length > 4) {
        cc = `${'#'.repeat(cc.length - 4)}${cc.slice(-4)}`
    }
    return cc;
}