class Boy{
    name: string;
    age: number;

    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }

    sayHello():void{
        console.log('你好！');
    }
}

let boy:Boy = new Boy('gcr', 20);
console.log(boy);
boy.sayHello();