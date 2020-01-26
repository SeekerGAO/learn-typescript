// 字面量声明
let reg: RegExp = /gcr/;

// 构造函数声明
let reg1: RegExp = new RegExp(/gcr/);

// 常用方法
// test(string)
// exec(string)
let reg2: RegExp = /gcr/i;
let text: string = 'gheuudgcrfa3e';
let result1: boolean = reg2.test(text);
console.log(result1);
let result2: RegExpMatchArray | null = reg2.exec(text);
console.log(result2);
