// 函数声明
function add1(first: number, second: number): number {
    return first + second;
}
console.log(add1(1, 2));

// 函数表达式
var add2 = function (first: number, second: number): number {
    return first + second;
}
console.log(add2(10, 20));

// 箭头函数
var add3 = (first: number, second: number): number => {
    return first + second;
}
console.log(add3(100, 200));