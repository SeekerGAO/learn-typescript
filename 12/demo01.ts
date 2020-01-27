class Girl {
    public sex: string;
    protected name: string;
    private age: number;
    public readonly stature:number = 170;

    constructor(sex: string, name: string, age: number) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }

    public sayHello(): void {
        console.log('你好！');
    }

    protected sayBye(): void {
        console.log('再见！');
    }
}

let girl: Girl = new Girl('女', '高', 20);
console.log(girl);
console.log(girl.sex);
girl.stature;
// console.log(girl.name);
// console.log(girl.age);
girl.sayHello();
// girl.sayBye();