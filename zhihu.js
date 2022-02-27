function cal(num1, num2, fn) {
    return fn(num1, num2)
}

var add = cal(4, 5, function (a, b) {
    return a + b
})

var multiply = cal(4, 5, function (a, b) {
    return a * b
})

console.log(add)
// function add(a, b) {
//     return a + b
// }
// function multiply(a, b) {
//     return a * b
// }