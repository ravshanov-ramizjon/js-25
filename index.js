function max_name(a, b, c) {
    if (a.length >= b.length && a.length >= c.length) {
        return a
    } else if (b.length >= a.length && b.length >= c.length) {
        return b
    } else {
        return c

    }
}
const name = max_name('Alex', 'George', 'Michael')

console.log(name);


function min(a, b, number) {

    // return Math.min(...number),
    return Math.min(a, b)


}
console.log(
    min(1, 2),
    min([5, 2])
);

const procent = 0
function calc(a, b) {
    
    return (a * b) / 100
    
}
console.log(
    calc(1000, 20)
);