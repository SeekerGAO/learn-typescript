// 字符串，基本类型和引用类型使用属性和方法也是一样的
let g:string = 'gao';
let c:String = new String('gao');
console.log(g, `长度${g.length}`);
console.log(c,`长度${c.length}`);