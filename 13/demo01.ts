class Animal {
    public kind: string | undefined;
    public weight: number | undefined;

    constructor(kind?: string, weight?: number) {
        this.kind = kind;
        this.weight = weight;
    }

    public run(): void {
        console.log('会跑');
    }
}

let animal: Animal = new Animal();
animal.run();

// 继承
class Dog extends Animal {
    public run():void{
        console.log('跑的快');
    }

    public sayWang():void{
        console.log('汪汪');
    }
}
let dog:Dog = new Dog('犬科', 100);
dog.run();
dog.sayWang();

class Cat extends Animal{
    private eat:string = '猫粮';
    public run():void{
        super.run();
        console.log('边跑边跳');
    }
}