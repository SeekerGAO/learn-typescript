// 定义接口
interface Husband {
    sex: string;
    interest: string;
    sign?: boolean; // 可选参数
}
let husband: Husband = { sex: '男', interest: '跑步' };
console.log(husband);

// 规范函数类型接口
interface SearchMan {
    (source: string, subString: string): boolean;
}

let mySearch: SearchMan = function (source: string, subString: string): boolean {
    let flag = source.search(subString);
    return flag !== -1;
}
console.log(mySearch('高、富', '帅'));