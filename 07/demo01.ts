// 初始化数组，存储同一类型的数组元素
// 字面量赋值
let arrNumber1: number[] = [1, 2, 3, 4];
let arrString1: string[] = ['g', 'c', 'r'];
let arrBoolean1: boolean[] = [true, false, true];

let arrNumber2: Array<number> = [1, 2, 3, 4];
let arrString2: Array<string> = ['g', 'c', 'r'];
let arrBoolean2: Array<boolean> = [true, false, true];

// 构造函数赋值
let arrNumber3: number[] = new Array(1, 2, 3, 4);

// 声明元组类型
let arrTuple: [string, number, string, boolean];
arrTuple = ['g', 1, 'c', true];
