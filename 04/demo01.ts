// 定义函数
var sayText: string = 'Hello';
function sayHello(text: string): void {
    sayText = text;
}
function searchPeople(name: string, age: number): string {
    return `${sayText} ${age} 岁的 ${name}`;
}
sayHello('你好！');
var userName: string = 'gcr';
var age: number = 18;
var result: string = searchPeople(userName, age);
console.log(result);

// 可选参数
function searchPeople1(age: number, name?: string): string {
    return `${name} ${age}`;
}
console.log(searchPeople1(20, 'gcr'));

// 默认参数
function searchPeople2(age: number, name: string = 'gcr'): string {
    return `${name} ${age}`;
}
console.log(searchPeople2(20));

// 剩余参数
function searchPeople3(age: number, ...arr:string[]):string{
    let info:string = '开始';

    for (let i = 0; i < arr.length; i++) {
        info += arr[i];
        if(i < arr.length){
            info += '、';
        }
    }
    return `${age} ${info}`;
}
console.log(searchPeople3(20), 'gcr', '172cm', '65kg');