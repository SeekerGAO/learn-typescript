// 全局、局部变量重名
var userName:string = 'gao';
function test():void{
    // 函数体内会存在变量提升
    console.log(`用户名称：${userName}`);
    var userName:string = 'gcr';
    console.log(`用户名称：${userName}`);
}
test();

// let
function test1():void{
    var apple:string = 'gao';
    {
        let banana:string = 'gcr';
        console.log(banana);
    }
    console.log(apple);
    console.log(banana); // 报错
}
test1()